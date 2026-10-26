import { ref, nextTick, onMounted, onBeforeUnmount } from 'vue';

// ─── SHARED FALLING-TAGS PHYSICS (matter-js) ─────────────────────
// Used by both the hero tags (HomeView) and the About page tag rain,
// so both fall with the exact same gravity/collision behavior and
// both drop in from just above the viewport — not from their own
// cramped local box, but also not from the literal top of the whole
// document (that made far-down sections like About take several
// seconds to start landing, well after the section was on screen).
// npm install matter-js
export function useFallingTags({ deferUntilVisible = false, startEarlyBy = 0, stagger = 110 } = {}) {
  // startEarlyBy: fraction of the viewport height *below* the screen at which
  // the rain starts (1 = one full screen early), so the tags have already
  // landed by the time the visitor scrolls to the section.
  // stagger: vertical gap (px) between tags before they drop.
  const stageRef = ref(null);
  const tagEls = [];
  const setTagRef = (el, i) => { if (el) tagEls[i] = el; };

  let engine = null;
  let runner = null;
  let MatterLib = null;
  let observer = null;

  const buildPhysics = async (stage) => {
    const Matter = (await import('matter-js')).default ?? (await import('matter-js'));
    MatterLib = Matter;
    const { Engine, Runner, Bodies, Composite, Events, Mouse, MouseConstraint } = Matter;

    const W = stage.clientWidth;
    const H = stage.clientHeight;

    // Fall from just above the viewport, not from the stage's own
    // cramped box — but capped to ~one screen height, so a section far
    // down the page (About) doesn't take several real seconds for tags
    // to travel down into view.
    const fallFrom = -Math.max(window.innerHeight * 0.9, H + 240);

    engine = Engine.create();
    engine.gravity.y = 1;

    const wallOpts = { isStatic: true, restitution: 0.25, friction: 0.5 };
    const ground    = Bodies.rectangle(W / 2, H + 25, W + 200, 50, wallOpts);
    const leftWall  = Bodies.rectangle(-25, H / 2, 50, H * 4, wallOpts);
    const rightWall = Bodies.rectangle(W + 25, H / 2, 50, H * 4, wallOpts);

    const bodies = tagEls.map((el, i) => {
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      return Bodies.rectangle(
        40 + Math.random() * Math.max(W - 80, 40),
        fallFrom - i * stagger,
        w,
        h,
        {
          restitution: 0.35,
          friction: 0.45,
          frictionAir: 0.012,
          chamfer: { radius: h / 2 },
          angle: (Math.random() - 0.5) * 0.7,
        }
      );
    });

    Composite.add(engine.world, [ground, leftWall, rightWall, ...bodies]);

    // Drag to reposition a settled tag (grab cursor is set in CSS on
    // .hero-tag / .skill-tag; this is what actually makes it draggable).
    const mouse = Mouse.create(stage);
    mouse.pixelRatio = window.devicePixelRatio || 1;
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.2, damping: 0.1, render: { visible: false } },
    });
    Composite.add(engine.world, mouseConstraint);

    // Keep the drag TARGET above the floor, so a fast downward drag can
    // never pull a tag past the stage bottom in the first place (that's
    // what let a thrown tag tunnel through the thin ground collider and
    // fall forever, growing the page's scrollbar without end). This is
    // enforced before each physics step, not by snapping the body's
    // position after the fact — a position-correction-after-collision
    // approach fights Matter's own resting contact every frame and
    // makes settled tags vibrate in place, which is what the earlier
    // version of this fix did wrong.
    const dragFloor = H - 6;
    Events.on(engine, 'beforeUpdate', () => {
      if (mouse.position.y > dragFloor) {
        mouse.position.y = dragFloor;
        mouse.absolute.y = dragFloor;
      }
    });

    let revealed = false;
    Events.on(engine, 'afterUpdate', () => {
      bodies.forEach((body, i) => {
        const el = tagEls[i];
        if (!el) return;
        if (!revealed) el.style.opacity = '1';
        el.style.transform =
          `translate(${body.position.x - el.offsetWidth / 2}px, ${body.position.y - el.offsetHeight / 2}px) rotate(${body.angle}rad)`;
      });
      revealed = true;
    });

    runner = Runner.create();
    Runner.run(runner, engine);
  };

  onMounted(async () => {
    await nextTick();
    const stage = stageRef.value;
    if (!stage || tagEls.length === 0) return;

    if (deferUntilVisible) {
      observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect();
          observer = null;
          buildPhysics(stage);
        }
      }, { threshold: 0, rootMargin: `200px 0px ${Math.round(startEarlyBy * 100)}% 0px` });
      observer.observe(stage);
    } else {
      buildPhysics(stage);
    }
  });

  onBeforeUnmount(() => {
    if (observer) observer.disconnect();
    if (!MatterLib) return;
    if (runner) MatterLib.Runner.stop(runner);
    if (engine) MatterLib.Engine.clear(engine);
  });

  return { stageRef, setTagRef };
}
