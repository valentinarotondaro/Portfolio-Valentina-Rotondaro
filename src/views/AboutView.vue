<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { useFallingTags } from '../composables/useFallingTags';

const router = useRouter();

// ─── AUDIO REFS ──────────────────────────────────────────
const audioPlayer = ref(null);
const lampSound   = ref(null);
const isPlaying   = ref(false);
const isLampOn    = ref(false);

const MUSIC_MAX_VOL = 0.35;
const START_TIME    = 10;

// ─── MÚSICA SPOTIFY ──────────────────────────────────────
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

// ─── LÁMPARA ─────────────────────────────────────────────
const activateLamp = () => {
  isLampOn.value = true;
  if (audioPlayer.value && isPlaying.value) audioPlayer.value.volume = 0.15;
  if (!lampSound.value) return;
  lampSound.value.currentTime = 1;
  lampSound.value.volume = 1.0;
  lampSound.value.play().then(() => {
    setTimeout(() => { if (isLampOn.value) lampSound.value.pause(); }, 500);
  }).catch(() => {});
};

const deactivateLamp = () => {
  isLampOn.value = false;
  if (audioPlayer.value && isPlaying.value) audioPlayer.value.volume = MUSIC_MAX_VOL;
  if (lampSound.value) lampSound.value.pause();
};

// ─── SKILLS: falling tag rain, same physics as the hero tags ────
// npm install matter-js
const skillsData = [
  'Video Editing',
  'Front-End Development',
  'Workshop Facilitation',
  'Continous Learning',
  'SoMe Content',
  'Visual Storytelling',
  'UX/UI Design',
  'Critical Thinking',
  'Team Collaboration',
  'AI Tool Integration',
];

const { stageRef: skillsStage, setTagRef: setSkillTagRef } = useFallingTags(
  window.matchMedia('(max-width: 900px)').matches
    // Phone: wait until the visitor has scrolled down to the section (it must be
    // well inside the screen), then let the tags fall in just above the pile.
    ? { deferUntilVisible: true, startEarlyBy: -0.3, stagger: 45, spawnAbove: 160 }
    // Desktop: start early so tags have landed before the section is reached.
    : { deferUntilVisible: true, startEarlyBy: 1.2, stagger: 60 }
);

// Mixed palette, same colors as the hero tags — not all lima.
const SKILL_COLORS = [
  { bg: 'var(--lima)',     color: 'var(--bordeaux)' },
  { bg: 'var(--bordeaux)', color: 'var(--lima)'     },
  { bg: 'var(--brown)',    color: 'var(--lima)'     },
  { bg: 'var(--pink)',     color: 'var(--bordeaux)' },
];
const skillStyle = (index) => {
  const { bg, color } = SKILL_COLORS[index % SKILL_COLORS.length];
  return { backgroundColor: bg, color };
};

// ─── TOOLTIP ─────────────────────────────────────────────
const activePopUp      = ref(false);
const activeObjectText = ref('');
const tooltipStyle     = ref({ top: '0px', left: '0px' });

const openNote = (text, event) => {
  event.stopPropagation();
  if (activePopUp.value && activeObjectText.value === text) {
    activePopUp.value = false;
    return;
  }
  activeObjectText.value = text;
  activePopUp.value = true;
  const xOffset = event.clientX > window.innerWidth / 2 ? -300 : 20;
  tooltipStyle.value = {
    top:  `${event.clientY - 50}px`,
    left: `${event.clientX + xOffset}px`,
  };
};

const closeNote = () => { activePopUp.value = false; };

const emailCopied = ref(false);
const copyEmail = () => {
  navigator.clipboard.writeText('vrotondaro@hotmail.com');
  emailCopied.value = true;
  setTimeout(() => { emailCopied.value = false; }, 2000);
};

</script>

<template>
  <div class="about-page" @click="closeNote">

    <!-- ─── ABOUT ME ─────────────────────────────────────── -->
    <section class="about-section" id="about">
      <div class="about-inner">
        <div class="about-left">
          <img src="/img/valpolaroid.png" alt="Valen Rotondaro" class="about-photo" />
          <div class="about-sticker">
            <span class="sticker-text">HOLA!</span>
            <img src="/img/flechaabout.png" alt="" class="about-hola-arrow" />
          </div>
          <img src="/img/locationnote.png" alt="" class="about-locationnote" />
          <router-link to="/cv">
            <img src="/img/cvnote.png" alt="My CV" class="about-cvnote" />
          </router-link>
          <img src="/img/collage.png" alt="" class="about-star" />
        </div>
        <div class="about-right">
  <h2 class="about-title">Hi there! I'm <span class="about-title-pink">Valen</span></h2>
  <p class="about-desc">
    Driven by a fascination with human connection, I combine my sociology roots with multimedia design to bridge analytical thinking and empathy. I don't just build screens, I create warm, intuitive, and inclusive experiences designed for real people.
  </p>
</div>
      </div>
    </section>

    <!-- ─── BEYOND PIXELS ────────────────────────────────── -->
    <section class="beyond-section">
      <h2 class="beyond-title">Beyond pixels and prototypes, I love...</h2>
      <div class="beyond-grid">
        <div class="beyond-obj b-spotify"
          :class="{ 'is-playing': isPlaying }"
          @mouseenter="playMusic"
          @mouseleave="pauseMusic"
          @click.stop="openNote('This is a song from one of my favorite movies, Amélie. If you haven\'t seen it, I highly recommend it, it\'s pure beauty.', $event)">
          <img src="/img/spotify.png" alt="Spotify" style="width:100%; height:auto;" />
          <audio ref="audioPlayer" src="/audio/comptinedunautreete.mp3" preload="auto" loop></audio>
        </div>
        <img src="/img/pastafrola.png" alt="Pastafrola" class="beyond-obj b-pie"
          @click.stop="openNote('This is my favorite cake! It is called Pastafrola and my grandma used to make the best one!', $event)" />
        <div class="beyond-obj b-lamp"
          @mouseenter="activateLamp"
          @mouseleave="deactivateLamp"
          @click.stop="openNote('Denmark sparked my love for lamps ✴︎ I\'m obsessed with Danish design.', $event)">
          <div class="lamp-head-container">
            <img src="/img/lampitradition.png" alt="Lamp" style="width:100%; height:auto; position:relative; z-index:5;" />
            <div class="light-glow" :class="{ 'is-lit': isLampOn }"></div>
          </div>
          <audio ref="lampSound" src="/audio/lampon.mp3" preload="auto"></audio>
        </div>
        <img src="/img/sagradafamilia.png" alt="Photo" class="beyond-obj b-photo"
          @click.stop="openNote('This is a photo of my Sagrada Familia, from that Europe trip we dreamed about for so long.', $event)" />
        <div class="beyond-obj b-notebook"
          @click.stop="openNote('I found this word search and it highlights some of my most important values, the ones I choose every day even when no one is watching.', $event)">
          <img src="/img/moleskine.png" alt="Notebook" />
          <img src="/img/sopadeletras.png" alt="Wordsearch" class="b-wordsearch" />
        </div>
        <img src="/img/passport.png" alt="Passport" class="beyond-obj b-passport"
          @click.stop="openNote('I am from Argentina! I have dual citizenship because my grandma is Italian, but I was born in Buenos Aires ✈︎', $event)" />
        <img src="/img/lego.png" alt="Lego" class="beyond-obj b-lego"
          @click.stop="openNote('I\'m a Lego fan, I am collecting the entire botanical collection ❀', $event)" />
        <img src="/img/candles.png" alt="Candles" class="beyond-obj b-candles"
          @click.stop="openNote('I always have colorful candles at home!', $event)" />
        <img src="/img/tijeraroja.png" alt="Scissors" class="beyond-obj b-scissors"
          @click.stop="openNote('I always carry scissors with me, you never know when a collage might want to be born ✄', $event)" />
        <img src="/img/cafeamarillo.png" alt="Coffee" class="beyond-obj b-coffee"
          @click.stop="openNote('I\'m a huge coffee fan. On my dates with myself, I\'m always out discovering a new café in the city ☕︎', $event)" />
      </div>
    </section>

    <!-- ─── SKILLS ───────────────────────────────────────── -->
    <section class="skills-section">
     <div class="skills-content">
  <div class="skills-pile-container" ref="skillsStage">
    <span
      v-for="(skill, index) in skillsData"
      :key="skill"
      class="skill-tag"
      :style="skillStyle(index)"
      :ref="el => setSkillTagRef(el, index)"
    >{{ skill }}</span>
  </div>

  <h2 class="skills-heading">I bring a diverse skillset to the table!</h2>
</div>
    </section>

    <!-- ─── CV / VIDEO ───────────────────────────────────── -->
    <section class="cv-section">
      <div class="cv-inner">
        <div class="cv-left">
          <h2 class="cv-title">Curious to learn more about my background?</h2>
          <div class="cv-arrow-wrap">
            <span class="cv-check">CHECK OUT MY CV VIDEO</span>
            <img src="/img/flechaabout.png" alt="" class="cv-arrow" />
          </div>
        </div>
        <div class="cv-right">
          <div class="cv-mac-wrap">
            <img src="/img/mockupmac.png" alt="Macbook mockup" class="cv-mac" />
            <div class="cv-video-frame">
              <iframe
                src="https://www.youtube.com/embed/RIos_-p8gA8"
                title="Get to know me better"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── CONTACT ──────────────────────────────────────── -->
    <section class="contact-section" id="contact">
      <div class="contact-inner">
        <div class="contact-left">
          <p class="contact-sub">If my work made sense</p>
          <h2 class="contact-title">Let's talk!</h2>
          <div class="contact-links">
  <a href="https://www.linkedin.com/in/valentinarotondaro/" target="_blank" class="contact-social">↗ LinkedIn</a>
  <a href="https://www.instagram.com/valenrotondaro/" target="_blank" class="contact-social">↗ Instagram</a>
  <div class="contact-email-wrap">
    <a href="mailto:vrotondaro@hotmail.com" class="contact-email">vrotondaro@hotmail.com</a>
    <button class="copy-btn" @click.stop="copyEmail" :class="{ copied: emailCopied }">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
    </button>
  </div>
</div>
        </div>
        <div class="contact-right">
          <img src="/img/valpolaroid.png" alt="Valen" class="contact-photo" />
          <div class="contact-sticker">
            <span class="contact-sticker-text">GREAT THINGS CAN HAPPEN <br> WITH A SIMPLE "HELLO!"</span>
          </div>
          <img src="/img/flechaabout.png" alt="" class="contact-hola-arrow" />
          <img src="/img/locationnote.png" alt="" class="contact-locationnote" />
          <a href="/cv" target="_blank">
            <img src="/img/cvnote.png" alt="My CV" class="contact-cvnote" />
          </a>
          <img src="/img/collage.png" alt="" class="contact-collage" />
        </div>
      </div>
    </section>

    <!-- ─── TOOLTIP ──────────────────────────────────────── -->
    <transition name="pop-fade">
      <div v-if="activePopUp" class="object-tooltip" :style="tooltipStyle">
        <div class="tooltip-content">
          <button class="close-tooltip-btn" @click.stop="closeNote">×</button>
          <p>{{ activeObjectText }}</p>
        </div>
      </div>
    </transition>

  </div>
</template>

<style scoped>

/* ─── BASE ──────────────────────────────────────────────── */
.about-page {
  font-family: 'BethanyElingston', sans-serif;
  background-color: #fff;
  color: black;
  overflow-x: clip;
}

/* ─── ABOUT ME ──────────────────────────────────────────── */
.about-section {
  padding: 60px 5%;
}

.about-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 420px 1fr;
  gap: 60px;
  align-items: center;
}

.about-left {
  position: relative;
  width: 420px;
  margin-top: 20px;
  height: 520px;
}

.about-photo {
  position: absolute;
  width: 260px;
  height: 280px;
  object-fit: cover;
  display: block;
  top: 60px;
  left: 20px;
  z-index: 2;
  transform: rotate(-5deg);
}

.about-sticker {
  position: absolute;
  top: -40px;
  left: 5px;
  background: transparent;
  border: none;
  box-shadow: none;
  display: flex;
  align-items: center;
  gap: 8px;
  z-index: 5;
  white-space: nowrap;
  transform: rotate(-5deg);
}

.sticker-text {
  font-family: 'MyFont', sans-serif !important;
  font-size: 70px;
  letter-spacing: 0.04em;
  color: black;
  text-transform: uppercase;
}

.about-hola-arrow {
  position: absolute;
  width: 50px;
  height: auto;
  top: 65px;
  left: -45px;
  z-index: 5;
  transform: rotate(290deg);
}

.about-locationnote {
  position: absolute;
  width: 180px;
  height: auto;
  top: 49px;
  right: -8px;
  z-index: 1;
  transform: rotate(5deg);
}

.about-cvnote {
  position: absolute;
  width: 200px;
  height: auto;
  top: 255px;
  left: -70px;
  z-index: 1;
  transform: rotate(-4deg);
  transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  cursor: pointer;
}

.about-cvnote:hover {
  transform: rotate(-10deg)  !important;
}

.about-star {
  position: absolute;
  width: 120px;
  height: auto;
  top: 270px;
  left: 210px;
  z-index: 1;
}

.about-right {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.about-title {
  font-size: 80px;
  font-weight: 450;
  letter-spacing: -0.03em;
  margin: -100px 0 0 0;
  color: black;
}

.about-title-pink {
  color: #FF7BB5;
}

.about-desc {
  font-size: 25px;
  line-height: 1.6;
  color: black;
  text-align: justify;
  margin: 0;
  max-width: 650px;
}

/* ─── SKILLS ────────────────────────────────────────────── */
.skills-section {
  padding: 0px 5% 80px;
  background: #fff;
}

.skills-content {
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}

.skills-pile-container {
  position: relative;
  width: 100%;
  max-width: 700px;
  height: 230px;
  margin: 0 auto 20px auto;
  padding-top: 40px;
  overflow: visible;
  z-index: 50;
}

.skill-tag {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 25px;
  border-radius: 999px;
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: -0.027em;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease;
  will-change: transform;
  cursor: grab;
  touch-action: none;
}

.skill-tag:active {
  cursor: grabbing;
}

.skills-heading {
  font-family: 'BethanyElingston', sans-serif;
  font-size: 45px;
  font-weight: 450;
  color: black;
  text-align: center;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin: 40px 0 0 0;
}

/* ─── BEYOND PIXELS ─────────────────────────────────────── */
.beyond-section {
  background: #fff;
  text-align: center;
  padding:  0px 5% 0px;
}

.beyond-title {
  font-family: 'BethanyElingston', sans-serif;
  font-size: 56px;
  font-weight: 450;
  letter-spacing: -0.02em;
  color: #111;
  margin-bottom: 56px;
}

.beyond-grid {
  position: relative;
  width: 100%;
  max-width: 700px;
  height: 480px;
  margin: 0 auto;
}

.beyond-obj {
  position: absolute;
  cursor: pointer;
  transition: transform 0.25s ease;
  height: auto;
}

.beyond-obj:hover { transform: scale(1.08) rotate(3deg); z-index: 10; }

.b-scissors:hover {
  transform: scale(1.08) rotate(200deg) !important;
  z-index: 10;
}

.b-spotify   { width: 200px; top: 10px;   left: 0;      transform: rotate(0deg); }
.b-pie       { width: 115px; top: 0;      left: 220px;  transform: rotate(0deg); }
.b-lamp      { width: 90px;  top: 0;      right: 60px;  transform: rotate(0deg); }
.b-photo     { width: 120px; top: 120px;  left: 0;      transform: rotate(0deg); }
.b-notebook  { width: 200px; top: -5px;   left: 335px;  transform: rotate(-9deg); position: absolute; }
.b-notebook img:first-child { width: 100%; }
.b-wordsearch { position: absolute; width: 46px; top: 38px; left: 110px; transform: rotate(7deg); }
.b-passport  { width: 110px; top: 115px;  left: 230px;  transform: rotate(-20deg); }
.b-lego      { width: 190px; top: 140px;  left: 350px;  transform: rotate(-3deg); }
.b-candles   { width: 60px;  top: 120px;  left: 150px;  transform: rotate(0deg); }
.b-scissors  { width: 130px; top: 160px;  right: -25px; transform: rotate(220deg); }
.b-coffee    { width: 90px;  top: 50px;   right: -40px; transform: rotate(10deg); }

.lamp-head-container { position: relative; width: 100%; }

.light-glow {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(255,235,59,0.8) 0%, rgba(255,235,59,0) 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 1;
  border-radius: 50%;
}

.is-lit { opacity: 1; }

/* ─── CV SECTION ────────────────────────────────────────── */
.cv-section {
  background: #fff;
  padding: 60px 5% 80px;
}

.cv-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.cv-title {
  font-family: 'BethanyElingston', sans-serif;
  font-size: 52px;
  font-weight: 450;
  letter-spacing: -0.02em;
  line-height: 1.15;
  color: #111;
  margin: 0 0 24px 0;
  max-width: 420px;
}

.cv-arrow-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.cv-check {
  font-family: 'MyFont', sans-serif !important;
  text-transform: uppercase;
  font-size: 55px;
  color: black;
  margin-top: 10px;
  margin-left: 80px;
  text-align: center !important;
}

.cv-arrow {
  width: 80px;
  height: auto;
  transform: rotate(210deg);
  margin-top: 45px;
}

.cv-mac-wrap {
  position: relative;
  display: inline-block;
  width: 100%;
}

.cv-mac { width: 100%; height: auto; display: block; }

.cv-video-frame {
  position: absolute;
  top: 3.5%;
  left: 2.5%;
  width: 95%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 4px;
}

.cv-video-frame iframe { width: 100%; height: 100%; }

/* ─── CONTACT ───────────────────────────────────────────── */
.contact-section {
  padding: 0;
  margin: 0;
  background: #fff;
}

.contact-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.contact-left {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-sub {
  font-size: 24px;
  color: black;
  margin: 0;
}

.contact-title {
  font-family: 'BethanyElingston', sans-serif;
  font-size: 72px;
  font-weight: 400;
  letter-spacing: -0.04em;
  color: black;
  margin: 0 0 20px 0;
  line-height: 1;
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contact-email-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
}
.contact-email {
  font-size: 20px;
  color: black;
  text-decoration: none;
  font-weight: 400;
}

.contact-email::before {
  content: "↗ ";
}

.contact-social {
  font-size: 20px;
  color: #111;
  text-decoration: none;
  font-weight: 450;
  transition: color 0.2s;
}

.contact-social:hover { color: #FF7BB5; }

.copy-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  transition: transform 0.2s ease;
}

.copy-btn:hover { transform: scale(1.1); }
.copy-btn.copied svg { stroke: #D9FB60; }

.contact-right {
  position: relative;
  width: 420px;
  height: 480px;
  margin-top: 120px;
}

.contact-photo {
  position: absolute;
  width: 280px;
  height: auto;
  object-fit: contain;
  top: 60px;
  left: 20px;
  z-index: 2;
}

.contact-sticker {
  position: absolute;
  top: -40px;
  left: 10px;
  background: transparent;
  border: none;
  box-shadow: none;
  display: flex;
  align-items: center;
  z-index: 5;
  white-space: nowrap;
  transform: rotate(-2deg);
}

.contact-sticker-text {
  font-family: 'MyFont', sans-serif !important;
  font-size: 60px;
  letter-spacing: 0.04em;
  line-height: 0.5;
  color: black;
  text-transform: uppercase;
}

.contact-hola-arrow {
  position: absolute;
  width: 80px;
  height: auto;
  top: 55px;
  left: -55px;
  z-index: 5;
  transform: rotate(290deg);
}

.contact-locationnote {
  position: absolute;
  width: 180px;
  height: auto;
  top: 70px;
  right: -20px;
  z-index: 1;
  transform: rotate(5deg);
}

.contact-cvnote {
  position: absolute;
  width: 180px;
  height: auto;
  top: 325px;
  left: -60px;
  z-index: 1;
  transform: rotate(-1deg);
  transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  cursor: pointer;
}

.contact-cvnote:hover {
  transform: rotate(-10deg)  !important;
}

.contact-collage {
  position: absolute;
  width: 130px;
  height: auto;
  top: 320px;
  right: 50px;
  z-index: 1;
  transform: rotate(3deg);
}

/* ─── TOOLTIP ───────────────────────────────────────────── */
.object-tooltip {
  position: fixed;
  width: 320px;
  background: #fff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.12);
  z-index: 10000;
}

.tooltip-content { position: relative; }

.tooltip-content p {
  margin: 0;
  font-size: 15px;
  line-height: 1.5;
  color: #111;
  padding-right: 20px;
}

.close-tooltip-btn {
  position: absolute;
  top: -20px;
  right: -10px;
  background: none;
  border: none;
  font-size: 20px;
  color: #999;
  cursor: pointer;
  padding: 2px;
}

.close-tooltip-btn:hover { color: #FF7BB5; }

.pop-fade-enter-active,
.pop-fade-leave-active { transition: all 0.3s ease; }
.pop-fade-enter-from,
.pop-fade-leave-to { opacity: 0; transform: scale(0.9) translateY(10px); }

/* ─── RESPONSIVE ────────────────────────────────────────── */
@media (max-width: 900px) {
  /* ABOUT ME */
  .about-section {
    padding: 40px 5%;
  }
.about-inner {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.about-right {
  display: contents;
}

.about-title {
  order: 1;
}

.about-left {
  order: 2;
}

.about-desc {
  order: 3;
  text-align: justify;
  margin-top: -50px;
  margin-bottom: 5px;
}
.about-left {
    position: relative;
    width: 290px;
    height: 372px;
    margin: 0 auto;
    align-items: center;
    text-align: center;
    justify-content: center;
  }

  .about-photo {
    width: 185px;
    height: 200px;
    top: 43px;
    left: 14px;
  }

  .about-sticker {
    top: -29px;
    left: 4px;
  }

  .sticker-text {
    font-size: 50px;
  }

  .about-hola-arrow {
    width: 36px;
    top: 46px;
    left: -32px;
  }

  .about-locationnote {
    width: 129px;
    top: 35px;
    right: -6px;
  }

  .about-cvnote {
    width: 143px;
    top: 182px;
    left: -50px;
  }

  .about-star {
    width: 86px;
    top: 193px;
    left: 150px;
  }

  .about-title {
    font-size: 40px;
    margin-top: -10px;
    text-align: center;
  }

  .skills-section {
    padding: 20px 5% 30px;
  }
.skill-tag {
  font-size: 13px;
  padding: 8px 16px;
}

.skills-content {
  display: flex;
  flex-direction: column;
}

.skills-pile-container {
  height: 250px;
  padding-top: 0;
  margin-bottom: 10px;
}

.skills-heading {
  margin-top: 0 !important;
  padding-top: 0;
}

.beyond-grid {
  display: none;
}

.beyond-title {
  display: none;
}
  /* CV SECTION */

  .cv-section {
    padding: 0px 5% 60px;
  }
  .cv-inner {
    grid-template-columns: 1fr;
    gap: 10px;
  }
.cv-title {
    font-size: 32px;
    font-weight: 450;
    text-align: center;
    margin: 0 auto -10px auto;
    max-width: 100%;
  }

  .cv-arrow-wrap {
    justify-content: center;
    padding: -20px 0 0 0;
  }

  .cv-check {
    font-size: 32px;
    margin-left: 0;
  }

  .cv-arrow {
    width: 50px;
    margin-top: 20px;
    transform: scaleX(-1) rotate(360deg);
  }
  /* CONTACT */
  .contact-links {
    display: none;
  }

  .contact-inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .contact-title {
    font-size: 52px;
    text-align: center;
  }

  .contact-left {
    align-items: center;
    text-align: center;
  }

  .contact-right {display: none;
  }

  .contact-photo {
    width: 210px;
    top: 55px;
    left: 15px;
  }

  .contact-sticker {
    top: -20px;
    left: 5px;
  }

  .contact-sticker-text {
    font-size: 34px;
  }

  .contact-hola-arrow {
    width: 55px;
    top: 45px;
    left: -35px;
  }

  .contact-locationnote {
    width: 130px;
    top: 55px;
    right: -15px;
  }

  .contact-cvnote {
    width: 130px;
    top: 250px;
    left: -30px;
  }

  .contact-collage {
    width: 95px;
    top: 245px;
    right: 30px;
  }
  .contact-email {
  font-size: 15px;
}

.contact-social {
  font-size: 15px;
}
.copy-btn svg {
  width: 13px;
  height: 13px;
}
}

@media (max-width: 500px) {
  .about-title {
    font-size: 36px;
    text-align: center; 
  }

  .about-left {
    width: 260px;
    height: 322px;
  }

  .about-photo {
    width: 161px;
    height: 173px;
    top: 37px;
    left: 12px;
  }

  .about-sticker {
    top: -25px;
    left: 3px;
  }

  .about-hola-arrow {
    width: 31px;
    top: 40px;
    left: -28px;
  }

  .about-locationnote {
    width: 111px;
    top: 30px;
    right: -5px;
  }

  .about-cvnote {
    width: 124px;
    top: 158px;
    left: -43px;
  }

  .about-star {
    width: 74px;
    top: 167px;
    left: 130px;
  }

  .sticker-text {
    font-size: 34px;
  }

  .about-desc {
    font-size: 15px;
  }
.beyond-grid {
    display: none;
  }

  .beyond-title {
display: none;
  }

  .skills-heading {
    font-size: 24px;
  }

  .cv-title {
    font-size: 26px;
    text-align: center; 
  }

  .cv-check {
    font-size: 24px;
    text-align: center !important; 
  }

  .contact-title {
    font-size: 38px;
  }

  .contact-right {
    width: 260px;
    height: 360px;
  }

  .contact-photo {
    width: 170px;
    top: 45px;
    left: 10px;
  }

  .contact-sticker-text {
    font-size: 26px;
  }

  .contact-hola-arrow {
    width: 45px;
    top: 35px;
    left: -25px;
  }

  .contact-locationnote {
    width: 105px;
    top: 45px;
    right: -10px;
  }

  .contact-cvnote {
    width: 105px;
    top: 205px;
    left: -20px;
  }

  .contact-collage {
    width: 78px;
    top: 200px;
    right: 20px;
  }
  .contact-email {
  font-size: 13px;
}

.contact-social {
  font-size: 13px;
}
.copy-btn svg {
  width: 11px;
  height: 11px;
}
}
</style>