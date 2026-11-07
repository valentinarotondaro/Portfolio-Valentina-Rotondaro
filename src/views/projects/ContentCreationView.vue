<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import ProjectFooter from './ProjectFooter.vue';

const contentWork = [
  { id: 'tutorials', category: 'Tutorials', videos: [
    'https://player.vimeo.com/video/1218497342',
    'https://player.vimeo.com/video/1218498178',
    'https://player.vimeo.com/video/1218498151',
    'https://player.vimeo.com/video/1143892207?h=6d94e8a9a5',
  ] },
  { id: 'stationary', category: 'Stationary', videos: [
    'https://player.vimeo.com/video/1218498163',
    'https://player.vimeo.com/video/1218498153',
    'https://player.vimeo.com/video/1117810490?h=b2d3a3f6d4',
    'https://player.vimeo.com/video/1118512621?h=02bb452692',
    'https://player.vimeo.com/video/1117805604?h=56fde2d074',
    'https://player.vimeo.com/video/1118506149?h=bcca644131',
    'https://player.vimeo.com/video/1218498152',
    'https://player.vimeo.com/video/1218498150',
  ] },
  { id: 'color-hunting', category: 'Color Hunting', videos: [
    'https://player.vimeo.com/video/1218498177',
    'https://player.vimeo.com/video/1218498166',
    'https://player.vimeo.com/video/1218498164',
  ] },
  { id: 'ugc', category: 'UGC', videos: [
    'https://player.vimeo.com/video/1218501591',
    'https://player.vimeo.com/video/1118478920?h=af9b6f0bab',
    'https://player.vimeo.com/video/1117766965?h=963a2edc08',
    'https://player.vimeo.com/video/1117806411?h=a7f3765b75',
  ] },
  { id: 'travel', category: 'Travel', videos: [
    'https://player.vimeo.com/video/1143891411?h=f9faef5ec5',
    'https://player.vimeo.com/video/1143889999?h=a67103b18f',
    'https://player.vimeo.com/video/1143890733?h=aa9b5f70bb',
    'https://player.vimeo.com/video/1143891138?h=d32f490dd3',
  ] },
  { id: 'experiences', category: 'Experiences', videos: [
    'https://player.vimeo.com/video/1117860728?h=921b1349bc',
    'https://player.vimeo.com/video/1117864900?h=38cb2cea56',
    'https://player.vimeo.com/video/1117864183?h=507b8f035c',
    'https://player.vimeo.com/video/1117862027?h=1725f1ad98',
    'https://player.vimeo.com/video/1218498165',
  ] },
];

const sections = [
  { id: 'overview', label: 'Overview' },
  ...contentWork.map((c) => ({ id: c.id, label: c.category })),
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
          <span class="label accent">Content creation · Digital storytelling</span>
          <h1>Short-form videos that drive real engagement</h1>
          <p class="lead">Passionate about digital storytelling, I create short-form videos and branded content that drive real engagement. My work combines video editing, design, and strategy to capture attention and make a brand’s essence shine.</p>

          <div class="meta-grid">
            <div>
              <span class="label">Fields</span>
              <div class="pill-col">
                <span class="pill">Content creation</span>
                <span class="pill">Video editing</span>
                <span class="pill">UGC</span>
                <span class="pill">Storytelling</span>
              </div>
            </div>
            <div>
              <span class="label">Type</span>
              <p class="meta-v">Instagram<br />TikTok</p>
            </div>
            <div>
              <span class="label">Where</span>
              <p class="meta-v">Instagram<br /><a class="ig-link" href="https://instagram.com/valenrotondaro" target="_blank" rel="noopener">@valenrotondaro ↗</a></p>
            </div>
            <div>
              <span class="label">Role</span>
              <p class="meta-v">Creator<br />and Editor</p>
            </div>
          </div>

          <div class="vp gap-top">
            <span class="label accent">Goals</span>
            <p class="vp-statement">I craft authentic concepts that inspire and build deep connections. Whether it’s UGC or high-end tutorials, the goal is always to inspire action and create a lasting impact across digital platforms.</p>
          </div>
        </section>

        <!-- ONE SECTION PER CATEGORY -->
        <section
          v-for="(section, i) in contentWork"
          :key="section.id"
          :id="section.id"
          class="d-section"
          :class="{ 'cat-last': i === contentWork.length - 1 }"
        >
          <span class="label accent">{{ section.category }}</span>
          <h2 class="cat-title">{{ section.category }}</h2>
          <div class="reels">
            <div v-for="v in section.videos" :key="v" class="reel">
              <iframe :src="v" frameborder="0" allow="autoplay; fullscreen" loading="lazy" :title="section.category + ' video'"></iframe>
            </div>
          </div>
        </section>

        <ProjectFooter prev-to="/portfolio/under" next-to="/portfolio/collage-afternoon" />
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

.ig-link { color: var(--ink); text-decoration: underline; text-decoration-color: var(--accent); text-underline-offset: 4px; }
.ig-link:hover { opacity: 0.5; }
.d-section { margin-bottom: 140px; scroll-margin-top: 30px; }
.d-section.last { margin-bottom: 60px; }
.cat-title { font-size: 32px; margin-bottom: 20px; }
.d-section { margin-bottom: 90px; }
.d-section.cat-last { margin-bottom: 60px; }
.d-section.first { margin-bottom: 70px; }

/* ─── OVERVIEW ───────────────────────────── */
.hero-wrap { margin-bottom: 56px; }
.hero-img { width: 100%; aspect-ratio: 16 / 9; object-fit: cover; border-radius: 20px; display: block; }

.meta-grid {
  display: grid;
  grid-template-columns: 1.7fr 0.8fr 1.1fr 0.9fr;
  gap: 36px;
  align-items: start;
  margin-bottom: 0;
}
.meta-v { text-align: left; font-size: 18px; line-height: 1.5; color: var(--ink); margin: 0; }
.pill-col { width: max-content; display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; justify-content: start; align-items: start; }
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
  white-space: nowrap;
}

/* ─── OBJECTIVE ──────────────────────────── */
.vp { border-left: 3px solid var(--accent); padding-left: 28px; margin: 0; max-width: 860px; }
.vp.gap-top { margin-top: 56px; }
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
.pair { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 40px; }
.pair img { width: 100%; aspect-ratio: 4 / 5; object-fit: cover; border-radius: 14px; display: block; }

/* ─── SOCIAL MEDIA REELS ─────────────────── */
.reels { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 8px; }
.reel { position: relative; width: 100%; aspect-ratio: 9 / 16; background: #000; border-radius: 16px; overflow: hidden; }
.reel iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }

/* ─── RESULTS IMAGE ──────────────────────── */
.banner { width: 100%; aspect-ratio: 16 / 9; object-fit: cover; object-position: center 40%; border-radius: 16px; display: block; margin-top: 24px; }

/* ─── RESPONSIVE ─────────────────────────── */
@media (max-width: 1000px) {
  .reels { grid-template-columns: repeat(2, 1fr); }
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
  .reels { gap: 10px; }
  .body, .lead, .small, .vp-statement { text-align: justify; hyphens: auto; -webkit-hyphens: auto; overflow-wrap: break-word; }
  .d-section { margin-bottom: 80px; }
}
</style>
