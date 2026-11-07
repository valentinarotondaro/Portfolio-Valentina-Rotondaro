<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import ProjectFooter from './ProjectFooter.vue';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'context', label: 'Context' },
  { id: 'objective', label: 'Objective' },
  { id: 'process', label: 'Process' },
  { id: 'design', label: 'Design' },
  { id: 'result', label: 'Result' },
];

const activeId = ref('overview');

const goTo = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  activeId.value = id;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// Highlight the section currently under the top of the viewport
const onScroll = () => {
  const line = window.innerHeight * 0.3;
  let current = sections[0].id;
  for (const s of sections) {
    const el = document.getElementById(s.id);
    if (el && el.getBoundingClientRect().top <= line) current = s.id;
  }
  activeId.value = current;
};

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll));

const GOAL = 'To transform a “dark cellar” perception into a vibrant, social hub. By developing an inclusive and youthful identity, the project aimed to build trust, increase foot traffic, and foster a sense of community that translates into measurable engagement for the university.';

const context = [
  { t: 'The old image', d: 'A bar known as “The Basement”, with an outdated identity.' },
  { t: 'The brief', d: 'A design competition to modernize the identity.' },
  { t: 'The goal', d: 'A fresh, recognizable brand students want to belong to.' },
];
</script>

<template>
  <div class="case-study">
    <nav class="top-nav">
      <router-link to="/portfolio" class="back-btn">&lt; Back to Works</router-link>
    </nav>

    <div class="cs-layout">

      <!-- LEFT NAV (sticky) -->
      <aside class="side-nav">
        <div class="side-nav-inner">
          <router-link to="/portfolio" class="side-back-link">&lt; Back to Works</router-link>
          <nav class="side-links">
            <a
              v-for="s in sections"
              :key="s.id"
              :href="'#' + s.id"
              :class="{ active: activeId === s.id }"
              @click.prevent="goTo(s.id)"
            >{{ s.label }}</a>
          </nav>
        </div>
      </aside>

      <main class="cs-main">

        <!-- OVERVIEW -->
        <section id="overview" class="d-section first">
          <div class="hero-wrap">
            <img src="/img/underhorizontal.png" alt="Under student bar identity" class="hero-img" />
          </div>

          <span class="label accent">Branding · Visual design</span>
          <h1>Under. A new name and identity for a student bar</h1>
          <p class="lead">The university launched a design competition to modernize the identity of its student bar, formerly known as “The Basement.” The goal was to shed the outdated image and create a fresh, recognizable brand that students would actually want to belong to.</p>

          <div class="meta-grid">
            <div>
              <span class="label">Fields</span>
              <div class="pill-col">
                <span class="pill">Branding</span>
                <span class="pill">Visual Design</span>
              </div>
            </div>
            <div>
              <span class="label">Type</span>
              <p class="meta-v">Design competition</p>
            </div>
            <div>
              <span class="label">Where</span>
              <p class="meta-v">Syddansk Erhvervsakademi</p>
            </div>
            <div>
              <span class="label">Role</span>
              <p class="meta-v">Visual Designer</p>
            </div>
          </div>
        </section>

        <!-- CONTEXT -->
        <section id="context" class="d-section">
          <span class="label accent">Context</span>
          <h2>A student bar with an outdated image</h2>
          <p class="body">The university launched a design competition to modernize the identity of its student bar, formerly known as “The Basement.” The goal was to shed the outdated image and create a fresh, recognizable brand that students would actually want to belong to.</p>
          <div class="cards cards-3 cards-text gap-top">
            <div v-for="c in context" :key="c.t" class="card"><span class="label accent">{{ c.t }}</span><p class="small">{{ c.d }}</p></div>
          </div>
        </section>

        <!-- OBJECTIVE -->
        <section id="objective" class="d-section">
          <span class="label accent">Objective</span>
          <h2>From a dark cellar to a social hub</h2>
          <div class="vp">
            <span class="label accent">Goal</span>
            <p class="vp-statement">{{ GOAL }}</p>
          </div>
          <img class="wide" src="/img/understudentbarhorizontal.png" alt="Under neon sign and logo" loading="lazy" />
        </section>

        <!-- PROCESS -->
        <section id="process" class="d-section">
          <span class="label accent">Process</span>
          <h2>A punchy name, rounded letters and a warm palette</h2>
          <p class="body">The process moved from hand-drawn lettering to a renamed bar, a typeface with soft edges and a palette taken from the warm light of a bar at night.</p>

          <div class="step">
            <span class="label step-n">01 · Sketches and first ideas</span>
            <p class="body">Hand-drawn lettering tested how the name could look, from heavy rounded strokes to lighter, spaced versions, and tried a small cloud-like symbol.</p>
            <div class="pair">
              <img src="/img/undersketches.jpg" alt="Lettering sketches" loading="lazy" />
              <img src="/img/undercards.jpg" alt="Friends playing cards at a table" loading="lazy" />
            </div>
          </div>

          <div class="step">
            <span class="label step-n">02 · Strategic renaming</span>
            <p class="body">I proposed UNDER, a punchy, bilingual name that plays with the physical location while evoking the “underground” culture of discovery and escape from academic stress.</p>
          </div>

          <div class="step">
            <span class="label step-n">03 · Typography and colour</span>
            <p class="body">The typography choice, Retro Star, features bold, rounded strokes to convey confidence and strength. The soft edges make the brand feel approachable, balancing the “underground” edge with a welcoming student-first vibe. It is paired with Public Sans, and a palette of amber and cream.</p>
            <div class="pair">
              <img src="/img/undervisual.png" alt="Typography and colour palette" loading="lazy" />
              <img src="/img/underlogo.png" alt="Under logo" loading="lazy" />
            </div>
          </div>
        </section>

        <!-- DESIGN -->
        <section id="design" class="d-section">
          <span class="label accent">Design</span>
          <h2>An identity that lights up the bar</h2>

          <div class="step">
            <span class="label step-n">04 · Logo</span>
            <p class="body">The wordmark in two sizes, with the “Student bar” tag line, and a cloud-shaped symbol drawn from the same soft edges.</p>
            <img class="wide" src="/img/underlogovariation.png" alt="Under logo variations" loading="lazy" />
          </div>

          <div class="step">
            <span class="label step-n">05 · In the bar</span>
            <p class="body">The identity lives on a neon symbol, on glasses and in the hands of the students who make the place.</p>
            <img class="banner" src="/img/underbeer.png" alt="Friends toasting with Under glasses" loading="lazy" />
            <div class="pair crop tight">
              <img class="iso" src="/img/underisotipo.png" alt="Neon symbol" loading="lazy" />
              <img src="/img/underbeerhand.png" alt="Hand holding an Under glass" loading="lazy" />
            </div>
          </div>
        </section>

        <!-- RESULT -->
        <section id="result" class="d-section last">
          <span class="label accent">Result</span>
          <h2>The official identity of the bar</h2>
          <p class="body">My proposal was chosen as the official identity for the bar, with a focus on creating a “social home” for students. The university highlighted how the minimalist visual system effectively modernized the space and energized the campus experience.</p>
        </section>

        <ProjectFooter prev-to="/portfolio/amada-amiga" next-to="/portfolio/content-creation" />
      </main>
    </div>
  </div>
</template>

<style scoped>
/* One type scale for the whole page: 56 · 40 · 22 · 18 · 15 · 12
   Two text colours: --ink and --muted. One accent: Aranda navy. */
.case-study {
  --ink: #111111;
  --muted: #666A70;
  --line: #DDE1E5;
  --accent: #B5701C;
    --surface: #F5F5F5;

  font-family: 'Inter', sans-serif;
  background: #fff;
  color: var(--ink);
  line-height: 1.6;
}

/* ─── LAYOUT ─────────────────────────────── */
.cs-layout {
  display: grid;
  grid-template-columns: 260px minmax(0, 1000px);
  justify-content: center;
  column-gap: 60px;
  padding: 0 24px;
}

.side-nav-inner { position: sticky; top: 30px; padding-top: 30px; }

.top-nav { display: none; padding: 25px 5%; }
.side-back-link { display: block; padding: 12px 18px; margin-bottom: 18px; font-size: 22px; font-weight: 500; color: #000; text-decoration: none; transition: opacity 0.3s ease; }
.side-back-link:hover { opacity: 0.5; }
.back-btn { font-size: 25px; font-weight: 500; color: #000; text-decoration: none; display: block; margin-top: 10px; transition: opacity 0.3s ease; }
.back-btn:hover { opacity: 0.5; }

.side-links { display: flex; flex-direction: column; gap: 6px; }
.side-links a {
  display: block;
  padding: 12px 18px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  color: var(--muted);
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease;
}
.side-links a:hover { color: #000; }
.side-links a.active { background: var(--lima); color: #000; }

.cs-main { padding-top: 30px; min-width: 0; }

/* ─── TYPE SCALE ─────────────────────────── */
h1 {
  font-size: 56px;
  line-height: 1.06;
  font-weight: 500;
  letter-spacing: -0.035em;
  margin: 0 0 28px;
  max-width: 940px;
}
h2 {
  font-size: 40px;
  line-height: 1.15;
  font-weight: 500;
  letter-spacing: -0.03em;
  max-width: 860px;
  margin: 0 0 28px;
}
.lead { text-align: justify; font-size: 22px; line-height: 1.55; color: var(--muted); max-width: 860px; margin: 0 0 56px; }
.body { text-align: justify; font-size: 18px; line-height: 1.65; color: var(--ink); max-width: 780px; margin: 0 0 20px; }
.small { text-align: justify; font-size: 15px; line-height: 1.55; color: var(--muted); margin: 0; }
.small.left { text-align: left; }
.label {
  display: block;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 12px;
}
.label.accent { color: var(--accent); margin-bottom: 14px; }
.label.sub { margin: 52px 0 16px; }
.gap-top { margin-top: 32px; }

.d-section { margin-bottom: 140px; scroll-margin-top: 30px; }
.d-section.last { margin-bottom: 60px; }
.d-section.first { margin-bottom: 70px; }

/* ─── OVERVIEW ───────────────────────────── */
.hero-wrap { margin-bottom: 56px; }
.hero-img { width: 100%; aspect-ratio: 16 / 9; object-fit: cover; border-radius: 20px; display: block; }

.meta-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.7fr 1.1fr 1.3fr;
  gap: 36px;
  align-items: start;
  margin-bottom: 0;
}
.meta-v { text-align: left; font-size: 18px; line-height: 1.5; color: var(--ink); margin: 0; }
.pill-col { display: grid; grid-template-columns: repeat(2, max-content); gap: 10px; justify-content: start; align-items: start; }
.pill {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: #000;
  color: #fff;
  border-radius: 999px;
  padding: 8px 18px;
  font-size: 15px;
  font-weight: 500;
}

/* ─── BUTTONS (same height, same shape) ──── */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 48px;
  padding: 0 28px;
  border-radius: 999px;
  border: 1.5px solid transparent;
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  text-decoration: none;
  white-space: nowrap;
  transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;
}
.btn-brand { background: #D0D838; color: #000; border-color: #D0D838; }
.btn-brand:hover { transform: translateY(-2px); }
.btn-outline { background: transparent; color: #000; border-color: #000; }
.btn-outline:hover { background: #000; color: #fff; }
.btn-row { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 32px; }

/* ─── SOLUTION ───────────────────────────── */
.vp { border-left: 3px solid var(--accent); padding-left: 28px; margin: 0 0 40px; max-width: 860px; }
.vp-statement { text-align: justify; margin: 0 0 12px; font-size: 22px; line-height: 1.45; font-weight: 500; letter-spacing: -0.01em; }
.vp-block { margin: 28px 0 0; }

.cards { display: grid; gap: 20px; }
.cards-3 { grid-template-columns: repeat(3, 1fr); }
.card { background: var(--surface); border-radius: 16px; padding: 28px; }
.card .label { margin-bottom: 10px; }
.card .small { text-align: left; }
.cards-text { max-width: 780px; }
.cards-vp { max-width: 860px; }

/* ─── PROCESS ────────────────────────────── */
.dd { margin: 8px 0 20px; }
.dd svg { width: 100%; height: auto; display: block; }
.phase { display: flex; align-items: baseline; gap: 20px; border-top: 2px solid var(--ink); padding-top: 22px; margin: 70px 0 10px; }
.phase-n { font-size: 12px; font-weight: 700; letter-spacing: 0.12em; color: var(--accent); }
.phase-t { font-size: 32px; font-weight: 500; letter-spacing: -0.03em; }
.step { margin-top: 64px; }
.step-n { margin-bottom: 12px; }
.story { border-left: 3px solid var(--ink); padding-left: 20px; margin-bottom: 22px; }
.story .label { margin-bottom: 6px; }
.story .body { margin: 0; }
.board { width: 100%; display: block; border-radius: 16px; border: 1px solid var(--line); margin-top: 24px; }

/* images */
.wide { width: 100%; display: block; border-radius: 16px; margin-top: 24px; }
.pair { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 24px; }
.pair img { width: 100%; display: block; border-radius: 14px; }
.pair.crop img { aspect-ratio: 4 / 3; object-fit: cover; }
.pair.tight { margin-top: 16px; }
.banner { width: 100%; aspect-ratio: 2.1 / 1; object-fit: cover; object-position: center 40%; border-radius: 14px; display: block; margin-top: 24px; }
.iso { object-position: 42% center; }

/* ─── RESPONSIVE ─────────────────────────── */
@media (max-width: 1000px) {
  .cs-layout { grid-template-columns: minmax(0, 1fr); padding: 0 5%; }
  .side-nav { display: none; }
  .top-nav { display: block; }
  .meta-grid { grid-template-columns: 1fr 1fr; }
  h1 { font-size: 44px; }
  h2 { font-size: 32px; }
}

@media (max-width: 600px) {
  .top-nav { padding: 20px 5%; }
  .back-btn { font-size: 18px; }
  h1 { font-size: 34px; }
  h2 { font-size: 26px; }
  .lead { font-size: 18px; }
  .body { font-size: 17px; }
  .vp-statement { font-size: 19px; }
  .meta-grid, .cards-3 { grid-template-columns: 1fr; }
  .pair, .pair.crop { grid-template-columns: 1fr; }
  .banner { aspect-ratio: 4 / 3; }
  .body, .lead, .small, .vp-statement, .card .small, .small.left { text-align: justify; hyphens: auto; -webkit-hyphens: auto; overflow-wrap: break-word; }
  .phase-t { font-size: 26px; }
  .d-section { margin-bottom: 80px; }
}
</style>
