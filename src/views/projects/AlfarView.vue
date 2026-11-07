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

const VP = '“We help guests feel confident booking their stay by giving them everything they need to know upfront, so that first WhatsApp message is about confirming a reservation, not asking the basics.”';

const stories = [
  { role: 'As a Potential Guest', text: '“I want to see real photos and details of each apartment so that I can pick the one that fits my group before reaching out.”' },
  { role: 'As a First-Time Visitor', text: '“I want to know the booking policies (deposit, check-in and check-out, pets) upfront so that I know exactly what to expect before I commit.”' },
  { role: 'As Cris (the host)', text: '“I want fewer repetitive questions on WhatsApp so that I can focus my time on guests who are ready to book.”' },
];

const features = [
  { t: 'Our story', d: 'The family behind Alfar, from the original builders to Cris.' },
  { t: '8 apartments', d: 'One filterable listing, each with a pre-filled WhatsApp button.' },
  { t: 'Common spaces', d: 'Grill, quincho, garden and parking, shown as a photo grid.' },
  { t: 'Reviews and FAQ', d: 'Real guest reviews, plus booking rules, deposit and check-in times.' },
];

const stack = [
  { t: 'Approach', d: 'Designed and built solo, end to end, for a real family business, from content structure to the final deploy.' },
  { t: 'Front end', d: 'Vue 3, styled with Tailwind CSS.' },
  { t: 'Hosting', d: 'Firebase' },
  { t: 'Deploy', d: 'Automatic deploys connected to GitHub Actions.' },
  { t: 'SEO', d: 'Targeting “alquiler temporal Mar del Plata”, plus a Google Business Profile.' },
  { t: 'Key focus', d: 'Fewer repetitive WhatsApp questions, with FAQs, policies and location info on the site.' },
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
            <img src="/img/alfarhero.webp" alt="Departamentos Alfar website" class="hero-img" />
          </div>

          <span class="label accent">UX/UI · Web design · Front-end</span>
          <h1>Departamentos Alfar. A family-run complex, now with a website of its own</h1>
          <p class="lead">Departamentos Alfar is a family-run complex of 8 apartments in the Alfar neighborhood of Mar del Plata, Argentina, administered by my mum Cris. Before this site existed, every question about availability, amenities, prices or the story behind the place had to go through WhatsApp, one message at a time. I designed and built the website, end to end, so guests get answers before they ever need to write.</p>

          <div class="meta-grid">
            <div>
              <span class="label">Fields</span>
              <div class="pill-col">
                <span class="pill">UX/UI</span>
                <span class="pill">Front-end</span>
                <span class="pill">Web Design</span>
              </div>
            </div>
            <div>
              <span class="label">Year</span>
              <p class="meta-v">2026</p>
            </div>
            <div>
              <span class="label">Where</span>
              <p class="meta-v">Mar del Plata, Argentina<br />Client: Departamentos Alfar</p>
            </div>
            <div>
              <span class="label">Role</span>
              <p class="meta-v">UX/UI Designer<br />Front-end Developer<br />Solo project</p>
            </div>
          </div>

          <div class="btn-row">
            <a href="https://www.departamentosalfarmdp.com.ar" target="_blank" rel="noopener" class="btn btn-brand">Visit live site ↗</a>
          </div>
        </section>

        <!-- CHALLENGE -->
        <section id="challenge" class="d-section">
          <span class="label accent">Challenge</span>
          <h2>Eight apartments, and every answer lived in a WhatsApp chat</h2>
          <p class="body">Alfar’s guests came with the same questions again and again: is it available, how many people fit, is there parking, what are the rules. Cris answered each one by hand, message after message, and the apartments had no single place to show what makes them special.</p>
          <div class="cards cards-3 cards-text gap-top">
            <div class="card"><span class="label accent">Repetitive questions</span><p class="small">The same basics asked again and again over WhatsApp.</p></div>
            <div class="card"><span class="label accent">Nothing to share</span><p class="small">No single place with photos, amenities and house rules.</p></div>
            <div class="card"><span class="label accent">Hard to find</span><p class="small">No website to show up when travellers search for a stay in Mar del Plata.</p></div>
          </div>
          <p class="body gap-top">A real family business, a real budget, and one designer who also had to build it.</p>
        </section>

        <!-- SOLUTION -->
        <section id="solution" class="d-section">
          <span class="label accent">Solution</span>
          <h2>A website that answers first, so the conversation starts at “I’d like to book”</h2>
          <div class="vp">
            <p class="vp-statement">{{ VP }}</p>
          </div>
          <div class="cards cards-3 cards-vp">
            <div class="card"><span class="label accent">Website</span><p class="small">The 8 apartments in one filterable listing, with photos, capacity, amenities and a WhatsApp button pre-filled with the apartment number.</p></div>
            <div class="card"><span class="label accent">Content</span><p class="small">The story of the family, common spaces, real guest reviews and a FAQ, all in one place.</p></div>
            <div class="card"><span class="label accent">Online presence</span><p class="small">SEO for “alquiler temporal Mar del Plata”, a Google Business Profile and share previews.</p></div>
          </div>
        </section>

        <!-- DIAMOND 1: DEFINE -->
        <section id="define" class="d-section">
          <span class="label accent">Process</span>
          <h2>Two diamonds: understand the problem, then shape the solution</h2>
          <p class="body">The first diamond opens up the problem and narrows it into a clear scope. The second explores solutions and delivers a live site.</p>

          <div class="dd">
            <svg viewBox="0 8 1000 182" role="img" aria-label="Double Diamond: Discover, Define, Develop, Deliver">
              <polygon points="10,70 250,12 490,70 250,128" fill="#2A27C1" />
              <polygon points="510,70 750,12 990,70 750,128" fill="#2A27C1" />
              <line x1="250" y1="12" x2="250" y2="128" stroke="#fff" stroke-width="2" />
              <line x1="750" y1="12" x2="750" y2="128" stroke="#fff" stroke-width="2" />
              <g font-size="12" font-weight="700" letter-spacing="1.4" text-anchor="middle">
                <text x="130" y="76" fill="#fff">DISCOVER</text>
                <text x="370" y="76" fill="#fff">DEFINE</text>
                <text x="630" y="76" fill="#fff">DEVELOP</text>
                <text x="870" y="76" fill="#fff">DELIVER</text>
              </g>
              <g font-size="13" fill="#666A70" text-anchor="middle">
                <text x="130" y="158">The old way</text><text x="130" y="176">see Challenge</text>
                <text x="370" y="158">Define · User stories</text><text x="370" y="176">Value proposition</text>
                <text x="630" y="158">Hi-fi</text><text x="630" y="176">Website</text>
                <text x="870" y="158">Build · Deploy</text><text x="870" y="176">Result</text>
              </g>
            </svg>
          </div>

          <div class="phase"><span class="phase-n">DIAMOND 1</span><span class="phase-t">Define</span></div>

          <div class="step">
            <span class="label step-n">01 · Define</span>
            <p class="body">I followed the Double Diamond, working solo and checking each decision with Cris. Before designing anything, I defined who the site is for and what it promises them.</p>
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
        </section>

        <!-- DIAMOND 2: DEVELOP -->
        <section id="develop" class="d-section">
          <div class="phase"><span class="phase-n">DIAMOND 2</span><span class="phase-t">Develop</span></div>

          <div class="step">
            <span class="label step-n">03 · Hi-fi · Website</span>
            <p class="body">One page that follows the guest’s questions in order: who we are, which apartment, what others say, where it is, and how to book.</p>
            <div class="mock-box">
              <img src="/img/alfarsitemockup.png" alt="Departamentos Alfar website on a desktop screen" loading="lazy" />
            </div>
            <div class="cards cards-4">
              <div v-for="f in features" :key="f.t" class="card"><span class="label accent">{{ f.t }}</span><p class="small">{{ f.d }}</p></div>
            </div>
          </div>
        </section>

        <!-- DIAMOND 2: DELIVER -->
        <section id="deliver" class="d-section">
          <div class="phase"><span class="phase-n">DIAMOND 2</span><span class="phase-t">Deliver</span></div>

          <div class="step">
            <span class="label step-n">04 · Build</span>
            <p class="body">The site is built with Vue 3 and Tailwind CSS and hosted on Firebase, with every push to GitHub deploying automatically. The stack:</p>
            <div class="stack">
              <div v-for="s in stack" :key="s.t" class="stk"><b>{{ s.t }}</b><p class="small">{{ s.d }}</p></div>
            </div>
          </div>
        </section>

        <!-- RESULT -->
        <section id="result" class="d-section last">
          <span class="label accent">Result</span>
          <h2>A real digital front door for a family business</h2>
          <p class="body">The final site gives Departamentos Alfar a real digital front door. Guests arrive already informed about the apartments, the policies and the story behind the place, and Cris spends less time answering the same questions over and over on WhatsApp. Since it is a real, ongoing family project, the site keeps evolving with new sections as the business grows.</p>
          <div class="btn-row">
            <a href="https://www.departamentosalfarmdp.com.ar" target="_blank" rel="noopener" class="btn btn-brand">Visit live site ↗</a>
          </div>
        </section>

        <ProjectFooter prev-to="/portfolio/business-dedk" next-to="/portfolio/lic-aranda" />
      </main>
    </div>
  </div>
</template>

<style scoped>
/* One type scale for the whole page: 56 · 40 · 22 · 18 · 15 · 12
   Two text colours: --ink and --muted. One accent: Alfar blue. */
.case-study {
  --ink: #111111;
  --muted: #666A70;
  --line: #DDE1E5;
  --accent: #2A27C1;
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
.btn-brand { background: #2A27C1; color: #fff; border-color: #2A27C1; }
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

/* website */
.mock-box { margin-top: 24px; background: #EAF2FA; border-radius: 16px; padding: 32px 40px; display: flex; justify-content: center; }
.mock-box img { height: 420px; width: auto; max-width: 100%; display: block; mix-blend-mode: multiply; }
.cards-4 { grid-template-columns: repeat(4, 1fr); margin-top: 24px; }

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
  .cards-4 { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 600px) {
  .top-nav { padding: 20px 5%; }
  .back-btn { font-size: 18px; }
  h1 { font-size: 34px; }
  h2 { font-size: 26px; }
  .lead { font-size: 18px; }
  .body { font-size: 17px; }
  .vp-statement { font-size: 19px; }
  .meta-grid, .cards-3, .stack { grid-template-columns: 1fr; }
  .body, .lead, .small, .vp-statement, .card .small, .small.left { text-align: justify; hyphens: auto; -webkit-hyphens: auto; overflow-wrap: break-word; }
  .dd { overflow-x: auto; -webkit-overflow-scrolling: touch; padding-bottom: 6px; }
  .dd svg { width: 640px; max-width: none; }
  .phase-t { font-size: 26px; }
  .cards-4 { grid-template-columns: 1fr; }
  .mock-box { padding: 20px; }
  .mock-box img { height: auto; width: 100%; }
  .d-section { margin-bottom: 80px; }
}
</style>
