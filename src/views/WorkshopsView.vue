<script setup>
import { ref, computed } from 'vue'
import { useI18n } from '../i18n/index.js'
import { WORKSHOP_REELS, PAST_VIDEO } from '../data/reels.js'
import PageHero from '../components/PageHero.vue'
import RichText from '../components/RichText.vue'
import VimeoReel from '../components/VimeoReel.vue'
import MessageForm from '../components/MessageForm.vue'

const { t, tm } = useI18n()
const open = ref(0) // which past workshop row is open
const toggle = (i) => { open.value = open.value === i ? -1 : i }
const showForm = ref(false)
const goBrands = () => { showForm.value = true; document.getElementById('brands')?.scrollIntoView({ behavior: 'smooth' }) }

const proposalFields = computed(() => [
  { key: 'name', label: t('common.name'), required: true },
  { key: 'email', label: t('common.email'), type: 'email', required: true },
  { key: 'message', label: t('workshops.brands.what'), type: 'textarea', required: true },
])
</script>

<template>
  <main>
    <PageHero class="ws-hero" :label="t('workshops.label')">
      <template #title><RichText :parts="tm('workshops.title')" /></template>
      <template #actions>
        <a :href="t('workshops.signupUrl')" target="_blank" rel="noopener" class="btn pink">{{ t('workshops.ctaSignup') }} ↗︎</a>
        <button type="button" class="btn line" @click="goBrands">{{ t('workshops.ctaBring') }}</button>
      </template>
    </PageHero>

    <!-- Next workshop -->
    <section class="sec sec-tight ws-next">
      <span class="lab p">{{ t('workshops.nextLabel') }}</span>
      <div class="next">
        <div class="next-info">
          <span class="lab ink">{{ t('workshops.nextOpen') }}</span>
          <div class="next-body">
            <div class="date">{{ t('workshops.nextDate') }}</div>
            <h2 class="next-title">{{ t('workshops.nextTitle') }}</h2>
            <p class="place">{{ t('workshops.nextPlace') }}</p>
            <div class="next-actions">
              <a :href="t('workshops.signupUrl')" target="_blank" rel="noopener" class="btn">{{ t('workshops.nextSignup') }} →</a>
              <span class="pill w">{{ t('workshops.nextTime') }}</span>
            </div>
          </div>
        </div>
        <div class="next-img"><img src="/img/royaldanishlibrary.webp" alt="" loading="lazy" /></div>
      </div>
    </section>

    <!-- Values -->
    <section class="sec">
      <h2 class="b-h2 gap">{{ t('workshops.valuesTitle') }}</h2>
      <div class="values">
        <article v-for="(v, i) in tm('workshops.values')" :key="v.t" class="card value" :class="'tone-' + (i % 4)">
          <span class="vn">0{{ i + 1 }}</span>
          <h3>{{ v.t }}</h3>
          <p>{{ v.d }}</p>
        </article>
      </div>
    </section>

    <!-- Past workshops: editorial index -->
    <section class="sec">
      <span class="lab p">{{ t('workshops.pastLabel') }}</span>
      <h2 class="b-h2 gap big">{{ t('workshops.pastTitle') }}</h2>
      <div class="index">
        <div v-for="(w, i) in tm('workshops.past')" :key="w.t" class="row" :class="{ on: open === i }" @mouseenter="open = i">
          <button type="button" class="row-head" :aria-expanded="open === i" @click="toggle(i)">
            <span class="row-title">{{ w.t }}</span>
            <span class="row-desc">{{ w.d }}</span>
            <span class="row-arrow" aria-hidden="true">{{ open === i ? '↘︎' : '↗︎' }}</span>
          </button>
          <div v-if="open === i" class="row-body">
            <div class="thumbs"><div v-for="im in w.imgs" :key="im" class="thumb"><img :src="im" alt="" loading="lazy" /></div></div>
            <router-link :to="w.to" class="read">{{ t('workshops.readCase') }} →</router-link>
          </div>
        </div>
      </div>
      <div class="past-video pv-desk">
        <VimeoReel :src="PAST_VIDEO" title="Workshop video" ratio="16 / 9" />
      </div>
    </section>

    <!-- Behind the scenes -->
    <section class="sec">
      <div class="head">
        <div>
          <span class="lab p">{{ t('workshops.behindLabel') }}</span>
          <h2 class="b-h2 big">{{ t('workshops.behindTitle') }}</h2>
        </div>
        <p class="muted intro">{{ t('workshops.behindIntro') }}</p>
      </div>
      <div class="reels">
        <VimeoReel v-for="(u, i) in WORKSHOP_REELS" :key="u" :src="u" :title="'Workshop video ' + (i + 1)" background />
        <VimeoReel class="pv-mob" :src="PAST_VIDEO" title="Workshop video" background />
      </div>
    </section>

    <!-- Reviews -->
    <section class="sec">
      <span class="lab p">{{ t('workshops.reviewsLabel') }}</span>
      <h2 class="b-h2 gap">{{ t('workshops.reviewsTitle') }}</h2>
      <div class="reviews">
        <figure v-for="r in tm('workshops.reviews')" :key="r.a" class="card review">
          <blockquote>“{{ r.q }}”</blockquote>
          <figcaption class="lab p">{{ r.a }}</figcaption>
        </figure>
      </div>
    </section>

    <!-- For brands -->
    <section id="brands" class="brands">
      <div class="b-left paper">
        <span class="lab ink">{{ t('workshops.brands.label') }}</span>
        <h2 class="brands-title">{{ t('workshops.brands.title') }}</h2>
        <p class="b-text m-hide">{{ t('workshops.brands.text') }}</p>
        <ul class="list m-hide">
          <li v-for="(x, i) in tm('workshops.brands.list')" :key="x.a"><span class="lab">0{{ i + 1 }}</span><span class="la">{{ x.a }}</span><span class="lb">{{ x.b }}</span></li>
        </ul>
      </div>
      <div class="b-right">
        <div class="b-card">
          <h3 class="b-card-title">{{ t('workshops.brands.formTitle') }}</h3>
          <p class="b-card-text">{{ t('workshops.brands.formIntro') }}</p>
          <MessageForm subject="Workshop proposal request" :fields="proposalFields" :submit-label="t('workshops.brands.send')" />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.past-video { margin-top: 48px; max-width: 960px; }
.pv-mob { display: none; }
.gap { margin-bottom: 30px; }
.big { font-size: clamp(30px, 3.4vw, 50px); }
.next { margin-top: 22px; border: 1.5px solid var(--ink); border-radius: 32px; background: var(--pink); padding: 34px; display: grid; grid-template-columns: 1fr minmax(0, 600px); gap: 40px; }
.next-info { display: flex; flex-direction: column; }
.next-body { margin-top: auto; }
.date { font-size: 88px; line-height: .9; }
.next-title { margin: 16px 0 8px; font-size: 34px; line-height: 1; font-weight: 400; }
.place { margin: 0 0 26px; font-size: 20px; color: var(--ink); }
.next-actions { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }
.next-img { height: 400px; border-radius: 20px; overflow: hidden; border: 1.5px solid var(--ink); }
.next-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
.values { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
.value { padding: 26px; min-height: 250px; display: flex; flex-direction: column; transition: background .3s ease, transform .3s cubic-bezier(.2,.7,.2,1), box-shadow .3s ease; }
.value:hover { transform: translateY(-6px); box-shadow: 5px 5px 0 var(--ink); }
.value.tone-0 { background: var(--pink); } .value.tone-1 { background: var(--lima); } .value.tone-2 { background: var(--lila); } .value.tone-3 { background: var(--orange); }
.vn { display: inline-flex; width: 38px; height: 38px; border-radius: 50%; align-items: center; justify-content: center; font-size: 14px; border: 1.5px solid var(--ink); background: #fff; }
.value h3 { margin: 48px 0 8px; font-size: 24px; font-weight: 400; line-height: 1.1; }
.value p { margin: 0; color: var(--ink); font-size: 15px; }
.index { border-bottom: 1.5px solid var(--ink); }
.row { border-top: 1.5px solid var(--ink); }
.row-head { width: 100%; display: grid; grid-template-columns: 1fr 320px 60px; gap: 30px; align-items: baseline; padding: 26px 0; background: none; border: 0; text-align: left; cursor: pointer; font: inherit; color: var(--ink); }
.row-title { font-size: 48px; line-height: 1; }
.row-desc { color: #555; }
.row-arrow { font-size: 32px; text-align: right; }
.row-body { padding: 0 0 34px; }
.thumbs { display: flex; gap: 16px; }
.thumb { height: 200px; border-radius: 18px; overflow: hidden; flex: 1; }
.thumb img, .photo img { width: 100%; height: 100%; object-fit: cover; display: block; }
.read { display: inline-block; margin-top: 18px; color: var(--ink); }
.head { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 24px; gap: 30px; }
.intro { max-width: 340px; margin: 0; }
.reels { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
.photos { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 16px; }
.photo { border-radius: 18px; overflow: hidden; height: 300px; }
.reviews { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.review { padding: 26px; background: var(--cream); margin: 0; }
.review blockquote { margin: 0 0 16px; font-size: 17px; line-height: 1.3; }
.brands { margin-top: 110px; display: grid; grid-template-columns: 1fr 1fr; border-top: 1.5px solid var(--ink); border-bottom: 1.5px solid var(--ink); }
.b-left { padding: 70px var(--gutter) 70px var(--gutter); }
.brands-title { margin: 14px 0 18px; font-size: clamp(30px, 3.4vw, 50px); line-height: 1.05; font-weight: 400; }
.b-text { font-size: 18px; color: #444; margin: 0 0 34px; max-width: 560px; }
.list { list-style: none; margin: 0; padding: 0; border-bottom: 1.5px solid var(--ink); }
.list li { display: grid; grid-template-columns: 50px 1fr auto; gap: 16px; align-items: baseline; padding: 18px 0; border-top: 1.5px solid var(--ink); }
.la { font-size: 24px; }
.lb { font-size: 16px; color: #555; }
.b-right { background: var(--lila); border-left: 1.5px solid var(--ink); padding: 70px var(--gutter) 70px 60px; display: flex; align-items: center; }
.b-card { width: 100%; background: #fff; border: 1.5px solid var(--ink); border-radius: 24px; padding: 34px; }
.b-card-title { margin: 0 0 6px; font-size: 26px; font-weight: 400; }
.b-card-text { margin: 0 0 22px; font-size: 15px; color: #666; }
@media (max-width: 900px) {
  .big { font-size: 30px; }
  .next { grid-template-columns: 1fr; padding: 20px; gap: 24px; }
  .date { font-size: 64px; }
  .next-title { font-size: 28px; }
  .next-img { height: 240px; order: -1; }
  .values { grid-template-columns: 1fr 1fr; gap: 14px; }
  .value { min-height: 200px; padding: 18px; }
  .row-head { grid-template-columns: 1fr 40px; gap: 6px 14px; padding: 18px 0; }
  .row-title { font-size: 28px; }
  .row-desc { grid-column: 1; grid-row: 2; font-size: 14px; }
  .row-arrow { grid-row: 1; grid-column: 2; font-size: 28px; }
  .thumbs { flex-direction: column; } .thumb { height: 170px; }
  .head { flex-direction: column; align-items: flex-start; }
  .reels { grid-template-columns: repeat(2, 1fr); gap: 10px; }
  .photos { grid-template-columns: 1fr; } .photo { height: 220px; }
  .reviews { grid-template-columns: 1fr; }
  .brands { grid-template-columns: 1fr; margin-top: 70px; }
  .m-hide { display: none; }
  .ws-hero.hero { padding-bottom: 26px; }
  .ws-next.sec { padding-top: 22px; }
  .pv-desk { display: none; }
  .pv-mob { display: block; }
  .b-left { padding: 40px var(--gutter); }
  .b-right { border-left: 0; border-top: 1.5px solid var(--ink); padding: 40px var(--gutter); }
  .b-card { padding: 22px; }
  .brands-title { font-size: 28px; }
  .list li { grid-template-columns: 34px 1fr; } .lb { grid-column: 2; }
}
</style>
