<script setup>
// Renders a translated headline made of parts: { t: 'text', hl?: 'pink' | 'lima' | 'lila' | 'orange' }
defineProps({ parts: { type: Array, required: true } })
</script>

<template>
  <template v-for="(p, i) in parts" :key="i"><span v-if="p.hl" :class="['hl', 'hl-' + p.hl]">{{ p.t }}</span><template v-else>{{ p.t }}</template></template>
</template>
