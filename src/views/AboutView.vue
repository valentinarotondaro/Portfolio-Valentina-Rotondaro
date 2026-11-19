<script setup>
import { ref } from 'vue'
import { useI18n } from '../i18n/index.js'
import { useReveal } from '../composables/useReveal.js'
import { TOOLS } from '../assets/toolIcons.js'
import BrandShape from '../components/BrandShape.vue'
import RichText from '../components/RichText.vue'
import BeyondSection from '../components/BeyondSection.vue'

const { t, tm } = useI18n()
const page = ref(null)
useReveal(page)
const TONE = { pink: '#FF7BB5', lima: '#D9FB60', lila: '#E6ABDD', orange: '#FB6417' }
const VERB_TONES = ['pink', 'lima', 'lila', 'orange']
</script>

<template>
  <main ref="page">
    <!-- Hero: statement + photo -->
    <section class="hero paper">
      <BrandShape name="flor" class="hs hs-flor" />
      <BrandShape name="duo" class="hs hs-duo" color="#E6ABDD" />
      <BrandShape name="v" class="hs hs-v" color="#D9FB60" />
      <div class="hero-text">
        <span class="lab p">{{ t('about.label') }}</span>
        <h1 class="statement"><RichText :parts="tm('about.title')" /></h1>
        <a href="/img/CV Valentina Rotondaro.pdf" download class="btn line cv-desk">{{ t('common.downloadCv') }}</a>
      </div>
      <div class="blob"><img src="/img/valentina-perfil.webp" :alt="t('about.photoAlt')" /></div>
      <a href="/img/CV Valentina Rotondaro.pdf" download class="btn line cv-mob">{{ t('common.downloadCv') }}</a>
    </section>

    <!-- Journey -->
    <section class="sec sec-tight">
      <span class="lab p">{{ t('about.expLabel') }}</span>
      <h2 class="b-h2 gap" data-reveal>{{ t('about.expTitle') }}</h2>
      <div class="rows">
        <div v-for="(e, i) in tm('about.experience')" :key="e.t" class="row exp" data-reveal :style="{ '--d': i * 0.12 + 's' }">
          <span class="lab">{{ e.y }}</span><span class="r-title">{{ e.t }}</span><span class="r-place">{{ e.p }}</span><p class="r-desc">{{ e.d }}</p>
        </div>
      </div>
    </section>

    <section class="sec">
      <span class="lab p">{{ t('about.eduLabel') }}</span>
      <h2 class="b-h2 gap" data-reveal>{{ t('about.eduTitle') }}</h2>
      <div class="rows">
        <div v-for="(e, i) in tm('about.education')" :key="e.t" class="row edu" data-reveal :style="{ '--d': i * 0.08 + 's' }">
          <span class="lab">{{ e.y }}</span><span class="r-title">{{ e.t }}</span><span class="r-place">{{ e.p }}</span>
        </div>
      </div>
    </section>

    <!-- What I do: moving words -->
    <section class="sec">
      <span class="lab p">{{ t('about.doLabel') }}</span>
      <div class="ticker" aria-hidden="true">
        <div class="track">
          <template v-for="r in 2" :key="r">
            <span v-for="(v, i) in tm('about.verbs')" :key="r + v" class="word">
              <span class="hl" :class="'hl-' + VERB_TONES[i]">{{ v }}</span> <span class="star">✦</span>
            </span>
          </template>
        </div>
      </div>
      <p class="sr-only">{{ tm('about.verbs').join(', ') }}</p>
      <div class="skills"><span v-for="s in tm('about.skills')" :key="s" class="pill o big">{{ s }}</span></div>
    </section>

    <!-- Tools -->
    <section class="sec">
      <span class="lab p">{{ t('about.toolsLabel') }}</span>
      <h2 class="b-h2 gap">{{ t('about.toolsTitle') }}</h2>
      <div class="tools">
        <div v-for="tool in TOOLS" :key="tool.name" class="tool">
          <img :src="tool.src" :alt="tool.name" width="64" height="64" loading="lazy" />
          <span>{{ tool.name }}</span>
        </div>
      </div>
    </section>

    <!-- Languages -->
    <section class="sec">
      <span class="lab p">{{ t('about.langsLabel') }}</span>
      <h2 class="b-h2 gap">{{ t('about.langsTitle') }}</h2>
      <div class="langs" data-reveal>
        <div v-for="(l, i) in tm('about.langs')" :key="l.c" class="lang">
          <span class="code">{{ l.c }}</span>
          <div class="lline">
            <span class="dot"></span>
            <div class="fill" :style="{ '--w': l.w + '%', animationDelay: i * 0.25 + 's' }">
              <span class="knob" :style="{ background: TONE[l.tone] }"></span>
            </div>
          </div>
          <span class="lab">{{ l.l }}</span>
        </div>
      </div>
    </section>

    <BeyondSection class="m-hide" />
  </main>
</template>

<style scoped>
.hero { position: relative; padding: 100px var(--gutter); overflow: hidden; display: grid; grid-template-columns: 1fr 420px; gap: 50px; align-items: center; }
.hero-text { position: relative; z-index: 1; }
.statement { font-size: clamp(34px, 4.4vw, 62px); line-height: 1.06; font-weight: 400; margin: 22px 0 30px; }
.blob { position: relative; z-index: 1; width: 420px; height: 420px; border: 1.5px solid var(--ink); border-radius: 58% 42% 55% 45% / 48% 58% 42% 52%; overflow: hidden; background: var(--cream); }
.blob img { width: 100%; height: 100%; object-fit: cover; object-position: 50% 38%; display: block; }
.cv-mob { display: none; }
.hs { position: absolute; }
.hs { z-index: 0; will-change: transform; }
.hs-flor { right: 60px; top: 20px; width: 190px; animation: ab-spin 40s linear infinite; }
.hs-duo { left: 46%; bottom: 30px; width: 170px; animation: ab-spin 55s linear infinite; }
.hs-v { left: 420px; bottom: 50px; width: 130px; animation: ab-spin-r 70s linear infinite; }
@keyframes ab-spin { to { transform: rotate(360deg); } }
@keyframes ab-spin-r { to { transform: rotate(-360deg); } }
@media (prefers-reduced-motion: reduce) { .hs { animation: none !important; } }
.gap { margin-bottom: 26px; }
.row { position: relative; border-top: 0; opacity: 0; transform: translateY(34px); transition: opacity .7s ease var(--d, 0s), transform .8s cubic-bezier(.2,.7,.2,1) var(--d, 0s); }
.row::before { content: ''; position: absolute; left: 0; right: 0; top: 0; height: 1.5px; background: var(--ink); transform: scaleX(0); transform-origin: left; transition: transform 1s cubic-bezier(.7,0,.2,1) var(--d, 0s); }
.row.in { opacity: 1; transform: none; }
.row.in::before { transform: none; }
.rows .row:last-child { border-bottom: 0; }
.rows .row:last-child::after { content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 1.5px; background: var(--ink); }
h2[data-reveal] { opacity: 0; transform: translateY(24px); transition: opacity .7s ease, transform .8s cubic-bezier(.2,.7,.2,1); }
h2[data-reveal].in { opacity: 1; transform: none; }
.row { display: grid; grid-template-columns: 150px 1fr 300px 1fr; gap: 30px; align-items: baseline; padding: 22px 0; }
.r-title { font-size: 28px; line-height: 1.05; }
.r-place { font-size: 17px; color: #555; }
.r-desc { margin: 0; font-size: 16px; color: #555; max-width: 440px; }
.ticker { overflow: hidden; margin: 26px calc(var(--gutter) * -1) 0; border-top: 1.5px solid var(--ink); border-bottom: 1.5px solid var(--ink); padding: 20px 0; }
.track { display: inline-block; white-space: nowrap; animation: mq 24s linear infinite; }
.word { font-size: clamp(54px, 6vw, 88px); line-height: 1.1; margin-right: 50px; display: inline-block; }
.word .hl { padding: 0 .14em; border-radius: .16em; }
.skills { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 36px; }
.big { padding: 10px 20px; font-size: 16px; transition: background .2s ease, transform .25s cubic-bezier(.2,.7,.2,1); cursor: default; }
.big:hover { transform: translateY(-4px) rotate(-2deg); }
.big:nth-child(4n+1):hover { background: var(--pink); } .big:nth-child(4n+2):hover { background: var(--lima); } .big:nth-child(4n+3):hover { background: var(--lila); } .big:nth-child(4n):hover { background: var(--orange); }
@keyframes mq { to { transform: translateX(-50%); } }
.tools { display: grid; grid-template-columns: repeat(6, 1fr); gap: 26px 14px; }
.tool { display: flex; flex-direction: column; gap: 16px; font-size: 20px; cursor: default; transition: transform .35s cubic-bezier(.2,.7,.2,1); }
.tool img { display: block; object-fit: contain; object-position: left center;  transition: transform .35s cubic-bezier(.2,.7,.2,1); }
.tool:hover { transform: translateY(-8px); }
.tool:hover img { transform: scale(1.14) rotate(-6deg); }
.lang { display: grid; grid-template-columns: 110px 1fr 140px; gap: 30px; align-items: center; padding: 20px 0; }
.code { font-size: 44px; line-height: 1; }
.lline { position: relative; height: 2px; background: var(--ink); margin-right: 28px; }
.dot { position: absolute; left: 0; top: -5px; width: 12px; height: 12px; border-radius: 50%; background: var(--ink); }
.fill { position: absolute; left: 0; top: 0; height: 2px; width: 0; }
.langs.in .fill { animation: fill 9s cubic-bezier(.3,.7,.2,1) infinite both; }
.knob { position: absolute; right: 0; top: -26px; width: 52px; height: 52px; margin-right: -26px; border-radius: 50%; border: 1.5px solid var(--ink); }
@keyframes fill { 0% { width: 0; } 22% { width: var(--w); } 88% { width: var(--w); } 100% { width: 0; } }
.sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
@media (prefers-reduced-motion: reduce) { .langs.in .fill { animation: none; width: var(--w); } .row, h2[data-reveal] { opacity: 1; transform: none; transition: none; } .row::before { transform: none; transition: none; } .track { animation: none; } .fill { animation: none; width: var(--w); } }
@media (max-width: 900px) {
  .hero { grid-template-columns: 1fr; padding: 44px var(--gutter) 56px; gap: 34px; }
  .statement { font-size: 29px; line-height: 1.1; margin: 14px 0 26px; text-align: justify; text-justify: inter-word; hyphens: none; overflow-wrap: normal; }
  .m-hide { display: none; }
  .cv-desk { display: none; }
  .cv-mob { display: inline-flex; justify-self: center; }
  .blob { width: min(300px, 80vw); height: min(300px, 80vw); justify-self: center; }
  .hs { display: none; }
  .row { grid-template-columns: 1fr; gap: 6px; padding: 18px 0; }
  .r-title { font-size: 26px; }
  .word { font-size: 64px; margin-right: 28px; }
  .tools { grid-template-columns: repeat(3, 1fr); }
  .tool { font-size: 15px; } .tool img { display: block; object-fit: contain; object-position: left center;  width: 48px; height: 48px; }
  .lang { grid-template-columns: 64px 1fr 90px; gap: 16px; }
  .code { font-size: 36px; }
  .knob { width: 38px; height: 38px; top: -19px; margin-right: -19px; }
  .lline { margin-right: 20px; }
}
</style>
