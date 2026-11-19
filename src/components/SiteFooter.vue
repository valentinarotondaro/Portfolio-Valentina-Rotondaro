<script setup>
import { useI18n } from '../i18n/index.js'
import LangMenu from './LangMenu.vue'
const { t } = useI18n()
</script>

<template>
  <footer class="site-footer">
    <router-link to="/contact" class="band" :aria-label="t('footer.talk')">
      <div class="band-track">
        <span v-for="n in 8" :key="n" class="band-item">{{ t('footer.talk') }} ↗</span>
      </div>
    </router-link>
    <div class="cols">
      <div class="brand">
        <router-link to="/" class="fw">valen rotondaro</router-link>
        <p class="sub">{{ t('footer.tagline') }}</p>
      </div>
      <div>
        <span class="lab p">{{ t('footer.pages') }}</span>
        <ul>
          <li><router-link to="/work">{{ t('nav.work') }}</router-link></li>
          <li><router-link to="/content-creation">{{ t('nav.content') }}</router-link></li>
          <li><router-link to="/workshops">{{ t('nav.workshops') }}</router-link></li>
          <li><router-link to="/about">{{ t('nav.about') }}</router-link></li>
        </ul>
      </div>
      <div>
        <span class="lab p">{{ t('footer.follow') }}</span>
        <ul>
          <li><a href="https://www.instagram.com/valenrotondaro" target="_blank" rel="noopener">{{ t('common.instagram') }}</a></li>
          <li><a href="https://www.linkedin.com/in/valentinarotondaro/" target="_blank" rel="noopener">{{ t('common.linkedin') }}</a></li>
          <li><a href="/img/CV Valentina Rotondaro.pdf" download>{{ t('common.cv') }}</a></li>
        </ul>
      </div>
      <div>
        <span class="lab p">{{ t('footer.write') }}</span>
        <ul>
          <li><a href="mailto:vrotondaro@hotmail.com">vrotondaro@hotmail.com</a></li>
        </ul>
      </div>
    </div>
    <div class="bottom">
      <span>{{ t('footer.rights') }}</span>
      <LangMenu up />
    </div>
  </footer>
</template>

<style scoped>
.site-footer { margin-top: 110px; background: #fff; color: var(--ink); overflow: hidden; }
.band {
  display: block; background: var(--pink); border-top: 1.5px solid var(--ink); border-bottom: 1.5px solid var(--ink);
  padding: 18px 0; overflow: hidden; white-space: nowrap; text-decoration: none; color: var(--ink);
}
.band-track { display: inline-block; animation: marquee 28s linear infinite; }
.band:hover .band-track { animation-play-state: paused; }
.band-item { font-size: clamp(28px, 3vw, 42px); line-height: 1; margin-right: 44px; display: inline-block; }
@keyframes marquee { to { transform: translateX(-50%); } }
@media (prefers-reduced-motion: reduce) { .band-track { animation: none; } }
.cols {
  padding: 60px var(--gutter) 28px; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px;
}
.brand .fw { display: block; font-size: 44px; line-height: 1; text-decoration: none; }
.brand .fw:hover { text-decoration: none; }
.sub { font-size: 18px; color: #555; margin: 14px 0 0; max-width: 360px; }
ul { list-style: none; margin: 12px 0 0; padding: 0; line-height: 1.9; }
a { color: inherit; text-decoration: none; }
a:hover { text-decoration: underline; }
.bottom { padding: 0 var(--gutter) 28px; display: flex; justify-content: space-between; align-items: center; font-size: 13px; }
@media (max-width: 900px) {
  .site-footer { margin-top: 70px; }
  .band-item { font-size: 34px; margin-right: 28px; }
  .cols { grid-template-columns: 1fr 1fr; gap: 28px; padding-top: 40px; }
  .brand { grid-column: 1 / -1; }
  .brand .fw { font-size: 40px; }
}
</style>
