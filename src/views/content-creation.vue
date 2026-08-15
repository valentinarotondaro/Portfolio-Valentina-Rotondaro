<script setup>
import { ref } from 'vue';

const skills = [
  'Video editing',  'UGC creation',
  'Script writing', 'Color grading', 'Trend research',
];

const niches = [
  'UGC', 'Travel', 'Stationary', 'DIY', 'Experiences', 'Tutorials',
];
const nicheAngles = [-90, -30, 30, 90, 150, 210];

function scrollToCategory(name) {
  const el = document.getElementById(name.toLowerCase());
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const contentSections = [
  {
    category: 'Tutorials',
    videos: [
      "https://player.vimeo.com/video/1218497342",
      "https://player.vimeo.com/video/1218498178",
      "https://player.vimeo.com/video/1218498151",
      "https://player.vimeo.com/video/1143892207?h=6d94e8a9a5", 
    ],
  },
    {
    category: 'Stationary',
    videos: [
      "https://player.vimeo.com/video/1218498163",
      "https://player.vimeo.com/video/1218498153",
      "https://player.vimeo.com/video/1117810490?h=b2d3a3f6d4",
      "https://player.vimeo.com/video/1118512621?h=02bb452692",
      "https://player.vimeo.com/video/1117805604?h=56fde2d074",
      "https://player.vimeo.com/video/1118506149?h=bcca644131",
      "https://player.vimeo.com/video/1218498152",
      "https://player.vimeo.com/video/1218498150",
      
    ],
  },
  {
    category: 'Color Hunting',
    videos: [
      "https://player.vimeo.com/video/1218498177",
      "https://player.vimeo.com/video/1218498166",
      "https://player.vimeo.com/video/1218498164",
      "https://player.vimeo.com/video/1218498166",
    ],
  },
  {
    category: 'UGC',
    videos: [
      "https://player.vimeo.com/video/1218501591",
      "https://player.vimeo.com/video/1118478920?h=af9b6f0bab",
      "https://player.vimeo.com/video/1117766965?h=963a2edc08",
      "https://player.vimeo.com/video/1117806411?h=a7f3765b75",
      
      ],
  },
  {
    category: 'Travel',
    videos: [
      "https://player.vimeo.com/video/1143891411?h=f9faef5ec5",
      "https://player.vimeo.com/video/1143889999?h=a67103b18f",
      "https://player.vimeo.com/video/1143890733?h=aa9b5f70bb",
      "https://player.vimeo.com/video/1143891138?h=d32f490dd3",
    ],
  },
  {
    category: 'Experiences',
    videos: [
      "https://player.vimeo.com/video/1117860728?h=921b1349bc",
      "https://player.vimeo.com/video/1117864900?h=38cb2cea56",
      "https://player.vimeo.com/video/1117864183?h=507b8f035c",
      "https://player.vimeo.com/video/1117862027?h=1725f1ad98",
      "https://player.vimeo.com/video/1218498165",
    ],
  },
];

// ─── CONTACT: copiar email ─────────────────────────────────
const emailCopied = ref(false);
function copyEmail() {
  navigator.clipboard.writeText('vrotondaro@hotmail.com');
  emailCopied.value = true;
  setTimeout(() => { emailCopied.value = false; }, 2000);
}
</script>

<template>
  <div class="cc-page">

<!-- ─── HERO ──────────────────────────────────────── -->
<section class="hero">
  <h1 class="hero-title">Valen Rotondaro</h1>
  <p class="hero-subtitle-tag">Content creation Portfolio</p>
<div class="hero-content-row">
    <div class="hero-photo-wrap">
      <img src="/img/herostar.png" alt="" class="hero-star hero-star--big" />
      <img src="/img/starpink.png" alt="" class="hero-star hero-star--small" />
      <a href="/contact" class="folder-link">
  <img src="/img/folder.png" alt="Let's work together" class="folder" />
</a>
      <a href="https://www.instagram.com/valenrotondaro" target="_blank" rel="noopener" class="hero-search-deco">
        <img src="/img/buscador.png" alt="buscador" class="buscador" />
        <span class="search-text">@valenrotondaro</span>
      </a>

      <div class="hero-photo-position">
  <img src="/img/herougc.png" alt="Valen" class="hero-photo" />
</div>

      <div class="hero-tools">
        <img src="/img/premiere.png" alt="Premiere" class="tool-icon-img" />
        <img src="/img/illustrator.png" alt="Illustrator" class="tool-icon-img" />
        <img src="/img/capcut.png" alt="CapCut" class="tool-icon-img tool-icon-img--capcut" />
        <img src="/img/photoshop.png" alt="Photoshop" class="tool-icon-img" />
        <img src="/img/procreate.png" alt="Procreate" class="tool-icon-img" />
        <img src="/img/canvalogo.jpg" alt="Canva" class="tool-icon-img" />
      </div>
    </div>

    <div class="hero-skills">
      <p class="skills-label">SKILLS</p>
      <div class="skills-list">
        <span v-for="skill in skills" :key="skill" class="skill-pill">{{ skill }}</span>
      </div>
    </div>
  </div>

  <div class="brand-cta-strip">
    <p>Currently open for brand collaborations: <br>UGC, product storytelling &amp; short-form content.</p>
    <a href="#contact" class="btn-outline">Work with me</a>
  </div>
  </section>

<!-- ─── ABOUT ME ──────────────────────────────────── -->
<section class="bio-section">
  <div class="bio-inner">
    <div class="bio-text">
      <p class="about-label">About me</p>
      <p class="bio-body">
        With a background in design and storytelling, I create short-form videos and branded content that make people stop scrolling. From UGC to tutorials, my goal is always the same: content that feels like a friend's advice, not an ad. I blend creativity with strategy to highlight your product organically, while still delivering real results.
      </p>
    </div>
    <div class="bio-phone">
      <a href="https://www.instagram.com/valenrotondaro" target="_blank" rel="noopener">
        <img src="/img/valenrotondarofeed.png" alt="Phone mockup" class="bio-phone-img" />
      </a>
    </div>
  </div>
</section>

<!-- ─── BRANDS ────────────────────────────────────── -->
<section class="brands-section">
  <p class="section-eyebrow">Brands I've worked with</p>
  <div class="brands-grid">
  <img src="/img/alfar.png" alt="Departamentos Alfar" class="brand-logo" />
  <img src="/img/casanghjulina.jpg" alt="Casa Angjulina" class="brand-logo" />
  <img src="/img/costanera.svg" alt="Costanera" class="brand-logo" />
  <img src="/img/dokk1.svg" alt="Dokk1" class="brand-logo" />
  <img src="/img/lespetitesmaisons.png" alt="Les Petites Maisons" class="brand-logo" />
  <img src="/img/libristo.png" alt="Libristo" class="brand-logo" />
  <img src="/img/saboresnayate.jpg" alt="Sabores Nayaté" class="brand-logo" />
  <img src="/img/uhu.png" alt="UHU" class="brand-logo" />
</div>
</section>

<!-- ─── NICHES & STYLES ───────────────────────────── -->
<section class="niches-section">
  <div class="niches-web">
    <h2 class="niches-title">Niches<br>&amp; styles</h2>
    <div
      v-for="(niche, i) in niches"
      :key="niche"
      class="niche-orbit"
      :style="{ animationDelay: `-${(((nicheAngles[i] % 360) + 360) % 360 / 360) * 40}s` }"
    >
      <span
        class="niche-pill"
        :style="{ animationDelay: `-${(((nicheAngles[i] % 360) + 360) % 360 / 360) * 40}s` }"
        @click="scrollToCategory(niche)"
      >{{ niche }}</span>
    </div>
  </div>
</section>
    <!-- ─── VIDEO SECTIONS ────────────────────────────── -->
    <section class="videos-section">
      <div class="videos-inner">
        <div
          v-for="section in contentSections"
          :key="section.category"
          :id="section.category.toLowerCase()"
          class="video-category"
        >
          <h2 class="video-cat-title">{{ section.category }}</h2>
          <div class="video-grid">
            <div v-for="(video, i) in section.videos" :key="i" class="reel-box">
              <iframe
                :src="video"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                class="vimeo-frame"
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
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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

  </div>
</template>

<style scoped>
/* ─── BASE ───────────────────────────────────────────────── */
.cc-page {
  font-family: 'BethanyElingston', sans-serif;
  background: #fff;
  color: #111;
  overflow-x: clip;
}

/* ─── HERO ───────────────────────────────────────────────── */
.hero {
  padding: 10px 5% 40px;
  margin-top: -20px;
  text-align: center;
}

.hero-title {
  font-family: 'BethanyElingston', sans-serif;
  font-size: clamp(56px, 8vw, 110px);
  font-weight: 400;
  line-height: 0.85;
  letter-spacing: -0.03em;
  color: #111;
  margin: 0 0 40px 0;
}

.hero-subtitle-tag {
  font-family: 'DM Sans', sans-serif;
  font-size: 30px;
  color: black;
  margin: -24px 0 40px 0;
}

.about-label {
  font-family: 'BethanyElingston', sans-serif;
  font-size: 60px;
  font-weight: 400;
  color: black;
  text-align: left; 
  margin: 0px 0 8px 100px;
}
.brands-section {
  padding: 40px 5% 80px;
  text-align: center;
}

.section-eyebrow {
  font-family: 'BethanyElingston', sans-serif;
  font-size: 60px;
  font-weight: 400;
  color: black;
  margin: 0 0 24px 0;
}

.brands-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
}

.brand-logo {
  width: 140px;
  height: 70px;
  object-fit: contain;
  filter: grayscale(100%);
  opacity: 0.6;
  transition: filter 0.2s ease, opacity 0.2s ease;
}

.brand-logo:hover {
  filter: grayscale(0%);
  opacity: 1;
}
.hero-content-row {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 60px;
  max-width: 1000px;
  margin: 0 auto;
}
.hero-photo-wrap {
  position: relative;
  flex-shrink: 0;
  margin-top: -40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-photo {
  width: 400px;
  max-width: 60vw;
  display: block;
  position: relative;
  margin-bottom: 20px;
  object-fit: contain;
  z-index: 0;
}

.hero-star {
  position: absolute;
  pointer-events: none;
  height: auto;
}

.hero-star--big {
  width: 150px;
  top: 100px;
  right: 350px;
}

.hero-star--small {
  width: 120px;
  top: -1%;
  left: 560px;
}
.folder {
  position: absolute;
  width: 210px;
  height: auto;
  top: 270px;
  left: -50px;
  transform: rotate(-5deg);
  z-index: 1;
}



.hero-search-deco {
  position: absolute;
  top: 100px;
  left: -70px;
  display: block;
  align-items: center;
  z-index: 1;
  width: 220px;
}

.buscador {
  display: block;
  width: 100%;
  height: auto;
  z-index: 0;
}

.search-text {
  position: absolute;
  top: 50%;
  left: 60%;
  transform: rotate(-1deg) translate(-50%, -50%);
  color: black;
  font-size: 16px;
  font-weight: 450;
  text-align: center;
  white-space: nowrap;
}

.hero-tools {
  display: flex;
  width: 100%;
  gap: 30px;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  margin: -60px 0 0 45px;

}

.tool-icon-img {
  width: 70px;
  height: 70px;
  border-radius: 14px;
  object-fit: cover;
  z-index: 3;
  transition: transform 0.2s ease;
}


.tool-icon-img--capcut {
  width: 100px;
  height: 100px;
}

.tool-icon-img:hover {
  transform: scale(1.1);
}
.hero-skills {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding-top: 0px;
  margin-left: -200px;
  margin-top: 35px;
}
.skills-label {
  font-family: 'MyFont', sans-serif !important;
  font-size: 65px;
  letter-spacing: 0.08em;
  color: black;
  margin: 0;
  margin-right: -0.12em;
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.skill-pill {
  background: #D9FB60;
  color: #111;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 24px;
  border-radius: 50px;
  white-space: nowrap;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: default;
}

.skill-pill:hover {
  transform: scale(1.08);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

/* ─── BRAND CTA STRIP ────────────────────────────────────── */
.brand-cta-strip {
  max-width: 560px;
  margin: 48px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
}

.brand-cta-strip p {
  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  color: black;
  margin: 0;
  line-height: 1.6;
    white-space: nowrap; 
}

.btn-outline {
  display: inline-block;
  padding: 12px 28px;
  background: #D9FB60;
  color: #111;
  border: none;
  border-radius: 50px;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: -20px;
  text-decoration: none;
  transition: transform 0.2s;
}

.btn-outline:hover {
  transform: scale(1.04);
}

/* ─── BIO ────────────────────────────────────────────────── */
.bio-section {
  padding: 40px 5%;
}

.bio-inner {
  max-width: 1200px;
  margin: 20px auto;
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 80px;
  align-items: center;
}

.bio-body {
  font-family: 'DM Sans', sans-serif;
  font-size: 20px;
  text-align: justify;
  width: 70%;
  text-wrap: balance;
  line-height: 1.8;
  color: black;
  margin-bottom: 80px;
  margin-left: 100px;
}

.bio-body strong {
  font-weight: 600;
}

.bio-phone-img {
  width: 55%;
  max-width: 340px;
  object-fit: contain;
  transform: rotate(5deg);
}

/* ─── NICHES ─────────────────────────────────────────────── */
.niches-section {
  padding: 110px 5%;
  text-align: center;
  position: relative;
  margin-top: -40px;
  margin-bottom: -10px;
}

.niches-web {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  height: 420px;
}

.niches-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'BethanyElingston', sans-serif;
  font-size: clamp(36px, 5vw, 64px);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: #111;
  margin: 0;
  white-space: nowrap;
}

.niche-pill {
  position: absolute;
  background: #D9FB60;
  color: #111;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 24px;
  border-radius: 50px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.niche-pill:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

.niche-orbit {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  will-change: transform;
  animation: niche-orbit-spin 40s linear infinite;
}

.niche-orbit .niche-pill {
  position: absolute;
  top: -250px;
  left: -50%;
  will-change: transform;
  animation: niche-pill-counter 40s linear infinite;
}

@keyframes niche-pill-counter {
  from { transform: rotate(0deg); }
  to   { transform: rotate(-360deg); }
}

@keyframes niche-orbit-spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

/* ─── VIDEOS ─────────────────────────────────────────────── */
.videos-section {
  padding: 80px 5% 80px;
}

.videos-inner {
  max-width: 1100px;
  margin: 0 auto;
}

.video-category {
  margin-bottom: 40px;
}

.video-cat-title {
  font-family: 'BethanyElingston', sans-serif;
  font-size: clamp(36px, 5vw, 64px);
  font-weight: 400;
  letter-spacing: -0.02em;
  color: #111;
  margin: 0 0 32px 0;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.reel-box {
  position: relative;
  width: 100%;
  padding-bottom: 177.78%;
  background: #f7f7f7;
  border-radius: 16px;
  overflow: hidden;
}

.vimeo-frame {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

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

.contact-social {
  font-size: 20px;
  color: #111;
  text-decoration: none;
  font-weight: 400;
  transition: color 0.2s;
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
  transform: rotate(-10deg) !important;
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

/* ─── RESPONSIVE ─────────────────────────────────────────── */
@media (max-width: 900px) {
  .hero { padding: 60px 5% 30px; }
  .hero-title { font-size: 48px; margin-bottom: 0px; text-align: center; }
  .hero-subtitle-tag { font-size: 16px; margin:10px 0 32px 0; text-align: center; }

  .hero-content-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

 .hero-photo-wrap {
  margin: 0;
  width: 420px;
  display: block;
  flex-shrink: 0;
}

.hero-photo-position {
  margin-left: 80px;
}
 .hero-photo {
  width: 420px;
  max-width: 100%;
  margin: 0 auto;
}

.hero-star--big {
  display: none;
}

.hero-star--small {
 display: none;
}
  .folder {
    width: 90px;
    top: -10px;
    left: -50px;
  }

  .hero-search-deco {
    position: absolute;
    top: 10%;
    left: 100px;
    width: 120px;
  }

    .search-text {
    font-size: 9px;
  }
.hero-tools {
  margin-top: -20px;
      gap: 6px;
    flex-wrap: nowrap;
    justify-content: center;
      margin-left: 50px;
  }

  .tool-icon-img { width: 40px; height: 40px; }
  .tool-icon-img--capcut { width: 60px; height: 60px; }
      
  
  .hero-skills {
    margin-left: -60px;
    align-self: flex-start;
    margin-top: -35px;
  }

  .skills-label { font-size: 30px;margin-bottom: -20px; }

  .skills-list {
    gap: 6px;
  }

  .skill-pill {
    font-size: 11px;
    padding: 6px 14px;
  }

  .brand-cta-strip { margin-top: 32px; }
  .brand-cta-strip p { white-space: normal; font-size: 14px; }

  .bio-inner { grid-template-columns: 1fr; gap: 32px; text-align: center; }
  .about-label { margin-left: 0; text-align: center; font-size: 26px; }
  .bio-body { width: 100%; margin-left: 0; margin-bottom: 0; font-size: 16px; text-align: justify; }
.bio-phone {
  display: none;
}
  .brands-section { padding: 40px 5% 60px; }
  .section-eyebrow { font-size: 28px; }
  .brands-grid { gap: 16px; }
  .brand-logo { width: 100px; height: 55px; }

  .niches-section { padding: 60px 5%; }
  .niches-web { max-width: 380px; height: 320px; }
  .niches-title { font-size: 32px; }
  .niche-orbit .niche-pill { top: -140px; font-size: 12px; padding: 8px 16px; }

  .video-grid { grid-template-columns: repeat(2, 1fr); }
  .video-cat-title { font-size: 32px; }

  .contact-inner { grid-template-columns: 1fr; gap: 40px; }
  .contact-title { font-size: 52px; text-align: center; }
  .contact-left { align-items: center; text-align: center; }
  .contact-right { display: none; }
  .contact-photo { width: 210px; top: 55px; left: 15px; }
  .contact-sticker { top: -20px; left: 5px; }
  .contact-sticker-text { font-size: 34px; }
  .contact-hola-arrow { width: 55px; top: 45px; left: -35px; }
  .contact-locationnote { width: 130px; top: 55px; right: -15px; }
  .contact-cvnote { width: 130px; top: 250px; left: -30px; }
  .contact-collage { width: 95px; top: 245px; right: 30px; }
}

@media (max-width: 500px) {
  .hero-title { font-size: 36px; }
  .hero-subtitle-tag { font-size: 11px; }

.hero-photo-wrap {
  width: 260px;
  flex-shrink: 0;
}
.hero-photo {
  width: 260px;
}
.hero-star--big { width: 38px; top: -16px; right: -22px; }
.hero-star--small { width: 30px; left: -22px; }
  .folder { width: 110px; top: 50px; left: -5px; }
  .hero-search-deco { width: 105px; left: 5px; top: 5px; transform: rotate(-4deg);}

  .tool-icon-img { width: 34px; height: 34px; }
  .tool-icon-img--capcut { width: 50px; height: 50px; }

  .skills-list { align-items: center; }
  .skill-pill { font-size: 13px; }
  .brand-cta-strip p { font-size: 13px; }
  .bio-body { font-size: 15px; }
  .about-label { font-size: 22px; }
  .bio-phone-img { width: 30%; }

  .brand-logo { width: 80px; height: 44px; }

  .niches-web { max-width: 300px; height: 280px; }
  .niches-title { font-size: 26px; }
  .niche-orbit .niche-pill { top: -110px; font-size: 11px; padding: 6px 12px; }
  .video-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
  .video-cat-title { font-size: 26px; }
  .contact-title { font-size: 38px; }
  .contact-right { width: 260px; height: 360px; }
  .contact-photo { width: 170px; top: 45px; left: 10px; }
  .contact-sticker-text { font-size: 26px; }
  .contact-hola-arrow { width: 45px; top: 35px; left: -25px; }
  .contact-locationnote { width: 105px; top: 45px; right: -10px; }
  .contact-cvnote { width: 105px; top: 205px; left: -20px; }
  .contact-collage { width: 78px; top: 200px; right: 20px; }
}
</style>