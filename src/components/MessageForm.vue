<script setup>
import { reactive, ref } from 'vue'
import { useI18n } from '../i18n/index.js'
import { useForm } from '../composables/useForm.js'

// Reusable form: text fields + optional topic pills. Sends to Valen's inbox.
const props = defineProps({
  subject: { type: String, required: true },
  fields: { type: Array, required: true }, // [{ key, label, type?: 'text'|'email'|'textarea', required? }]
  topics: { type: Array, default: () => [] },
  topicsLabel: { type: String, default: '' },
  submitLabel: { type: String, default: '' },
})
const { t } = useI18n()
const { status, submit } = useForm(props.subject)
const values = reactive(Object.fromEntries(props.fields.map((f) => [f.key, ''])))
const topic = ref(props.topics.length ? props.topics[props.topics.length - 1] : '')
const trap = ref('')

function send() {
  if (trap.value) return // honeypot: bots fill the hidden field
  const out = { ...values }
  if (props.topics.length) out.topic = topic.value
  submit(out)
}
</script>

<template>
  <form class="mf" @submit.prevent="send">
    <template v-if="topics.length">
      <span v-if="topicsLabel" class="lab">{{ topicsLabel }}</span>
      <div class="topics">
        <button v-for="(x, i) in topics" :key="x" type="button" class="pill tp" :class="['tone-' + (i % 4), topic === x ? 'sel' : 'o']" @click="topic = x">{{ x }}</button>
      </div>
    </template>
    <template v-for="f in fields" :key="f.key">
      <textarea v-if="f.type === 'textarea'" v-model="values[f.key]" class="field" :placeholder="f.label" :required="f.required" :aria-label="f.label"></textarea>
      <input v-else v-model="values[f.key]" class="field" :type="f.type || 'text'" :placeholder="f.label" :required="f.required" :aria-label="f.label" />
    </template>
    <input v-model="trap" type="text" class="trap" tabindex="-1" autocomplete="off" aria-hidden="true" />
    <button class="btn pink" type="submit" :disabled="status === 'sending'">
      {{ status === 'sending' ? t('common.sending') : submitLabel || t('common.sendMessage') }}
    </button>
    <p v-if="status === 'sent'" class="msg ok" role="status">{{ t('common.sent') }}</p>
    <p v-if="status === 'error'" class="msg bad" role="alert">{{ t('common.error') }}</p>
  </form>
</template>

<style scoped>
.mf { display: grid; gap: 14px; }
.topics { display: flex; gap: 10px; flex-wrap: wrap; }
.topics .pill { padding: 10px 20px; font-size: 16px; }
.tp.tone-0:hover, .tp.tone-0.sel { background: var(--pink); }
.tp.tone-1:hover, .tp.tone-1.sel { background: var(--lima); }
.tp.tone-2:hover, .tp.tone-2.sel { background: var(--lila); }
.tp.tone-3:hover, .tp.tone-3.sel { background: var(--orange); }
.tp.sel { color: var(--ink); }
.trap { position: absolute; left: -9999px; height: 0; width: 0; opacity: 0; }
.msg { margin: 0; font-size: 19px; font-weight: 500; color: var(--ink); }
.msg.ok::before { content: '\2713\FE0E  '; }
.msg.bad::before { content: '\2715\FE0E  '; }
.btn:disabled { opacity: .6; cursor: wait; }
</style>
