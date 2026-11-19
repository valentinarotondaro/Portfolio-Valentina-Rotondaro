<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

// A vertical (9:16) Vimeo reel that only loads when it scrolls near the screen.
// background=true gives a silent, looping preview with no controls.
const props = defineProps({
  src: { type: String, required: true },
  title: { type: String, default: 'Video' },
  background: { type: Boolean, default: false },
  ratio: { type: String, default: '9 / 16' },
})
const box = ref(null)
const visible = ref(false)
let io
const url = computed(() => {
  if (!props.background) return props.src
  return props.src + (props.src.includes('?') ? '&' : '?') + 'background=1'
})
onMounted(() => {
  if (!('IntersectionObserver' in window)) { visible.value = true; return }
  io = new IntersectionObserver((e) => { if (e[0].isIntersecting) { visible.value = true; io.disconnect() } }, { rootMargin: '300px' })
  io.observe(box.value)
})
onBeforeUnmount(() => io && io.disconnect())
</script>

<template>
  <div ref="box" class="reel" :style="{ aspectRatio: ratio }">
    <iframe v-if="visible" :src="url" :title="title" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>

<style scoped>
.reel { position: relative; width: 100%; aspect-ratio: 9 / 16; background: var(--cream); border: 1.5px solid var(--ink); border-radius: 18px; overflow: hidden; }
.reel iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
</style>
