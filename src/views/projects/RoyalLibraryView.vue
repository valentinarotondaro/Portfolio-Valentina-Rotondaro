<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const heroRef = ref(null);

const dualPhotos = [
  '/img/royalchicas2.JPEG',
  '/img/royalchicas3.JPEG'
];

const reviews = [
  { text: '"Collage has become such a meaningful and essential experience for us in Aarhus ♥ Thank you Valen for hosting it and inspire us to create, and thank you to every woman who created such a warm and beautiful environment. It was my first visit to the Royal Library, and it was absolutely amazing! Looking forward to the next one :)"', author: 'Cecilia, Argentina' }
];
const activeReviewIndex = ref(0);

let reviewInterval;

onMounted(() => {
  const video = heroRef.value;
  if (video) {
    video.currentTime = 2;
    video.addEventListener('timeupdate', () => {
      if (video.currentTime >= 7) {
        video.currentTime = 2;
        video.play();
      }
    });
  }

  reviewInterval = setInterval(() => {
    activeReviewIndex.value = (activeReviewIndex.value + 1) % reviews.length;
  }, 5000);
});

onUnmounted(() => {
  clearInterval(reviewInterval);
});
</script>

<template>
  <div class="case-study">

    <nav class="top-nav">
      <router-link to="/portfolio" class="back-btn">&lt; Back to Works</router-link>
    </nav>

    <main class="content-wrapper">

      <header class="project-intro-header">
        <span class="category-badge">Community Lead & Experience Design</span>
        <h1>Collage Workshop | Royal Danish Library</h1>
      </header>

      <section class="hero">
        <video
          ref="heroRef"
          src="/img/royalhero.MP4"
          autoplay loop muted playsinline
          class="hero-video"
        ></video>
      </section>

      <section class="section-grid">
        <div class="text-col">
          <h2 class="section-label">01. Context</h2>
          <p class="body-text">The Royal Danish Library provided the perfect setting for a focused creative exploration. In this edition of Collage Afternoon, I wanted to challenge the participants to look beyond the chaos of imagery and focus on the fundamental power of color. By stripping away the palette, we turned a quiet library space into a vibrant laboratory of individual and collective expression.</p>
        </div>
        <div class="text-col">
          <h2 class="section-label">02. Objective</h2>
          <p class="body-text">The primary goal was to use chromatic limitation as a tool for deeper creativity. By restricting each participant to a single color, the objective was to encourage a more profound exploration of textures, shades, and symbolism while fostering personal storytelling through the psychological weight of the chosen hue.</p>
        </div>
      </section>

      <section class="process-section">
        <h2 class="section-label">03. Process</h2>
        <div class="process-cards">
          <div class="card">
            <h3>Curation</h3>
            <p>I pre-sorted thousands of magazine cutouts and materials into specific color stations, ensuring high-quality textures for each palette to provide participants with a rich sensory starting point.</p>
          </div>
          <div class="card">
            <h3>Facilitation</h3>
            <p>We began the session with introductions where each participant was assigned a specific color. I gave a brief talk on the psychology of color, inviting everyone to reflect on whether that hue resonated with their current emotional state.</p>
          </div>
          <div class="card">
            <h3>Constraint Design</h3>
            <p>By removing the "choice paralysis" of a full palette, I facilitated a flow state where participants could focus purely on composition and symbolism, allowing more time to connect and enjoy the creative moment.</p>
          </div>
          <div class="card">
            <h3>Social Connection</h3>
            <p>The workshop concluded with a collective showcase. Each participant shared their work while the group admired the results, turning into a deep conversation that reinforced the bonds formed during the creative process.</p>
          </div>
        </div>
      </section>

      <section class="dual-grid">
        <img v-for="(img, i) in dualPhotos" :key="i" :src="img" class="dual-img" alt="Workshop photo" />
      </section>

      <section class="reviews-section">
        <h2 class="section-label-gray">Participant Feedback</h2>
        <transition name="fade" mode="out-in">
          <div :key="activeReviewIndex" class="review-box">
            <p class="review-text">{{ reviews[activeReviewIndex].text }}</p>
            <span class="review-author">{{ reviews[activeReviewIndex].author }}</span>
          </div>
        </transition>
      </section>

      <section class="some-section">
        <h2 class="section-label-gray">SoMe Content</h2>
        <div class="some-complex-grid">
          <div class="some-item">
            <video src="/img/royalhero.MP4" autoplay loop muted playsinline class="video-fill"></video>
          </div>
          <div class="some-images-stack">
            <img src="/img/royalcollage.JPEG" class="some-mid-img" alt="Collage 1" />
            <img src="/img/royalcollage2.JPEG" class="some-mid-img" alt="Collage 2" />
          </div>
          <div class="some-item">
            <video src="/img/royalll.mp4" autoplay loop muted playsinline class="video-fill"></video>
          </div>
        </div>
      </section>

      <section class="results-section">
        <h2 class="section-label">04. Results & Impact</h2>
        <p class="body-text">The workshop produced a stunning series of monochromatic works that showcased a powerful visual harmony. Beyond the art, it successfully repositioned the library as a vibrant hub for the international community; many participants discovered the space for the first time, fostering a lasting connection and a sense of belonging within the city's cultural heart.</p>
      </section>

    </main>

    <footer class="case-footer">
      <div class="pagination-wrapper">
        <router-link to="/portfolio" class="footer-link">&lt; Back to Works</router-link>
        <router-link to="/portfolio/migrant-emotions" class="footer-link">Next project &gt;</router-link>
      </div>
    </footer>

  </div>
</template>

<style scoped>
/* ─── BASE ──────────────────────────────────────────────── */
.case-study {
  font-family: 'Inter', sans-serif;
  background-color: #ffffff;
  color: #000;
  line-height: 1.6;
}

/* ─── LAYOUT ────────────────────────────────────────────── */
.content-wrapper {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 5%;
}

/* ─── NAV ───────────────────────────────────────────────── */
.top-nav {
  padding: 25px 5%;
}

.back-btn {
  font-size: 25px;
  font-weight: 500;
  color: #000;
  text-decoration: none;
  display: block;
  margin-top: 10px;
  transition: opacity 0.3s ease;
}

.back-btn:hover {
  opacity: 0.5;
}

/* ─── HEADER ────────────────────────────────────────────── */
.project-intro-header {
  margin: 40px 0;
}

.category-badge {
  color: #888;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 14px;
  display: block;
  margin-bottom: 5px;
}

.project-intro-header h1 {
  font-size: 60px;
  font-weight: 500;
  letter-spacing: -0.02em;
  margin: 0;
}

/* ─── HERO ──────────────────────────────────────────────── */
.hero {
  margin-bottom: 60px;
}

.hero-video {
  width: 100%;
  height: 65vh;
  object-fit: cover;
  object-position: 10% 1%;
  border-radius: 12px;
}

/* ─── SHARED LABELS ─────────────────────────────────────── */
.section-label {
  color: #888;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 14px;
  margin-bottom: 20px;
  display: block;
}

.section-label-gray {
  font-size: 14px;
  text-transform: uppercase;
  color: #aaa;
  letter-spacing: 2px;
  margin-bottom: 30px;
  display: block;
}

.body-text {
  font-size: 18px;
  text-align: justify;
  line-height: 1.6;
  color: #333;
  margin: 0;
}

/* ─── CONTEXT / OBJECTIVE GRID ──────────────────────────── */
.section-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin: 60px 0;
}

/* ─── PROCESS ───────────────────────────────────────────── */
.process-section {
  margin-bottom: 60px;
}

.process-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 40px;
}

.card {
  background-color: #f9f9f9;
  padding: 40px;
  border-radius: 20px;
  border: 1px solid #eee;
  transition: all 0.4s ease;
}

.card:hover {
  background-color: #d1ff00;
  border-color: #d1ff00;
  transform: translateY(-5px);
}

.card h3 {
  font-weight: 600;
  font-size: 22px;
  margin: 0 0 12px 0;
}

.card p {
  font-size: 16px;
  color: #000;
  line-height: 1.5;
  margin: 0;
  text-align: left;
}

/* ─── DUAL PHOTOS ───────────────────────────────────────── */
.dual-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 60px 0;
}

.dual-img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 12px;
}

/* ─── REVIEWS ───────────────────────────────────────────── */
.reviews-section {
  margin: 100px 0;
}

.review-text {
  font-size: 24px;
  font-weight: 450;
  margin-bottom: 10px;
  text-align: justify;
  color: #000;
}

.review-author {
  color: #888;
  font-size: 16px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* ─── SOME CONTENT ──────────────────────────────────────── */
.some-section {
  margin-bottom: 80px;
}

.some-complex-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;
  max-width: 900px;
  align-items: center;
}

.some-item {
  position: relative;
  width: 100%;
  padding-bottom: 180%;
  background: #000;
  border-radius: 12px;
  overflow: hidden;
}

.video-fill {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.some-images-stack {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.some-mid-img {
  width: 100%;
  height: 248px;
  object-fit: cover;
  border-radius: 12px;
}

/* ─── RESULTS ───────────────────────────────────────────── */
.results-section {
  margin: 80px 0;
}

/* ─── FOOTER ────────────────────────────────────────────── */
.case-footer {
  padding: 30px 5%;
  margin-top: 30px;
}

.pagination-wrapper {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-link {
  font-size: 32px;
  font-weight: 500;
  color: #000;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.footer-link:hover {
  opacity: 0.5;
}

/* ─── RESPONSIVE ────────────────────────────────────────── */
@media (max-width: 850px) {
  .project-intro-header h1 {
    font-size: 40px;
  }

  .hero {
    padding: 0 !important;
  }

  .hero-video {
    height: 40vh;
  }

  .section-grid,
  .process-cards,
  .dual-grid {
    grid-template-columns: 1fr;
    gap: 30px;
    margin: 40px 0;
  }

  .dual-img {
    height: 300px;
  }

  .reviews-section {
    margin: 60px 0;
  }

  .some-complex-grid {
    grid-template-columns: 1fr;
    max-width: 100%;
  }

  .some-images-stack {
    flex-direction: row;
  }

  .some-mid-img {
    height: 200px;
  }

  .footer-link {
    font-size: 22px;
  }
}

@media (max-width: 500px) {
  .project-intro-header h1 {
    font-size: 28px;
  }

  .back-btn {
    font-size: 18px;
  }

  .body-text {
    font-size: 16px;
  }

  .review-text {
    font-size: 18px;
  }

  .some-images-stack {
    flex-direction: column;
  }

  .some-mid-img {
    height: 220px;
  }

  .footer-link {
    font-size: 18px;
  }
}
</style>