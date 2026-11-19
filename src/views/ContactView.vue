<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from '../i18n/index.js'
import PageHero from '../components/PageHero.vue'
import RichText from '../components/RichText.vue'
import MessageForm from '../components/MessageForm.vue'

const { t, tm } = useI18n()
const EMAIL = 'vrotondaro@hotmail.com'
// On phones the topic pills are hidden, so no topic is sent either.
const mq = typeof window !== 'undefined' ? window.matchMedia('(max-width: 900px)') : null
const isMobile = ref(mq ? mq.matches : false)
const onMq = (e) => { isMobile.value = e.matches }
onMounted(() => mq && mq.addEventListener('change', onMq))
onBeforeUnmount(() => mq && mq.removeEventListener('change', onMq))
const fields = computed(() => [
  { key: 'name', label: t('common.name'), required: true },
  { key: 'email', label: t('common.email'), type: 'email', required: true },
  { key: 'message', label: t('contact.message'), type: 'textarea', required: true },
])
</script>

<template>
  <main>
    <PageHero :label="t('contact.label')">
      <template #title><RichText :parts="tm('contact.title')" /></template>
      <template #actions>
        <a :href="'mailto:' + EMAIL" class="btn line">{{ EMAIL }} ↗</a>
      </template>
    </PageHero>

    <section class="sec sec-tight">
      <div class="grid2">
        <div>
          <span class="lab p">{{ t('contact.side') }}</span>
          <h2 class="b-h2 head">{{ tm('contact.heading')[0] }}<br />{{ tm('contact.heading')[1] }}</h2>
          <a :href="'mailto:' + EMAIL" class="mail m-hide">{{ EMAIL }}</a>
          <p class="text m-hide">{{ t('contact.text') }}</p>
          <div class="links m-hide">
            <a class="pill o" href="https://www.instagram.com/valenrotondaro" target="_blank" rel="noopener">{{ t('common.instagram') }} ↗</a>
            <a class="pill o" href="https://www.linkedin.com/in/valentinarotondaro/" target="_blank" rel="noopener">{{ t('common.linkedin') }} ↗</a>
            <a class="pill o" href="/img/CV Valentina Rotondaro.pdf" download>{{ t('common.cv') }}</a>
          </div>
        </div>
        <MessageForm subject="New message from the portfolio" :fields="fields" :topics="isMobile ? [] : tm('contact.topics')" />
      </div>
    </section>
  </main>
</template>

<style scoped>
.grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 70px; }
.head { margin: 12px 0 22px; }
.mail { display: inline-block; font-size: clamp(24px, 2.6vw, 38px); line-height: 1.05; color: var(--ink); text-decoration: none; border-bottom: 1.5px solid var(--ink); padding-bottom: 6px; word-break: break-all; }
.text { font-size: 18px; color: #444; max-width: 440px; margin: 26px 0 24px; }
.links { display: flex; gap: 10px; flex-wrap: wrap; }
.links .pill { text-decoration: none; }
@media (max-width: 900px) {
  .m-hide { display: none; }
  .head { font-size: 42px; line-height: 1.04; margin: 4px 0 22px; }
  .grid2 { grid-template-columns: 1fr; gap: 0; }
  .mail { font-size: 26px; }
}
</style>
