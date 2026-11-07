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

const GOAL = 'To design a custom wine label that goes beyond its commercial purpose and becomes an emotional object, one that tells a story, honors a person, and connects design with memory and affection.';

const context = [
  { t: 'Her profession', d: 'A sommelier and true wine lover.' },
  { t: 'Her personality', d: 'Colourful, with a love for abstract art.' },
  { t: 'Her story', d: 'A pastry chef background and a passion for the brand FARM.' },
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
            <img src="/img/amadahero.png" alt="Amada Amiga wine label" class="hero-img" />
          </div>

          <span class="label accent">Packaging · Visual design</span>
          <h1>Amada Amiga. A wine label made as a birthday gift for a friend</h1>
          <p class="lead">A personal project created as a birthday gift for a close friend, a sommelier and true wine lover. The intention was to design a custom wine label that felt personal, emotional, and deeply connected to her identity.</p>

          <div class="meta-grid">
            <div>
              <span class="label">Fields</span>
              <div class="pill-col">
                <span class="pill">Visual Design</span>
                <span class="pill">Packaging</span>
              </div>
            </div>
            <div>
              <span class="label">Year</span>
              <p class="meta-v">2025</p>
            </div>
            <div>
              <span class="label">Where</span>
              <p class="meta-v">Personal project</p>
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
          <h2>A gift for a sommelier who loves colour</h2>
          <p class="body">This personal project was created as a birthday gift for a close friend, a sommelier and true wine lover. The label had to feel personal and emotional, and deeply connected to who she is.</p>
          <div class="cards cards-3 cards-text gap-top">
            <div v-for="c in context" :key="c.t" class="card"><span class="label accent">{{ c.t }}</span><p class="small">{{ c.d }}</p></div>
          </div>
        </section>

        <!-- OBJECTIVE -->
        <section id="objective" class="d-section">
          <span class="label accent">Objective</span>
          <h2>A label that becomes an emotional object</h2>
          <div class="vp">
            <span class="label accent">Goal</span>
            <p class="vp-statement">{{ GOAL }}</p>
          </div>
        </section>

        <!-- PROCESS -->
        <section id="process" class="d-section">
          <span class="label accent">Process</span>
          <h2>From her colourful world to a playful, vibrant label</h2>
          <p class="body">The visual concept was inspired by her colorful personality and her love for abstract art. Elements from her pastry chef background and her passion for the brand FARM shaped the moodboard, palette, and typography, guiding the project toward a playful and vibrant aesthetic.</p>

          <div class="step">
            <span class="label step-n">01 · Moodboard</span>
            <p class="body">Abstract shapes, bold colour and illustrated labels set the mood: playful, vibrant and full of personality.</p>
            <img class="board" src="/img/amada-moodboard.png" alt="Moodboard" loading="lazy" />
          </div>

          <div class="step">
            <span class="label step-n">02 · Front label</span>
            <p class="body">An abstract composition of organic shapes in pink, lime, lilac and orange, with the name Amada Amiga and the line “Siempre vino, siempre amigas”.</p>
            <div class="pair">
              <img src="/img/amadalabel.png" alt="Front label" loading="lazy" />
              <img src="/img/amada-mockup.png" alt="Bottle with the label" loading="lazy" />
            </div>
          </div>

          <div class="step">
            <span class="label step-n">03 · Back label</span>
            <p class="body">The back of the bottle carries a personal birthday message, so the label also works as a letter to her.</p>
            <img class="wide" src="/img/amadamockup.png" alt="Back label and bottles at a picnic" loading="lazy" />
          </div>
        </section>

        <!-- DESIGN -->
        <section id="design" class="d-section">
          <span class="label accent">Design</span>
          <h2>A bottle, a box and a gift she can keep</h2>
          <p class="body">The label comes to life on the bottles and a custom box, ready to be given.</p>
          <img class="wide" src="/img/amada-label.png" alt="Custom wine box" loading="lazy" />
          <img class="wide" src="/img/amadaamigaproject.png" alt="Amada Amiga bottles and label" loading="lazy" />
        </section>

        <!-- RESULT -->
        <section id="result" class="d-section last">
          <span class="label accent">Result</span>
          <h2>A container of emotions</h2>
          <p class="body">This project explores the intersection of personal storytelling and product design. It shows how a simple object can become a container of emotions, honoring a person and connecting design with the most colorful parts of life.</p>
        </section>

        <ProjectFooter prev-to="/portfolio/lic-aranda" next-to="/portfolio/under" />
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
  --accent: #D41F85;
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
.side-links a.active { background: #E8E8E8; color: #000; }

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
.board { width: 100%; max-width: 780px; display: block; border-radius: 16px; border: 1px solid var(--line); margin-top: 24px; }
.wide { width: 100%; display: block; border-radius: 16px; margin-top: 24px; }
.pair { display: grid; grid-template-columns: 1.25fr 0.75fr; gap: 16px; margin-top: 24px; }
.pair img { width: 100%; height: 100%; object-fit: cover; border-radius: 14px; display: block; }

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
  .pair { grid-template-columns: 1fr; }
  .body, .lead, .small, .vp-statement, .card .small, .small.left { text-align: justify; hyphens: auto; -webkit-hyphens: auto; overflow-wrap: break-word; }
  .phase-t { font-size: 26px; }
  .d-section { margin-bottom: 80px; }
}
</style>
