<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import ProjectFooter from './ProjectFooter.vue';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'challenge', label: 'Challenge' },
  { id: 'solution', label: 'Solution' },
  { id: 'define', label: 'Define' },
  { id: 'develop', label: 'Develop' },
  { id: 'deliver', label: 'Deliver' },
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

const OBJ = 'A visual system that bridges the gap between academic expertise and emotional connection, so she feels welcoming rather than distant.';

const cards3 = [
  { t: 'Authenticity', d: 'A personal brand that reflects who she is.' },
  { t: 'Authority', d: 'Academic expertise that clients can trust.' },
  { t: 'Warmth', d: 'The human side of her clinical practice.' },
];

const solutionCards = [
  { t: 'Logo', d: 'A brain and a plant in one mark: professional wisdom and the organic growth of a therapy process.' },
  { t: 'Visual system', d: 'A palette of navy, light blue, burgundy and cream, set in Roca and Public Sans.' },
  { t: 'Brand materials', d: 'Business cards, notes and a tote bag carry the brand everywhere clients see it.' },
];

const logos = [
  { src: '/img/LicArandaCoriaLogoBlue.png', alt: 'Logo in navy', cls: '' },
  { src: '/img/LicArandaCoriaLogoLightblue.png', alt: 'Logo in light blue', cls: '' },
  { src: '/img/arandalogo-sand-navy.png', alt: 'Logo in cream on navy', cls: 'navy' },
];

const prints = [
  { src: '/img/LicArandaCoriaNotes.png', alt: 'Notepad and folder with the brand' },
  { src: '/img/LicArandaCoriaToteBag.png', alt: 'Tote bag with the logo' },
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
            <img src="/img/arandaheroweb.webp" alt="Lic. Aranda Coria business card" class="hero-img" />
          </div>

          <span class="label accent">Branding · Visual design</span>
          <h1>Lic. Aranda Coria. A personal brand for a psychologist, built on trust and warmth</h1>
          <p class="lead">Lic. Aranda Coria is a psychologist who wanted to move from a dependent role to her own professional space. I designed her personal brand: a visual identity that reflects her authenticity, her professional authority and the human warmth that defines her clinical practice.</p>

          <div class="meta-grid">
            <div>
              <span class="label">Fields</span>
              <div class="pill-col">
                <span class="pill">Branding</span>
                <span class="pill">Visual Design</span>
              </div>
            </div>
            <div>
              <span class="label">Year</span>
              <p class="meta-v">2026</p>
            </div>
            <div>
              <span class="label">Where</span>
              <p class="meta-v">Client: Lic. Aranda Coria</p>
            </div>
            <div>
              <span class="label">Role</span>
              <p class="meta-v">Visual Designer</p>
            </div>
          </div>
        </section>

        <!-- CHALLENGE -->
        <section id="challenge" class="d-section">
          <span class="label accent">Challenge</span>
          <h2>A new professional space needed a brand that felt like her</h2>
          <p class="body">Lic. Aranda Coria was moving from a dependent role to establishing her own practice. She needed a personal brand that reflected her authenticity and her professional authority, and also the human warmth that defines her clinical practice.</p>
          <div class="cards cards-3 cards-text gap-top">
            <div v-for="c in cards3" :key="c.t" class="card"><span class="label accent">{{ c.t }}</span><p class="small">{{ c.d }}</p></div>
          </div>
          <p class="body gap-top">The balance to strike: welcoming rather than distant, solvent yet deeply empathetic.</p>
        </section>

        <!-- SOLUTION -->
        <section id="solution" class="d-section">
          <span class="label accent">Solution</span>
          <h2>One visual system where academic expertise meets emotional connection</h2>
          <div class="vp">
            <span class="label accent">Objective</span>
            <p class="vp-statement">{{ OBJ }}</p>
          </div>
          <div class="cards cards-3 cards-vp">
            <div v-for="c in solutionCards" :key="c.t" class="card"><span class="label accent">{{ c.t }}</span><p class="small">{{ c.d }}</p></div>
          </div>
        </section>

        <!-- DIAMOND 1: DEFINE -->
        <section id="define" class="d-section">
          <span class="label accent">Process</span>
          <h2>Two diamonds: understand who she is, then shape her brand</h2>
          <p class="body">The first diamond opens up who she is and narrows it into a clear creative direction. The second explores logo concepts and delivers the final identity.</p>

          <div class="dd">
            <svg viewBox="0 8 1000 182" role="img" aria-label="Double Diamond: Discover, Define, Develop, Deliver">
              <polygon points="10,70 250,12 490,70 250,128" fill="#32295E" />
              <polygon points="510,70 750,12 990,70 750,128" fill="#32295E" />
              <line x1="250" y1="12" x2="250" y2="128" stroke="#fff" stroke-width="2" />
              <line x1="750" y1="12" x2="750" y2="128" stroke="#fff" stroke-width="2" />
              <g font-size="12" font-weight="700" letter-spacing="1.4" text-anchor="middle">
                <text x="130" y="76" fill="#fff">DISCOVER</text>
                <text x="370" y="76" fill="#fff">DEFINE</text>
                <text x="630" y="76" fill="#fff">DEVELOP</text>
                <text x="870" y="76" fill="#fff">DELIVER</text>
              </g>
              <g font-size="13" fill="#666A70" text-anchor="middle">
                <text x="130" y="158">Strategy form</text><text x="130" y="176">Analysis</text>
                <text x="370" y="158">Sketches</text><text x="370" y="176">Moodboard</text>
                <text x="630" y="158">Logo</text><text x="630" y="176">Visual system</text>
                <text x="870" y="158">Brand materials</text><text x="870" y="176">Result</text>
              </g>
            </svg>
          </div>

          <div class="phase"><span class="phase-n">DIAMOND 1</span><span class="phase-t">Discover and define</span></div>

          <div class="step">
            <span class="label step-n">01 · Strategy form</span>
            <p class="body">The starting point to understand the heart of her personal brand, defining core objectives and essential values.</p>
            <div class="mock-box">
              <img src="/img/arandaformmockup.png" alt="Strategy form shown on a desktop screen" loading="lazy" />
            </div>
          </div>

          <div class="step">
            <span class="label step-n">02 · Figma compilation and analysis</span>
            <p class="body">Synthesizing the answers to extract key insights and keywords that capture her unique visual essence.</p>
            <img class="canvas" src="/img/arandafigmacanvas.png" alt="Analysis in Figma" loading="lazy" />
          </div>

          <div class="step">
            <span class="label step-n">03 · Videocall and concept sketches</span>
            <p class="body">A collaborative review of the first sketches, to make sure the creative direction resonated with her professional identity.</p>
            <div class="pair">
              <img src="/img/arandasketchI.png" alt="Concept sketches" loading="lazy" />
              <img src="/img/arandasketchII.png" alt="More concept sketches" loading="lazy" />
            </div>
          </div>

          <div class="step">
            <span class="label step-n">04 · Moodboard and style definition</span>
            <p class="body">The final definition of the visual universe, based on the synthesized insights and the creative path we agreed on.</p>
            <img class="board" src="/img/arandamoodboard.png" alt="Moodboard" loading="lazy" />
          </div>
        </section>

        <!-- DIAMOND 2: DEVELOP -->
        <section id="develop" class="d-section">
          <div class="phase"><span class="phase-n">DIAMOND 2</span><span class="phase-t">Develop</span></div>

          <div class="step">
            <span class="label step-n">05 · Logo</span>
            <p class="body">The final logo is a balance between science and nature. By combining a brain with a plant, it represents both professional wisdom and the organic growth of a therapy process.</p>
            <div class="logos">
              <div v-for="l in logos" :key="l.src" class="tile" :class="l.cls"><img :src="l.src" :alt="l.alt" loading="lazy" /></div>
            </div>
          </div>

          <div class="step">
            <span class="label step-n">06 · Visual system</span>
            <p class="body">Four colours and two typefaces: Roca, a serif with warmth, for names and titles, and Public Sans for everything else.</p>
            <img class="board" src="/img/arandastyles.png" alt="Colour palette and typography" loading="lazy" />
          </div>
        </section>

        <!-- DIAMOND 2: DELIVER -->
        <section id="deliver" class="d-section">
          <div class="phase"><span class="phase-n">DIAMOND 2</span><span class="phase-t">Deliver</span></div>

          <div class="step">
            <span class="label step-n">07 · Brand materials</span>
            <p class="body">The identity comes to life on business cards, notes and a tote bag.</p>
            <img class="wide" src="/img/arandacoria.png" alt="Business card" loading="lazy" />
            <div class="prints">
              <img v-for="p in prints" :key="p.src" :src="p.src" :alt="p.alt" loading="lazy" />
            </div>
          </div>
        </section>

        <!-- RESULT -->
        <section id="result" class="d-section last">
          <span class="label accent">Result</span>
          <h2>A balance between science and nature</h2>
          <p class="body">The final logo is a beautiful balance between science and nature. By combining a brain with a plant, the design represents both professional wisdom and the organic growth of a therapy process.</p>
        </section>

        <ProjectFooter prev-to="/portfolio/departamentos-alfar" next-to="/portfolio/amada-amiga" />
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
  --accent: #32295E;
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
.mock-box { margin-top: 24px; background: #ECEAF4; border-radius: 16px; padding: 32px 40px; display: flex; justify-content: center; }
.mock-box img { height: 420px; width: auto; max-width: 100%; display: block; mix-blend-mode: multiply; }
.canvas { width: 100%; display: block; border-radius: 16px; margin-top: 24px; }
.board { width: 100%; display: block; border-radius: 16px; border: 1px solid var(--line); margin-top: 24px; }
.pair { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 24px; }
.pair img { width: 100%; display: block; border-radius: 14px; border: 1px solid var(--line); }
.logos { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 24px; }
.tile { background: #fff; border: 1px solid var(--line); border-radius: 16px; padding: 18px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
.tile.navy { background: #32295E; }
.tile img { width: 100%; display: block; }
.wide { width: 100%; display: block; border-radius: 16px; margin-top: 24px; }
.prints { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-top: 16px; }
.prints img { width: 100%; aspect-ratio: 3 / 4; object-fit: cover; border-radius: 14px; display: block; }

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
  .mock-box { padding: 20px; }
  .mock-box img { height: auto; width: 100%; }
  .top-nav { padding: 20px 5%; }
  .back-btn { font-size: 18px; }
  h1 { font-size: 34px; }
  h2 { font-size: 26px; }
  .lead { font-size: 18px; }
  .body { font-size: 17px; }
  .vp-statement { font-size: 19px; }
  .meta-grid, .cards-3, .logos { grid-template-columns: 1fr; }
  .pair { grid-template-columns: 1fr; }
  .body, .lead, .small, .vp-statement, .card .small, .small.left { text-align: justify; hyphens: auto; -webkit-hyphens: auto; overflow-wrap: break-word; }
  .dd { overflow-x: auto; -webkit-overflow-scrolling: touch; padding-bottom: 6px; }
  .dd svg { width: 640px; max-width: none; }
  .phase-t { font-size: 26px; }
  .d-section { margin-bottom: 80px; }
}
</style>
