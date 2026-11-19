<script setup>
import { ref } from 'vue'
// Draggable niche pills: pull them around, then press the button to put them back.
const props = defineProps({ items: { type: Array, required: true }, resetLabel: { type: String, default: 'Put them back' } })
const TONES = ['pink', 'lima', 'lila', 'orange']
const ROT = [-3, 2, -1.5, 3, -2.5, 1.5, -1, 2.5, -2]
const pos = ref(props.items.map(() => ({ x: 0, y: 0 })))
const zs = ref(props.items.map(() => 1))
const moved = ref(false)
const resetting = ref(false)
let top = 1
let drag = null

const down = (e, i) => {
  if (e.pointerType === 'touch') return
  resetting.value = false
  drag = { i, sx: e.clientX, sy: e.clientY, ox: pos.value[i].x, oy: pos.value[i].y }
  zs.value[i] = ++top
  e.currentTarget.setPointerCapture(e.pointerId)
}
const move = (e) => {
  if (!drag) return
  pos.value[drag.i] = { x: drag.ox + e.clientX - drag.sx, y: drag.oy + e.clientY - drag.sy }
  moved.value = true
}
const up = () => { drag = null }
const reset = () => {
  resetting.value = true
  pos.value = props.items.map(() => ({ x: 0, y: 0 }))
  moved.value = false
}
</script>

<template>
  <div class="niches">
    <div class="pills">
      <span
        v-for="(it, i) in items" :key="it" class="slot"
        :style="{ transform: `translate(${pos[i].x}px, ${pos[i].y}px) rotate(${ROT[i % ROT.length]}deg)`, zIndex: zs[i], transition: resetting ? 'transform .7s cubic-bezier(.2,.8,.2,1)' : 'none' }"
        @pointerdown="down($event, i)" @pointermove="move" @pointerup="up" @pointercancel="up"
      ><span class="np" :class="'t-' + TONES[i % 4]" :style="{ animationDuration: (4.2 + (i * 0.7) % 2.6) + 's', animationDelay: (-i * 0.9) + 's' }">{{ it }}</span></span>
    </div>
    <button type="button" class="btn line reset" :class="{ show: moved }" @click="reset">{{ resetLabel }}</button>
  </div>
</template>

<style scoped>
.niches { text-align: center; }
.pills { display: flex; flex-wrap: wrap; justify-content: center; gap: 16px 14px; max-width: 1100px; margin: 0 auto; padding: 10px 0; }
.slot { display: inline-block; cursor: grab; touch-action: pan-y; user-select: none; }
.slot:active { cursor: grabbing; }
.np { display: inline-block; animation: bob 5s ease-in-out infinite; padding: .38em 1em; border-radius: 999px; border: 1.5px solid var(--ink); font-size: clamp(22px, 2.5vw, 36px); line-height: 1.1; color: var(--ink); }
@keyframes bob { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-9px) rotate(1.6deg); } }
@media (prefers-reduced-motion: reduce) { .np { animation: none; } }
.t-pink { background: var(--pink); } .t-lima { background: var(--lima); } .t-lila { background: var(--lila); } .t-orange { background: var(--orange); }
.reset { margin-top: 30px; opacity: 0; pointer-events: none; transition: opacity .25s ease; }
.reset.show { opacity: 1; pointer-events: auto; }
@media (max-width: 900px) { .np { font-size: 22px; } .slot { cursor: default; } .reset { display: none; } }
</style>
