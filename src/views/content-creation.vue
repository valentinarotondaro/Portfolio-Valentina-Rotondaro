<script setup>
import { ref } from 'vue';

const instaPosts = [
  { id: '18120735115738180', permalink: 'https://www.instagram.com/reel/DZfyCL7IWIL/', thumbnail: 'https://hop.behold.pictures/eyJ1IjoiRTVSNHUwR0ZWY1A0Y1ZxaGZheEtEa0I2SmdDMyIsImYiOiJjc1ZkOU82ZThyZ3BQMjF0S2xEMSIsInAiOiIxODEyMDczNTExNTczODE4MCIsImgiOiJyaXp1MGUifQ.jpg?class=originalMedium', caption: 'Otro paseo de colores', isReel: true },
  { id: '18009919643886145', permalink: 'https://www.instagram.com/reel/DZUf7BwoL5X/', thumbnail: 'https://hop.behold.pictures/eyJ1IjoiRTVSNHUwR0ZWY1A0Y1ZxaGZheEtEa0I2SmdDMyIsImYiOiJjc1ZkOU82ZThyZ3BQMjF0S2xEMSIsInAiOiIxODAwOTkxOTY0Mzg4NjE0NSIsImgiOiIxc2ZxbTlsIn0.jpg?class=originalMedium', caption: 'Un plan creativo y diferente para hacer con amigos', isReel: true },
  { id: '17899277172456252', permalink: 'https://www.instagram.com/reel/DZNs4Sao1sn/', thumbnail: 'https://hop.behold.pictures/eyJ1IjoiRTVSNHUwR0ZWY1A0Y1ZxaGZheEtEa0I2SmdDMyIsImYiOiJjc1ZkOU82ZThyZ3BQMjF0S2xEMSIsInAiOiIxNzg5OTI3NzE3MjQ1NjI1MiIsImgiOiI3c2dpcjUifQ.jpg?class=originalMedium', caption: '100% real, que placer', isReel: true },
  { id: '18441120433139205', permalink: 'https://www.instagram.com/reel/DZFVz5ZodmW/', thumbnail: 'https://hop.behold.pictures/eyJ1IjoiRTVSNHUwR0ZWY1A0Y1ZxaGZheEtEa0I2SmdDMyIsImYiOiJjc1ZkOU82ZThyZ3BQMjF0S2xEMSIsInAiOiIxODQ0MTEyMDQzMzEzOTIwNSIsImgiOiIxcG1qa3QzIn0.jpg?class=originalMedium', caption: 'La cajita de fosforos', isReel: true },
  { id: '18112897240858437', permalink: 'https://www.instagram.com/reel/DY42byZIXj9/', thumbnail: 'https://hop.behold.pictures/eyJ1IjoiRTVSNHUwR0ZWY1A0Y1ZxaGZheEtEa0I2SmdDMyIsImYiOiJjc1ZkOU82ZThyZ3BQMjF0S2xEMSIsInAiOiIxODExMjg5NzI0MDg1ODQzNyIsImgiOiIxdTV0N3lqIn0.jpg?class=originalMedium', caption: 'Recordatorio: si te hace feliz, eso es todo lo que importa', isReel: true },
];

const skills = [
  'Video editing', 'Short-form content', 'UGC creation',
  'Script writing', 'Color grading', 'Trend research',
];

const niches = [
  'Lifestyle', 'Travel', 'Stationary', 'Fashion', 'Experiences',
];

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
    category: 'Fashion',
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

const audienceStats = [
  { label: 'Reach last 30 days', value: '43.2K' },
  { label: 'Total views', value: '69.9K' },
  { label: 'Views from non-followers', value: '77.5%' },
  { label: 'Views from Reels', value: '84.7%' },
];
</script>

<template>
  <div class="cc-page">

    <!-- ─── HERO ──────────────────────────────────────── -->
    <section class="hero">
      <div class="hero-inner">

        <!-- Title left -->
        <div class="hero-left">
          <h1 class="hero-title">Content<br>creation</h1>
        </div>

        <!-- Center: photo -->
        <div class="hero-center">
          <img src="/img/valenugc.png" alt="Valen UGC" class="hero-photo" />
          <!-- Search bar deco -->
          <div class="hero-search-deco">
            <span class="search-icon">🔍</span>
            <span class="search-text">VALENROTONDARO</span>
          </div>
          <!-- Tool icons -->
          <div class="hero-tools">
            <div class="tool-icon">✂️</div>
            <div class="tool-icon tool-icon--dark">Pr</div>
            <div class="tool-icon tool-icon--dark">Pr</div>
            <div class="tool-icon tool-icon--dark">Pr</div>
            <div class="tool-icon tool-icon--dark">Pr</div>
          </div>
        </div>

        <!-- Skills right -->
        <div class="hero-right">
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
            <strong>Hi, I'm Valen!</strong> My background in design, storytelling and content creation has helped me understand what makes people stop scrolling and start watching.<br><br>
            I create short-form videos and branded content that drive real engagement. Whether it's UGC or tutorials, the goal is always to inspire action and create a lasting impact — content that feels like a friend's advice, not an ad.<br><br>
            My style blends creativity and strategy, making sure your product is highlighted in a way that feels organic while still delivering results.
          </p>
        </div>
        <div class="bio-phone">
          <img src="/img/valenrotondarofeed.png" alt="Phone mockup" class="bio-phone-img" />
        </div>
      </div>
    </section>

    <!-- ─── NICHES & STYLES ───────────────────────────── -->
    <section class="niches-section">
      <h2 class="niches-title">Niches<br>&amp; styles</h2>
      <div class="niches-web">
        <div class="niche-center">
          <span class="niche-center-dot"></span>
        </div>
        <div v-for="(niche, i) in niches" :key="niche" :class="`niche-pill niche-pill--${i}`">
          {{ niche }}
        </div>
      </div>
    </section>

    <!-- ─── VIDEO SECTIONS ────────────────────────────── -->
    <section class="videos-section">
      <div class="videos-inner">
        <div
          v-for="section in contentSections"
          :key="section.category"
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

    <!-- ─── AUDIENCE INSIGHTS ─────────────────────────── -->
    <section class="audience-section">
      <h2 class="audience-title">Audience insights</h2>
      <div class="audience-grid">
        <div v-for="stat in audienceStats" :key="stat.label" class="audience-card">
          <span class="audience-value">{{ stat.value }}</span>
          <span class="audience-label">{{ stat.label }}</span>
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
  overflow-x: hidden;
}

/* ─── HERO ───────────────────────────────────────────────── */
.hero {
  padding: 60px 5% 40px;
}

.hero-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr;
  gap: 40px;
  align-items: center;
  min-height: 600px;
}

.hero-title {
  font-family: 'BethanyElingston', sans-serif;
  font-size: clamp(56px, 8vw, 110px);
  font-weight: 400;
  line-height: 1.0;
  letter-spacing: -0.03em;
  color: #111;
  margin: 0;
}

.hero-center {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.hero-photo {
  width: 100%;
  max-width: 340px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
}

.hero-search-deco {
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1.5px solid #111;
  border-radius: 50px;
  padding: 8px 20px;
  font-family: 'MyFont', sans-serif;
  font-size: 14px;
  letter-spacing: 0.08em;
  color: #111;
  width: fit-content;
}

.hero-tools {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}

.tool-icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  background: #f5f5f5;
}

.tool-icon--dark {
  background: #1a2b8c;
  color: #fff;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 700;
}

.hero-right {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
}

.skills-label {
  font-family: 'MyFont', sans-serif;
  font-size: 16px;
  letter-spacing: 0.12em;
  color: #111;
  margin: 0 0 8px 0;
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
  font-size: 18px;
  line-height: 1.8;
  color: black;
  margin: 0;
}

.bio-body strong {
  font-weight: 600;
}

.bio-phone-img {
  width: 80%;
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

.niches-title {
  font-family: 'BethanyElingston', sans-serif;
  font-size: clamp(48px, 7vw, 90px);
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: #111;
  margin: 0 0 80px 0;
}

.niches-web {
  position: relative;
  max-width: 700px;
  margin: 0 auto;
  height: 320px;
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
}

.niche-pill--0 { top: 0; left: 50%; transform: translateX(-50%); }
.niche-pill--1 { top: 50%; left: 0; transform: translateY(-50%); }
.niche-pill--2 { top: 50%; right: 0; transform: translateY(-50%); }
.niche-pill--3 { bottom: 0; left: 20%; }
.niche-pill--4 { bottom: 0; right: 20%; }

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

/* ─── AUDIENCE ───────────────────────────────────────────── */
.audience-section {
  padding: 80px 5%;
  background: #fff;
  text-align: center;
}

.audience-title {
  font-family: 'BethanyElingston', sans-serif;
  font-size: clamp(36px, 5vw, 64px);
  font-weight: 400;
  letter-spacing: -0.02em;
  color: #111;
  margin: 0 0 56px 0;
}

.audience-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.audience-card {
  background: #E6ABDD;
  border-radius: 20px;
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
}

.audience-value {
  font-family: 'BethanyElingston', sans-serif;
  font-size: clamp(40px, 6vw, 72px);
  font-weight: 400;
  letter-spacing: -0.02em;
  color: #111;
  line-height: 1;
}

.audience-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  color: #555;
}

/* ─── INSTAGRAM ──────────────────────────────────────────── */
.insta-section {
  padding: 80px 5% 60px;
  text-align: center;
}

.insta-hi-label {
  font-family: 'MyFont', sans-serif;
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
/* ─── RESPONSIVE ─────────────────────────────────────────── */
@media (max-width: 900px) {
  .hero-inner { grid-template-columns: 1fr; text-align: center; }
  .hero-right { align-items: center; }
  .bio-inner { grid-template-columns: 1fr; }
  .audience-grid { grid-template-columns: 1fr; }
  .video-grid { grid-template-columns: repeat(2, 1fr); }
  .insta-grid { grid-template-columns: repeat(3, 1fr); }
  .cta-inner { grid-template-columns: 1fr; }
  .insta-hi-label { margin-left: 0; font-size: 36px; }
}

@media (max-width: 500px) {
  .video-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
  .insta-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>