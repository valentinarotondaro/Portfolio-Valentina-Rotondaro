<script setup>
import { ref, computed } from 'vue'
import { useI18n } from '../i18n/index.js'
import { CONTENT_REELS, BRAND_LOGOS } from '../data/reels.js'
import PageHero from '../components/PageHero.vue'
import RichText from '../components/RichText.vue'
import VimeoReel from '../components/VimeoReel.vue'
import MessageForm from '../components/MessageForm.vue'
import NichePills from '../components/NichePills.vue'

const { t, tm } = useI18n()
const cats = ['all', 'ugc', 'tutorials', 'lifestyle', 'stationery', 'color', 'travel', 'experiences']
const active = ref('all')
const expanded = ref(false)
const PREVIEW = 8

const filtered = computed(() => (active.value === 'all' ? CONTENT_REELS : CONTENT_REELS.filter((r) => r.cat === active.value)))
const visible = computed(() => (expanded.value ? filtered.value : filtered.value.slice(0, PREVIEW)))
const setCat = (c) => { active.value = c; expanded.value = false }
const goVideos = () => document.getElementById('videos')?.scrollIntoView({ behavior: 'smooth' })

const briefFields = computed(() => [
  { key: 'name', label: t('common.name'), required: true },
  { key: 'email', label: t('common.email'), type: 'email', required: true },
  { key: 'brand', label: t('content.brief.brand') },
  { key: 'message', label: t('content.brief.looking'), type: 'textarea', required: true },
])
</script>

<template>
  <main>
    <PageHero :label="t('content.label')">
      <template #title><RichText :parts="tm('content.title')" /></template>
      <template #actions>
        <router-link to="/contact" class="btn pink">{{ t('content.ctaWork') }}</router-link>
        <button type="button" class="btn line" @click="goVideos">{{ t('content.ctaVideos') }} ↓</button>
        <span class="lab ink">● {{ t('content.open') }}</span>
      </template>
    </PageHero>

    <!-- Real numbers -->
    <div class="stats">
      <div v-for="s in tm('content.stats')" :key="s.l" class="stat">
        <div class="n">{{ s.n }}</div>
        <div class="lab">{{ s.l }}</div>
      </div>
    </div>

    <!-- Intro: photo + short pitch -->
    <section class="sec intro-sec">
      <div class="intro-copy">
        <span class="lab p">{{ t('content.introLabel') }}</span>
        <p class="intro-lead"><RichText :parts="tm('content.introLead')" /></p>
      </div>
      <div class="intro-photo"><img src="/img/valentina-perfil.webp" :alt="t('about.photoAlt')" /></div>
    </section>

    <!-- Niches -->
    <section class="sec niches-sec">
      <h2 class="b-h2 niches-title">{{ t('content.nichesTitle') }}</h2>
      <NichePills :items="tm('content.niches')" :reset-label="t('content.nichesReset')" />
    </section>

    <!-- Videos -->
    <section id="videos" class="sec">
      <div class="head">
        <div>
          <span class="lab p">{{ t('content.workLabel') }}</span>
          <h2 class="b-h2">{{ t('content.videosTitle') }}</h2>
        </div>
      </div>
      <div class="filters">
        <button v-for="c in cats" :key="c" type="button" class="pill big" :class="active === c ? 'pk' : 'o'" @click="setCat(c)">
          {{ tm('content.categories')[c] }}
        </button>
      </div>
      <div class="reels">
        <VimeoReel v-for="r in visible" :key="r.url" :src="r.url" :title="tm('content.categories')[r.cat] + ' video'" />
      </div>
      <div v-if="filtered.length > PREVIEW" class="more">
        <button type="button" class="btn line" @click="expanded = !expanded">
          {{ expanded ? t('content.showLess') : t('content.showAll') + ' (' + filtered.length + ')' }}
        </button>
      </div>
    </section>

    <!-- Services -->
    <section class="sec">
      <span class="lab p">{{ t('content.servicesLabel') }}</span>
      <h2 class="b-h2 gap">{{ t('content.servicesTitle') }}</h2>
      <div class="services">
        <article v-for="(s, i) in tm('content.services')" :key="s.t" class="card svc" :class="'tone-' + (i % 4)">
          <span class="svc-n">0{{ i + 1 }}</span>
          <h3>{{ s.t }}</h3>
          <p>{{ s.d }}</p>
        </article>
      </div>
    </section>

    <!-- Brands -->
    <section class="sec">
      <span class="lab p">{{ t('content.brandsLabel') }}</span>
      <h2 class="b-h2 gap">{{ t('content.brandsLabel') }}</h2>
      <div class="runway" aria-label="Brands">
        <div class="runway-track">
          <div v-for="(b, i) in [...BRAND_LOGOS, ...BRAND_LOGOS]" :key="i" class="logo"><img :src="'/img/' + b" alt="" loading="lazy" /></div>
        </div>
      </div>
    </section>

    <!-- Brief -->
    <section class="sec">
      <div class="brief">
        <div>
          <h2 class="b-h2 flat">{{ t('content.brief.title') }}</h2>
          <p>{{ t('content.brief.text') }}</p>
        </div>
        <MessageForm subject="New brief · Content creation" :fields="briefFields" :submit-label="t('content.brief.send')" />
      </div>
    </section>
  </main>
</template>

<style scoped>
.stats {
  margin: 60px var(--gutter) 0; border: 1.5px solid var(--ink); border-radius: 24px; display: grid;
  grid-template-columns: repeat(4, 1fr); overflow: hidden; background: #fff;
}
.stat { padding: 26px 22px; border-left: 1.5px solid var(--ink); }
.stat:first-child { border-left: 0; }
.n { font-size: 44px; line-height: 1; }
.stat .lab { display: block; margin-top: 10px; }
.intro-sec { display: flex; align-items: center; justify-content: center; gap: clamp(40px, 7.6vw, 110px); }
.intro-photo { order: -1; flex: none; position: relative; width: clamp(300px, 30vw, 420px); height: clamp(300px, 30vw, 420px); border: 1.5px solid var(--ink); border-radius: 58% 42% 55% 45% / 48% 58% 42% 52%; overflow: hidden; background: var(--cream); }
.intro-photo img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 50% 38%; display: block; }
.intro-copy { max-width: 560px; }
.intro-lead { font-size: clamp(30px, 3vw, 44px); line-height: 1.08; margin: 12px 0 0; text-align: justify; text-justify: inter-word; hyphens: none; }
.intro-text { font-size: 18px; line-height: 1.45; margin: 0; color: #444; text-align: justify; text-justify: inter-word; hyphens: none; }
.niches-title { text-align: center; max-width: 900px; margin: 0 auto 28px; font-size: clamp(26px, 2.6vw, 40px); line-height: 1.05; }
.niches-sec { text-align: center; }
.runway { overflow: hidden; margin: 0 calc(var(--gutter) * -1); -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent); mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent); }
.runway-track { display: flex; width: max-content; align-items: center; animation: runway 30s linear infinite; }
.runway:hover .runway-track { animation-play-state: paused; }
.logo { height: 90px; display: flex; align-items: center; justify-content: center; padding: 0 44px; }
.logo img { max-height: 56px; max-width: 150px; object-fit: contain; }
@keyframes runway { to { transform: translateX(-50%); } }
@media (prefers-reduced-motion: reduce) { .runway-track { animation: none; } }
.head { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 22px; gap: 30px; }
.intro { max-width: 380px; margin: 0; }
.filters { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 28px; }
.big { padding: 10px 20px; font-size: 15px; }
.reels { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
.more { text-align: center; margin-top: 34px; }
.gap { margin-bottom: 30px; }
.services { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.svc { padding: 28px; transition: background .3s ease, transform .3s cubic-bezier(.2,.7,.2,1), box-shadow .3s ease; cursor: default; }
.svc:hover { transform: translateY(-8px) rotate(-.6deg); box-shadow: 6px 6px 0 var(--ink); }
.tone-0:hover { background: var(--pink); } .tone-1:hover { background: var(--lima); } .tone-2:hover { background: var(--lila); } .tone-3:hover { background: var(--orange); }
.svc-n { display: inline-flex; width: 38px; height: 38px; border-radius: 50%; align-items: center; justify-content: center; font-size: 14px; border: 1.5px solid var(--ink); }
.tone-0 .svc-n { background: var(--pink); } .tone-1 .svc-n { background: var(--lima); } .tone-2 .svc-n { background: var(--lila); } .tone-3 .svc-n { background: var(--orange); }
.svc:hover p { color: var(--ink); }
.svc h3 { margin: 10px 0; font-size: 23px; font-weight: 400; }
.svc p { margin: 0; color: #555; font-size: 15px; }
.steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 36px; }
.step { border-top: 1.5px solid var(--ink); padding-top: 20px; }
.num { font-size: 42px; color: var(--pink); line-height: 1; }
.step h3 { margin: 10px 0 8px; font-size: 24px; font-weight: 400; }
.step p { margin: 0; color: #555; }
.brief { background: var(--pink); border: 1.5px solid var(--ink); border-radius: 28px; padding: 50px; display: grid; grid-template-columns: 1fr 1fr; gap: 50px; }
.flat { margin-top: 0; }
.brief p { margin: 16px 0 0; font-size: 17px; }
@media (max-width: 900px) {
  .intro-sec { flex-direction: column; gap: 26px; align-items: stretch; }
  .intro-photo { order: 1; align-self: center; width: min(300px, 80vw); height: min(300px, 80vw); }
  .intro-lead { font-size: 26px; }
  .intro-text { font-size: 16px; }
  .stats { display: none; }
  .stat:nth-child(3) { border-left: 0; }
  .stat:nth-child(n + 3) { border-top: 1.5px solid var(--ink); }
  .n { font-size: 34px; }
  .head { flex-direction: column; align-items: flex-start; }
  .reels { grid-template-columns: repeat(2, 1fr); gap: 12px; }
  .services, .steps { grid-template-columns: 1fr; }
  .brief { grid-template-columns: 1fr; padding: 26px; gap: 28px; }
  .logos { justify-content: center; }
}
</style>
