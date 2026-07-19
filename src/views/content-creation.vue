<script setup>
import { ref } from 'vue';

const instaPosts = [
  { id: '17978620920050587', permalink: 'https://www.instagram.com/reel/DaVKDUwoys_/', thumbnail: 'https://hop.behold.pictures/eyJ1IjoiRTVSNHUwR0ZWY1A0Y1ZxaGZheEtEa0I2SmdDMyIsImYiOiJjc1ZkOU82ZThyZ3BQMjF0S2xEMSIsInAiOiIxNzk3ODYyMDkyMDA1MDU4NyIsImgiOiIxZmExcmFzIn0.jpg?class=originalMedium', caption: 'un picnic creativo en papel🧚🧺🥖🧉💐', isReel: true },
  { id: '18047996162789895', permalink: 'https://www.instagram.com/reel/DaLWd63o3Xl/', thumbnail: 'https://hop.behold.pictures/eyJ1IjoiRTVSNHUwR0ZWY1A0Y1ZxaGZheEtEa0I2SmdDMyIsImYiOiJjc1ZkOU82ZThyZ3BQMjF0S2xEMSIsInAiOiIxODA0Nzk5NjE2Mjc4OTg5NSIsImgiOiIyemk4ZW8ifQ.jpg?class=originalMedium', caption: 'Personalizando todo lo que se me atraviese siempre!💌❤️‍🔥🌞🖇️', isReel: true },
  { id: '18107634158318774', permalink: 'https://www.instagram.com/p/DaD7D7MChAZ/', thumbnail: 'https://hop.behold.pictures/eyJ1IjoiRTVSNHUwR0ZWY1A0Y1ZxaGZheEtEa0I2SmdDMyIsImYiOiJjc1ZkOU82ZThyZ3BQMjF0S2xEMSIsInAiOiIxODEwNzYzNDE1ODMxODc3NCIsImgiOiIxYnhzMnpmIn0.jpg?class=originalMedium', caption: 'un carrete de verano🪭🧚‍♀️🌞', isReel: false },
  { id: '18127470532712348', permalink: 'https://www.instagram.com/reel/DZ3Nm45oGnw/', thumbnail: 'https://hop.behold.pictures/eyJ1IjoiRTVSNHUwR0ZWY1A0Y1ZxaGZheEtEa0I2SmdDMyIsImYiOiJjc1ZkOU82ZThyZ3BQMjF0S2xEMSIsInAiOiIxODEyNzQ3MDUzMjcxMjM0OCIsImgiOiIxMHVnM3U5In0.jpg?class=originalMedium', caption: 'Cruzando a la isla de Fanø, un cuentito💌🌞⛴️', isReel: true },
  { id: '18135789370601428', permalink: 'https://www.instagram.com/reel/DZvX574IdBw/', thumbnail: 'https://hop.behold.pictures/eyJ1IjoiRTVSNHUwR0ZWY1A0Y1ZxaGZheEtEa0I2SmdDMyIsImYiOiJjc1ZkOU82ZThyZ3BQMjF0S2xEMSIsInAiOiIxODEzNTc4OTM3MDYwMTQyOCIsImgiOiJxOWVubjQifQ.jpg?class=originalMedium', caption: 'Mis bienes🙂‍↔️💰🪎❤️‍🔥', isReel: true },
];
const skills = [
  'Video editing', 'Short-form content', 'UGC creation',
  'Script writing', 'Color grading', 'Trend research',
];

const niches = [
  'Lifestyle', 'Travel', 'Stationary', 'DIY', 'Experiences',
];

const nicheAngles = [-90, 198, -18, 126, 54]; // top, izq, der, abajo-izq, abajo-der (mismo orden que niches)

function scrollToCategory(name) {
  const el = document.getElementById(name.toLowerCase());
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const contentSections = [
  {
    category: 'Lifestyle',
    videos: [
      "https://player.vimeo.com/video/1118478920?h=af9b6f0bab&background=1&autoplay=1&loop=1&muted=1",
      "https://player.vimeo.com/video/1117766965?h=963a2edc08&background=1&autoplay=1&loop=1&muted=1",
      "https://player.vimeo.com/video/1117806411?h=a7f3765b75&background=1&autoplay=1&loop=1&muted=1",
      "https://player.vimeo.com/video/1143892207?h=6d94e8a9a5&background=1&autoplay=1&loop=1&muted=1",
    ],
  },
  {
    category: 'Travel',
    videos: [
      "https://player.vimeo.com/video/1143891411?h=f9faef5ec5&background=1&autoplay=1&loop=1&muted=1",
      "https://player.vimeo.com/video/1143889999?h=a67103b18f&background=1&autoplay=1&loop=1&muted=1",
      "https://player.vimeo.com/video/1143890733?h=aa9b5f70bb&background=1&autoplay=1&loop=1&muted=1",
      "https://player.vimeo.com/video/1143891138?h=d32f490dd3&background=1&autoplay=1&loop=1&muted=1",
    ],
  },
  {
    category: 'Stationary',
    videos: [
      "https://player.vimeo.com/video/1143891592?h=f2822c00ed&background=1&autoplay=1&loop=1&muted=1",
      "https://player.vimeo.com/video/1143892207?h=6d94e8a9a5&background=1&autoplay=1&loop=1&muted=1",
      "https://player.vimeo.com/video/1117810490?h=b2d3a3f6d4&background=1&autoplay=1&loop=1&muted=1",
      "https://player.vimeo.com/video/1118506149?h=bcca644131&background=1&autoplay=1&loop=1&muted=1",
    ],
  },
  {
    category: 'DIY',
    videos: [
      "https://player.vimeo.com/video/1117805604?h=56fde2d074&background=1&autoplay=1&loop=1&muted=1",
      "https://player.vimeo.com/video/1117806411?h=a7f3765b75&background=1&autoplay=1&loop=1&muted=1",
      "https://player.vimeo.com/video/1118512621?h=02bb452692&background=1&autoplay=1&loop=1&muted=1",
      "https://player.vimeo.com/video/1118516919?h=24ed8a6dd0&background=1&autoplay=1&loop=1&muted=1",
    ],
  },
  {
    category: 'Experiences',
    videos: [
      "https://player.vimeo.com/video/1117860728?h=921b1349bc&background=1&autoplay=1&loop=1&muted=1",
      "https://player.vimeo.com/video/1117864900?h=38cb2cea56&background=1&autoplay=1&loop=1&muted=1",
      "https://player.vimeo.com/video/1117864183?h=507b8f035c&background=1&autoplay=1&loop=1&muted=1",
      "https://player.vimeo.com/video/1117862027?h=1725f1ad98&background=1&autoplay=1&loop=1&muted=1",
    ],
  },
];

</script>

<template>
  <div class="cc-page">

    <!-- ─── HERO ──────────────────────────────────────── -->
<section class="hero">
  <h1 class="hero-title">Content<br>creation</h1>

  <div class="hero-content-row">
    <div class="hero-photo-wrap">
      <img src="/img/herostar.png" alt="" class="hero-star hero-star--big" />
      <img src="/img/starpink.png" alt="" class="hero-star hero-star--small" />

      <a href="https://www.instagram.com/valenrotondaro" target="_blank" rel="noopener" class="hero-search-deco">
  <img src="/img/buscador.png" alt="buscador" class="buscador" />
  <span class="search-text">@valenrotondaro</span>
</a>

      <img src="/img/valenugc.png" alt="Valen UGC" class="hero-photo" />

      <div class="hero-tools">
        <img src="/img/premiere.png" alt="Premiere" class="tool-icon-img" />
        <img src="/img/illustrator.png" alt="Illustrator" class="tool-icon-img" />
        <img src="/img/capcut.png" alt="CapCut" class="tool-icon-img tool-icon-img--capcut" />
        <img src="/img/photoshop.png" alt="Photoshop" class="tool-icon-img" />
        <img src="/img/procreate.png" alt="Procreate" class="tool-icon-img" />
      </div>
    </div>

    <div class="hero-skills">
      <p class="skills-label">SKILLS</p>
      <div class="skills-list">
        <span v-for="skill in skills" :key="skill" class="skill-pill">{{ skill }}</span>
      </div>
    </div>
  </div>
</section>

    <!-- ─── BIO ───────────────────────────────────────── -->
    <section class="bio-section">
      <div class="bio-inner">
        <div class="bio-text">
          <p class="bio-body">
          Hi, I'm Valen! With a background in design and storytelling, I create short-form videos and branded content that make people stop scrolling. From UGC to tutorials, my goal is always the same: content that feels like a friend's advice, not an ad. I blend creativity with strategy to highlight your product organically, while still delivering real results.
          </p>
        </div>
        <div class="bio-phone">
  <a href="https://www.instagram.com/valenrotondaro" target="_blank" rel="noopener">
    <img src="/img/valenrotondarofeed.png" alt="Phone mockup" class="bio-phone-img" />
  </a>
</div>
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
                allow="autoplay; fullscreen"
                class="vimeo-frame"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── INSTAGRAM ─────────────────────────────────── -->
    <section class="insta-section">
      <span class="insta-hi-label">Follow my creative journey!</span>
      <h2 class="insta-title">Lately on Instagram</h2>
      <div class="insta-grid">
        <a
          v-for="post in instaPosts"
          :key="post.id"
          :href="post.permalink"
          target="_blank"
          rel="noopener"
          class="insta-item"
        >
          <img :src="post.thumbnail" :alt="post.caption" class="insta-img" />
          <div class="insta-overlay">
            <span v-if="post.isReel" class="insta-reel-badge">▶ Reel</span>
            <p class="insta-caption">{{ post.caption }}</p>
          </div>
        </a>
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
  padding: 80px 5% 40px;
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
  margin-top: -80px;
}

.hero-photo {
  width: 600px;
  max-width: 60vw;
  display: block;
  position:relative;
  margin-left: 190px;
  margin-bottom: 20px;
  object-fit: contain;
  z-index: 2;
}

.hero-star {
  position: absolute;
  pointer-events: none;
  height: auto;
}

.hero-star--big {
  width: 150px;
  top: 100px;
  right: 550px;
}

.hero-star--small {
  width: 120px;
  top: 25%;
  left: 650px;
}

.hero-search-deco {
  position: absolute;
  top: 40px;
  left: -70px;
  display: block;
  align-items: center;
  z-index: 1; 
  width: 190px;
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
  font-size: 12px;
  font-weight: 450;
  text-align: center;
  white-space: nowrap;
}

.hero-tools {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 32px;
}

.tool-icon-img {
  width: 65px;
  height: 65px;
  border-radius: 14px;
  object-fit: cover;
  margin-top: -100px;
  margin-left: 15px;
  z-index: 3;
  transition: transform 0.2s ease;   
}

.tool-icon-img--capcut {
  width: 110px;
  height: 110px;
}

.hero-skills {
  display: flex;
  flex-direction: column;
  align-items: center;   
  gap: 12px;
  padding-top: 0px;
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

.tool-icon-img:hover {
  transform: scale(1.1);
}
/* ─── BIO ────────────────────────────────────────────────── */
.bio-section {
  padding: 80px 5%;
}

.bio-inner {
  max-width: 1200px;
  margin: 0 auto;
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
  margin-bottom: 60px;
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
  padding: 100px 5%;
  text-align: center;
  position: relative;
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
  padding: 40px 5% 80px;
}

.videos-inner {
  max-width: 1100px;
  margin: 0 auto;
}

.video-category {
  margin-bottom: 80px;
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


/* ─── INSTAGRAM ──────────────────────────────────────────── */
.insta-section {
  padding: 0px 5% 20px;
  text-align: center;
}

.insta-hi-label {
  font-family: 'MyFont', sans-serif !important;
  font-size: 55px;
  color: #111;
  display: block;
  transform: rotate(-3deg);
  margin-bottom: -10px;
  margin-left: -200px;
  text-transform: uppercase;
}

.insta-title {
  font-family: 'BethanyElingston', sans-serif;
  font-size: clamp(36px, 5vw, 60px);
  font-weight: 400;
  letter-spacing: -0.02em;
  color: #111;
  margin: 0 0 40px 0;
}

.insta-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  max-width: 1200px;
  margin: 0 auto;
}

.insta-item {
  position: relative;
  aspect-ratio: 9/16;
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  display: block;
}

.insta-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.insta-item:hover .insta-img { transform: scale(1.06); }

.insta-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.45);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 12px;
}

.insta-item:hover .insta-overlay { opacity: 1; }

.insta-reel-badge {
  background: #FF7BB5;
  color: #fff;
  font-size: 11px;
  padding: 3px 10px;
  border-radius: 20px;
  font-family: 'DM Sans', sans-serif;
}

.insta-caption {
  color: #fff;
  font-size: 12px;
  font-family: 'DM Sans', sans-serif;
  text-align: center;
  line-height: 1.4;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
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
/* ─── RESPONSIVE ─────────────────────────────────────────── */
/* ─── RESPONSIVE ────────────────────────────────────────── */
@media (max-width: 900px) {
  /* HERO */
  .hero {
    padding: 60px 5% 30px;
  }

  .hero-title {
    font-size: 56px;
    margin-bottom: 24px;
  }

  .hero-content-row {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }

  .hero-photo-wrap {
    margin-top: 0;
  }

  .hero-photo {
    width: 320px;
    max-width: 80vw;
    margin-left: 0;
    margin-bottom: 0;
  }

  .hero-star {
    display: none;
  }

  .hero-search-deco {
    position: static;
    display: block;
    width: 150px;
    margin: 0 auto 12px;
  }

  .hero-tools {
    margin-top: 16px;
  }

  .tool-icon-img {
    width: 44px;
    height: 44px;
    margin-top: 0;
    margin-left: 0;
  }

  .tool-icon-img--capcut {
    width: 70px;
    height: 70px;
  }

  .hero-skills {
    padding-top: 8px;
  }

  .skills-label {
    font-size: 34px;
  }

  /* BIO */
  .bio-inner {
    grid-template-columns: 1fr;
    gap: 32px;
    text-align: center;
  }

  .bio-body {
    width: 100%;
    margin-left: 0;
    margin-bottom: 0;
    font-size: 16px;
    text-align: left;
  }

  .bio-phone-img {
    width: 60%;
    margin: 0 auto;
  }

  /* NICHES */
  .niches-section {
    padding: 60px 5%;
  }

  .niches-web {
    max-width: 380px;
    height: 320px;
  }

  .niches-title {
    font-size: 32px;
  }

  .niche-orbit .niche-pill {
    top: -140px;
    font-size: 12px;
    padding: 8px 16px;
  }

  /* VIDEOS */
  .video-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .video-cat-title {
    font-size: 32px;
  }

  /* INSTAGRAM */
  .insta-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .insta-hi-label {
    margin-left: 0;
    font-size: 32px;
  }

  .insta-title {
    font-size: 32px;
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
  .hero-title {
    font-size: 40px;
  }

  .hero-photo {
    width: 260px;
  }

  .skills-list {
    align-items: center;
  }

  .skill-pill {
    font-size: 13px;
  }

  .bio-body {
    font-size: 15px;
  }

  .niches-web {
    max-width: 300px;
    height: 280px;
  }

  .niches-title {
    font-size: 26px;
  }

  .niche-orbit .niche-pill {
    top: -110px;
    font-size: 11px;
    padding: 6px 12px;
  }

  .video-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .video-cat-title {
    font-size: 26px;
  }

  .insta-grid {
    grid-template-columns: repeat(2, 1fr);
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