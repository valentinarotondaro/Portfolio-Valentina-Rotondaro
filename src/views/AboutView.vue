<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

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

// ─── SKILLS ──────────────────────────────────────────────
const skillsData = [
  { text: 'Video Editing',           rotate: 0,   xOffset: 0,   yOffset: 0  },
  { text: 'Front-End Development',   rotate: 0,   xOffset: 5,   yOffset: 0  },
  { text: 'Workshop Facilitation',   rotate: 0,   xOffset: 5,   yOffset: 0  },
  { text: 'Continous Learning',      rotate: 10,  xOffset: -10, yOffset: 6  },
  { text: 'SoMe Content',            rotate: -12, xOffset: 8,   yOffset: 0  },
  { text: 'Visual Storytelling',     rotate: 22,  xOffset: -25, yOffset: -10 },
  { text: 'UX/UI Design',            rotate: -20, xOffset: 0,   yOffset: -10 },
  { text: 'Critical Thinking',       rotate: 10,  xOffset: -35, yOffset: 10 },
  { text: 'Team Collaboration',      rotate: -7,  xOffset: -70, yOffset: -25 },
  { text: 'AI Tool Integration',     rotate: -10, xOffset: -15, yOffset: 0  },
];

const getFixedStyle = (index, skill) => ({
  '--index-delay': `${index * 0.15}s`,
  '--rotation':   `${skill.rotate}deg`,
  '--x-offset':   `${skill.xOffset}px`,
  '--y-offset':   `${skill.yOffset}px`,
});

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
// ANIMATION SKILLS // 
onMounted(() => {
  const container = document.querySelector('.skills-pile-container');
  if (!container) return;
  
  const tags = container.querySelectorAll('.skill-tag');
  tags.forEach(tag => {
    tag.style.opacity = '0';
    tag.style.animationPlayState = 'paused';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        tags.forEach(tag => {
          tag.style.animationPlayState = 'running';
        });
        observer.disconnect();
      }
    });
  }, { threshold: 0.2 });

  observer.observe(container);
});
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
<h2 class="about-title">Hi there! I'm <span class="about-title-pink">Valen</span></h2>          <p class="about-desc">
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
        <div class="skills-pile-container">
          <span
            v-for="(skill, index) in skillsData"
            :key="index"
            class="skill-tag"
            :style="getFixedStyle(index, skill)"
          >{{ skill.text }}</span>
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
            <div class="contact-email-wrap">
              <a href="mailto:vrotondaro@hotmail.com" class="contact-email">vrotondaro@hotmail.com</a>
              <button class="copy-btn" @click.stop="copyEmail" :class="{ copied: emailCopied }">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF7BB5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              </button>
            </div>
            <a href="https://www.linkedin.com/in/valentinarotondaro/" target="_blank" class="contact-social">↗ LinkedIn</a>
            <a href="https://www.instagram.com/valenrotondaro/" target="_blank" class="contact-social">↗ Instagram</a>
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
  display: flex;
  width: 100%;
  max-width: 700px;
  margin: 0 auto 20px auto;
  padding-top: 40px;
  min-height: 200px;
  flex-wrap: wrap-reverse;
  gap: 8px;
  align-items: center;
  justify-content: center;
}

.skill-tag {
  display: inline-block;
  background-color: #D9FB60;
  color: #111;
  padding: 10px 22px;
  border-radius: 50px;
  font-size: 18px;
  font-weight: 400;
  white-space: nowrap;
  opacity: 0;
  will-change: transform, opacity;
  animation: pileUpFixed 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.1) forwards;
  animation-delay: var(--index-delay);
  animation-play-state: paused;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.skill-tag:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

@keyframes pileUpFixed {
  0%   { opacity: 0; transform: translateY(-100px) scale(0.8); }
  100% { opacity: 1; transform: translate(var(--x-offset), var(--y-offset)) rotate(var(--rotation)); }
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
  color: #FF7BB5;
  text-decoration: none;
  font-weight: 500;
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
/* ─── RESPONSIVE ────────────────────────────────────────── */
@media (max-width: 900px) {
  /* ABOUT ME */
  .about-section {
    padding: 40px 5%;
  }

  .about-inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .about-left {
    width: 100%;
    height: 420px;
    margin: 0 auto;
  }

  .about-photo {
    width: 220px;
    height: 280px;
  }

  .about-sticker {
    top: -20px;
  }

  .sticker-text {
    font-size: 44px;
  }

  .about-hola-arrow {
    width: 36px;
    top: 50px;
    left: -30px;
  }

  .about-locationnote {
    width: 130px;
    right: 10px;
  }

  .about-cvnote {
    width: 130px;
  }

  .about-star {
    width: 80px;
    top: 220px;
    left: 160px;
  }

  .about-title {
    font-size: 40px;
    margin: 0;
  }

  .about-desc {
    font-size: 16px;
  }

  /* SKILLS */
  .skills-pile-container {
    padding-top: 20px;
    flex-wrap: wrap;
    gap: 10px;
  }

  .skill-tag {
    animation: none;
    opacity: 1;
    transform: none !important;
    font-size: 14px;
    padding: 8px 16px;
  }

  .skills-heading {
    font-size: 30px;
    white-space: normal;
    font-weight: 450;
  }

  /* BEYOND PIXELS — collage escalado a un tamaño chico manteniendo posiciones */
  .beyond-grid {
    position: relative;
    left: 50%;
    margin-left: -350px;
    margin-top: -108px;
    margin-bottom: -108px;
    transform: scale(0.55);
    transform-origin: center center;
  }

  .beyond-title {
    font-size: 34px;
    margin-bottom: 32px;
  }

  /* CV SECTION */
  .cv-inner {
    grid-template-columns: 1fr;
  }

  .cv-title {
    font-size: 32px;
    font-weight: 450;
  }

  .cv-check {
    font-size: 32px;
    margin-left: 0;
  }

  .cv-arrow {
    width: 55px;
    margin-top: 20px;
  }

  /* CONTACT */
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

  .contact-right {
    width: 320px;
    height: 420px;
    margin: 20px auto 0;
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
}

@media (max-width: 500px) {
  .about-title {
    font-size: 36px;
  }

  .sticker-text {
    font-size: 34px;
  }

  .about-desc {
    font-size: 15px;
  }

  .beyond-grid {
    margin-top: -139px;
    margin-bottom: -139px;
    transform: scale(0.42);
  }

  .beyond-title {
    font-size: 26px;
  }

  .skills-heading {
    font-size: 24px;
  }

  .cv-title {
    font-size: 26px;
  }

  .cv-check {
    font-size: 24px;
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
}
</style>