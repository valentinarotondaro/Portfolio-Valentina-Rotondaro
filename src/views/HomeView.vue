<script setup>
import { ref } from 'vue'
import { useI18n } from '../i18n/index.js'
import { useReveal } from '../composables/useReveal.js'
import PageHero from '../components/PageHero.vue'
import RichText from '../components/RichText.vue'
import WorkCard from '../components/WorkCard.vue'

const { t, tm } = useI18n()
const page = ref(null)
useReveal(page)
</script>

<template>
  <main ref="page" class="home">
    <PageHero class="home-hero" :label="t('home.label')">
      <template #title><RichText :parts="tm('home.title')" /></template>
      <template #actions>
        <router-link to="/contact" class="btn pink">{{ t('nav.contact') }} ↗</router-link>
      </template>
    </PageHero>

    <!-- About teaser -->
    <section class="sec sec-tight about">
      <div>
        <span class="lab p">{{ t('home.aboutLabel') }}</span>
        <div class="lab meta">{{ t('home.aboutMeta') }}</div>
      </div>
      <div>
        <p class="lead"><RichText :parts="tm('home.aboutText')" /></p>
      </div>
    </section>

    <!-- Three doors -->
    <section class="sec">
      <div class="doors-head">
        <div>
          <span class="lab p">{{ t('home.doorsLabel') }}</span>
          <h2 class="b-h2 huge">{{ tm('home.doorsTitle').join(' ') }}</h2>
        </div>
      </div>
      <div class="doors">
        <router-link v-for="d in tm('home.doors')" :key="d.n" :to="d.to" class="door" :class="'t-' + d.tone">
          <span class="lab ink">{{ d.n }}</span>
          <h3 class="d-title">{{ d.title }}</h3>
          <p class="d-text">{{ d.text }}</p>
          <span class="d-cta">{{ d.cta }} →</span>
        </router-link>
      </div>
    </section>

    <!-- Featured works -->
    <section class="sec">
      <div class="works-head">
        <span class="lab p">{{ t('home.worksLabel') }}</span>
        <h2 class="b-h2 huge">{{ t('home.worksTitle') }}</h2>
      </div>
      <div class="stackwrap">
        <WorkCard v-for="(w, i) in tm('home.works')" :key="w.n" v-bind="w" stack :index="i" />
      </div>
      <div class="all"><router-link to="/work" class="btn line">{{ t('common.allWork') }} →</router-link></div>
    </section>
  </main>
</template>

<style scoped>
/* desktop: the first screen is only the hero; the intro text appears on scroll */
@media (min-width: 901px) {
  .home-hero.hero { min-height: calc(100svh - 88px); display: flex; flex-direction: column; justify-content: center; }
}
.about { display: grid; grid-template-columns: 200px 1fr; gap: 40px; }
.meta { margin-top: 8px; }
.lead { font-size: clamp(24px, 2.4vw, 34px); line-height: 1.08; margin: 0 0 30px; color: var(--ink); }
.pills { display: flex; gap: 10px; flex-wrap: wrap; }
.big { padding: 10px 20px; font-size: 16px; transition: background .2s ease, transform .25s cubic-bezier(.2,.7,.2,1); cursor: default; }
.big:hover { transform: translateY(-4px) rotate(-2deg); }
.big:nth-child(4n+1):hover { background: var(--pink); } .big:nth-child(4n+2):hover { background: var(--lima); } .big:nth-child(4n+3):hover { background: var(--lila); } .big:nth-child(4n):hover { background: var(--orange); }
.huge { font-size: clamp(30px, 3.4vw, 50px); }
.doors-head { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 34px; gap: 30px; }
.intro { max-width: 340px; margin: 0; }
.doors { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.door {
  border: 1.5px solid var(--ink); border-radius: 28px; padding: 30px; height: 330px; display: flex; flex-direction: column;
  color: var(--ink); text-decoration: none; transition: transform .25s ease;
}
.door:hover { transform: translateY(-6px) rotate(-.6deg); }
.t-lila { background: var(--lila); } .t-pink { background: var(--pink); } .t-lima { background: var(--lima); }
.d-title { margin: auto 0 10px; font-size: 32px; line-height: 1; font-weight: 400; }
.d-text { margin: 0 0 18px; font-size: 16px; color: var(--ink); }
.d-cta { font-size: 18px; }
.works-head { margin-bottom: 30px; }
.all { position: relative; z-index: 2; text-align: center; margin-top: 50px; padding-bottom: 20px; }
@media (max-width: 900px) {
  .about { grid-template-columns: 1fr; gap: 14px; }
  .lead { font-size: 28px; text-align: justify; text-justify: inter-word; hyphens: none; }
  .huge { font-size: 30px; }
  .doors-head { flex-direction: column; align-items: flex-start; }
  .doors { grid-template-columns: 1fr; }
  .door { height: 240px; }
}
</style>
