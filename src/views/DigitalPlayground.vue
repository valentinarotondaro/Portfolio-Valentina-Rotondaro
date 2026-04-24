<script setup>
import { ref, onMounted } from 'vue';

/* ─── STATE ─────────────────────────────────────────────── */
const isCleanMode   = ref(false);
const isLampOn      = ref(false);
const isPlaying     = ref(false);
const activePopUp   = ref(false);
const activeObjectText = ref('');
const tooltipStyle  = ref({ top: '0px', left: '0px' });

/* ─── REFS ──────────────────────────────────────────────── */
const audioPlayer = ref(null);
const lampSound   = ref(null);
const legoSound   = ref(null);

/* ─── CONSTANTS ─────────────────────────────────────────── */
const MUSIC_MAX_VOL = 0.35;
const LAMP_VOL      = 1.0;
const START_TIME    = 10;

/* ─── MODES ─────────────────────────────────────────────── */
const setCleanMode = () => { isCleanMode.value = true; };
const setChaosMode = () => { isCleanMode.value = false; };

/* ─── MUSIC ─────────────────────────────────────────────── */
onMounted(() => {
  if (audioPlayer.value) {
    audioPlayer.value.load();
    audioPlayer.value.currentTime = START_TIME;
    audioPlayer.value.volume = 0;
  }
});

const playMusic = () => {
  if (!audioPlayer.value) return;
  if (audioPlayer.value.currentTime < START_TIME) audioPlayer.value.currentTime = START_TIME;
  audioPlayer.value.play().then(() => {
    isPlaying.value = true;
    let vol = 0;
    const interval = setInterval(() => {
      if (vol < MUSIC_MAX_VOL) {
        vol = Math.min(vol + 0.05, MUSIC_MAX_VOL);
        audioPlayer.value.volume = vol;
      } else clearInterval(interval);
    }, 50);
  }).catch(() => {});
};

const pauseMusic = () => {
  if (!audioPlayer.value) return;
  audioPlayer.value.pause();
  isPlaying.value = false;
};

/* ─── LAMP ──────────────────────────────────────────────── */
const activateLamp = () => {
  isLampOn.value = true;
  if (audioPlayer.value && isPlaying.value) audioPlayer.value.volume = 0.15;
  if (!lampSound.value) return;
  lampSound.value.currentTime = 1;
  lampSound.value.volume = LAMP_VOL;
  lampSound.value.play().then(() => {
    setTimeout(() => { if (isLampOn.value) lampSound.value.pause(); }, 500);
  }).catch(() => {});
};

const deactivateLamp = () => {
  isLampOn.value = false;
  if (audioPlayer.value && isPlaying.value) audioPlayer.value.volume = MUSIC_MAX_VOL;
  if (lampSound.value) lampSound.value.pause();
};

/* ─── LEGO ──────────────────────────────────────────────── */
const playLegoSound = () => {
  if (!legoSound.value) return;
  legoSound.value.currentTime = 2;
  legoSound.value.volume = 0.5;
  legoSound.value.play().catch(() => {});
};

const stopLegoSound = () => {
  if (legoSound.value) legoSound.value.pause();
};

/* ─── OBJECT NOTES ───────────────────────────────────────────── */
const openNote = (text, event) => {
  event.stopPropagation();
  if (activePopUp.value && activeObjectText.value === text) {
    activePopUp.value = false;
    return;
  }
  activeObjectText.value = text;
  activePopUp.value = true;

  if (window.innerWidth <= 900) {
    const rect = event.currentTarget.getBoundingClientRect();
    const tooltipW = window.innerWidth * 0.85;
    const tooltipH = 180;
    const margin = 10;
    const screenH = window.innerHeight;
    const screenW = window.innerWidth;

    let top = rect.bottom + margin;
    if (top + tooltipH > screenH - margin) top = rect.top - tooltipH - margin;

    let left = rect.left + rect.width / 2 - tooltipW / 2;
    if (left < margin) left = margin;
    if (left + tooltipW > screenW - margin) left = screenW - tooltipW - margin;

    tooltipStyle.value = { top: `${top}px`, left: `${left}px` };
  } else {
    // Desktop: comportamiento original con coordenadas del click
    const xOffset = event.clientX > window.innerWidth / 2 ? -300 : 20;
    tooltipStyle.value = {
      top:  `${event.clientY - 50}px`,
      left: `${event.clientX + xOffset}px`,
    };
  }
};

const closeNote = () => { activePopUp.value = false; };
</script>

<template>
  <main :class="{ 'is-clean-mode': isCleanMode }" @click="closeNote">

    <section class="about-me-container">
      <div class="collage-wrapper">

        <!-- ─── HEADER TEXT ──────────────────────────────── -->
        <div class="about-me-text" :class="{ 'is-clean': isCleanMode }">
          <h1>Valen Rotondaro</h1>
          <p class="description">In this corner of my website, you'll find a curated collection of objects that define my world. Feel free to discover them and reorder the chaos!</p>
        </div>

        <!-- ─── LAMP ─────────────────────────────────────── -->
        <div
          class="obj lamp-interaction-group"
          :class="{ 'is-clean': isCleanMode }"
          @mouseenter="activateLamp"
          @mouseleave="deactivateLamp"
          @click.stop="openNote('Denmark sparked my love for lamps ✴︎ I\'m obsessed with Danish design.', $event)"
        >
          <div class="lamp-head-container">
            <img src="/img/lampitradition.png" class="lamp-head-img" :class="{ 'is-clean': isCleanMode }" alt="Lamp" />
            <div class="light-glow" :class="{ 'is-lit': isLampOn }"></div>
          </div>
          <audio ref="lampSound" src="/audio/lampon.mp3" preload="auto"></audio>
        </div>

        <!-- ─── PASSPORT ──────────────────────────────────── -->
        <div
          class="obj passport-group"
          :class="{ 'is-clean': isCleanMode }"
          @click.stop="openNote('I am from Argentina! I have dual citizenship because my grandma is Italian, but I was born in Buenos Aires ✈︎', $event)"
        >
          <img src="/img/passport.png" class="passport-img" alt="Passport" />
          <img src="/img/boardingpass.png" class="boarding-img" alt="Boarding Pass" v-if="!isCleanMode" />
        </div>

        <!-- ─── LEGO ──────────────────────────────────────── -->
        <div
          class="obj lego-group"
          :class="{ 'is-clean': isCleanMode }"
          @mouseenter="playLegoSound"
          @mouseleave="stopLegoSound"
          @click.stop="openNote('I\'m a Lego fan, I am collecting the entire botanical collection ❀', $event)"
        >
          <img src="/img/lego.png" class="lego-img" alt="Lego Flowers" />
          <img src="/img/legogreen.png" class="legopalm-img" alt="Lego Palm" v-if="!isCleanMode" />
          <audio ref="legoSound" src="/audio/legobricks.mp3" preload="auto"></audio>
        </div>

        <!-- ─── PIE ───────────────────────────────────────── -->
        <div
          class="obj pie-group"
          :class="{ 'is-clean': isCleanMode }"
          @click.stop="openNote('This is my favorite cake! It is called Pastafrola and my grandma used to make the best one!', $event)"
        >
          <img src="/img/pastafrola.png" class="pie-img" alt="Pastafrola" />
          <img src="/img/migas.png" class="migas-img" alt="Migas" v-if="!isCleanMode" />
        </div>

        <!-- ─── NOTEBOOK ──────────────────────────────────── -->
        <div
          class="obj notebook-group"
          :class="{ 'is-clean': isCleanMode }"
          @click.stop="openNote('I found this word search and it highlights some of my most important values, the ones I choose every day even when no one is watching.', $event)"
        >
          <img src="/img/moleskine.png" class="notebook-img" alt="Notebook" />
          <img src="/img/coffee-stain.png" class="stain-img" alt="Coffee Stain" v-if="!isCleanMode" />
          <img src="/img/sopadeletras.png" class="wordsearch-img" alt="Wordsearch" />
        </div>

        <!-- ─── CANDLES ───────────────────────────────────── -->
        <div
          class="obj candles-group"
          :class="{ 'is-clean': isCleanMode }"
          @click.stop="openNote('I always have colorful candles at home!', $event)"
        >
          <img src="/img/candles.png" class="candles-img" alt="Candles" />
          <img src="/img/fosforos.png" class="fosforos-img" alt="Fosforos" />
        </div>

        <!-- ─── SINGLES ───────────────────────────────────── -->
        <img src="/img/tijeraroja.png"     class="obj scissors" :class="{ 'is-clean': isCleanMode }" alt="Scissors"       @click.stop="openNote('I always carry scissors with me, you never know when a collage might want to be born ✄', $event)" />
        <img src="/img/sagradafamilia.png" class="obj photo"    :class="{ 'is-clean': isCleanMode }" alt="Sagrada Familia" @click.stop="openNote('This is a photo of my Sagrada Familia, from that Europe trip we dreamed about for so long.', $event)" />

        <!-- ─── RIGHT OBJECTS ─────────────────────────────── -->
        <img
          src="/img/spotify.png"
          class="obj spotify"
          :class="{ 'is-playing': isPlaying, 'is-clean': isCleanMode }"
          alt="Spotify Player"
          @mouseenter="playMusic"
          @mouseleave="pauseMusic"
          @click.stop="openNote('This is a song from one of my favorite movies, Amélie. If you haven\'t seen it, I highly recommend it, it\'s pure beauty.', $event)"
        />
        <audio ref="audioPlayer" src="/audio/comptinedunautreete.mp3" preload="auto" loop></audio>

        <img src="/img/macfigma.png"            class="obj laptop" :class="{ 'is-clean': isCleanMode }" alt="Macbook with Figma" @click.stop="openNote('I rarely go anywhere without my laptop. There\'s always a project waiting to begin, or one asking to be finished.', $event)" />
        <img src="/img/cafeamarillo.png"        class="obj coffee" :class="{ 'is-clean': isCleanMode }" alt="Coffee"             @click.stop="openNote('I\'m a huge coffee fan. On my dates with myself, I\'m always out discovering a new café in the city ☕︎', $event)" />
        <img src="/img/valenrotondarofeed.png"  class="obj feed"   :class="{ 'is-clean': isCleanMode }" alt="Instagram Feed"    @click.stop="openNote('Creating content is one of my biggest passions. I show up for it every day. You can stalk me on Instagram at @valenrotondaro', $event)" />

        <!-- ─── MODE CONTROLS ─────────────────────────────── -->
        <div class="mode-controls">
          <div class="control-group">
            <button @click.stop="setChaosMode" :class="{ active: !isCleanMode }" data-label="Chaos mode">
              <img src="/img/coffee-icon.png" class="coffee-icon" alt="Chaos Mode" />
            </button>
          </div>
          <div class="control-group">
            <button @click.stop="setCleanMode" :class="{ active: isCleanMode }" data-label="Clean mode">
              <img src="/img/broom-icon.png" class="broom-icon" alt="Clean Mode" />
            </button>
          </div>
        </div>

      </div>



    </section>

    <!-- ─── MOBILE VERSION ────────────────────────────────── -->
    <section class="mobile-playground">
      <h1>Valen Rotondaro</h1>
      <p class="mobile-intro">In this corner of my website, you'll find a curated collection of objects that define my world. Tap any object to discover it!</p>
      <div class="mobile-grid">
        <div class="mobile-item" @click.stop="openNote('Denmark sparked my love for lamps ✴︎ I\'m obsessed with Danish design.', $event)">
          <img src="/img/lampitradition.png" alt="Lamp" />
        </div>
        <div class="mobile-item" @click.stop="openNote('I am from Argentina! I have dual citizenship because my grandma is Italian, but I was born in Buenos Aires ✈︎', $event)">
          <img src="/img/passport.png" alt="Passport" />
        </div>
        <div class="mobile-item" @click.stop="openNote('I\'m a Lego fan, I am collecting the entire botanical collection ❀', $event)">
          <img src="/img/lego.png" alt="Lego" />
        </div>
        <div class="mobile-item" @click.stop="openNote('This is my favorite cake! It is called Pastafrola and my grandma used to make the best one!', $event)">
          <img src="/img/pastafrola.png" alt="Pastafrola" />
        </div>
        <div class="mobile-item notebook-mobile" @click.stop="openNote('I found this word search and it highlights some of my most important values, the ones I choose every day even when no one is watching.', $event)">
          <img src="/img/moleskine.png" alt="Notebook" class="notebook-mobile-img" />
          <img src="/img/sopadeletras.png" alt="Wordsearch" class="wordsearch-mobile-img" />
        </div>
        <div class="mobile-item" @click.stop="openNote('I always have colorful candles at home!', $event)">
          <img src="/img/candles.png" alt="Candles" />
        </div>
        <div class="mobile-item" @click.stop="openNote('I always carry scissors with me, you never know when a collage might want to be born ✄', $event)">
          <img src="/img/tijeraroja.png" alt="Scissors" />
        </div>
        <div class="mobile-item" @click.stop="openNote('This is a photo of my Sagrada Familia, from that Europe trip we dreamed about for so long.', $event)">
          <img src="/img/sagradafamilia.png" alt="Sagrada Familia" />
        </div>
        <div class="mobile-item" @click.stop="openNote('This is a song from one of my favorite movies, Amélie. If you haven\'t seen it, I highly recommend it, it\'s pure beauty.', $event)">
          <img src="/img/spotify.png" alt="Spotify" />
        </div>
        <div class="mobile-item" @click.stop="openNote('I rarely go anywhere without my laptop. There\'s always a project waiting to begin, or one asking to be finished.', $event)">
          <img src="/img/macfigma.png" alt="Laptop" />
        </div>
        <div class="mobile-item" @click.stop="openNote('I\'m a huge coffee fan. On my dates with myself, I\'m always out discovering a new café in the city ☕︎', $event)">
          <img src="/img/cafeamarillo.png" alt="Coffee" />
        </div>
        <div class="mobile-item" @click.stop="openNote('Creating content is one of my biggest passions. I show up for it every day. You can stalk me on Instagram at @valenrotondaro', $event)">
          <img src="/img/valenrotondarofeed.png" alt="Instagram Feed" />
        </div>
      </div>
    </section>

          <!-- ─── TOOLTIP ───────────────────────────────────── -->
      <transition name="pop-fade">
        <div v-if="activePopUp" class="object-tooltip" :style="tooltipStyle">
          <div class="tooltip-content">
            <button class="close-tooltip-btn" @click.stop="closeNote">×</button>
            <p>{{ activeObjectText }}</p>
          </div>
        </div>
      </transition>

  </main>
</template>

<style scoped>
/* ─── BASE ──────────────────────────────────────────────── */
main {
  display: block;
  overflow: hidden;
  height: auto;
}

/* ─── DESKTOP COLLAGE (oculto en mobile) ─────────────────── */
.about-me-container {
  max-width: 1200px;
  margin: 0 auto -150px auto;
  padding-bottom: 50px;
}

.collage-wrapper {
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -150px;
}

/* ─── HEADER TEXT ───────────────────────────────────────── */
.about-me-text {
  margin-top: -300px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 550px;
  z-index: 10;
  pointer-events: none;
}

.about-me-text h1 {
  font-size: 75px;
  font-weight: 450;
  color: #ff63a7;
  margin-bottom: 10px;
  letter-spacing: -0.02em;
  user-select: none;
}

.description {
  text-align: justify;
  font-size: 25px;
  width: 450px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: #000;
  margin-top: 15px;
}

/* ─── OBJECTS BASE ──────────────────────────────────────── */
.obj {
  position: absolute;
  height: auto;
  transition: transform 0.3s ease, z-index 0s;
}

/* ─── HOVER CHAOS ───────────────────────────────────────── */
.obj:not(.is-clean):not(.lamp-interaction-group):not(.scissors):hover,
.passport-group:not(.is-clean):hover,
.lego-group:not(.is-clean):hover,
.pie-group:not(.is-clean):hover,
.notebook-group:not(.is-clean):hover,
.candles-group:not(.is-clean):hover {
  transform: scale(1.05) rotate(3deg) !important;
  z-index: 500 !important;
}

.scissors:not(.is-clean):hover {
  transform: scale(1.05) rotate(203deg) !important;
  z-index: 500 !important;
}

/* ─── HOVER CLEAN ───────────────────────────────────────── */
.about-me-container .obj.is-clean:not(.scissors):not(.passport-group):hover,
.about-me-container .lego-group.is-clean:hover,
.about-me-container .pie-group.is-clean:hover,
.about-me-container .notebook-group.is-clean:hover,
.about-me-container .candles-group.is-clean:hover {
  transform: scale(1.1) rotate(3deg) !important;
  z-index: 500 !important;
  cursor: pointer;
}

.about-me-container .scissors.is-clean:hover {
  transform: scale(1.1) rotate(143deg) !important;
  z-index: 500 !important;
}

.about-me-container .passport-group.is-clean:hover {
  transform: scale(1.1) rotate(-17deg) !important;
  z-index: 500 !important;
}

/* ─── CHAOS POSITIONS ───────────────────────────────────── */
.passport-group { bottom: 373px; left: 9%; width: 120px; z-index: 10; transform: rotate(-15deg); }
.boarding-img   { position: absolute; width: 200px; top: 20px; left: 40px; z-index: -1; transform: rotate(5deg); }

.lego-group     { bottom: 265px; left: 15%; width: 180px; z-index: 12; transform: rotate(-4deg); }
.legopalm-img   { position: absolute; width: 110px; bottom: 20px; left: -130px; }

.notebook-group { top: 92px; left: 3%; width: 252px; z-index: 100; }
.stain-img      { position: absolute; width: 50px; top: 60px; left: 60px; transform: rotate(-10deg); }
.wordsearch-img { position: absolute; width: 58px; top: 50px; left: 132px; z-index: 12; transform: rotate(6deg); }

.pie-group      { bottom: 290px; right: 0%; width: 130px; z-index: 10; }
.migas-img      { position: absolute; width: 80px; bottom: 30px; right: 80px; z-index: -1; }

.candles-group  { bottom: 539px; right: 12%; width: 55px; z-index: 12; overflow: visible; }
.fosforos-img   { position: absolute; width: 170px; bottom: 10px; right: 70px; transform: rotate(-5deg); }

.scissors { width: 95px; top: 40px; left: 19%; transform: rotate(200deg); }
.photo    { width: 110px; bottom: 385px; left: 4%; transform: rotate(-10deg); }
.spotify  { width: 240px; top: 25px; right: -2%; transform: rotate(7deg); z-index: 12; }
.laptop   { width: 250px; top: 150px; right: -3.5%; }
.coffee   { width: 75px; bottom: 675px; right: 20%; transform: rotate(-15deg); }
.feed     { width: 75px; bottom: 290px; right: 15.5%; transform: rotate(5deg); }

/* ─── LAMP ──────────────────────────────────────────────── */
.lamp-interaction-group {
  position: absolute;
  top: 0;
  left: 10%;
  width: 100px;
  cursor: pointer;
  z-index: 10;
  transition: transform 0.3s ease;
}

.lamp-head-img { width: 100%; height: auto; display: block; position: relative; z-index: 5; }

.lamp-head-container { position: relative; width: 100%; }

.light-glow {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  width: 140px;
  height: 140px;
  background: radial-gradient(circle, rgba(255, 235, 59, 0.8) 0%, rgba(255, 235, 59, 0) 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 1;
  border-radius: 50%;
}

.is-lit { opacity: 1; }

.lamp-interaction-group:hover { transform: scale(1.05); z-index: 100; }
.lamp-interaction-group.is-clean:hover { z-index: 100; }

/* ─── CLEAN MODE ────────────────────────────────────────── */
.about-me-text.is-clean { position: absolute; top: 200px; left: 55%; text-align: justify; align-items: center; margin-top: 0; }

.laptop.is-clean          { width: 210px !important; top: 12px;   left: 80%;    transform: rotate(0deg) !important; }
.spotify.is-clean         { width: 240px !important; top: 20px;   left: 10%;    transform: rotate(0deg) !important; }
.photo.is-clean           { width: 120px !important; top: 152px;  left: 8%;     transform: rotate(0deg) !important; }
.lamp-interaction-group.is-clean { width: 110px; top: 50px; left: 43%; transform: rotate(0deg) !important; }
.scissors.is-clean        { width: 110px !important; top: 50px;   left: 72%;    transform: rotate(140deg) !important; }
.coffee.is-clean          { width: 98px !important;  top: 30px;   left: 32%;    transform: rotate(0deg) !important; }
.feed.is-clean            { width: 60px !important;  top: 289px;  left: 28%;    transform: rotate(0deg) !important; }
.passport-group.is-clean  { width: 100px !important; top: 125px;  left: 37%;    transform: rotate(-20deg) !important; }
.notebook-group.is-clean  { width: 250px !important; top: 10px;   left: 53%;    transform: rotate(-9deg) !important; }
.pie-group.is-clean       { width: 120px !important; top: 140px;  left: 22%;    transform: rotate(0deg) !important; }
.lego-group.is-clean      { width: 210px !important; top: 280px;  left: 35.5%;  transform: rotate(-3deg) !important; }
.candles-group.is-clean   { width: 70px !important;  top: 260px;  left: 19%;    transform: rotate(0deg) !important; }

.notebook-group.is-clean .wordsearch-img { width: 60px !important; top: 49px; left: 139px; transform: rotate(7deg) !important; }
.candles-group.is-clean .fosforos-img    { width: 90px !important; top: 50px; left: -80px; }

/* ─── MODE CONTROLS ─────────────────────────────────────── */
.mode-controls {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 15px;
  z-index: 9999;
}

.mode-controls button {
  position: relative;
  padding: 8px;
  width: 64px;
  height: 64px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  border-radius: 18px;
  transition: all 0.3s ease;
}

.mode-controls button:hover { transform: translateY(-5px) rotate(5deg); background-color: #f7f7f7; }
.mode-controls button.active { background-color: #f0f0f0; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.07); }

.mode-controls button:hover::after {
  content: attr(data-label);
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #000;
  color: #fff;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 13px;
  white-space: nowrap;
  z-index: 100;
}

.coffee-icon { width: 80px; height: auto; }
.broom-icon  { width: 50px; height: auto; }

/* ─── OBJECT NOTES ───────────────────────────────────────────── */
.object-tooltip {
  position: fixed;
  width: 380px;
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  z-index: 10000;
  pointer-events: auto;
}

.tooltip-content p {
  margin: 0;
  width: 320px;
  font-size: 16px;
  line-height: 1.5;
  color: #000;
  padding-right: 15px;
  text-align: justify;
}

.tooltip-content { position: relative; }


.close-tooltip-btn {
  position: absolute;
  top: -25px;
  right: -15px;
  background: none;
  border: none;
  font-size: 20px;
  color: #999;
  cursor: pointer;
  padding: 2px;
}

.close-tooltip-btn:hover { color: #ff63a7; }

.pop-fade-enter-active,
.pop-fade-leave-active { transition: all 0.3s ease; }

.pop-fade-enter-from,
.pop-fade-leave-to { opacity: 0; transform: scale(0.9) translateY(10px); }

/* ─── MOBILE VERSION ────────────────────────────────────── */
.mobile-playground { display: none; }

@media (max-width: 900px) {
  .about-me-container { display: none; }

  .mobile-playground {
    display: block;
    padding: 30px 5%;
  }

  .mobile-playground h1 {
    text-align: center;
    color: #ff63a7;
    font-size: 45px;
    font-weight: 500;
    margin-bottom: 20px;
    line-height: 0.9;
    letter-spacing: -0.03em;
  }

  .mobile-intro {
    text-align: justify;
    margin-bottom: 30px;
    padding: 0 10px;
  }

  .mobile-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }

  .mobile-item {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f9f9f9;
    border-radius: 20px;
    padding: 15px;
    aspect-ratio: 1;
    cursor: pointer;
    overflow: hidden;
    transition: transform 0.2s ease, background 0.2s ease;
  }

  .mobile-item:active {
    transform: scale(0.95);
    background: #f0f0f0;
  }

  .mobile-item img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .notebook-mobile {
    position: relative;
    overflow: hidden;
  }

  .notebook-mobile-img {
    width: 100%;
    height: 80%;
    object-fit: contain;
    position: relative;
    z-index: 1;
  }

  .wordsearch-mobile-img {
    position: absolute;
    width: 17% !important;
    bottom: -2%;
    right: 30%;
    z-index: 2;
  }

  .object-tooltip {
  position: fixed !important;
  bottom: unset !important;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  width: 85vw !important;
  max-width: 340px;
  padding: 20px;
  z-index: 10000;
}

  .tooltip-content p {
    width: 100%;
    font-size: 15px;
    line-height: 1.5;
  }

  .close-tooltip-btn {
    top: -20px;
    right: -10px;
    font-size: 22px;
  }
} 
</style>