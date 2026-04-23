<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const imgResult = ref('/img/collage-final-works.JPG');

const workshopPhotos = [
  '/img/collage-marketing.jpg',
  '/img/collage-visual-system.JPG',
  '/img/collage-action.JPG'
];
const activePhotoIndex = ref(0);

const reviews = [
  { text: '"Lovely experience to meet new faces and make art! Can\'t wait for the next one!"', author: 'Habiba, Egypt' },
  { text: '"The atmosphere was perfectly curated for meeting wonderful people and enjoy the creative process!"', author: 'Camelia, France' },
  { text: '"Thank you for this marvelous and creative event that brings people together, nurtures, and inspires!"', author: 'Marisol, Argentina' }
];
const activeReviewIndex = ref(0);

const someVideos = [
  'https://player.vimeo.com/video/1119202990?h=771babcc8a&background=1',
  'https://player.vimeo.com/video/1119205438?h=8e6c4a122a&background=1',
  'https://player.vimeo.com/video/1119204049?h=1eced4b6cc&background=1'
];

let reviewInterval;
let photoInterval;

onMounted(() => {
  reviewInterval = setInterval(() => {
    activeReviewIndex.value = (activeReviewIndex.value + 1) % reviews.length;
  }, 5000);
  photoInterval = setInterval(() => {
    activePhotoIndex.value = (activePhotoIndex.value + 1) % workshopPhotos.length;
  }, 2500);
});

onUnmounted(() => {
  clearInterval(reviewInterval);
  clearInterval(photoInterval);
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
        <h1>Collage Afternoon</h1>
      </header>

      <section class="hero">
        <video src="/img/collage-hero.MP4" autoplay loop muted playsinline class="hero-video"></video>
      </section>

      <section class="section-grid">
        <div class="text-col">
          <h2 class="section-label">01. Context</h2>
          <p class="body-text">Anticipating the arrival of the Danish winter, known for its intensity and potential for isolation, I realized many fellow expats might feel the same need for a support network as I did. To connect with like-minded people, I proposed a collage workshop, a hobby I've cherished since childhood. What started as a personal initiative evolved into a monthly creative hub at <strong>Dokk1, Aarhus</strong>.</p>
        </div>
        <div class="text-col">
          <h2 class="section-label">02. Objective</h2>
          <p class="body-text">Create a "third space" where creativity acts as a bridge. The goal was to foster well-being through art, helping participants find mental balance and genuine community during the colder months in collaboration with the <strong>Department of Sustainable Cities and Communities</strong>.</p>
        </div>
      </section>

      <section class="process-section">
        <h2 class="section-label">03. Process</h2>
        <p class="body-text"><strong>From conception to facilitation:</strong> I take full responsibility for every touchpoint of the experience. My role involves a 360° management approach:</p>
        <div class="process-cards">
          <div class="card">
            <h3>Digital Strategy</h3>
            <p>Comprehensive management of social media platforms, focusing on community growth and visual storytelling to maintain a consistent and engaging brand identity.</p>
          </div>
          <div class="card">
            <h3>Automation</h3>
            <p>Optimizing the participant journey by designing and implementing automated email workflows for seamless registrations, event reminders, and post-workshop feedback.</p>
          </div>
          <div class="card">
            <h3>Logistics</h3>
            <p>Strategic curation of physical spaces at Dokk1, managing high-quality material sourcing and environment styling to ensure a premium creative experience.</p>
          </div>
          <div class="card">
            <h3>Facilitation</h3>
            <p>Leading the end-to-step workshop flow, fostering an inclusive atmosphere where art acts as a tool for social connection and emotional well-being.</p>
          </div>
        </div>
      </section>

      <section class="carrousel-section">
        <img :src="workshopPhotos[activePhotoIndex]" class="carrousel-img" alt="Workshop moment" />
      </section>

      <section class="reviews-section">
        <h2 class="section-label-gray">Participants Feedback</h2>
        <div class="reviews-wrapper">
          <transition name="fade" mode="out-in">
            <div :key="activeReviewIndex" class="review-box">
              <p class="review-text">{{ reviews[activeReviewIndex].text }}</p>
              <span class="review-author">{{ reviews[activeReviewIndex].author }}</span>
            </div>
          </transition>
        </div>
      </section>

      <section class="some-section">
        <h2 class="section-label-gray">SoMe Content</h2>
        <div class="some-grid">
          <div v-for="videoUrl in someVideos" :key="videoUrl" class="some-item">
            <iframe :src="videoUrl" frameborder="0" allow="autoplay; fullscreen" class="vimeo-embed"></iframe>
          </div>
        </div>
      </section>

      <section class="results-section">
        <img
          :src="imgResult"
          class="result-img"
          @mouseenter="imgResult = '/img/Collageafternoondokk1.JPG'"
          @mouseleave="imgResult = '/img/collage-final-works.JPG'"
          alt="Final Result"
        />
        <div class="results-text">
          <h2 class="section-label">04. Results & Impact</h2>
          <p class="body-text">What began as a simple gathering evolved into "Collage Afternoon" to ensure a welcoming space for everyone. Today, it maintains a consistent attendance of 20-25 people. Beyond the art produced, the real success lies in the social fabric it creates: lasting friendships and a vibrant community in Aarhus.</p>
        </div>
      </section>

    </main>

    <footer class="case-footer">
      <div class="pagination-wrapper">
        <router-link to="/portfolio" class="footer-link">&lt; Back to Works</router-link>
        <router-link to="/portfolio/city-welcome" class="footer-link">Next project &gt;</router-link>
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
  height: 60vh;
  object-fit: cover;
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
  letter-spacing: 2px;
  color: #aaa;
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
  border: 1px solid #eee;
  padding: 35px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 220px;
  transition: all 0.4s ease;
}

.card:hover {
  background-color: #d1ff00;
  border-color: #d1ff00;
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(209, 255, 0, 0.15);
}

.card h3 {
  font-size: 22px;
  font-weight: 600;
  margin: 0 0 15px 0;
  color: #000;
}

.card p {
  font-size: 16px;
  line-height: 1.5;
  color: #000;
  margin: 0;
  text-align: left;
}

/* ─── CARROUSEL ─────────────────────────────────────────── */
.carrousel-section {
  max-width: 1000px;
  margin: 20px auto 80px auto;
  padding: 0 5%;
}

.carrousel-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
}

/* ─── REVIEWS ───────────────────────────────────────────── */
.reviews-section {
  margin: 80px auto;
  max-width: 1100px;
  padding: 0 5%;
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
  transition: opacity 1s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* ─── SOME VIDEOS ───────────────────────────────────────── */
.some-section {
  max-width: 1100px;
  margin: 0 auto 100px auto;
  padding: 0 5%;
}

.some-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;
}

.some-item {
  position: relative;
  width: 100%;
  padding-bottom: 177.78%;
  background: #000;
  border-radius: 12px;
  overflow: hidden;
}

.vimeo-embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* ─── RESULTS ───────────────────────────────────────────── */
.results-section {
  display: flex;
  align-items: center;
  gap: 60px;
  margin: 60px auto 90px auto;
  max-width: 1100px;
  padding: 0 5%;
}

.result-img {
  width: 50%;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.result-img:hover {
  transform: scale(1.01);
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
@media (max-width: 900px) {

  .hero {
    padding: 0 !important;
  }
  
  .project-intro-header h1 {
    font-size: 40px;
  }

  .hero-video {
    height: 40vh;
  }

  .section-grid {
    grid-template-columns: 1fr;
    gap: 40px;
    margin: 40px 0;
  }

  .process-cards {
    grid-template-columns: 1fr;
  }

  .carrousel-img {
    height: 280px;
  }

  .some-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .results-section {
    flex-direction: column;
    gap: 30px;
  }

  .result-img {
    width: 100%;
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

  .body-text,
  .highlight-text {
    font-size: 16px;
  }

  .review-text {
    font-size: 18px;
  }

  .some-grid {
    grid-template-columns: 1fr;
  }

  .carrousel-img {
    height: 220px;
  }

  .footer-link {
    font-size: 18px;
  }
}
</style>