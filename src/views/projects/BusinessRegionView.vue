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

const VP = '“We help German and Danish businesses and job seekers connect across the border by providing a multilingual, easy-to-navigate hub for cross-border recruitment and partnership opportunities.”';

const stories = [
  { role: 'As a Job Seeker', text: '“I want to browse cross-border job listings in my own language so that I can find opportunities without a language barrier.”' },
  { role: 'As a Local Business', text: '“I want visibility on a trusted regional platform so that I can find partners and talent across the border.”' },
  { role: 'As an Event Organizer', text: '“I want an easy way to publish bilingual event listings so that attendees on both sides of the border can find them.”' },
  { role: 'As a Site Editor', text: '“I want a headless CMS I can update without touching code so that content stays fresh without developer support.”' },
];

const beforeAfter = [
  {
    before: '/img/beforeI.png', after: '/img/afterI.png', altB: 'Old hero section', altA: 'New hero section',
    capB: 'The old hero section had no clear value proposition, and only offered two languages to translate, without English, despite international professionals being a key customer segment.',
    capA: 'The redesigned hero section has a clear, visible value proposition, an easy-to-navigate menu, and the ability to browse the site in three languages.',
  },
  {
    before: '/img/beforeII.png', after: '/img/afterII.png', altB: 'Old events section', altA: 'New events section',
    capB: 'The old events section listed items in a plain, unfiltered list with no way to search or filter by language, type, or date, making it hard for busy professionals to find relevant opportunities.',
    capA: 'The redesigned events page includes clear filters (language, event type, date range) and a search bar, helping cross-border job seekers and businesses quickly find events relevant to them.',
  },
  {
    before: '/img/beforeIII.png', after: '/img/afterIII.png', altB: 'Old resources section', altA: 'New resources section',
    capB: 'The old resources page was overloaded with text, and the newsletter sign-up went completely unnoticed among all that informational content.',
    capA: 'The new resources page organizes content into clear categories with a responsive, mobile-first layout, so users can browse cross-border business guides from any device.',
  },
];

const prints = [
  { img: '/img/businessregionrollup.png', alt: 'Roll-up banner', cap: 'Roll-up banner' },
  { img: '/img/businessregionflyer.png', alt: 'Flyer', cap: 'Flyer' },
  { img: '/img/businessregionid.png', alt: 'ID badge', cap: 'ID badge' },
  { img: '/img/businessregiontherm.png', alt: 'Coffee mug', cap: 'Coffee mug' },
];

const posts = [
  { img: '/img/businessregionpost1.png', alt: 'Social media post 1', cap: 'Bridge the DK-DE Business Gap' },
  { img: '/img/businessregionpost2.png', alt: 'Social media post 2', cap: 'Regulatory Insights' },
  { img: '/img/businessregionpost3.png', alt: 'Social media post 3', cap: 'Meet Gwyn Nissen' },
];

const stack = [
  { t: 'Approach', d: 'Double Diamond combined with Scrum, working within the client’s real budget constraints.' },
  { t: 'Front end', d: 'Vue 3 and Vite, styled with Tailwind CSS.' },
  { t: 'CMS', d: 'Headless WordPress, with ACF and WPGraphQL, so editors update content without touching code.' },
  { t: 'Hosting', d: 'Firebase' },
  { t: 'Languages', d: 'A trilingual SEO and content system in Danish, German and English, built with a centralized translation function.' },
  { t: 'Key focus', d: 'Better cross-border recruitment visibility and partnership opportunities in the German-Danish border region.' },
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
            <img src="/img/businessregionhero.webp" alt="Business DE-DK website redesign" class="hero-img" />
          </div>

          <span class="label accent">UX/UI · Web design · Front-end</span>
          <h1>Business Region. A cross-border website, redesigned and rebuilt end to end</h1>
          <p class="lead">Business Region is an Interreg-funded cross-border project based in Tønder, connecting businesses and job seekers across the German-Danish border. Originally launched as business-region.eu, we redesigned and rebuilt the platform’s digital presence end to end as our second-semester exam project, working within the client’s real budget constraints.</p>

          <div class="meta-grid">
            <div>
              <span class="label">Fields</span>
              <div class="pill-col">
                <span class="pill">UX/UI</span>
                <span class="pill">Web Design</span>
                <span class="pill">Front-end</span>
                <span class="pill">Social Media</span>
              </div>
            </div>
            <div>
              <span class="label">Year</span>
              <p class="meta-v">2026</p>
            </div>
            <div>
              <span class="label">Where</span>
              <p class="meta-v">Syddansk Erhvervsakademi<br />Client: Business Region</p>
            </div>
            <div>
              <span class="label">Role</span>
              <p class="meta-v">UX/UI Designer<br />Front-end Developer<br />Team of four</p>
            </div>
          </div>

        </section>

        <!-- CHALLENGE -->
        <section id="challenge" class="d-section">
          <span class="label accent">Challenge</span>
          <h2>A border region full of opportunities, and a website that made them hard to find</h2>
          <p class="body">The original site, business-region.eu, was meant to bring businesses and job seekers together across the German-Danish border. In practice it got in their way. Its hero section had no clear value proposition and offered only two languages, without English, even though international professionals are a key customer segment.</p>
          <p class="body">Finding events meant scrolling a plain, unfiltered list with no way to search by language, type or date. The resources page was overloaded with text, and the newsletter sign-up went unnoticed among all that content.</p>
          <div class="cards cards-3 cards-text gap-top">
            <div class="card"><span class="label accent">No clear message</span><p class="small">No visible value proposition, and no English next to Danish and German.</p></div>
            <div class="card"><span class="label accent">Hard to find events</span><p class="small">A plain list, with no search or filters for language, type or date.</p></div>
            <div class="card"><span class="label accent">Buried content</span><p class="small">Text-heavy resources, with a newsletter sign-up nobody noticed.</p></div>
          </div>
          <p class="body gap-top">We tackled it as a team of four, within the client’s real budget, using Scrum to manage our sprints.</p>
        </section>

        <!-- SOLUTION -->
        <section id="solution" class="d-section">
          <span class="label accent">Solution</span>
          <h2>One multilingual hub for businesses and job seekers on both sides of the border</h2>
          <div class="vp">
            <p class="vp-statement">{{ VP }}</p>
          </div>
          <div class="cards cards-3 cards-vp">
            <div class="card"><span class="label accent">Website</span><p class="small">A redesigned site in Danish, German and English, built on headless WordPress and Vue 3, with clear navigation and filters.</p></div>
            <div class="card"><span class="label accent">Content and SEO</span><p class="small">A trilingual SEO and content system, plus a social media strategy for LinkedIn and Instagram.</p></div>
            <div class="card"><span class="label accent">Brand materials</span><p class="small">A roll-up banner, flyer, business card and mug, so the brand looks consistent everywhere.</p></div>
          </div>
        </section>

        <!-- DIAMOND 1: DEFINE -->
        <section id="define" class="d-section">
          <span class="label accent">Process</span>
          <h2>Two diamonds: understand the problem, then shape the solution</h2>
          <p class="body">The first diamond opens up the problem and narrows it into a clear scope. The second explores solutions and delivers a working platform.</p>

          <div class="dd">
            <svg viewBox="0 8 1000 182" role="img" aria-label="Double Diamond: Discover, Define, Develop, Deliver">
              <polygon points="10,70 250,12 490,70 250,128" fill="#19263A" />
              <polygon points="510,70 750,12 990,70 750,128" fill="#19263A" />
              <line x1="250" y1="12" x2="250" y2="128" stroke="#fff" stroke-width="2" />
              <line x1="750" y1="12" x2="750" y2="128" stroke="#fff" stroke-width="2" />
              <g font-size="12" font-weight="700" letter-spacing="1.4" text-anchor="middle">
                <text x="130" y="76" fill="#fff">DISCOVER</text>
                <text x="370" y="76" fill="#fff">DEFINE</text>
                <text x="630" y="76" fill="#fff">DEVELOP</text>
                <text x="870" y="76" fill="#fff">DELIVER</text>
              </g>
              <g font-size="13" fill="#666A70" text-anchor="middle">
                <text x="130" y="158">The old site</text><text x="130" y="176">see Challenge</text>
                <text x="370" y="158">Define · User stories</text><text x="370" y="176">ORCA</text>
                <text x="630" y="158">Lo-fi · Hi-fi</text><text x="630" y="176">Print and social</text>
                <text x="870" y="158">Build · Deliverables</text><text x="870" y="176">Result</text>
              </g>
            </svg>
          </div>

          <div class="phase"><span class="phase-n">DIAMOND 1</span><span class="phase-t">Define</span></div>

          <div class="step">
            <span class="label step-n">01 · Define</span>
            <p class="body">We followed the Double Diamond combined with Scrum. Before designing anything, we agreed on who the site is for and what it promises them.</p>
            <div class="vp vp-block">
              <span class="label accent">Value proposition</span>
              <p class="vp-statement">{{ VP }}</p>
            </div>
          </div>

          <div class="step">
            <span class="label step-n">02 · User stories</span>
            <div v-for="s in stories" :key="s.text" class="story">
              <span class="label">{{ s.role }}</span>
              <p class="body">{{ s.text }}</p>
            </div>
          </div>

          <div class="step">
            <span class="label step-n">03 · ORCA</span>
            <p class="body">Objects, relationships, attributes and calls to action for the site’s content: media channel, photo gallery, blog post, events and stakeholders.</p>
            <img src="/img/businessregionorca.jpeg" alt="ORCA board with sticky notes" class="board" />
          </div>
        </section>

        <!-- DIAMOND 2: DEVELOP -->
        <section id="develop" class="d-section">
          <div class="phase"><span class="phase-n">DIAMOND 2</span><span class="phase-t">Develop</span></div>

          <div class="step">
            <span class="label step-n">04 · Lo-fi</span>
            <p class="body">Early lofi sketches and card-sorting sessions shaped the structure and navigation before any visual design started.</p>
            <img src="/img/businessregionlofi.jpeg" alt="Lo-fi sketches of the site pages" class="board" />
          </div>

          <div class="step">
            <span class="label step-n">05 · Hi-fi · Before and after</span>
            <p class="body">The same three sections of the site, before and after the redesign.</p>
            <div v-for="p in beforeAfter" :key="p.after" class="ba-pair">
              <figure>
                <span class="ba-tag">BEFORE</span>
                <img :src="p.before" :alt="p.altB" loading="lazy" />
                <figcaption class="small cap">{{ p.capB }}</figcaption>
              </figure>
              <figure>
                <span class="ba-tag">AFTER</span>
                <img :src="p.after" :alt="p.altA" loading="lazy" />
                <figcaption class="small cap">{{ p.capA }}</figcaption>
              </figure>
            </div>
          </div>

          <div class="step">
            <span class="label step-n">06 · Print and social</span>
            <p class="body">Alongside the website, we designed a full suite of print and digital materials, from business cards to social content, so the client had a consistent brand presence everywhere their audience found them.</p>
            <div class="prints">
              <figure v-for="p in prints" :key="p.img">
                <img :src="p.img" :alt="p.alt" loading="lazy" />
                <figcaption class="small">{{ p.cap }}</figcaption>
              </figure>
            </div>

            <span class="label sub">Social media</span>
            <p class="body">Alongside the website, we developed a trilingual social media content strategy for LinkedIn and Instagram, using a Hook–Value–CTA–Hashtags framework to boost engagement.</p>
            <div class="social-row">
              <img src="/img/businessregionfeed.png" alt="Instagram feed" class="social-feed" loading="lazy" />
              <article v-for="p in posts" :key="p.img" class="ig-post">
                <div class="ig-head">
                  <img src="/img/businessregion-avatar.webp" alt="" class="ig-avatar" />
                  <span class="ig-user">businessregion</span>
                </div>
                <img :src="p.img" :alt="p.alt" class="ig-img" loading="lazy" />
                <div class="ig-actions" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.5s-7.5-4.6-9.2-9.4C1.7 7.700 3.900 4.500 7.100 4.500c1.900 0 3.700 1 4.900 2.900 1.200-1.900 3-2.900 4.900-2.900 3.200 0 5.400 3.200 4.300 6.600-1.700 4.800-9.200 9.400-9.200 9.400z"/></svg>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.500a8.500 8.500 0 0 1-12.500 7.500L3 20.500l1.500-5.200A8.500 8.500 0 1 1 21 11.500z"/></svg>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 3 11 14M22 3l-7 18-4-7-7-4z"/></svg>
                  <svg class="ig-save" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12v18l-6-4.500L6 21z"/></svg>
                </div>
                <p class="ig-cap"><b>businessregion</b> {{ p.cap }}</p>
              </article>
            </div>
          </div>
        </section>

        <!-- DIAMOND 2: DELIVER -->
        <section id="deliver" class="d-section">
          <div class="phase"><span class="phase-n">DIAMOND 2</span><span class="phase-t">Deliver</span></div>

          <div class="step">
            <span class="label step-n">07 · Build</span>
            <p class="body">We rebuilt the site on a headless WordPress and Vue 3 architecture and layered a trilingual SEO and content strategy on top of it. The stack:</p>
            <div class="stack">
              <div v-for="s in stack" :key="s.t" class="stk"><b>{{ s.t }}</b><p class="small">{{ s.d }}</p></div>
            </div>

            <span class="label sub">Deliverables</span>
            <p class="body">Two guides handed over to the client, so the site and its social channels can keep growing without us.</p>
            <div class="btn-row">
              <a href="/pdfs/BusinessDEDKSoMeandSEOguide.pdf" target="_blank" rel="noopener" class="btn btn-outline">↗ SoMe &amp; SEO Guide</a>
              <a href="/pdfs/BusinessDEDKContentmanagmentmanual.pdf" target="_blank" rel="noopener" class="btn btn-outline">↗ Content Management Manual</a>
            </div>
          </div>
        </section>

        <!-- RESULT -->
        <section id="result" class="d-section last">
          <span class="label accent">Result</span>
          <h2>From early sketches to a trilingual, production-ready platform</h2>
          <p class="body">Across this project we moved through the full Double Diamond process, from early lofi sketches and card-sorting sessions to a fully trilingual, production-ready platform. Working within the client’s real budget as a team of four, using Scrum to manage our sprints, we rebuilt the site on a headless WordPress and Vue 3 architecture and layered a trilingual SEO and content strategy on top of it. Alongside the website, we designed a full suite of print and digital materials, from business cards to social content, so the client had a consistent brand presence everywhere their audience found them.</p>
        </section>

        <ProjectFooter prev-to="/portfolio/danes" next-to="/portfolio/departamentos-alfar" />
      </main>
    </div>
  </div>
</template>

<style scoped>
/* One type scale for the whole page: 56 · 40 · 22 · 18 · 15 · 12
   Two text colours: --ink and --muted. One accent: red. */
.case-study {
  --ink: #111111;
  --muted: #666A70;
  --line: #DDE1E5;
  --accent: #19263A;
  --sky: #BDD7EE;
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
.btn-lime { background: var(--lima); color: #000; }
.btn-lime:hover { transform: translateY(-2px); }
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

/* before / after */
.ba-pair { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 24px; }
.ba-pair figure { margin: 0; }
.ba-tag { display: block; font-size: 12px; font-weight: 700; letter-spacing: 0.1em; margin-bottom: 10px; }
.ba-pair img { width: 100%; display: block; border-radius: 12px; border: 1px solid var(--line); margin-bottom: 12px; }
.ba-pair .cap { color: #444; }

/* print + social */
.prints { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 24px; }
.prints figure { margin: 0; }
.prints img { width: 100%; aspect-ratio: 4 / 5; object-fit: cover; border-radius: 14px; display: block; border: 1px solid var(--line); }
.prints figcaption { margin-top: 10px; }
.social-row { display: grid; grid-template-columns: 250px repeat(3, 1fr); gap: 16px; margin-top: 24px; align-items: stretch; }
.social-feed { width: 100%; border-radius: 12px; display: block; border: 1px solid var(--line); }
/* Instagram post mockup */
.ig-post { border: 1px solid var(--line); border-radius: 12px; overflow: hidden; display: flex; flex-direction: column; background: #fff; min-width: 0; }
.ig-head { display: flex; align-items: center; gap: 8px; padding: 10px 12px; }
.ig-avatar { width: 28px; height: 28px; border-radius: 50%; object-fit: cover; display: block; flex: none; }
.ig-user { font-size: 13px; font-weight: 600; color: var(--ink); }
.ig-img { width: 100%; aspect-ratio: 4 / 5; object-fit: cover; display: block; }
.ig-actions { display: flex; gap: 14px; padding: 10px 12px 4px; color: var(--ink); }
.ig-save { margin-left: auto; }
.ig-cap { font-size: 13px; line-height: 1.4; color: var(--ink); text-align: left; margin: 0; padding: 4px 12px 14px; }
.ig-cap b { font-weight: 600; }

/* build / stack */
.stack { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 24px; }
.stk { border: 1px solid var(--line); border-radius: 16px; padding: 22px; }
.stk b { display: block; font-size: 17px; font-weight: 600; margin-bottom: 4px; }

/* ─── RESPONSIVE ─────────────────────────── */
@media (max-width: 1000px) {
  .cs-layout { grid-template-columns: minmax(0, 1fr); padding: 0 5%; }
  .side-nav { display: none; }
  .top-nav { display: block; }
  .meta-grid { grid-template-columns: 1fr 1fr; }
  h1 { font-size: 44px; }
  h2 { font-size: 32px; }
  .stack { grid-template-columns: 1fr 1fr; }
  .prints { grid-template-columns: 1fr 1fr; }
  .social-row { grid-template-columns: repeat(3, 1fr); }
  .social-feed { grid-column: 1 / -1; max-width: 260px; }
}

@media (max-width: 600px) {
  .top-nav { padding: 20px 5%; }
  .back-btn { font-size: 18px; }
  h1 { font-size: 34px; }
  h2 { font-size: 26px; }
  .lead { font-size: 18px; }
  .body { font-size: 17px; }
  .vp-statement { font-size: 19px; }
  .meta-grid, .cards-3, .stack, .ba-pair { grid-template-columns: 1fr; }
  .body, .lead, .small, .vp-statement { text-align: left; }
  .phase-t { font-size: 26px; }
  .social-row { grid-template-columns: 1fr 1fr; }
  .d-section { margin-bottom: 80px; }
}
</style>
