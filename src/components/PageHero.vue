<script setup>
import BrandShape from './BrandShape.vue'
// Shared hero for Home, Content Creation, Workshops, Work and Contact:
// label, giant statement with two highlighted words, buttons and shapes.
defineProps({ label: { type: String, default: '' }, shapes: { type: Boolean, default: true }, tidy: { type: Boolean, default: false } })
</script>

<template>
  <section class="hero paper" :class="{ tidy }">
    <div v-if="shapes" class="shapes">
      <BrandShape name="flor" class="hs hs-flor" />
      <BrandShape name="duo" class="hs hs-duo" color="#E6ABDD" />
      <BrandShape name="v" class="hs hs-v" color="#D9FB60" />
    </div>
    <div class="hero-inner">
      <span v-if="label" class="lab p">{{ label }}</span>
      <h1 class="b-h1 hero-title"><slot name="title" /></h1>
      <div class="hero-actions"><slot name="actions" /></div>
    </div>
    <slot />
  </section>
</template>

<style scoped>
.hero { position: relative; padding: 84px var(--gutter) 84px; min-height: 520px; overflow: hidden; }
.hero-inner { position: relative; z-index: 1; }
.hero-title { margin: 22px 0 36px; max-width: 1260px; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 16px; align-items: center; }
.shapes { display: contents; }
.hs { position: absolute; }
.hs { z-index: 0; will-change: transform; }
.hs-flor { right: 60px; top: 20px; width: 190px; animation: ph-spin 40s linear infinite; }
.hs-duo { left: 46%; bottom: 30px; width: 170px; animation: ph-spin 55s linear infinite; }
.hs-v { right: 340px; bottom: 50px; width: 130px; animation: ph-spin-r 70s linear infinite; }
@keyframes ph-spin { to { transform: rotate(360deg); } }
@keyframes ph-spin-r { to { transform: rotate(-360deg); } }
@media (prefers-reduced-motion: reduce) { .hs { animation: none !important; } }
@media (min-width: 901px) { .hero:has(.shapes) .hero-title { max-width: min(900px, 62vw); } }
@media (max-width: 900px) {
  .hero { padding: 56px var(--gutter) 70px; min-height: 0; }
  .hero-title { margin: 16px 0 26px; }
  .hs-flor { width: 54px; right: 14px; top: 12px; }
  .hs-duo { width: 46px; left: auto; right: 90px; bottom: 16px; }
  .shapes { display: none; }
}
</style>
