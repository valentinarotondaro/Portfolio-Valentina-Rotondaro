<script setup>
import { ref, computed } from 'vue';
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

// ─── WORKS FILTERS ───────────────────────────────────────
const filters = [
  { label: 'All',              value: 'all'             },
  { label: 'UX/UI',            value: 'UX/UI'           },
  { label: 'Web Design',       value: 'Web Design'      },
  { label: 'Visual Design',    value: 'Visual Design'   },
  { label: 'Content Creation', value: 'Content Creation'},
];

const projectsList = [
  {
    title: 'Under',
    description: 'Identity design for the Syddansk Erhvervsakademi student bar.',
    tags: ['Visual Design'],
    image: '/img/underhorizontal.png',
    link: '/portfolio/under',
  },
  {
    title: 'Itinero',
    description: 'A mobile application designed to simplify and enhance travel experiences.',
    tags: ['UX/UI'],
    image: '/img/itineroapp.png',
    link: '/portfolio/itinero',
  },
  {
    title: 'SoMe Content creation',
    description: 'Strategy and creation of engaging content for Instagram and TikTok.',
    tags: ['Content Creation'],
    image: '/img/someproject.png',
    link: '/portfolio/content-creation',
  },
  {
    title: 'Raíz y Sazón',
    description: 'A dedicated site focused on South American vegan recipes.',
    tags: ['UX/UI', 'Web Design'],
    image: '/img/raizysazonproject.png',
    link: null,
  },
  {
    title: 'Amada amiga',
    description: 'Unique wine label design capturing the essence of a beloved friend.',
    tags: ['Visual Design'],
    image: '/img/amadaamigaproject.png',
    link: '/portfolio/amada-amiga',
  },
  {
    title: 'Lic. Aranda Coria',
    description: 'Brand identity design for a psichologist, reflecting trust and empathy.',
    tags: ['Visual Design'],
    image: '/img/arandacoria.png',
    link: '/portfolio/lic-aranda',
  },
];

const activeFilter = ref('all');

const filteredProjects = computed(() =>
  activeFilter.value === 'all'
    ? projectsList
    : projectsList.filter(p => p.tags.includes(activeFilter.value))
);

const isComingSoon = (project) => project.link === null;



// ─── PLAYGROUND TOOLTIP ──────────────────────────────────
const activePopUp   = ref(false);
const activeObjectText = ref('');
const tooltipStyle  = ref({ top: '0px', left: '0px' });

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
  <div class="landing" @click="closeNote">

   

    <!-- ─── HERO ─────────────────────────────────────────── -->
    <section class="hero">
  <div class="hero-top-notes">
    <span class="hi-label">HI! I'M VALEN</span>
    <img src="/img/herostar.png" alt="" class="hero-deco--star" />
  </div>

  <h1 class="hero-headline">
    From pixels to paper, I design experiences that connect.
  </h1>

  <div class="hero-bottom-notes">
    <div class="hero-deco-wrap">
      <img src="/img/washitape.png"  alt="" class="deco-washitape" />
      <img src="/img/heroscrap.png" alt="" class="hero-deco--scrap" />
     <img src="/img/smileyface.png" alt="" class="deco-smiley" />
      <img src="/img/starpink.png"   alt="" class="deco-star-br" />
      <span class="deco-text deco-text--scrap">WELCOME!</span>
    </div>
    <div class="hero-deco-wrap">
      <img src="/img/heronote.png" alt="" class="hero-deco--note" />
      <span class="deco-text deco-text--note">UX UI DESIGNER</span>
    </div>
  </div>

  <img src="/img/flechaabajo.png" alt="scroll down" class="hero-arrow" />

  <div class="hero-categories">
    <router-link to="/Portfolio/" class="hero-cat">
      <div class="cat-img-wrap">
        <img src="/img/macfigma.png" alt="Multimedia Design" class="cat-img" />
        <img src="/img/figma.png" alt="" class="cat-img-extra cat-extra--figma" />
      </div>
      <span>Multimedia<br>Design</span>
    </router-link>
    <router-link to="/content-creation" class="hero-cat">
      <div class="cat-img-wrap">
        <img src="/img/camera.png" alt="Content Creation" class="cat-img" />
        <img src="/img/micpink.png" alt="" class="cat-img-extra cat-extra--mic" />
      </div>
      <span>Content<br>Creation</span>
    </router-link>
    <router-link to="/collage-workshops" class="hero-cat">
      <div class="cat-img-wrap">
        <img src="/img/collage.png" alt="Collage & Crafts" class="cat-img cat-img--collage" />
        <img src="/img/tijeraroja.png" alt="" class="cat-img-extra cat-extra--scissors" />
      </div>
      <span>Collage<br>&amp; Crafts</span>
    </router-link>
  </div>
</section>

    <!-- ─── RECENT WORKS ─────────────────────────────────── -->
    <section class="works-section" id="works">
      <h2 class="section-title">Recent Works</h2>

      <div class="filter-group">
        <button
          v-for="filter in filters"
          :key="filter.value"
          class="filter-tag"
          :class="{ 'btn-active': activeFilter === filter.value }"
          @click="activeFilter = filter.value"
        >
          {{ filter.label }}
        </button>
      </div>

      <div class="projects-grid">
        <div
          v-for="project in filteredProjects"
          :key="project.title"
          class="project-card"
          :style="{ cursor: isComingSoon(project) ? 'default' : 'pointer' }"
          @click="!isComingSoon(project) && $router.push(project.link)"
        >
          <div class="project-image-container">
            <img :src="project.image" :alt="project.title" class="project-image" />
          </div>
          <div class="project-details">
            <h3 class="project-name">{{ project.title }}</h3>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-footer">
              <div class="project-tags">
                <span v-for="tag in project.tags" :key="tag" class="project-tag-pill">{{ tag }}</span>
              </div>
              <div v-if="isComingSoon(project)" class="status-badge">Coming Soon</div>
              <router-link v-else :to="project.link" class="btn-lime btn-small">View Project</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── ABOUT ME ─────────────────────────────────────── -->
    <section class="about-section" id="about">
  <div class="about-inner">
    <div class="about-left">
      <!-- Foto -->
      <img src="/img/valpolaroid.png" alt="Valen Rotondaro" class="about-photo" />
      
      <!-- HOLA sticker arriba derecha -->
      <div class="about-sticker">
        <span class="sticker-text">HOLA!</span>
        <img src="/img/flechaabout.png" alt=""class="about-hola-arrow" />
      </div>

      <!-- locationnote detrás derecha -->
      <img src="/img/locationnote.png" alt="" class="about-locationnote" />

      <!-- cvnote abajo izquierda -->
      <router-link to="/cv">
  <img src="/img/cvnote.png" alt="My CV" class="about-cvnote" />
</router-link>

      <!-- starpink -->
      <img src="/img/collage.png" alt="" class="about-star" />
    </div>

    <div class="about-right">
      <h2 class="about-title">About me</h2>
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
        <!-- Spotify -->
<div class="beyond-obj b-spotify"
  :class="{ 'is-playing': isPlaying }"
  @mouseenter="playMusic"
  @mouseleave="pauseMusic"
  @click.stop="openNote('This is a song from one of my favorite movies, Amélie. If you haven\'t seen it, I highly recommend it, it\'s pure beauty.', $event)">
  <img src="/img/spotify.png" alt="Spotify" style="width:100%; height:auto;" />
  <audio ref="audioPlayer" src="/audio/comptinedunautreete.mp3" preload="auto" loop></audio>
</div>
        <!-- Pastafrola -->
        <img src="/img/pastafrola.png" alt="Pastafrola" class="beyond-obj b-pie"
          @click.stop="openNote('This is my favorite cake! It is called Pastafrola and my grandma used to make the best one!', $event)" />
        <!-- Lámpara -->
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
        <!-- Foto grupal -->
        <img src="/img/sagradafamilia.png" alt="Photo" class="beyond-obj b-photo"
          @click.stop="openNote('This is a photo of my Sagrada Familia, from that Europe trip we dreamed about for so long.', $event)" />
        <!-- Notebook -->
        <div class="beyond-obj b-notebook"
          @click.stop="openNote('I found this word search and it highlights some of my most important values, the ones I choose every day even when no one is watching.', $event)">
          <img src="/img/moleskine.png" alt="Notebook" />
          <img src="/img/sopadeletras.png" alt="Wordsearch" class="b-wordsearch" />
        </div>
        <!-- Passport -->
        <img src="/img/passport.png" alt="Passport" class="beyond-obj b-passport"
          @click.stop="openNote('I am from Argentina! I have dual citizenship because my grandma is Italian, but I was born in Buenos Aires ✈︎', $event)" />
        <!-- Lego -->
        <img src="/img/lego.png" alt="Lego" class="beyond-obj b-lego"
          @click.stop="openNote('I\'m a Lego fan, I am collecting the entire botanical collection ❀', $event)" />
        <!-- Candles -->
        <img src="/img/candles.png" alt="Candles" class="beyond-obj b-candles"
          @click.stop="openNote('I always have colorful candles at home!', $event)" />
        <!-- Scissors -->
        <img src="/img/tijeraroja.png" alt="Scissors" class="beyond-obj b-scissors"
          @click.stop="openNote('I always carry scissors with me, you never know when a collage might want to be born ✄', $event)" />
        <!-- Cafe -->
          <img src="/img/cafeamarillo.png" alt="Coffee" class="beyond-obj b-coffee"
  @click.stop="openNote('I\'m a huge coffee fan. On my dates with myself, I\'m always out discovering a new café in the city ☕︎', $event)" />
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
    <span class="contact-sticker-text">GREAT THINGS CAN HAPPEN <br> WITH A SIMPLE “HELLO!”</span>
  </div>
  <img src="/img/flechaabout.png" alt="" class="contact-hola-arrow" />

  <img src="/img/locationnote.png" alt="" class="contact-locationnote" />
<a href="/cv" target="_blank">
  <img src="/img/cvnote.png" alt="My CV" class="contact-cvnote" />
</a>  <img src="/img/collage.png" alt="" class="contact-collage" />
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


/* ─── RESET / BASE ──────────────────────────────────────── */
.landing {
  font-family: 'BethanyElingston', sans-serif;
  background-color: #fff;
  color: #111;
  overflow-x: hidden;
}



/* ─── HERO ──────────────────────────────────────────────── */
.hero {
  padding: 40px 5% 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 32px;
}

.hero-top-notes {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.hi-label {
  font-family: 'MyFont', sans-serif;
  font-size: 70px;
  letter-spacing: 0.06em;
  color: #111;
  text-transform: uppercase;
  margin-bottom: -110px;
}

.hero-deco--star {
  width: 100px;
  height: auto;
  margin-top: -20px;
  margin-left: -400px;
}

.deco-smiley {
  position: absolute;
  width: 45px;
  top: -65px;
  right: -550px;
}

.deco-star-br {
  position: absolute;
  width: 150px;
  bottom: 30px;
  right: -180px;
}
.deco-washitape {
  position: absolute;
  width: 140px;
  top: -260px;
  left: -120px;
  transform: rotate(-8deg);
}


.hero-headline {
  font-family: 'BethanyElingston', sans-serif;
  font-size: clamp(52px, 4vw, 76px);
  font-weight: 400;
  letter-spacing: -0.03em;
  line-height: 1.3;
  color: #111;
  max-width: 900px;
  margin: 0;
}

.hero-bottom-notes {
  position: relative;
  width: 100%;
  height: 220px;
  margin-bottom: -160px;
  padding-bottom: -20px;
}

.hero-deco-wrap {
  position: absolute;
  display: inline-block;
}

.hero-deco-wrap:first-child {
  left: 25%;
  top: -25px;
}

.hero-deco-wrap:last-child {
  right: 28%;
  top: -120px;
}

.hero-deco--scrap {
  width: 180px;
  height: auto;
  display: block;
  transform: rotate(-5deg);
}

.hero-deco--note {
  width: 200px;
  height: auto;
  display: block;
  transform: rotate(10deg);
}

.deco-text {
  position: absolute;
  font-family: 'MyFont', sans-serif;
  text-transform: uppercase;
  color: #111;
  pointer-events: none;
  white-space: nowrap;
}

.deco-text--scrap {
  font-size: 35px;
  top: 50%;
  left: 45%;
  transform: translate(-50%, -50%) rotate(-5deg);
}

.deco-text--note {
  font-size: 35px;
  top: 51%;
  left: 53%;
  text-align: center;
  transform: translate(-50%, -50%) rotate(7deg);
}

.hero-arrow {
  width: 90px;
  height: auto;
}

/* ─── HERO CATEGORIES ───────────────────────────────────── */
.hero-categories {
  display: flex;
  gap: 100px;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  padding-top: 10px;
}

.hero-cat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.hero-cat:hover { transform: translateY(-4px); }

.hero-cat span {
  font-size: 25px;
  font-weight: 400;
  color: #111;
  text-align: center;
  line-height: 1.3;
}

.cat-img-wrap {
  position: relative;
  width: 220px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cat-img {
  width: 220px;
  height: 200px;
  object-fit: contain;
}

.cat-img--collage {
  width: 240px;
  height: 210px;
}

.cat-img-extra {
  position: absolute;
  height: auto;
}

.cat-extra--figma {
  width: 70px;
  bottom: 30px;
  right: 5px;
}

.cat-extra--mic {
  width: 80px;
  bottom: 10px;
  right: -10px;
}

.cat-extra--scissors {
  width: 100px;
  bottom: 0;
  right: -20px;
  transform: rotate(-20deg);
}
/* ─── RECENT WORKS ──────────────────────────────────────── */
.works-section {
  padding: 80px 5%;
  background: #fff;
}

.section-title {
  font-family: 'BethanyElingston', sans-serif;
  font-size: 38px;
  font-weight: 400;
  letter-spacing: -0.02em;
  text-align: center;
  margin-bottom: 36px;
  color: #111;
}

.filter-group {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 48px;
  flex-wrap: wrap;
}

.filter-tag {
  background: transparent;
  border: 1.5px solid #111;
  padding: 8px 22px;
  font-size: 14px;
  font-weight: 400;
  border-radius: 25px;
  color: black;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'BethanyElingston', sans-serif;
}

.filter-tag:hover { background: #f0f0f0; }
.filter-tag.btn-active { background: #D9FB60; border-color: #D9FB60; font-weight: 500;
 }

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
}

.project-card {
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease;
  background: #fff;
}

.project-card:hover { box-shadow: 0 12px 28px rgba(0,0,0,0.08); }

.project-image-container {
  width: 100%;
  height: 300px;
  overflow: hidden;
  background: #f9f9f9;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}

.project-card:hover .project-image { transform: scale(1.05); }

.project-details {
  padding: 22px 26px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.project-name {
  font-size: 22px;
  font-weight: 500;
  color: #111;
  margin: 0;
}

.project-description {
  font-size: 15px;
  color: #444;
  line-height: 1.5;
  margin: 0;
}

.project-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.project-tags { display: flex; gap: 6px; flex-wrap: wrap; }

.project-tag-pill {
  background: #111;
  color: #fff;
  font-size: 11px;
  padding: 5px 12px;
  border-radius: 50px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.btn-lime {
  display: inline-block;
  padding: 10px 24px;
  background: #D9FB60;
  color: #111;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 500;
  font-size: 14px;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  font-family: 'BethanyElingston', sans-serif;
}

.btn-lime:hover {
  transform: scale(1.04);
  box-shadow: 0 8px 20px rgba(217,251,96,0.4);
}

.btn-small { padding: 8px 18px; font-size: 13px; }

.status-badge {
  padding: 8px 18px;
  background: #f5f5f5;
  color: #999;
  font-size: 13px;
  border-radius: 50px;
  font-weight: 400;
}



/* ─── ABOUT ME ──────────────────────────────────────────── */
.about-section {
  padding: 80px 5%;
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
  font-family: 'MyFont', sans-serif;
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

.sticker-arrow {
  width: 60px;
  height: auto;
  display: block;
  left: -20px;
  opacity: 100%;
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
  bottom: 20px;
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
  bottom: 60px;
  top: 270px;
  left: 210px;
  z-index: 1;
  background: none;
}

.about-right {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.about-title {
  font-family: 'BethanyElingston', sans-serif;
  font-size: 56px;
  font-weight: 400;
  letter-spacing: -0.03em;
  margin: -100px 0 0 0;
  color: #111;
}

.about-desc {
  font-size: 25px;
  line-height: 1.6;
  color:black;
  text-align: justify;
  margin: 0;
  max-width: 650px;
}

@media (max-width: 900px) {
  .about-inner {
    grid-template-columns: 1fr;
  }
  .about-left {
    width: 100%;
    height: 420px;
  }
  .about-photo {
    position: absolute;
    width: 300px;
    height: 420px;
    top: 40px;
    left: 10px;
    z-index: 2;
    display: block;  }
  .about-locationnote { width: 130px; right: 10px; }
  .about-cvnote { width: 130px; }
  .about-title { font-size: 40px; }
  .about-desc { font-size: 16px; }
}
/* ─── BEYOND PIXELS ─────────────────────────────────────── */
.beyond-section {
  background: #fff;
  text-align: center;
}

.beyond-title {
  font-family: 'BethanyElingston', sans-serif;
  font-size: 56px;
  font-weight: 400;
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
/* Clean mode positions matching Playground clean layout */
.b-spotify   { width: 200px; top: 10px;    left: 0;    transform: rotate(0deg); }
.b-pie       { width: 115px; top: 0;    left: 220px; transform: rotate(0deg); }
.b-lamp      { width: 90px;  top: 0;    right: 60px; transform: rotate(0deg); }
.b-photo     { width: 120px; top: 120px; left: 0;   transform: rotate(0deg); }
.b-notebook  { width: 200px; top: -5px; left: 335px; transform: rotate(-9deg); position: absolute; }
.b-notebook img:first-child { width: 100%; }
.b-wordsearch { position: absolute; width: 46px; top: 38px; left: 110px; transform: rotate(7deg); }
.b-passport  { width: 110px;  top: 115px; left: 230px; transform: rotate(-20deg); }
.b-lego      { width: 190px; top: 140px; left: 350px; transform: rotate(-3deg); }
.b-candles   { width: 60px;  top: 120px; left: 150px;  transform: rotate(0deg); }
.b-scissors  { width: 130px;  top: 160px; right: -25px; transform: rotate(220deg); }
.b-coffee { width:90px; top: 50px; right: -40px; transform: rotate(10deg); }


.lamp-head-container {
  position: relative;
  width: 100%;
}

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
}

.cv-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.cv-arrow-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.cv-arrow {
  width: 80px;
  height: auto;
  left: -20px;
  transform: rotate(210deg);
  margin-top: 45px;
}

.cv-check {
  font-family: 'MyFont';
  text-transform: uppercase;
  font-size: 60px;
  color: black;
    margin-top: 10px;
  margin-left: 80px;
  text-transform: rotate(25deg);
}

.cv-mac-wrap {
  position: relative;
  display: inline-block;
  width: 100%;
}

.cv-mac {
  width: 100%;
  height: auto;
  display: block;
}


.cv-video-frame {
  position: absolute;
  top: 3.5%;
  left: 2.5%;
  width: 95%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 4px;
}

.cv-video-frame iframe {
  width: 100%;
  height: 100%;
}

 .cv-title {
  font-family: 'BethanyElingston', sans-serif;
  font-size: 52px;
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.15;
  color: #111;
  margin: 0 0 24px 0;
  max-width: 420px;
}


/* ─── CONTACT ───────────────────────────────────────────── */
.contact-section {
  padding:0;
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
  font-weight: 400;
  transition: color 0.2s;
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



.contact-social:hover { color: #FF7BB5; }

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
  font-family: 'MyFont', sans-serif;
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

.contact-email-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
}

.copy-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  transition: transform 0.2s ease;
}

.copy-btn:hover {
  transform: scale(1.1);
}

.copy-btn.copied svg {
  stroke: #D9FB60;
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
  .hero { padding: 100px 5% 40px; }
  .hero-headline { font-size: 26px; }
  .hero-categories { gap: 32px; }
  .cat-img { width: 90px; height: 80px; }

  .projects-grid { grid-template-columns: 1fr; }
  .project-image-container { height: 220px; }

  .about-inner { grid-template-columns: 1fr; gap: 40px; }
  .about-photo { width: 220px; height: 280px; }

  .beyond-grid { height: 600px; }
  .b-spotify { width: 160px; }
  .b-notebook { width: 150px; }

  .cv-inner { grid-template-columns: 1fr; }
  .cv-title { font-size: 32px; }
  
  .contact-inner { grid-template-columns: 1fr; }
  .contact-title { font-size: 52px; }
  .contact-right { height: 260px; }
  .contact-photo { width: 160px; height: 200px; }
  .contact-phone { width: 90px; }

  .nav-links { gap: 20px; }
}

@media (max-width: 500px) {
  .nav-logo { font-size: 13px; }
  .nav-links a { font-size: 13px; }
  .hero-headline { font-size: 22px; }
  .hero-categories { gap: 20px; }
  .section-title { font-size: 28px; }
  .about-title { font-size: 36px; }
  .contact-title { font-size: 40px; }
  .beyond-grid { height: 700px; }
}


</style>