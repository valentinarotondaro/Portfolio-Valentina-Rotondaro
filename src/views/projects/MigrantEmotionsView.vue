<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const heroRef = ref(null);

const dualPhotos = [
  '/img/collagesome.JPEG',
  '/img/collagesome.jpg'
];

const reviews = [
  { text: '"Thank you for this beautiful workshop that allowed us to connect with our emotions and imagination. The power of taking flight through collage!"', author: 'Virginia, Argentina' },
  { text: '"Inspiring, creative, and liberating. I felt so comfortable. Thank you for such a fantastic experience!"', author: 'Sofia, España' },
  { text: '"Thank you for creating a space for us to meet, share, and create together. Having a place like this when you are living so far from home is so important."', author: 'Regi, Argentina' }
];
const activeReviewIndex = ref(0);

let reviewInterval;

onMounted(() => {
  const video = heroRef.value;
  if (video) {
    video.currentTime = 7;
    video.addEventListener('timeupdate', () => {
      if (video.currentTime >= 46) {
        video.currentTime = 7;
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
        <h1>Collage & Migrant Emotions</h1>
      </header>

      <section class="hero">
        <video
          ref="heroRef"
          src="/img/collagemigrant-hero.MP4"
          autoplay loop muted playsinline
          class="hero-video"
        ></video>
      </section>

      <section class="section-grid">
        <div class="text-col">
          <h2 class="section-label">01. Context</h2>
          <p class="body-text">Migration is a journey not just of miles, but of profound emotional shifts. In collaboration with psychologist Julieta Dutto, we hosted this workshop that explores the 'emotional baggage' of expats through the tactile art of collage.</p>
        </div>
        <div class="text-col">
          <h2 class="section-label">02. Objective</h2>
          <p class="body-text">To facilitate emotional processing through art therapy-inspired workshops. The goal is to build resilience and foster a sense of belonging by sharing common migrant narratives in Aarhus.</p>
        </div>
      </section>

      <section class="process-section">
        <h2 class="section-label">03. Process</h2>
        <div class="process-cards">
          <div class="card">
            <h3>Conceptualization</h3>
            <p>Designing themes that resonate with the migrant experience: roots, nostalgia, and hybrid identities through visual research.</p>
          </div>
          <div class="card">
            <h3>Curation</h3>
            <p>Sourcing diverse visual materials and archival imagery that represent various cultural backgrounds and migration eras.</p>
          </div>
          <div class="card">
            <h3>Facilitation</h3>
            <p>Guiding participants through reflective exercises while maintaining an inclusive, empathetic, and safe creative environment.</p>
          </div>
          <div class="card">
            <h3>Exhibition</h3>
            <p>Synthesizing collective work into a visual narrative to raise awareness about migrant mental health and community stories.</p>
          </div>
        </div>
      </section>

      <section class="dual-grid">
        <img v-for="(img, i) in dualPhotos" :key="i" :src="img" class="dual-img" alt="Workshop photo" />
      </section>

      <section class="reviews-section">
        <h2 class="section-label-gray">Participants Feedback</h2>
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
            <iframe
              src="https://player.vimeo.com/video/1119544416?h=547058c68e&background=1"
              frameborder="0" allow="autoplay; fullscreen"
              class="vimeo-zoom"
            ></iframe>
          </div>
          <div class="some-images-stack">
            <img src="/img/collageprocess1.PNG" class="some-mid-img" alt="Process 1" />
            <img src="/img/collageprocess2.PNG" class="some-mid-img" alt="Process 2" />
          </div>
          <div class="some-item">
            <iframe
              src="https://player.vimeo.com/video/1119543528?h=a99e5a7d55&background=1"
              frameborder="0" allow="autoplay; fullscreen"
              class="vimeo-normal"
            ></iframe>
          </div>
        </div>
      </section>

      <section class="results-section">
        <h2 class="section-label">04. Results & Impact</h2>
        <p class="body-text">Through collage, we turned the migration experience into art. This workshop gave participants a space to reflect, create, and, most importantly, connect with a community that shares their journey.</p>
      </section>

    </main>

    <footer class="case-footer">
      <div class="pagination-wrapper">
        <router-link to="/portfolio" class="footer-link">&lt; Back to Works</router-link>
        <router-link to="/portfolio/under" class="footer-link">Next project &gt;</router-link>
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
  object-position: 50% 20%;
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
  padding-bottom: 177.78%;
  background: #000;
  border-radius: 12px;
  overflow: hidden;
}

/* Vimeo zoomed (fills black bars) */
.vimeo-zoom {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 316.5%;
  height: 100%;
  transform: translate(-50%, -50%);
  border: none;
}

/* Vimeo normal */
.vimeo-normal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.some-images-stack {
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
}

.some-mid-img {
  width: 100%;
  flex: 1;
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
    padding: 0;
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
    height: auto;
  }

  .some-mid-img {
    height: 200px;
    flex: unset;
  }

  .footer-link {
    font-size: 22px;
  }
}

@media (max-width: 500px) {
  .project-intro-header h1 {
    font-size: 30px;
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
    height: auto;
  }

  .some-mid-img {
    height: 220px;
  }

  .footer-link {
    font-size: 18px;
  }
}
</style>