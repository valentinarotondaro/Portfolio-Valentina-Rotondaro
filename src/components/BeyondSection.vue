<script setup>
import { ref } from 'vue'
import { useI18n } from '../i18n/index.js'

// "Beyond pixels and prototypes, I love..." — personal objects. Hover the music
// player and the lamp, click any object to read its story.
const { t, tm } = useI18n()
const audioPlayer = ref(null)
const lampSound = ref(null)
const isPlaying = ref(false)
const isLampOn = ref(false)
const MAX_VOL = 0.35
const START_AT = 10

const playMusic = () => {
  const a = audioPlayer.value
  if (!a) return
  if (a.currentTime < START_AT) a.currentTime = START_AT
  a.volume = 0
  a.play().then(() => {
    isPlaying.value = true
    let vol = 0
    const id = setInterval(() => {
      if (vol < MAX_VOL) { vol = Math.min(vol + 0.05, MAX_VOL); a.volume = vol } else clearInterval(id)
    }, 50)
  }).catch(() => {})
}
const pauseMusic = () => { audioPlayer.value?.pause(); isPlaying.value = false }
const lampOn = () => {
  isLampOn.value = true
  if (audioPlayer.value && isPlaying.value) audioPlayer.value.volume = 0.15
  const l = lampSound.value
  if (!l) return
  l.currentTime = 1; l.volume = 1
  l.play().then(() => setTimeout(() => { if (isLampOn.value) l.pause() }, 500)).catch(() => {})
}
const lampOff = () => {
  isLampOn.value = false
  if (audioPlayer.value && isPlaying.value) audioPlayer.value.volume = MAX_VOL
  lampSound.value?.pause()
}

// Click-to-read note
const open = ref(false)
const text = ref('')
const pos = ref({ top: '0px', left: '0px' })
const note = (key, e) => {
  e.stopPropagation()
  const msg = tm('about.beyondNotes')[key]
  if (open.value && text.value === msg) { open.value = false; return }
  text.value = msg
  open.value = true
  const dx = e.clientX > window.innerWidth / 2 ? -340 : 20
  pos.value = { top: `${Math.max(12, e.clientY - 50)}px`, left: `${Math.max(12, e.clientX + dx)}px` }
}
const close = () => { open.value = false }
</script>

<template>
  <section class="beyond" @click="close">
    <h2 class="b-h2 title">{{ t('about.beyondTitle') }}</h2>
    <p class="hint">{{ t('about.beyondHint') }}</p>
    <div class="wrap">
      <div class="grid">
        <div class="obj spotify" :class="{ playing: isPlaying }" @mouseenter="playMusic" @mouseleave="pauseMusic" @click="note('spotify', $event)">
          <img src="/img/spotify.png" alt="Music player" />
          <audio ref="audioPlayer" src="/audio/comptinedunautreete.mp3" preload="none" loop></audio>
        </div>
        <img src="/img/pastafrola.png" alt="Pastafrola" class="obj pie" @click="note('pie', $event)" />
        <div class="obj lamp" @mouseenter="lampOn" @mouseleave="lampOff" @click="note('lamp', $event)">
          <img src="/img/lampitradition.png" alt="Lamp" />
          <span class="glow" :class="{ lit: isLampOn }"></span>
          <audio ref="lampSound" src="/audio/lampon.mp3" preload="none"></audio>
        </div>
        <img src="/img/sagradafamilia.png" alt="Photo from Barcelona" class="obj photo" @click="note('photo', $event)" />
        <div class="obj notebook" @click="note('notebook', $event)">
          <img src="/img/moleskine.png" alt="Notebook" />
          <img src="/img/sopadeletras.png" alt="Word search" class="ws" />
        </div>
        <img src="/img/passport.png" alt="Passport" class="obj passport" @click="note('passport', $event)" />
        <img src="/img/lego.png" alt="Lego flowers" class="obj lego" @click="note('lego', $event)" />
        <img src="/img/candles.png" alt="Candles" class="obj candles" @click="note('candles', $event)" />
        <img src="/img/tijeraroja.png" alt="Scissors" class="obj scissors" @click="note('scissors', $event)" />
        <img src="/img/cafeamarillo.png" alt="Coffee" class="obj coffee" @click="note('coffee', $event)" />
      </div>
    </div>

    <transition name="pop">
      <div v-if="open" class="tip" :style="pos" role="dialog">
        <button type="button" class="x" aria-label="Close" @click.stop="close">×</button>
        <p>{{ text }}</p>
      </div>
    </transition>
  </section>
</template>

<style scoped>
.beyond { --sc: 1.25; padding: 90px var(--gutter) 0; text-align: center; }
.title { margin: 0; }
.hint { margin: 10px 0 40px; font-size: 14px; color: #777; }
.wrap { position: relative; width: calc(780px * var(--sc)); max-width: 100%; height: calc(500px * var(--sc)); margin: 0 auto; }
.grid { position: absolute; left: calc(35px * var(--sc)); top: calc(10px * var(--sc)); width: 700px; height: 480px; transform: scale(var(--sc)); transform-origin: top left; }
.obj { position: absolute; cursor: pointer; height: auto; transition: transform .25s ease; }
.obj:hover { transform: scale(1.08) rotate(3deg); z-index: 10; }
.obj img { width: 100%; height: auto; display: block; }
.scissors:hover { transform: scale(1.08) rotate(200deg); }
.spotify { width: 200px; top: 10px; left: 0; }
.pie { width: 115px; top: 0; left: 220px; }
.lamp { width: 90px; top: 0; right: 60px; }
.photo { width: 120px; top: 120px; left: 0; }
.notebook { width: 200px; top: -5px; left: 335px; transform: rotate(-9deg); }
.notebook:hover { transform: rotate(-9deg) scale(1.08); }
.ws { position: absolute; width: 46px !important; top: 38px; left: 110px; transform: rotate(7deg); }
.passport { width: 110px; top: 115px; left: 230px; transform: rotate(-20deg); }
.lego { width: 190px; top: 140px; left: 350px; transform: rotate(-3deg); }
.candles { width: 60px; top: 120px; left: 150px; }
.scissors { width: 130px; top: 160px; right: -25px; transform: rotate(220deg); }
.coffee { width: 90px; top: 50px; right: -40px; transform: rotate(10deg); }
.glow { position: absolute; top: 15%; left: 50%; transform: translateX(-50%); width: 100px; height: 100px; border-radius: 50%; background: radial-gradient(circle, rgba(255,235,59,.8) 0%, rgba(255,235,59,0) 70%); opacity: 0; transition: opacity .3s; pointer-events: none; }
.glow.lit { opacity: 1; }
.tip { position: fixed; z-index: 10000; width: 320px; background: #fff; border: 1.5px solid var(--ink); border-radius: 18px; padding: 22px 24px; text-align: left; box-shadow: 5px 5px 0 var(--ink); }
.tip p { margin: 0; font-size: 15px; line-height: 1.5; padding-right: 14px; }
.x { position: absolute; top: 6px; right: 12px; background: none; border: 0; font-size: 22px; cursor: pointer; color: #888; }
.x:hover { color: var(--pink); }
.pop-enter-active, .pop-leave-active { transition: opacity .2s ease, transform .2s ease; }
.pop-enter-from, .pop-leave-to { opacity: 0; transform: translateY(6px); }
@media (max-width: 900px) {
  .beyond { --sc: .5; padding-top: 60px; }
  .hint { margin-bottom: 24px; }
}
@media (max-width: 480px) { .beyond { --sc: .46; } }
</style>
