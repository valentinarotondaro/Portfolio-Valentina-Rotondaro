<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import ProjectFooter from './ProjectFooter.vue';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'context', label: 'Context' },
  { id: 'objective', label: 'Objective' },
  { id: 'process', label: 'Process' },
  { id: 'community', label: 'Community' },
  { id: 'results', label: 'Results' },
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

const GOAL = 'To facilitate emotional processing through art therapy-inspired workshops. The goal is to build resilience and foster a sense of belonging by sharing common migrant narratives in Aarhus.';

const context = [
  { t: 'The journey', d: 'Migration as a path of profound emotional shifts.' },
  { t: 'The collaboration', d: 'A workshop hosted with psychologist Julieta Dutto.' },
  { t: 'The method', d: 'The tactile art of collage to explore emotional baggage.' },
];

const roles = [
  { t: 'Conceptualization', d: 'Designing themes that resonate with the migrant experience: roots, nostalgia, and hybrid identities through visual research.' },
  { t: 'Curation', d: 'Sourcing diverse visual materials and archival imagery that represent various cultural backgrounds and migration eras.' },
  { t: 'Facilitation', d: 'Guiding participants through reflective exercises while maintaining an inclusive, empathetic, and safe creative environment.' },
  { t: 'Exhibition', d: 'Synthesizing collective work into a visual narrative to raise awareness about migrant mental health and community stories.' },
];

const reviews = [
  { text: 'Thank you for this beautiful workshop that allowed us to connect with our emotions and imagination. The power of taking flight through collage!', author: 'Virginia, Argentina' },
  { text: 'Inspiring, creative, and liberating. I felt so comfortable. Thank you for such a fantastic experience!', author: 'Sofia, España' },
  { text: 'Thank you for creating a space for us to meet, share, and create together. Having a place like this when you are living so far from home is so important.', author: 'Regi, Argentina' },
];

const someVideos = [
  'https://player.vimeo.com/video/1119544416?h=547058c68e&background=1',
  'https://player.vimeo.com/video/1119543528?h=a99e5a7d55&background=1',
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
            <img src="/img/collageprocess2.PNG" alt="Collage & Migrant Emotions workshop" style="object-position:center 40%" class="hero-img" />
          </div>

          <span class="label accent">Community · Experience design</span>
          <h1>Collage &amp; Migrant Emotions. Turning the journey into art</h1>
          <p class="lead">Migration is a journey not just of miles, but of profound emotional shifts. In collaboration with psychologist Julieta Dutto, we hosted a workshop that explores the “emotional baggage” of expats through the tactile art of collage.</p>

          <div class="meta-grid">
            <div>
              <span class="label">Fields</span>
              <div class="pill-col">
                <span class="pill">Workshops</span>
                <span class="pill">Community</span>
              </div>
            </div>
            <div>
              <span class="label">Type</span>
              <p class="meta-v">Collaborative<br />workshop</p>
            </div>
            <div>
              <span class="label">Where</span>
              <p class="meta-v">Aarhus<br />Denmark</p>
            </div>
            <div>
              <span class="label">Role</span>
              <p class="meta-v">Community Lead<br />and Facilitator</p>
            </div>
          </div>
        </section>

        <!-- CONTEXT -->
        <section id="context" class="d-section">
          <span class="label accent">Context</span>
          <h2>The emotional baggage of migration</h2>
          <p class="body">Migration is a journey not just of miles, but of profound emotional shifts. In collaboration with psychologist Julieta Dutto, we hosted this workshop that explores the “emotional baggage” of expats through the tactile art of collage.</p>
          <div class="cards cards-3 cards-text gap-top">
            <div v-for="c in context" :key="c.t" class="card"><span class="label accent">{{ c.t }}</span><p class="small">{{ c.d }}</p></div>
          </div>
        </section>

        <!-- OBJECTIVE -->
        <section id="objective" class="d-section">
          <span class="label accent">Objective</span>
          <h2>Resilience and belonging through shared stories</h2>
          <div class="vp">
            <span class="label accent">Goal</span>
            <p class="vp-statement">{{ GOAL }}</p>
          </div>
        </section>

        <!-- PROCESS -->
        <section id="process" class="d-section">
          <span class="label accent">Process</span>
          <h2>From themes to a shared visual narrative</h2>
          <p class="body">The workshop moved from research and materials to guided reflection and a collective outcome:</p>
          <div class="cards cards-2 gap-top">
            <div v-for="r in roles" :key="r.t" class="card"><span class="label accent">{{ r.t }}</span><p class="small">{{ r.d }}</p></div>
          </div>

          <div class="pair">
            <img src="/img/collageprocess1.PNG" alt="Participants collaging around a table" loading="lazy" />
            <img src="/img/collagesome.JPEG" alt="A finished collage by a participant" loading="lazy" />
          </div>
        </section>

        <!-- COMMUNITY -->
        <section id="community" class="d-section">
          <span class="label accent">Community</span>
          <h2>What participants say, and what we share online</h2>

          <span class="label sub">Participants feedback</span>
          <div class="cards cards-3">
            <div v-for="r in reviews" :key="r.author" class="card quote">
              <p class="quote-text">“{{ r.text }}”</p>
              <span class="label accent">{{ r.author }}</span>
            </div>
          </div>

          <span class="label sub">SoMe content</span>
          <div class="reels">
            <div v-for="v in someVideos" :key="v" class="reel">
              <iframe :src="v" frameborder="0" allow="autoplay; fullscreen" loading="lazy" title="Collage and Migrant Emotions social media video"></iframe>
            </div>
          </div>
        </section>

        <!-- RESULTS -->
        <section id="results" class="d-section last">
          <span class="label accent">Results</span>
          <h2>A community that shares the journey</h2>
          <p class="body">Through collage, we turned the migration experience into art. This workshop gave participants a space to reflect, create, and, most importantly, connect with a community that shares their journey.</p>
          <img class="banner" src="/img/migrantemotionsworkshop.webp" alt="Participants showing their collages" loading="lazy" />
        </section>

        <ProjectFooter prev-to="/portfolio/royal-library" next-to="/portfolio/business-dedk" />
      </main>
    </div>
  </div>
</template>

<style scoped>
/* One type scale for the whole page: 56 · 40 · 22 · 18 · 15 · 12
   Two text colours: --ink and --muted. One accent: brand pink. */
.case-study {
  --ink: #111111;
  --muted: #666A70;
  --line: #DDE1E5;
  --accent: #FF7BB5;
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

/* ─── OBJECTIVE ──────────────────────────── */
.vp { border-left: 3px solid var(--accent); padding-left: 28px; margin: 0; max-width: 860px; }
.vp-statement { text-align: justify; margin: 0 0 12px; font-size: 22px; line-height: 1.45; font-weight: 500; letter-spacing: -0.01em; }

/* ─── CARDS ──────────────────────────────── */
.cards { display: grid; gap: 20px; }
.cards-3 { grid-template-columns: repeat(3, 1fr); }
.cards-2 { grid-template-columns: repeat(2, 1fr); max-width: 860px; }
.card { background: var(--surface); border-radius: 16px; padding: 28px; }
.card .label { margin-bottom: 10px; }
.card .small { text-align: left; }
.cards-text { max-width: 780px; }

.quote-text { font-size: 18px; line-height: 1.5; margin: 0 0 16px; color: var(--ink); text-align: left; }
.quote .label { margin: 0; }

/* ─── PROCESS PHOTOS ─────────────────────── */
.pair { display: grid; grid-template-columns: 1.4fr 1fr; gap: 16px; margin-top: 40px; }
.pair img { width: 100%; height: 100%; aspect-ratio: 4 / 3; object-fit: cover; border-radius: 14px; display: block; }

/* ─── SOCIAL MEDIA REELS ─────────────────── */
.reels { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; max-width: 520px; }
.reel { position: relative; width: 100%; aspect-ratio: 9 / 16; background: #000; border-radius: 16px; overflow: hidden; }
.reel iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }

/* ─── RESULTS IMAGE ──────────────────────── */
.banner { width: 100%; aspect-ratio: 16 / 9; object-fit: cover; object-position: center 45%; border-radius: 16px; display: block; margin-top: 24px; }

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
  .meta-grid, .cards-3, .cards-2 { grid-template-columns: 1fr; }
  .pair { grid-template-columns: 1fr; }
  .pair img { aspect-ratio: 4 / 3; }
  .reels { max-width: none; }
  .body, .lead, .small, .vp-statement { text-align: justify; hyphens: auto; -webkit-hyphens: auto; overflow-wrap: break-word; }
  .d-section { margin-bottom: 80px; }
}
</style>
