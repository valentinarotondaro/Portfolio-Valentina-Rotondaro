<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from '../i18n/index.js'

// Language dropdown. Languages not translated yet show as "soon" (see LOCALES in src/i18n/index.js).
const props = defineProps({ up: { type: Boolean, default: false } })
const { locale, setLocale, allLocales } = useI18n()
const open = ref(false)
const root = ref(null)
const pick = (code) => { setLocale(code); open.value = false }
const away = (e) => { if (root.value && !root.value.contains(e.target)) open.value = false }
onMounted(() => document.addEventListener('click', away))
onBeforeUnmount(() => document.removeEventListener('click', away))
</script>

<template>
  <div ref="root" class="lang">
    <button type="button" class="pill lang-btn" :aria-expanded="open" aria-haspopup="listbox" @click="open = !open">
      {{ locale.toUpperCase() }} <span aria-hidden="true">▾</span>
    </button>
    <ul v-if="open" class="lang-list" :class="{ up: props.up }" role="listbox">
      <li v-for="l in allLocales" :key="l.code" role="option" :aria-selected="l.code === locale">
        <button type="button" :class="{ on: l.code === locale }" :disabled="!l.enabled" @click="pick(l.code)">{{ l.label }}<span v-if="!l.enabled" class="soon"> · soon</span></button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.lang { position: relative; }
.lang-btn { padding: 8px 16px; font-size: 15px; }
.lang-list {
  position: absolute; top: calc(100% + 8px); right: 0; z-index: 300; list-style: none; margin: 0; padding: 8px;
  width: 170px; background: #fff; border: 1.5px solid var(--ink); border-radius: 18px;
}
.lang-list.up { top: auto; bottom: calc(100% + 8px); }
.lang-list button {
  width: 100%; text-align: left; background: none; border: 0; border-radius: 10px; padding: 6px 12px;
  font: inherit; font-size: 17px; cursor: pointer; color: var(--ink);
}
.lang-list button:hover:not(:disabled) { background: var(--cream); }
.lang-list button.on, .lang-list button.on:hover { background: var(--pink); }
.lang-list button:disabled { cursor: default; color: #888; }
.soon { font-size: 12px; text-transform: uppercase; }
</style>
