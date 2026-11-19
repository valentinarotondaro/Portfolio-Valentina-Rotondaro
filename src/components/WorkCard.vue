<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from '../i18n/index.js'
// Neutral featured-work card. Motion: the image is revealed by a colour wipe,
// the title slides up through a mask, and the card fades up as it enters.
// Add `stack` to let cards stack on top of each other while scrolling.
defineProps({
  n: String, title: String, text: String, img: String, tags: Array, to: String,
  wipe: { type: String, default: 'pink' }, color: String, stack: Boolean, index: { type: Number, default: 0 },
})
const { t } = useI18n()
const el = ref(null)
let io
onMounted(() => {
  if (!('IntersectionObserver' in window)) { el.value.classList.add('in'); return }
  io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.value.classList.add('in'); io.disconnect() } }, { threshold: 0.15 })
  io.observe(el.value)
})
onBeforeUnmount(() => io && io.disconnect())
</script>

<template>
  <article ref="el" class="wc" :class="{ stack }" :style="{ ...(stack ? { '--i': index } : {}), ...(color ? { '--wc': color } : {}) }">
    <div class="info">
      <div class="top"><span class="lab ink">{{ t('common.project') }} {{ n }}</span><span class="lab ink">{{ tags[0] }}</span></div>
      <h2 class="title"><span class="mask"><span class="m">{{ title }}</span></span></h2>
      <p class="text">{{ text }}</p>
      <div class="tags"><span v-for="g in tags" :key="g" class="pill w">{{ g }}</span></div>
      <router-link :to="to" class="btn">{{ t('common.viewProject') }} →</router-link>
    </div>
    <router-link :to="to" class="shot" :aria-label="title">
      <img :src="img" :alt="title" loading="lazy" />
      <span class="wipe" :class="color ? 'w-custom' : 'w-' + wipe"></span>
    </router-link>
  </article>
</template>

<style scoped>
.wc {
  background: var(--neutral); border: 1.5px solid var(--ink); border-radius: 32px; padding: 34px;
  display: grid; grid-template-columns: 1fr minmax(0, 560px); gap: 40px; margin-bottom: 28px;
  opacity: 0; transform: translateY(40px); transition: opacity .7s ease, transform .7s cubic-bezier(.2,.7,.2,1);
}
.wc.in { opacity: 1; transform: none; }
.stack { position: sticky; top: calc(24px + var(--i) * 22px); }
.info { display: flex; flex-direction: column; }
.top { display: flex; justify-content: space-between; }
.title { margin: auto 0 14px; font-size: clamp(30px, 3.2vw, 46px); line-height: 1; font-weight: 400; }
.mask { display: block; overflow: hidden; padding-bottom: .08em; }
.m { display: block; transform: translateY(110%); transition: transform .8s cubic-bezier(.2,.7,.2,1) .15s; }
.in .m { transform: none; }
.text { margin: 0 0 22px; font-size: 18px; }
@media (min-width: 1100px) { .text { white-space: nowrap; } }
.tags { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 26px; }
.btn { align-self: flex-start; }
.shot { position: relative; display: block; height: 380px; border-radius: 20px; overflow: hidden; border: 1.5px solid var(--ink); background: #fff; }
.shot img { width: 100%; height: 100%; object-fit: cover; display: block; transform: scale(1.12); transition: transform 1.2s cubic-bezier(.2,.7,.2,1) .1s; }
.in .shot img { transform: scale(1); }
.shot:hover img { transform: scale(1.04); }
.wipe { position: absolute; inset: 0; transform: translateX(0); transition: transform .9s cubic-bezier(.7,0,.2,1) .1s; }
.in .wipe { transform: translateX(101%); }
.w-custom { background: var(--wc); }
.w-pink { background: var(--pink); } .w-lima { background: var(--lima); } .w-lila { background: var(--lila); }
@media (max-width: 900px) {
  .wc { grid-template-columns: 1fr; padding: 20px; gap: 22px; border-radius: 24px; }
  .stack { position: static; }
  .title { font-size: 32px; margin-top: 18px; }
  .shot { height: 240px; order: -1; }
}
@media (prefers-reduced-motion: reduce) {
  .wc, .m, .shot img, .wipe { transition: none; opacity: 1; transform: none; }
  .wipe { display: none; }
}
</style>
