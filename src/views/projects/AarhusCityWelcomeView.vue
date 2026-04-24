<script setup>
import { ref, onMounted, onUnmounted } from 'vue';


const someVideos = [
  "https://player.vimeo.com/video/1124840298?h=e4f3e1cc75&background=1",
  "https://player.vimeo.com/video/1124865039?h=5ccb5e3436&background=1"
];

const dualPhotos = [
  '/img/city-welcome-dual-1.JPEG',
  '/img/city-welcome-dual-2.JPEG'
];

const reviews = [
  { text: '"A wonderful way to start my life in Aarhus. Making art helped me feel at home immediately!"', author: 'Julia, Brazil' },
  { text: '"I loved seeing everyone\'s different perspective of the city. Dokk1 is the perfect place for this."', author: 'Sara, Spain' },
  { text: '"Creative, fun, and a great way to meet people from all over the world. Thank you for the inspiration!"', author: 'Kateryna, Ukraine' }
];
const activeReviewIndex = ref(0);

let reviewInterval;

onMounted(() => {
 
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
        <h1>Aarhus City Welcome</h1>
      </header>

      <section class="hero">
  <div class="some-item hero-item">
    <iframe 
      src="https://player.vimeo.com/video/1124840298?h=e4f3e1cc75&background=1"
      frameborder="0" 
      allow="autoplay; fullscreen" 
      class="vimeo-embed video-zoom"
    ></iframe>
  </div>
</section>

      <section class="section-grid">
        <div class="text-col">
          <h2 class="section-label">01. Context</h2>
          <p class="body-text">As part of the largest event for the international community in Aarhus, organized by Aarhus Kommune at Dokk1, I facilitated a creative collage workshop where participants were invited to express their personal vision of the city.</p>
        </div>
        <div class="text-col">
          <h2 class="section-label">02. Objective</h2>
          <p class="body-text">To create a beautiful moment of creativity and connection, where people from all over the world explored belonging and culture through artistic expression in their new home city.</p>
        </div>
      </section>

      <section class="process-section">
        <h2 class="section-label">03. Process</h2>
        <div class="process-cards">
          <div class="card">
            <h3>Workshop Design</h3>
            <p>Developing a creative framework that allows non-artists to express complex feelings about identity and relocation through collage.</p>
          </div>
          <div class="card">
            <h3>Stakeholder Collab</h3>
            <p>Coordinating with Aarhus Kommune and Dokk1 to integrate the workshop into the Aarhus City Welcome official program for thousands of newcomers.</p>
          </div>
          <div class="card">
            <h3>Material Curation</h3>
            <p>Selecting maps, local magazines, and iconic Aarhus imagery to help participants anchor their stories to their new physical environment.</p>
          </div>
          <div class="card">
            <h3>Live Facilitation</h3>
            <p>Managing high-volume participant flow while maintaining a personal, welcoming, and inspiring atmosphere during the event.</p>
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
            <iframe :src="someVideos[0]" frameborder="0" allow="autoplay; fullscreen" class="vimeo-embed video-zoom"></iframe>
          </div>
          <div class="some-images-stack">
            <img src="/img/city-process-1.png" class="some-mid-img" alt="Process 1" />
            <img src="/img/city-process-2.JPEG" class="some-mid-img" alt="Process 2" />
          </div>
          <div class="some-item">
            <iframe :src="someVideos[1]" frameborder="0" allow="autoplay; fullscreen" class="vimeo-embed"></iframe>
          </div>
        </div>
      </section>

      <section class="results-section">
        <h2 class="section-label">04. Results & Impact</h2>
        <p class="body-text">The workshop became a highlight of the Aarhus City Welcome event, producing a collective mural of diverse voices. It successfully introduced newcomers to the library's creative resources while building immediate social bonds.</p>
      </section>

    </main>

    <footer class="case-footer">
      <div class="pagination-wrapper">
        <router-link to="/portfolio" class="footer-link">&lt; Back to Works</router-link>
        <router-link to="/portfolio/royal-library" class="footer-link">Next project &gt;</router-link>
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

.hero-item {
  position: relative;
  width: 100%;
  height: 60vh;
  padding-bottom: 0 !important; /* cancela el 178% de .some-item */
  background: #000;
  border-radius: 12px;
  overflow: hidden;
}

.hero-item .video-zoom {
  width: 100%;
  left: 0;
  transform: scale(4);
  transform-origin: center center;
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
  line-height: 1.5;
  color: #000;
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
  gap: 25px;
  margin-top: 40px;
  max-width: 1000px;
  align-items: center;
}

.some-item {
  position: relative;
  width: 100%;
  padding-bottom: 178%;
  background: #000;
  border-radius: 16px;
  overflow: hidden;
}

.vimeo-embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}

.video-zoom {
  width: 280%;
  left: 50%;
  transform: translateX(-50%);
}

.some-images-stack {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.some-mid-img {
  width: 100%;
  height: 272px;
  object-fit: cover;
  border-radius: 16px;
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

  .reviews-section {
    margin: 60px 0;
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
  }

  .some-mid-img {
    height: 220px;
  }

  .footer-link {
    font-size: 18px;
  }
}
</style>