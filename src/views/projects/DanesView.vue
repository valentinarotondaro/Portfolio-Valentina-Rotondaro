<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import ProjectFooter from './ProjectFooter.vue';

const LIVE_URL = 'https://danes-app.vercel.app';
const CODE_URL = 'https://github.com/valentinarotondaro/Danes';

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

const stories = [
  { role: 'As a newcomer', text: '“I want to find a course at my level so I can start learning Danish without feeling lost.”' },
  { role: 'As a learner', text: '“I want to practise speaking with other learners every week so I stop switching to English when it gets hard.”' },
  { role: 'As a learner', text: '“I want to see my progress and my bookings in one place so I keep going.”' },
  { role: 'As an admin', text: '“I want to publish courses, sessions and events myself so the platform stays up to date without touching code.”' },
];

const stack = [
  { t: 'Front end', d: 'Vue 3 (Composition API), Vite and Vue Router. Fast to build, easy to split into components.' },
  { t: 'Styling', d: 'Tailwind CSS v4, driven by the design tokens: colours, one typeface, one radius.' },
  { t: 'Back end', d: 'Appwrite: accounts, database, teams and serverless functions.' },
  { t: 'Seat booking', d: 'A small server function books seats, so two people can’t take the last one.' },
  { t: 'Video', d: 'YouTube for course lessons, Jitsi for the live Speaking Club calls.' },
  { t: 'Quality and hosting', d: 'Vitest for tests, Vercel for hosting and deploys.' },
];

const hifi = [
  { img: '/img/danes-courses.webp', alt: 'Courses page', cap: 'Courses' },
  { img: '/img/danes-events.webp', alt: 'Events page', cap: 'Events' },
  { img: '/img/danes-speaking.webp', alt: 'Speaking Club page', cap: 'Speaking Club' },
];


const logos = [
  { name: 'Primary', bg: '#FFFFFF', logo: '/img/danes-logo-black.webp', border: true },
  { name: 'Reversed on red', bg: '#B20E19', logo: '/img/danes-logo-white.webp' },
  { name: 'On sky', bg: '#BFDAF5', logo: '/img/danes-logo-black.webp' },
  { name: 'Reversed on black', bg: '#000000', logo: '/img/danes-logo-white.webp' },
];

const mainColors = [
  { name: 'DANES Red', hex: '#B20E19', rgb: '178 · 14 · 25', role: 'Primary. Buttons, links, key moments', fg: '#fff' },
  { name: 'DANES Sky', hex: '#BFDAF5', rgb: '191 · 218 · 245', role: 'Secondary. Hero panels, backgrounds', fg: '#000' },
];
const supportColors = [
  { name: 'Red hover', hex: '#8E0B14', fg: '#fff' },
  { name: 'Red soft', hex: '#FBE7E8', fg: '#000' },
  { name: 'Sky strong', hex: '#80ABD7', fg: '#000' },
  { name: 'Sky soft', hex: '#EAF2FA', fg: '#000' },
  { name: 'Ink', hex: '#000000', fg: '#fff' },
  { name: 'Ink muted', hex: '#666A70', fg: '#fff' },
  { name: 'Line', hex: '#DDE1E5', fg: '#000' },
  { name: 'Surface', hex: '#F5F5F5', fg: '#000' },
  { name: 'Success', hex: '#1A6B3D', fg: '#fff' },
  { name: 'Success soft', hex: '#E4F3EA', fg: '#000' },
];

const typeScale = [
  { name: 'Display', spec: '56 / 600', sample: 'Everyday Danish', size: 56, weight: 600 },
  { name: 'Heading', spec: '36 / 600', sample: 'Talk first. Perfect later.', size: 36, weight: 600 },
  { name: 'Title', spec: '24 / 600', sample: 'Danish for the life you’re building here', size: 24, weight: 600 },
  { name: 'Body', spec: '16 / 400', sample: 'Short video lessons about real situations: the bakery, the kommune, your job.', size: 16, weight: 400 },
  { name: 'Label', spec: '12 / 600 · caps', sample: 'COURSES · A1 TO B1', size: 12, weight: 600, caps: true },
];

const campaign = [
  { img: '/img/danes-friends-street.webp', alt: 'Friends on a Danish street', cls: 'r4-5' },
  { img: '/img/danes-speaking-group.webp', alt: 'Speaking group', cls: 'r4-5' },
  { img: '/img/danes-cafe-letter.webp', alt: 'Café with a letter', cls: 'r4-5' },
  { img: '/img/danes-bakery.webp', alt: 'Bakery', cls: 'r16-10' },
  { img: '/img/danes-canal-walk.webp', alt: 'Canal walk', cls: 'r16-10' },
  { img: '/img/danes-friends-sky.webp', alt: 'Friends under a blue sky', cls: 'r16-10' },
];
</script>

<template>
  <div class="case-study">
    <nav class="top-nav">
      <router-link to="/portfolio" class="back-btn">&lt; Back to Works</router-link>
    </nav>

    <div class="danes-layout">

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

      <main class="danes-main">

        <!-- OVERVIEW -->
        <section id="overview" class="d-section first">
          <div class="hero-wrap">
            <img src="/img/daneshero.webp" alt="DANES learning platform" class="hero-img" />
          </div>

          <span class="label accent">UX/UI · Web design · Front-end</span>
          <h1>DANES. A learning platform, from first idea to live code</h1>
          <p class="lead">DANES is a Danish learning and community platform for internationals living in Denmark: self-paced courses, small weekly speaking groups and city events where Danish is the language we stay in. I designed and built it on my own, from brand to a live web app.</p>

          <div class="meta-grid">
            <div>
              <span class="label">Fields</span>
              <div class="pill-col">
                <span class="pill">UX/UI</span>
                <span class="pill">Branding</span>
                <span class="pill">Web Design</span>
                <span class="pill">Front-end</span>
              </div>
            </div>
            <div>
              <span class="label">Year</span>
              <p class="meta-v">2026<br />10 weeks</p>
            </div>
            <div>
              <span class="label">Where</span>
              <p class="meta-v">Syddansk Erhvervsakademi<br />Advanced JavaScript exam</p>
            </div>
            <div>
              <span class="label">Role</span>
              <p class="meta-v">UX/UI Designer<br />Front-end Developer<br />Solo project</p>
            </div>
          </div>

          <a :href="LIVE_URL" target="_blank" rel="noopener" class="btn btn-lime">Visit live site ↗</a>
        </section>

        <!-- CHALLENGE -->
        <section id="challenge" class="d-section">
          <span class="label accent">Challenge</span>
          <h2>Learning Danish is the first step to belonging, but daily life rarely gives you the chance to practise</h2>
          <p class="body">Internationals in Denmark have the right to Danish classes, and many take them seriously. Outside the classroom it’s harder. Almost everyone here speaks excellent English, so when a newcomer hesitates, switching to English is the kind, easy way to keep the conversation flowing. Nobody does anything wrong; it’s simply how people try to be welcoming.</p>
          <p class="body">The result is a quiet gap: you study Danish but rarely use it, and Denmark can stay a country you’re passing through. Going from expat to someone who is settling in starts with trying the language out loud, in real situations. DANES makes that first step feel safe and normal.</p>
        </section>

        <!-- SOLUTION -->
        <section id="solution" class="d-section">
          <span class="label accent">Solution</span>
          <h2>From getting by to belonging, in three pillars</h2>
          <div class="vp">
            <p class="vp-statement">“We help internationals in Denmark go from getting by to belonging, with self-paced Danish courses, small weekly speaking groups and city events where Danish is the language we stay in.”</p>
            <p class="small left">Your bridge into Danish life.</p>
          </div>
          <div class="cards cards-3">
            <div class="card"><span class="label accent">Learn</span><p class="small">Self-paced courses with video lessons and a clear level system.</p></div>
            <div class="card"><span class="label accent">Practise</span><p class="small">Friday Speaking Club: small groups, one language.</p></div>
            <div class="card"><span class="label accent">Belong</span><p class="small">City events where Danish is the one we stay in.</p></div>
          </div>
        </section>

        <!-- DIAMOND 1: DEFINE -->
        <section id="define" class="d-section">
          <span class="label accent">Process</span>
          <h2>Two diamonds: understand the problem, then shape the solution</h2>
          <p class="body">I followed the Double Diamond. The first diamond opens up the problem and narrows it into a clear scope. The second explores solutions and delivers a working product.</p>

          <div class="dd">
            <svg viewBox="0 0 1000 190" role="img" aria-label="Double Diamond: Discover, Define, Develop, Deliver">
              <polygon points="10,70 250,12 490,70 250,128" fill="#BFDAF5" />
              <polygon points="510,70 750,12 990,70 750,128" fill="#B20E19" />
              <line x1="250" y1="12" x2="250" y2="128" stroke="#fff" stroke-width="2" />
              <line x1="750" y1="12" x2="750" y2="128" stroke="#fff" stroke-width="2" />
              <g font-size="12" font-weight="700" letter-spacing="1.4" text-anchor="middle">
                <text x="130" y="76" fill="#000">DISCOVER</text>
                <text x="370" y="76" fill="#000">DEFINE</text>
                <text x="630" y="76" fill="#fff">DEVELOP</text>
                <text x="870" y="76" fill="#fff">DELIVER</text>
              </g>
              <g font-size="13" fill="#666A70" text-anchor="middle">
                <text x="130" y="158">The observation</text><text x="130" y="176">see Challenge</text>
                <text x="370" y="158">Define · User stories</text><text x="370" y="176">ORCA · MoSCoW</text>
                <text x="630" y="158">Lo-fi · Brand</text><text x="630" y="176">Hi-fi</text>
                <text x="870" y="158">Build · Product</text><text x="870" y="176">Result</text>
              </g>
              <g font-size="11" font-weight="700" fill="#666A70" text-anchor="middle" letter-spacing="1.2">
                <text x="250" y="8">PROBLEM SPACE</text><text x="750" y="8">SOLUTION SPACE</text>
              </g>
            </svg>
          </div>

          <div class="phase"><span class="phase-n">DIAMOND 1</span><span class="phase-t">Define</span></div>

          <div class="step">
            <span class="label step-n">01 · Define</span>
            <p class="body">A 9-step planning process came first: why, who, value, ORCA, data model, MVP, wireframes, components, stack and build plan. It started with one clear problem and one person to design for.</p>
            <div class="two">
              <div class="ps">
                <span class="label accent">Problem statement</span>
                <p class="ps-q">Internationals who study Danish need a safe, regular way to use it in real situations, because in daily life conversations switch to English and the language stays in the classroom.</p>
              </div>
              <div class="persona">
                <span class="label accent">Persona</span>
                <div class="persona-head">
                  <img src="/img/danes-matias.webp" alt="Matias, the DANES persona" />
                  <div><h3>Matias, 29</h3><p class="small left">Moved to Aarhus for work</p></div>
                </div>
                <span class="label">Goals</span>
                <ul><li>Feel at home, not just passing through</li><li>Use Danish at work and with neighbours</li></ul>
                <span class="label">Frustrations</span>
                <ul><li>Studies Danish but rarely speaks it</li><li>People switch to English when Matias hesitates</li></ul>
              </div>
            </div>
            <div class="vp vp-block">
              <span class="label accent">Value proposition</span>
              <p class="vp-statement">“We help internationals in Denmark go from getting by to belonging, with self-paced Danish courses, small weekly speaking groups and city events where Danish is the language we stay in.”</p>
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
            <p class="body">Objects (course, lesson, session, event, package, order), their relationships, attributes and calls to action.</p>
            <img src="/img/danes-orca.webp" alt="ORCA map of the six DANES objects" class="board" />
          </div>

          <div class="step">
            <span class="label step-n">04 · MoSCoW</span>
            <p class="body">The MVP scope for a ten-week build, decided before any design started.</p>
            <img src="/img/danes-moscow.webp" alt="MoSCoW prioritisation" class="board" />
          </div>
        </section>

        <!-- DIAMOND 2: DEVELOP -->
        <section id="develop" class="d-section">
          <div class="phase"><span class="phase-n">DIAMOND 2</span><span class="phase-t">Develop</span></div>

          <div class="step">
            <span class="label step-n">05 · Lo-fi</span>
            <p class="body">Low-fidelity wireframes covering every MVP screen. Layout, hierarchy and calls to action first, colour and type later.</p>
            <img src="/img/danes-wireframes.webp" alt="Low-fidelity wireframes" class="board" />
          </div>

          <div class="step">
            <span class="label step-n">06 · Brand design and campaign</span>
            <p class="body">The logo started on paper. I drew the wordmark by hand with a marker, again and again, until the letters found a rhythm I liked, and the A stretched into a bridge. The colours come from one of my favourite photos of Denmark: the flag flying on a sunny day. As DANES is a fictional app, I allowed myself that choice. The blue sky and the red of the flag became the colours of the brand.</p>

            <div class="origin-row">
              <figure>
                <img src="/img/danes-sketch.webp" alt="Hand-drawn sketches of the DANES logo" />
                <figcaption class="small left">First sketches, drawn by hand</figcaption>
              </figure>
              <figure>
                <img src="/img/danes-flag-sky.webp" alt="The Danish flag against a blue sky" />
                <figcaption class="small left">The flag on a sunny day, the source of the colours</figcaption>
              </figure>
            </div>

            <span class="label sub">Logo variations</span>
            <div class="logo-grid">
              <div v-for="l in logos" :key="l.name" class="logo-card">
                <div class="logo-tile" :style="{ background: l.bg, border: l.border ? '1px solid var(--line)' : 'none' }">
                  <img :src="l.logo" alt="DANES logo" />
                </div>
                <span class="small left">{{ l.name }}</span>
              </div>
            </div>

            <span class="label sub">Color palette</span>
            <div class="main-swatches">
              <div v-for="c in mainColors" :key="c.hex" class="swatch-lg" :style="{ background: c.hex, color: c.fg }">
                <span class="sw-name">{{ c.name }}</span>
                <div>
                  <span class="sw-hex">{{ c.hex }}</span>
                  <span class="sw-meta">RGB {{ c.rgb }}</span>
                  <span class="sw-meta">{{ c.role }}</span>
                </div>
              </div>
            </div>
            <div class="support-swatches">
              <div v-for="c in supportColors" :key="c.hex" class="swatch-sm">
                <div class="chip" :style="{ background: c.hex, border: '1px solid var(--line)' }"></div>
                <span class="sw-name-sm">{{ c.name }}</span>
                <span class="small left">{{ c.hex }}</span>
              </div>
            </div>

            <!-- Type -->
            <span class="label sub">Typography</span>
            <div class="type-specimen">
              <div class="type-aa">Aa</div>
              <div>
                <p class="type-name">Sora</p>
                <p class="small left">Geometric sans, open and friendly. Used at three weights: Regular 400, Semibold 600 and Bold 700.</p>
                <p class="type-glyphs">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz<br />0123456789 æøå</p>
              </div>
            </div>
            <div class="type-scale">
              <div v-for="t in typeScale" :key="t.name" class="type-row">
                <div class="type-meta"><span class="label">{{ t.name }}</span><span class="small left">{{ t.spec }}</span></div>
                <div class="type-sample" :style="{ fontSize: t.size + 'px', fontWeight: t.weight, letterSpacing: t.caps ? '0.03em' : '-0.01em' }">{{ t.sample }}</div>
              </div>
            </div>

            <!-- Components -->
            <span class="label sub">Components</span>
            <div class="components">
              <div class="comp-tile">
                <span class="label">Buttons</span>
                <div class="comp-row">
                  <span class="ds-btn ds-red">Start the level test</span>
                  <span class="ds-btn ds-white">Compare plans</span>
                  <span class="ds-btn ds-sky">Book this Friday</span>
                </div>
                <span class="small left">48px high, 12 / 24 padding, Semibold 16</span>
              </div>
              <div class="comp-tile">
                <span class="label">Tags</span>
                <div class="comp-row">
                  <span class="ds-tag">3 courses</span>
                  <span class="ds-tag">Self-paced</span>
                  <span class="ds-tag">45 min</span>
                </div>
                <span class="small left">Pill, uppercase label, 12px</span>
              </div>
              <div class="comp-tile">
                <span class="label">Radius</span>
                <div class="comp-row radius-row">
                  <span class="ds-radius"></span>
                  <div><b class="radius-n">16 px</b><span class="small left">Buttons, cards, inputs</span></div>
                </div>
              </div>
            </div>

            <!-- UX states -->
            <span class="label sub">UX states</span>
            <div class="states-4">
              <div class="comp-tile"><span class="label">Default</span><span class="ds-btn ds-red">Book a seat</span></div>
              <div class="comp-tile"><span class="label">Hover</span><span class="ds-btn ds-red-hover">Book a seat</span></div>
              <div class="comp-tile"><span class="label">Focus</span><span class="ds-btn ds-red ds-focus">Book a seat</span></div>
              <div class="comp-tile"><span class="label">Disabled</span><span class="ds-btn ds-disabled">Book a seat</span></div>
            </div>
            <div class="states-4">
              <div class="comp-tile"><span class="label">Input · default</span><div class="ds-input">Email</div></div>
              <div class="comp-tile"><span class="label">Input · focus</span><div class="ds-input is-focus">matias@mail.dk</div></div>
              <div class="comp-tile"><span class="label">Input · error</span><div class="ds-input is-error">matias@mail</div><p class="ds-msg err">Enter a valid email</p></div>
              <div class="comp-tile"><span class="label">Input · success</span><div class="ds-input is-ok">matias@mail.dk</div><p class="ds-msg ok">Looks good</p></div>
            </div>
            <div class="states-3">
              <div class="comp-tile"><span class="label">Feedback · success</span><div class="ds-toast"><span class="ds-check">✓</span>Seat booked for Friday 18:00</div></div>
              <div class="comp-tile"><span class="label">Tag · confirmed</span><span class="ds-tag ds-tag-ok">Confirmed</span></div>
              <div class="comp-tile"><span class="label">Tag · full</span><span class="ds-tag ds-tag-err">Fully booked</span></div>
            </div>

            <!-- Campaign -->
            <span class="label sub">Photo campaign</span>
            <p class="body">Created with AI image tools, it shows everyday Danish life instead of stock “classroom” imagery: bakeries, canals, cafés and friends, so the platform feels like belonging, not homework.</p>
            <div class="grid-3">
              <img v-for="c in campaign" :key="c.img" :src="c.img" :alt="c.alt" class="img" :class="c.cls" />
            </div>
          </div>

          <div class="step">
            <span class="label step-n">07 · Hi-fi</span>
            <p class="body">Every page designed for desktop and mobile in Figma: home, courses, lesson player, events, Speaking Club, checkout, My account and admin.</p>
            <div class="hifi-grid">
              <figure v-for="h in hifi" :key="h.cap" class="hifi-item">
                <img :src="h.img" :alt="h.alt" />
                <figcaption class="small left">{{ h.cap }}</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <!-- DIAMOND 2: DELIVER -->
        <section id="deliver" class="d-section">
          <div class="phase"><span class="phase-n">DIAMOND 2</span><span class="phase-t">Deliver</span></div>

          <div class="step">
            <span class="label step-n">08 · Build</span>
            <p class="body">From design to Vue components, with live data from Appwrite. I built in vertical slices: one feature fully working, from database to screen, before starting the next one. The stack:</p>
            <div class="stack">
              <div v-for="t in stack" :key="t.t" class="stk"><b>{{ t.t }}</b><p class="small">{{ t.d }}</p></div>
            </div>
          </div>

          <div class="step">
            <span class="label step-n">09 · Product</span>
            <div class="lap">
              <div class="lid">
                <div class="screen-box">
                  <video class="screen-video" autoplay loop muted playsinline preload="metadata" poster="/img/danes-demo-poster.webp" aria-label="Screen recording of the DANES web app">
                    <source src="/videos/danes-demo.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              <div class="base"></div>
            </div>
          </div>
        </section>

        <!-- RESULT -->
        <section id="result" class="d-section last">
          <span class="label accent">Result</span>
          <h2>From a personal problem to a live product</h2>
          <p class="body">Since I needed a project for my exam, I decided to take a personal problem and try to solve it with what my international colleagues and I believe is a good solution: exposing ourselves to the language as a group, in events and walking tours. It can be embarrassing, but it is also funny. Feeling comfortable in a language is a matter of practice, and on our own we often stay in the well-known comfort zone.</p>
          <p class="body">I learned a lot in this project. I took it through planning, my own design system and hi-fi designs, and then built it myself in Vue and Appwrite. It includes real accounts, purchases, progress tracking, seat booking and a full admin area.</p>
          <p class="body">The project taught me to think about the data behind every screen, and to treat AI as a tool I direct and check rather than one I follow.</p>
          <div class="btn-row">
            <a :href="LIVE_URL" target="_blank" rel="noopener" class="btn btn-lime">Visit live site ↗</a>
            <a :href="CODE_URL" target="_blank" rel="noopener" class="btn btn-outline">View code on GitHub ↗</a>
          </div>
        </section>

        <ProjectFooter next-to="/portfolio/business-dedk" />
      </main>
    </div>
  </div>
</template>

<style scoped>
@font-face { font-family: 'DanesSora'; font-weight: 400; src: url('/fonts/Sora-400.woff2') format('woff2'); font-display: swap; }
@font-face { font-family: 'DanesSora'; font-weight: 600; src: url('/fonts/Sora-600.woff2') format('woff2'); font-display: swap; }
@font-face { font-family: 'DanesSora'; font-weight: 700; src: url('/fonts/Sora-700.woff2') format('woff2'); font-display: swap; }

/* One type scale for the whole page: 56 · 40 · 22 · 18 · 15 · 12
   Two text colours: --ink and --muted. One accent: DANES red. */
.case-study {
  --ink: #111111;
  --muted: #666A70;
  --line: #DDE1E5;
  --red: #B20E19;
  --sky: #BFDAF5;
  --surface: #F5F5F5;

  font-family: 'Inter', sans-serif;
  background: #fff;
  color: var(--ink);
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

.danes-main { padding-top: 30px; min-width: 0; }

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
.label.accent { color: var(--red); margin-bottom: 14px; }
.label.sub { margin: 64px 0 20px; }

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
  margin-bottom: 44px;
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
.btn-lime { background: var(--red); color: #fff; border-color: var(--red); }
.btn-lime:hover { transform: translateY(-2px); }
.btn-outline { background: transparent; color: #000; border-color: #000; }
.btn-outline:hover { background: #000; color: #fff; }
.btn-row { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 32px; }

/* ─── SOLUTION ───────────────────────────── */
.vp { border-left: 3px solid var(--red); padding-left: 28px; margin: 0 0 40px; max-width: 860px; }
.vp-statement { text-align: justify; margin: 0 0 12px; font-size: 22px; line-height: 1.45; font-weight: 500; letter-spacing: -0.01em; }

.cards { display: grid; gap: 20px; }
.cards-3 { grid-template-columns: repeat(3, 1fr); }
.card { background: var(--surface); border-radius: 16px; padding: 28px; }
.card .label { margin-bottom: 10px; }

/* ─── PROCESS ────────────────────────────── */
.dd { margin: 8px 0 20px; }
.dd svg { width: 100%; height: auto; display: block; }
.phase { display: flex; align-items: baseline; gap: 20px; border-top: 2px solid var(--ink); padding-top: 22px; margin: 70px 0 10px; }
.phase-n { font-size: 12px; font-weight: 700; letter-spacing: 0.12em; color: var(--red); }
.phase-t { font-size: 32px; font-weight: 500; letter-spacing: -0.03em; }
.two { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 24px; }
.ps { background: var(--surface); border-radius: 16px; padding: 28px; }
.ps-q { font-size: 22px; line-height: 1.4; font-weight: 500; letter-spacing: -0.01em; margin: 0; text-align: left; }
.persona { border: 1px solid var(--line); border-radius: 16px; padding: 28px; }
.persona-head { display: flex; align-items: center; gap: 16px; margin-bottom: 16px; }
.persona-head img { width: 72px; height: 72px; border-radius: 50%; object-fit: cover; display: block; }
.persona h3 { margin: 0; font-size: 22px; font-weight: 600; letter-spacing: -0.02em; }
.persona ul { list-style: disc; margin: 6px 0 16px; padding-left: 18px; font-size: 15px; line-height: 1.55; }
.persona ul:last-child { margin-bottom: 0; }
.vp-block { margin: 28px 0 0; }
.step { margin-top: 64px; }
.step-n { margin-bottom: 12px; }
.story { border-left: 3px solid var(--ink); padding-left: 20px; margin-bottom: 22px; }
.story .label { margin-bottom: 6px; }
.story .body { margin: 0; }
.board { width: 100%; display: block; border-radius: 16px; border: 1px solid var(--line); margin-top: 24px; }
.inline-link { color: var(--ink); text-decoration: underline; text-underline-offset: 3px; }
.inline-link:hover { color: var(--red); }

.hifi-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 24px; }
.hifi-item { margin: 0; }
.hifi-item img { width: 100%; display: block; border-radius: 12px; border: 1px solid var(--line); aspect-ratio: 16 / 11; object-fit: cover; object-position: top; }
.hifi-item figcaption { margin-top: 10px; }

/* ─── PRODUCT ────────────────────────────── */
.screen-box { position: relative; aspect-ratio: 1280 / 654; overflow: hidden; background: #fff; border-radius: 6px 6px 0 0; }
.screen-video { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: top; display: block; }
.lap { background: #EEF1F4; border-radius: 20px; padding: 44px 56px 36px; margin-bottom: 14px; }
.lid { background: #16181B; border-radius: 16px 16px 0 0; padding: 14px 14px 0; position: relative; }
.lid::before { content: ''; position: absolute; top: 5px; left: 50%; width: 6px; height: 6px; border-radius: 50%; background: #33373C; transform: translateX(-50%); }
.lid img { width: 100%; display: block; border-radius: 6px 6px 0 0; }
.base { height: 16px; background: linear-gradient(#D5D9DE, #B9BEC5); border-radius: 0 0 18px 18px; margin: 0 -28px; position: relative; }
.base::after { content: ''; position: absolute; top: 0; left: 50%; width: 120px; height: 6px; border-radius: 0 0 8px 8px; background: #A4A9B1; transform: translateX(-50%); }

/* build / stack */
.stack { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 24px; }
.stk { border: 1px solid var(--line); border-radius: 16px; padding: 22px; }
.stk b { display: block; font-size: 17px; font-weight: 600; margin-bottom: 4px; }

/* ─── BRAND & DESIGN SYSTEM ──────────────── */
.logo-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
.origin-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 28px; }
.origin-row figure { margin: 0; }
.origin-row img { width: 100%; aspect-ratio: 1155 / 1030; object-fit: cover; border-radius: 16px; display: block; }
.origin-row figcaption { margin-top: 10px; }
.logo-card .small { display: block; margin-top: 10px; }
.logo-tile { aspect-ratio: 4 / 3; border-radius: 16px; display: flex; align-items: center; justify-content: center; }
.logo-tile img { width: 62%; height: auto; display: block; }

.main-swatches { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px; }
.swatch-lg { border-radius: 16px; min-height: 230px; padding: 24px; display: flex; flex-direction: column; justify-content: space-between; }
.swatch-lg > div { display: flex; flex-direction: column; gap: 4px; }
.sw-name { font-size: 18px; font-weight: 600; }
.sw-hex { font-size: 22px; font-weight: 600; letter-spacing: 0.02em; }
.sw-meta { font-size: 15px; opacity: 0.85; }

.support-swatches { display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px 14px; }
.swatch-sm { display: flex; flex-direction: column; gap: 2px; }
.chip { height: 64px; border-radius: 12px; margin-bottom: 8px; }
.sw-name-sm { font-size: 15px; font-weight: 600; color: var(--ink); }

.type-specimen { display: grid; grid-template-columns: 220px 1fr; gap: 40px; align-items: center; background: var(--surface); border-radius: 16px; padding: 36px; margin-bottom: 20px; }
.type-aa { font-family: 'DanesSora', sans-serif !important; font-size: 150px; font-weight: 600; line-height: 1; letter-spacing: -0.04em; }
.type-name { font-family: 'DanesSora', sans-serif !important; font-size: 40px; font-weight: 600; margin: 0 0 8px; letter-spacing: -0.02em; }
.type-glyphs { font-family: 'DanesSora', sans-serif !important; font-size: 18px; line-height: 1.6; margin: 16px 0 0; color: var(--ink); word-break: break-all; }


.type-scale { border-top: 1px solid var(--line); }
.type-row { display: grid; grid-template-columns: 170px 1fr; gap: 24px; align-items: baseline; padding: 20px 0; border-bottom: 1px solid var(--line); }
.type-meta .label { margin-bottom: 2px; }
.type-sample { font-family: 'DanesSora', sans-serif !important; line-height: 1.2; color: var(--ink); }

.components { display: grid; grid-template-columns: 1.8fr 1fr 0.9fr; gap: 16px; }
.comp-tile { border: 1px solid var(--line); border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 18px; }
.comp-tile .label { margin: 0; }
.comp-row { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; min-height: 48px; }
.ds-btn { font-family: 'DanesSora', sans-serif !important; font-size: 14px; font-weight: 600; height: 44px; padding: 0 18px; border-radius: 16px; display: inline-flex; align-items: center; border: 1px solid transparent; }
.ds-red { background: #B20E19; color: #fff; }
.ds-white { background: #fff; color: #000; border-color: var(--line); }
.ds-sky { background: #BFDAF5; color: #000; }
.ds-tag { font-family: 'DanesSora', sans-serif !important; font-size: 11px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; padding: 7px 12px; border-radius: 999px; background: #EAF2FA; color: #000; }
.radius-row { flex-wrap: nowrap; gap: 14px; }
.radius-n { display: block; font-size: 17px; font-weight: 600; }
.states-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 16px; }
.states-3 { display: grid; grid-template-columns: 1.3fr 1fr 1fr; gap: 16px; }
.ds-red-hover { background: #8E0B14; color: #fff; }
.ds-focus { box-shadow: 0 0 0 3px #fff, 0 0 0 5px #80ABD7; }
.ds-disabled { background: #F5F5F5; color: #9AA0A6; }
.ds-input { font-family: 'DanesSora', sans-serif !important; font-size: 14px; border: 1px solid var(--line); border-radius: 16px; padding: 12px 16px; color: var(--muted); }
.ds-input.is-focus { border-color: #80ABD7; box-shadow: 0 0 0 3px #EAF2FA; color: var(--ink); }
.ds-input.is-error { border-color: #B20E19; background: #FBE7E8; color: var(--ink); }
.ds-input.is-ok { border-color: #1A6B3D; background: #E4F3EA; color: var(--ink); }
.ds-msg { font-family: 'DanesSora', sans-serif !important; font-size: 12px; margin: 0; text-align: left; }
.ds-msg.err { color: #B20E19; }
.ds-msg.ok { color: #1A6B3D; }
.ds-toast { font-family: 'DanesSora', sans-serif !important; font-size: 14px; font-weight: 600; background: #E4F3EA; color: #1A6B3D; border-radius: 16px; padding: 14px 18px; display: flex; gap: 10px; align-items: center; }
.ds-check { width: 22px; height: 22px; border-radius: 50%; background: #1A6B3D; color: #fff; display: inline-flex; align-items: center; justify-content: center; font-size: 13px; flex: none; }
.ds-tag-ok { background: #E4F3EA; color: #1A6B3D; align-self: flex-start; }
.ds-tag-err { background: #FBE7E8; color: #B20E19; align-self: flex-start; }
.ds-radius { flex: none; width: 64px; height: 48px; border: 2px solid var(--red); border-radius: 16px; background: #FBE7E8; display: block; }

.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.img { width: 100%; object-fit: cover; display: block; border-radius: 12px; }
.r4-5 { aspect-ratio: 4 / 5; }
.r16-10 { aspect-ratio: 16 / 10; }

/* ─── RESPONSIVE ─────────────────────────── */
@media (max-width: 1000px) {
  .danes-layout { grid-template-columns: minmax(0, 1fr); padding: 0 5%; }
  .side-nav { display: none; }
  .top-nav { display: block; }
  .meta-grid { grid-template-columns: 1fr 1fr; }
  h1 { font-size: 44px; }
  h2 { font-size: 32px; }
  .logo-grid { grid-template-columns: 1fr 1fr; }
  .support-swatches { grid-template-columns: repeat(3, 1fr); }
  .components { grid-template-columns: 1fr; }
  .two { grid-template-columns: 1fr; }
  .states-4 { grid-template-columns: 1fr 1fr; }
  .states-3 { grid-template-columns: 1fr; }
  .stack { grid-template-columns: 1fr 1fr; }
  .lap { padding: 24px 24px 20px; }
}

@media (max-width: 600px) {
  .top-nav { padding: 20px 5%; }
  .back-btn { font-size: 18px; }
  h1 { font-size: 34px; }
  h2 { font-size: 26px; }
  .lead { font-size: 18px; }
  .body { font-size: 17px; }
  .vp-statement { font-size: 19px; }
  .meta-grid, .cards-3, .main-swatches, .stack, .states-4 { grid-template-columns: 1fr; }
  .body, .lead, .small, .vp-statement, .ps-q, .small.left { text-align: justify; hyphens: auto; -webkit-hyphens: auto; overflow-wrap: break-word; }
  .dd { overflow-x: auto; -webkit-overflow-scrolling: touch; padding-bottom: 6px; }
  .dd svg { width: 640px; max-width: none; }
  .lap { padding: 14px 14px 12px; border-radius: 14px; }
  .phase-t { font-size: 26px; }
  .grid-3, .hifi-grid { grid-template-columns: 1fr 1fr; }
  .support-swatches { grid-template-columns: 1fr 1fr; }
  .type-specimen { grid-template-columns: 1fr; padding: 24px; }
  .type-aa { font-size: 100px; }
  .type-row { grid-template-columns: 1fr; gap: 6px; }
  .type-sample { font-size: min(var(--s, 24px), 28px); }
  .d-section { margin-bottom: 80px; }
}
</style>
