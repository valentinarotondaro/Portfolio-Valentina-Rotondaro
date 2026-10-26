<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import ProjectFooter from './ProjectFooter.vue';

const LIVE_URL = 'https://danes-app.vercel.app';
const CODE_URL = 'https://github.com/valentinarotondaro/Danes';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'challenge', label: 'Challenge' },
  { id: 'solution', label: 'Solution' },
  { id: 'process', label: 'Process' },
  { id: 'product', label: 'Product' },
  { id: 'brand', label: 'Brand & Campaign' },
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

const processSteps = [
  { n: '01 · Define', t: 'Problem statement, How Might We, proto-persona (“Alex”, 29, moved to Aarhus for work) and the value proposition.' },
  { n: '02 · ORCA + MoSCoW', t: 'Objects (course, lesson, session, event, package, order), their relationships and the MVP scope.' },
  { n: '03 · Lo-fi', t: '13 low-fidelity wireframes covering every MVP screen.' },
  { n: '04 · Design system', t: 'Colours, type scale, buttons, cards, tags, form fields and states.' },
  { n: '05 · Hi-fi', t: 'Every page designed for desktop and mobile in Claude Design: home, courses, lesson player, events, Speaking Club, checkout, My account and admin.' },
  { n: '06 · Build', t: 'From design to Vue components, with live data from Appwrite. A small server function books seats so two people can’t take the last one.' },
];

const stories = [
  { role: 'As a Newcomer,', text: '“I want to find a course at my level so I can start learning Danish without feeling lost.”' },
  { role: 'As a Learner,', text: '“I want to practise speaking with other learners every week so I stop switching to English when it gets hard.”' },
  { role: 'As a Learner,', text: '“I want to see my progress and my bookings in one place so I keep going.”' },
  { role: 'As an Admin,', text: '“I want to publish courses, sessions and events myself so the platform stays up to date without touching code.”' },
];

const screens = [
  { n: '01 · Home', img: '/img/danes-home.webp', alt: 'DANES home page', cap: 'The three pillars and the plans in one scroll.' },
  { n: '02 · Course page', img: '/img/danes-course.webp', alt: 'DANES course page', cap: 'An intro video with the teacher, the syllabus and a clear price.' },
  { n: '03 · Checkout', img: '/img/danes-checkout.webp', alt: 'DANES checkout', cap: 'Single plans and packages in two separate groups, so it’s clear what each plan includes.' },
  { n: '04 · Admin', img: '/img/danes-admin.webp', alt: 'DANES admin dashboard', cap: 'A dashboard with what needs attention, and forms with validation and confirmation.' },
];
</script>

<template>
  <div class="case-study">
    <div class="danes-layout">

      <!-- LEFT NAV (sticky) -->
      <aside class="side-nav">
        <div class="side-nav-inner">
          <router-link to="/portfolio" class="side-back" aria-label="Back to Works">←</router-link>
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

      <main class="danes-main">

        <!-- OVERVIEW -->
        <section id="overview" class="d-section first">
          <div class="hero-wrap">
            <img src="/img/daneshero.webp" alt="DANES learning platform" class="hero-img" />
          </div>

          <span class="eyebrow">UX/UI · Web design · Front-end</span>
          <h1>DANES. A learning platform, from first idea to live code</h1>
          <p class="intro">DANES is a Danish learning and community platform for internationals living in Denmark: self-paced courses, small weekly speaking groups and city events where Danish is the language we stay in. I designed and built it on my own, from brand to a live web app.</p>

          <div class="meta-grid">
            <div>
              <div class="meta-k">FIELDS</div>
              <div class="pill-col">
                <span class="pill">UX/UI</span>
                <span class="pill">Web Design</span>
                <span class="pill">Branding</span>
                <span class="pill">Front-end</span>
              </div>
            </div>
            <div>
              <div class="meta-k">YEAR</div>
              <div class="meta-v">2026</div>
              <div class="meta-v">10 weeks</div>
            </div>
            <div>
              <div class="meta-k">WHERE</div>
              <div class="meta-v">SEA Syddansk Erhvervsakademi (EASV)<br />Advanced JavaScript exam</div>
            </div>
            <div>
              <div class="meta-k">ROLE</div>
              <div class="meta-v">Solo project: brand identity, design system, UX/UI, front-end build, AI-assisted photo campaign</div>
            </div>
          </div>

          <a :href="LIVE_URL" target="_blank" rel="noopener" class="btn-lime">Visit live site ↗</a>
        </section>

        <!-- CHALLENGE -->
        <section id="challenge" class="d-section">
          <span class="s-label">Challenge</span>
          <h2>Danes speak excellent English, which keeps newcomers on the outside</h2>
          <p class="body">Newcomers can get by without Danish, but that same ease keeps them out: every time they try, the conversation switches to English. Everyone tells you to learn Danish, yet daily life gives you few chances to use it.</p>
          <p class="body">I wanted a place to learn Danish, practise it out loud and use it in real life, built as my Advanced JavaScript exam project at EASV.</p>
        </section>

        <!-- SOLUTION -->
        <section id="solution" class="d-section">
          <span class="s-label">Solution</span>
          <h2>From getting by to belonging, in three pillars</h2>
          <div class="vp">
            <p class="vp-statement">“We help internationals in Denmark go from getting by to belonging, with self-paced Danish courses, small weekly speaking groups and city events where Danish is the language we stay in.”</p>
            <p class="vp-tag"><i>Your bridge into Danish life.</i></p>
          </div>
          <div class="pillars">
            <div class="pillar"><span>LEARN</span><p>Self-paced courses with video lessons and a clear level system.</p></div>
            <div class="pillar"><span>PRACTISE</span><p>Friday Speaking Club: small groups, one language.</p></div>
            <div class="pillar"><span>BELONG</span><p>City events where Danish is the one we stay in.</p></div>
          </div>
        </section>

        <!-- PROCESS -->
        <section id="process" class="d-section">
          <span class="s-label">Process</span>
          <h2>Plan first, then design and build in vertical slices</h2>

          <div class="strategy-grid">
            <div class="strategy-card"><h4>Approach</h4><p>A 9-step planning process (why/who/value, ORCA, data model, MVP, wireframes, components, stack, build plan), then design and build in vertical slices: one feature fully working, from database to screen, before the next one.</p></div>
            <div class="strategy-card"><h4>Tech stack</h4><p>Vue 3 (Composition API) + Vite + Vue Router, Tailwind CSS v4, Appwrite (auth, database, teams, serverless functions), YouTube and Jitsi for video, Vitest, hosted on Vercel.</p></div>
            <div class="strategy-card"><h4>Design</h4><p>My own design system (Sora, red #B20E19 and sky blue #BFDAF5, one 16px radius), designed in Figma and Claude Design.</p></div>
            <div class="strategy-card"><h4>Key focus</h4><p>Learn, Practise and Belong, plus a learner area and an admin area where content is managed.</p></div>
          </div>

          <span class="sub-label">User stories</span>
          <div v-for="s in stories" :key="s.text" class="user-story-item">
            <span class="story-role">{{ s.role }}</span>
            <p>{{ s.text }}</p>
          </div>

          <div v-for="st in processSteps" :key="st.n" class="step">
            <span class="sub-label">{{ st.n }}</span>
            <p class="body">{{ st.t }}</p>
          </div>
        </section>

        <!-- PRODUCT -->
        <section id="product" class="d-section">
          <span class="s-label">Product</span>
          <h2>A public site, a learner area and an admin area</h2>
          <figure v-for="s in screens" :key="s.n" class="screen">
            <figcaption class="screen-n">{{ s.n }}</figcaption>
            <img :src="s.img" :alt="s.alt" class="screen-img" />
            <p class="caption">{{ s.cap }}</p>
          </figure>
        </section>

        <!-- BRAND & CAMPAIGN -->
        <section id="brand" class="d-section">
          <span class="s-label">Brand &amp; Campaign</span>
          <h2>A bridge for a logo, everyday Danish life for a campaign</h2>
          <p class="body">The logo’s elongated A is drawn as a bridge, in two brand colours: red and sky blue. The photo campaign, created with AI image tools, shows everyday Danish life instead of stock “classroom” imagery: bakeries, canals, cafés and friends, so the platform feels like belonging, not homework.</p>

          <div class="grid-2 gap-top">
            <img src="/img/danes-logo-red.webp" alt="DANES logo, red" class="img r16-9" />
            <img src="/img/danes-logo-sky.webp" alt="DANES logo, sky blue" class="img r16-9" />
          </div>
          <div class="grid-3">
            <img src="/img/danes-friends-street.webp" alt="Friends on a Danish street" class="img r4-5" />
            <img src="/img/danes-speaking-group.webp" alt="Speaking group" class="img r4-5" />
            <img src="/img/danes-cafe-letter.webp" alt="Café with a letter" class="img r4-5" />
          </div>
          <div class="grid-3">
            <img src="/img/danes-bakery.webp" alt="Bakery" class="img r16-10" />
            <img src="/img/danes-canal-walk.webp" alt="Canal walk" class="img r16-10" />
            <img src="/img/danes-friends-sky.webp" alt="Friends under a blue sky" class="img r16-10" />
          </div>
          <div class="grid-4">
            <img src="/img/danes-event-aros.webp" alt="Event at ARoS" class="img sq" />
            <img src="/img/danes-event-torvehallerne.webp" alt="Event at Torvehallerne" class="img sq" />
            <img src="/img/danes-event-board-games.webp" alt="Board games event" class="img sq" />
            <img src="/img/danes-event-men-at-sea.webp" alt="Men at Sea" class="img sq" />
          </div>
        </section>

        <!-- RESULT -->
        <section id="result" class="d-section last">
          <span class="s-label">Result</span>
          <h2>From a personal observation to a live product</h2>
          <p class="body">In about ten weeks, DANES went from a personal observation to a live product. I took it through planning, an own design system and hi-fi designs, and then built it myself in Vue and Appwrite. It includes real accounts, purchases, progress tracking, seat booking and a full admin area.</p>
          <p class="body">The project taught me to think about the data behind every screen, and to treat AI as a tool I direct and check rather than one I follow.</p>
          <div class="btn-row">
            <a :href="LIVE_URL" target="_blank" rel="noopener" class="btn-lime">Visit live site ↗</a>
            <a :href="CODE_URL" target="_blank" rel="noopener" class="btn-outline">View code on GitHub ↗</a>
          </div>
        </section>

        <ProjectFooter next-to="/portfolio/business-dedk" />
      </main>
    </div>
  </div>
</template>

<style scoped>
.case-study {
  font-family: 'Inter', sans-serif;
  background: #fff;
  color: #000;
  line-height: 1.6;
}

/* ─── LAYOUT ─────────────────────────────── */
.danes-layout {
  display: grid;
  grid-template-columns: 260px minmax(0, 1000px);
  justify-content: center;
  column-gap: 60px;
  padding: 0 24px;
}

.side-nav-inner {
  position: sticky;
  top: 30px;
  padding-top: 30px;
}

.side-back {
  display: flex;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #f1f1f1;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #000;
  text-decoration: none;
  margin-bottom: 40px;
  transition: background 0.2s ease;
}
.side-back:hover { background: #e6e6e6; }

.side-links { display: flex; flex-direction: column; gap: 6px; }

.side-links a {
  display: block;
  padding: 12px 18px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  color: #777;
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease;
}
.side-links a:hover { color: #000; }
.side-links a.active { background: var(--lima); color: #000; }

.danes-main { padding-top: 30px; min-width: 0; }

/* ─── SECTIONS ───────────────────────────── */
.d-section { margin-bottom: 130px; scroll-margin-top: 30px; }
.d-section.last { margin-bottom: 60px; }

.hero-wrap { margin-bottom: 56px; }
.hero-img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 20px;
  display: block;
}

.eyebrow {
  display: block;
  font-size: 15px;
  font-weight: 600;
  color: #b20e19;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 14px;
}

h1 {
  font-size: 64px;
  line-height: 1.05;
  font-weight: 500;
  letter-spacing: -0.035em;
  margin: 0 0 30px;
  max-width: 940px;
}

.intro {
  font-size: 24px;
  line-height: 1.5;
  color: #555;
  max-width: 900px;
  margin: 0 0 56px;
}

.meta-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.7fr 1.1fr 1.3fr;
  gap: 36px;
  align-items: start;
  margin-bottom: 44px;
}
.meta-k { font-size: 13px; font-weight: 600; letter-spacing: 0.1em; margin-bottom: 14px; }
.meta-v { font-size: 18px; color: #555; line-height: 1.5; margin-bottom: 6px; }
.pill-col { display: flex; flex-direction: column; gap: 10px; align-items: flex-start; }
.pill {
  display: inline-block;
  background: #000;
  color: #fff;
  border-radius: 999px;
  padding: 9px 18px;
  font-size: 15px;
  font-weight: 500;
}

.s-label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #b20e19;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 14px;
}

h2 {
  font-size: 44px;
  line-height: 1.12;
  font-weight: 500;
  letter-spacing: -0.03em;
  max-width: 880px;
  margin: 0 0 28px;
}

.body {
  font-size: 21px;
  line-height: 1.6;
  color: #444;
  max-width: 820px;
  margin: 0 0 22px;
}

/* ─── BUTTONS ────────────────────────────── */
.btn-lime {
  display: inline-block;
  background: var(--lima);
  color: #000;
  padding: 14px 30px;
  border-radius: 50px;
  font-size: 17px;
  font-weight: 500;
  text-decoration: none;
  transition: transform 0.2s ease;
}
.btn-lime:hover { transform: translateY(-2px); }

.btn-outline {
  display: inline-block;
  border: 1.5px solid #000;
  color: #000;
  padding: 12px 26px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease;
}
.btn-outline:hover { background: #000; color: #fff; }
.btn-row { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 30px; }

/* ─── SOLUTION ───────────────────────────── */
.vp { border-left: 3px solid #b20e19; padding-left: 28px; margin: 0 0 40px; max-width: 860px; }
.vp-statement { margin: 0; font-size: 28px; line-height: 1.3; font-weight: 500; letter-spacing: -0.02em; }
.vp-tag { margin: 14px 0 0; font-size: 17px; color: #777; }

.pillars { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.pillar { background: #f6f6f4; border-radius: 16px; padding: 28px; }
.pillar span { display: block; font-size: 13px; font-weight: 700; color: #b20e19; letter-spacing: 0.1em; margin-bottom: 10px; }
.pillar p { margin: 0; font-size: 18px; line-height: 1.5; }

/* ─── PROCESS ────────────────────────────── */
.strategy-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 56px; }
.strategy-card { background: #f6f6f4; padding: 26px; border-radius: 16px; }
.strategy-card h4 { font-size: 13px; font-weight: 700; color: #1a1333; text-transform: uppercase; margin: 0 0 10px; }
.strategy-card p { font-size: 16px; line-height: 1.6; margin: 0; }

.sub-label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 48px 0 16px;
}

.user-story-item { border-left: 3px solid #1a1333; padding-left: 20px; margin-bottom: 22px; }
.story-role { display: block; font-weight: 700; font-size: 13px; color: #1a1333; text-transform: uppercase; margin-bottom: 5px; }
.user-story-item p { margin: 0; font-size: 19px; line-height: 1.55; }

.step .sub-label { margin-top: 40px; margin-bottom: 10px; }
.step .body { margin-bottom: 0; }

/* ─── PRODUCT ────────────────────────────── */
.screen { margin: 0 0 56px; }
.screen-n { font-size: 12px; font-weight: 700; color: #999; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 10px; }
.screen-img { width: 100%; display: block; border-radius: 16px; border: 1px solid #ececec; }
.caption { margin: 12px 0 0; font-size: 15px; line-height: 1.5; color: #666; }

/* ─── BRAND ──────────────────────────────── */
.img { width: 100%; object-fit: cover; display: block; border-radius: 12px; }
.r16-9 { aspect-ratio: 16 / 9; }
.r4-5 { aspect-ratio: 4 / 5; }
.r16-10 { aspect-ratio: 16 / 10; }
.sq { aspect-ratio: 1 / 1; border-radius: 10px; }
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 16px; }
.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
.gap-top { margin-top: 40px; }

/* ─── RESPONSIVE ─────────────────────────── */
@media (max-width: 1000px) {
  .danes-layout { grid-template-columns: minmax(0, 1fr); padding: 0 5%; }
  .side-nav { display: none; }
  .meta-grid { grid-template-columns: 1fr 1fr; }
  h1 { font-size: 44px; }
  h2 { font-size: 32px; }
}

@media (max-width: 600px) {
  h1 { font-size: 34px; }
  h2 { font-size: 26px; }
  .intro { font-size: 19px; }
  .body { font-size: 18px; }
  .vp-statement { font-size: 21px; }
  .meta-grid, .pillars, .strategy-grid, .grid-2 { grid-template-columns: 1fr; }
  .grid-3 { grid-template-columns: 1fr 1fr; }
  .grid-4 { grid-template-columns: 1fr 1fr; }
  .d-section { margin-bottom: 80px; }
}
</style>
