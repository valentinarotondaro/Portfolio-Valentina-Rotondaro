<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from './i18n/index.js'
import LangMenu from './components/LangMenu.vue'
import SiteFooter from './components/SiteFooter.vue'

const { t } = useI18n()
const route = useRoute()
const menuOpen = ref(false)
watch(() => route.fullPath, () => { menuOpen.value = false })

// "Work" stays highlighted on project (case study) pages too.
const inWork = computed(() => /^\/(work(\/|$)|portfolio)/i.test(route.path))
const links = computed(() => [
  { to: '/work', label: t('nav.work'), on: inWork.value },
  { to: '/content-creation', label: t('nav.content'), on: route.path.startsWith('/content-creation') },
  { to: '/workshops', label: t('nav.workshops'), on: route.path.startsWith('/workshops') },
  { to: '/about', label: t('nav.about'), on: route.path.startsWith('/about') },
])
</script>

<template>
  <div class="app">
    <header class="site-nav">
      <router-link to="/" class="wordmark">valen rotondaro</router-link>

      <nav class="links" aria-label="Main">
        <router-link v-for="l in links" :key="l.to" :to="l.to" class="l" :class="{ on: l.on }">{{ l.label }}</router-link>
      </nav>

      <div class="right">
        <LangMenu />
        <router-link to="/contact" class="cta">{{ t('nav.contact') }} ↗</router-link>
        <button class="burger" type="button" :aria-expanded="menuOpen" aria-label="Menu" @click="menuOpen = !menuOpen">
          <span></span><span></span>
        </button>
      </div>

      <nav v-if="menuOpen" class="mobile" aria-label="Mobile">
        <router-link v-for="l in links" :key="l.to" :to="l.to" :class="{ on: l.on }">{{ l.label }}</router-link>
        <router-link to="/contact" class="mcta">{{ t('nav.contact') }} ↗</router-link>
      </nav>
    </header>

    <router-view />

    <SiteFooter />
  </div>
</template>

<style scoped>
.site-nav {
  position: relative; z-index: 100; display: flex; align-items: center; justify-content: space-between;
  padding: 22px var(--gutter); border-bottom: 1px solid #00000014; background: #fff;
}
.wordmark { font-size: 28px; line-height: 1; color: var(--ink); text-decoration: none; }
.links { display: flex; gap: 6px; }
.l { padding: 9px 16px; border-radius: 999px; font-size: 15px; color: var(--ink); text-decoration: none; transition: background .15s; }
.l:hover { background: #f2f2f2; }
.l.on { background: #E8E8E8; color: #000; }
.right { display: flex; align-items: center; gap: 14px; }
.cta { background: var(--ink); color: #fff; padding: 10px 20px; border-radius: 999px; font-size: 14px; text-decoration: none; }
.burger { display: none; width: 42px; height: 42px; border-radius: 999px; background: #fff; border: 1.5px solid var(--ink); flex-direction: column; align-items: center; justify-content: center; gap: 5px; cursor: pointer; padding: 0; }
.burger span { display: block; width: 16px; height: 1.5px; background: var(--ink); }
.mobile { display: none; }
@media (max-width: 900px) {
  .site-nav { padding: 14px var(--gutter); }
  .links, .cta { display: none; }
  .wordmark { font-size: 24px; }
  .burger { display: flex; }
  .mobile {
    display: flex; flex-direction: column; gap: 4px; position: absolute; left: 0; right: 0; top: 100%;
    background: #fff; padding: 12px var(--gutter) 20px; border-bottom: 1px solid #00000014;
  }
  .mobile a { padding: 12px 14px; border-radius: 14px; font-size: 20px; color: var(--ink); text-decoration: none; }
  .mobile a.on { background: #E8E8E8; }
  .mobile .mcta { background: var(--ink); color: #fff; text-align: center; margin-top: 8px; }
}
</style>
