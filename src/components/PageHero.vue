<script setup>
import BrandShape from './BrandShape.vue'
// Shared hero for Home, Content Creation, Workshops, Work and Contact:
// label, giant statement with two highlighted words, buttons and shapes.
defineProps({ label: { type: String, default: '' }, shapes: { type: Boolean, default: true } })
</script>

<template>
  <section class="hero paper">
    <template v-if="shapes">
      <BrandShape name="flor" class="hs hs-flor" />
      <BrandShape name="duo" class="hs hs-duo" />
      <BrandShape name="logo" class="hs hs-logo" />
    </template>
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
.hs { position: absolute; }
.hs-flor { right: 50px; top: 34px; width: 100px; }
.hs-duo { left: 46%; bottom: 56px; width: 84px; }
.hs-logo { right: 60px; bottom: 90px; width: 96px; }
@media (max-width: 900px) {
  .hero { padding: 56px var(--gutter) 70px; min-height: 0; }
  .hero-title { margin: 16px 0 26px; }
  .hs-flor { width: 54px; right: 14px; top: 12px; }
  .hs-duo { width: 46px; left: auto; right: 90px; bottom: 16px; }
  .hs-logo { width: 54px; right: 20px; bottom: 20px; }
}
</style>
