<script setup>
import { computed } from 'vue'
import { SHAPES } from '../assets/shapes.js'

// Vector shapes from Valen's own artwork, always drawn in palette colours.
const DEFAULT_COLOR = { flor: '#FB6417', duo: '#D9FB60', logo: '#FF7BB5', arco: '#FF7BB5', nube: '#FF7BB5', v: '#E6ABDD' }
const props = defineProps({
  name: { type: String, required: true },
  color: { type: String, default: '' },
})
const shape = computed(() => SHAPES[props.name])
const fill = computed(() => props.color || DEFAULT_COLOR[props.name] || '#FF7BB5')
const viewBox = computed(() => shape.value.box.join(' '))
</script>

<template>
  <svg class="brand-shape" :viewBox="viewBox" aria-hidden="true" focusable="false">
    <path :d="shape.d" :fill="fill" />
  </svg>
</template>

<style scoped>
.brand-shape { display: block; height: auto; }
</style>
