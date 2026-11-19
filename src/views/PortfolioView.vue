<script setup>
import { ref, computed } from 'vue'
import { useI18n } from '../i18n/index.js'
import { useReveal } from '../composables/useReveal.js'
import PageHero from '../components/PageHero.vue'
import RichText from '../components/RichText.vue'
import WorkCard from '../components/WorkCard.vue'

const { t, tm } = useI18n()
const page = ref(null)
const WIPES = ['pink', 'lima', 'lila']
const filters = ['all', 'UX/UI', 'Visual Design', 'Web Design']

// Project names stay as-is in every language; descriptions come from i18n (work.descriptions).
const projectsList = [
  {
    title: 'Danes',
    description: 'Learning Danish platform',
    tags: ['UX/UI Design', 'Web Design', 'Branding'],
    image: '/img/danescover.webp',
    link: '/portfolio/danes', color: '#B20E19', cat: ['UX/UI', 'Web Design'],
  },
  {
    title: 'Business DE-DK',
    description: 'Full redesign of a cross-border business website.',
    tags: ['UX/UI', 'Web Design', 'Visual Design'],
    image: '/img/businessregionhero.webp',
    link: '/portfolio/business-dedk', color: '#5B9FC4', cat: ['UX/UI', 'Web Design'],
  },
  {
  title: 'Departamentos Alfar',
  description: 'Booking website for rental apartments in Mar del Plata, Argentina',
  tags: ['Web Design', 'Branding'],
  image: '/img/alfarhero.webp',
  link: '/portfolio/departamentos-alfar', color: '#D9FB60', cat: ['Web Design'],
},
  {
    title: 'Lic. Aranda Coria',
    description: 'Brand identity design for a psichologist, reflecting trust and empathy.',
    tags: ['Branding', 'Visual Design'],
    image: '/img/arandaheroweb.webp',
    link: '/portfolio/lic-aranda', color: '#32295E', cat: ['Visual Design'],
  },
  {
    title: 'Amada amiga',
    description: 'Unique wine label design capturing the essence of a beloved friend.',
    tags: ['Branding', 'Visual Design'],
    image: '/img/amadaamigaproject.png',
    link: '/portfolio/amada-amiga', color: '#D41F85', cat: ['Visual Design'],
  },
  {
    title: 'Under',
    description: 'Identity design for the Syddansk Erhvervsakademi student bar.',
    tags: ['Branding', 'Visual Design'],
    image: '/img/underhorizontal.png',
    link: '/portfolio/under', color: '#B5701C', cat: ['Visual Design'],
  },
];

const activeFilter = ref('all')
const shown = computed(() =>
  (activeFilter.value === 'all' ? projectsList : projectsList.filter((p) => p.cat.includes(activeFilter.value)))
    .map((p, i) => ({ n: String(i + 1).padStart(2, '0'), title: p.title, text: tm('work.descriptions')[p.title] || p.description, img: p.image, tags: p.tags, to: p.link, color: p.color }))
)
useReveal(page)
</script>

<template>
  <main ref="page">
    <PageHero class="work-hero" :label="t('work.label')">
      <template #title><RichText :parts="tm('work.title')" /></template>
    </PageHero>

    <section class="sec sec-tight work-sec">
      <div class="filters">
        <button v-for="f in filters" :key="f" type="button" class="pill big" :class="activeFilter === f ? 'pk' : 'o'" @click="activeFilter = f">
          {{ tm('work.filters')[f] }}
        </button>
      </div>
      <WorkCard v-for="p in shown" :key="p.title + activeFilter" v-bind="p" />
      <p v-if="!shown.length" class="muted">{{ t('work.empty') }}</p>
    </section>
  </main>
</template>

<style scoped>
.filters { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 34px; }
.big { padding: 10px 20px; font-size: 15px; }
@media (max-width: 900px) {
  .work-hero.hero { padding-bottom: 14px; }
  .work-sec.sec { padding-top: 6px; }
}
</style>
