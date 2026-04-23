<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// --- VIDEOS VIMEO CORREGIDOS ---
const heroVideo = "https://player.vimeo.com/video/1119544416?h=547058c68e&background=1";

const heroRef = ref(null);

onMounted(() => {
  const video = heroRef.value;
  if (video) {
    // 1. Empezar en el segundo 7
    video.currentTime = 7;

    // 2. Monitorear el tiempo para hacer el loop manual
    video.addEventListener('timeupdate', () => {
      if (video.currentTime >= 46) {
        video.currentTime = 7; // Vuelve al segundo 7
        video.play();
      }
    });
  }
});

const someVideos = ref([
  "https://player.vimeo.com/video/1119544416?h=547058c68e&background=1",
  "https://player.vimeo.com/video/1119543528?h=a99e5a7d55&background=1"
]);
// --- IMÁGENES (Reemplaza con tus rutas reales) ---
const dualPhotos = ref([
  '/img/collagesome.JPEG',
  '/img/collagesome.jpg'
]);

const someImages = ref([
  '/img/some-migrant-1.jpg',
  '/img/some-migrant-2.jpg'
]);

const imgResult = ref('/img/result-migrant-base.jpg');

// --- REVIEWS ---
const reviews = ref([
  { text: '"Thank you for this beautiful workshop that allowed us to connect with our emotions and imagination. The power of taking flight through collage!"', author: 'Virginia, Argentina' },
  { text: '"Inspiring, creative, and liberating. I felt so comfortable. Thank you for such a fantastic experience!"', author: 'Sofia, España' },
  { text: '"Thank you for creating a space for us to meet, share, and create together. Having a place like this when you are living so far from home is so important."', author: 'Regi, Argentina' }
]);
const activeReviewIndex = ref(0);

let reviewInterval;
onMounted(() => {
  reviewInterval = setInterval(() => {
    activeReviewIndex.value = (activeReviewIndex.value + 1) % reviews.value.length;
  }, 5000);
});

onUnmounted(() => {
  clearInterval(reviewInterval);
});
</script>

<template>
  <div class="case-study">
    <nav class="top-nav">
      <router-link to="/portfolio" class="back-btn">
        <span class="arrow"><</span> Back to Works
      </router-link>
    </nav>

    <main class="content-wrapper">
      <header class="project-intro-header">
        <span class="category-badge">Community Lead & Experience Design</span>
        <h1>Collage & Migrant Emotions</h1>
      </header>

      <section class="hero">
  <div class="hero-image-container">
    <video 
  ref="heroRef"
  src="/img/collagemigrant-hero.MP4" 
  autoplay 
  loop 
  muted 
  playsinline 
  class="hero-img">
</video>
  </div>
</section>

      <section class="section-grid context-objective">
        <div class="text-col">
          <h2 class="section-label">01. Context</h2>
          <p class="body-text">
            Migration is a journey not just of miles, but of profound emotional shifts. In collaboration with psychologist Julieta Dutto, we hosted this workshop that explores the 'emotional baggage' of expats through the tactile art of collage.
          </p>
        </div>
        <div class="text-col">
          <h2 class="section-label">02. Objective</h2>
          <p class="body-text">
            To facilitate emotional processing through art therapy-inspired workshops. The goal is to build resilience and foster a sense of belonging by sharing common migrant narratives in Aarhus.
          </p>
        </div>
      </section>

      <section class="full-text-block">
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

      <section class="dual-cards-section">
        <div class="dual-grid">
          <img v-for="(img, i) in dualPhotos" :key="i" :src="img" class="dual-img" />
        </div>
      </section>

      <section class="reviews-section">
        <div class="reviews-wrapper">
          <h2 class="section-label-gray">Participants feedback</h2>
          <div class="review-content">
            <transition name="fade" mode="out-in">
              <div :key="activeReviewIndex" class="review-box">
                <p class="review-text">{{ reviews[activeReviewIndex].text }}</p>
                <span class="review-author">{{ reviews[activeReviewIndex].author }}</span>
              </div>
            </transition>
          </div>
        </div>
      </section>

      <section class="some-section">
  <h2 class="section-label-gray">SoMe Content</h2>
  <div class="some-complex-grid">
  <div class="some-item video-9-16">
    <iframe src="https://player.vimeo.com/video/1119544416?h=547058c68e&background=1" 
            class="vimeo-embed video-zoom" frameborder="0" allow="autoplay; fullscreen">
    </iframe>
  </div>
    
    <div class="some-images-stack">
      <img src="/img/collageprocess1.PNG" class="some-mid-img" />
      <img src="/img/collageprocess2.PNG" class="some-mid-img" />
    </div>
    
    <div class="some-item video-9-16">
    <iframe src="https://player.vimeo.com/video/1119543528?h=a99e5a7d55&background=1" 
            class="vimeo-embed video-normal" frameborder="0" allow="autoplay; fullscreen">
    </iframe>
  </div>
</div>
</section>

      <section class="results-section">
        <div class="results-container">
          <div class="results-text">
            <h2 class="section-label">04. Results & Impact</h2>
            <p class="body-text">
            Through collage, we turned the migration experience into art. This workshop gave participants a space to reflect, create, and, most importantly, connect with a community that shares their journey.
            </p>
          </div>
        </div>
      </section>
    </main>

    <footer class="case-footer">
      <div class="pagination-wrapper">
        <router-link to="/Portfolio" class="footer-link back-link">
          <span class="nav-arrow"><</span> Back to All Works
        </router-link>
        
        <router-link to="/portfolio/itinero" class="footer-link next-link">
          <span class="project-name">Next project</span> <span class="nav-arrow">></span>
        </router-link>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.case-study {
  font-family: 'Inter', sans-serif;
  background-color: #ffffff;
  color: black;
  line-height: 1.6;
}

/* --- CLASE DE ALINEACIÓN GLOBAL --- */
.align-content {
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
}

/* --- TÍTULOS EN GRIS A LA IZQUIERDA --- */
.section-label-gray {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #aaa; /* Gris claro */
  text-align: left;
  margin-bottom: 30px;
}

.content-wrapper {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0%;
}

.project-intro-header { margin: 40px 0; }
.project-intro-header h1 { font-size: 60px; font-weight: 500; letter-spacing: -0.02em; }
.category-badge { color: #888; text-transform: uppercase; letter-spacing: 2px; font-size: 14px; }

.section-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin: 60px 0;
}

.section-label { color: #888; text-transform: uppercase; letter-spacing: 2px; font-size: 14px; margin-bottom: 20px; }
.body-text, .highlight-text { font-family: 'Inter', sans-serif; font-size: 18px; text-align: justify; line-height: 1.6; color: #333; }

/* TOP NAV */
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

/* Hero Video Contenedor */
.hero-image-container {
  position: relative;
  width: 100%;
  height: 65vh;
  border-radius: 12px;
  overflow: hidden;
  background: black;
}

/* Estilo para la etiqueta <video> */
.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
  object-position: 50% 20%; 
}

/* Sections & Typography */
.section-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin: 60px 0;
}
.section-label { color: #888; text-transform: uppercase; letter-spacing: 2px; font-size: 14px; margin-bottom: 20px; }
.section-label-gray { font-size: 14px; text-transform: uppercase; color: #aaa; letter-spacing: 2px; margin-bottom: 30px; display: block; }
.body-text { font-size: 18px; text-align: justify; color: #333; }

/* Process Cards (2x2) */
.process-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin: 40px 0;
}
.card {
  background-color: #f9f9f9;
  padding: 40px;
  border-radius: 20px;
  border: 1px solid #eee;
  transition: all 0.4s ease;
}
.card:hover { background-color: #d1ff00; border-color: #d1ff00; transform: translateY(-5px); }
.card h3 { font-weight: 600; font-size: 22px; margin-bottom: 12px; }
.card p { font-size: 16px; color: #000; }

/* Dual Grid (Reemplaza carrusel) */
.dual-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 60px 0; }
.dual-img { width: 100%; height: 500px; object-fit: cover; border-radius: 12px; }

/* Reviews */
.reviews-section { margin: 100px 0; }
.reviews-wrapper { display: grid; grid-template-columns: 250px 1fr; gap: 40px; }
.review-text { font-size: 24px; font-weight: 450; margin-bottom: 10px; text-align: justify; }
.review-author { color: #888; font-size: 16px; }

/* SOME COMPLEX GRID (Video | 2 Imgs | Video) */
.some-complex-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 40px auto; /* Centra la grilla */
  max-width: 900px;  /* Reducir este número hará los videos más pequeños */
}

.video-9-16 {
  position: relative;
  padding-bottom: 177.78%; /* Proporción 9:16 */
  background: black;
  border-radius: 12px;
  overflow: hidden;
}

.vimeo-embed {
  position: absolute;
  border: none;
}

/* EL QUE SE VEÍA MAL: Le metemos zoom del 316% para que tape lo negro */
.video-zoom {
  top: 50%;
  left: 50%;
  width: 316.5%; 
  height: 100%;
  transform: translate(-50%, -50%);
}

/* EL QUE SE VEÍA BIEN: Lo dejamos al 100% normal */
.video-normal {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.some-images-stack { 
  display: flex; 
  flex-direction: column; 
  gap: 20px; 
  height: 100%; /* Importante para que estire */
}

.some-mid-img { 
  width: 100%; 
  flex: 1;      /* Hace que cada imagen tome la mitad del alto disponible */
  object-fit: cover; 
  border-radius: 12px; 
}

/* Results */
.results-container { display: flex; align-items: center; gap: 60px; margin-top: 80px; }
.result-img { width: 50%; border-radius: 12px; }

/* Footer */

.case-footer {
  padding: 30px 5%;
  border-top: none;
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
  display: block;
  margin-top: 10px;
  transition: opacity 0.3s ease;
}
.footer-link:hover { opacity: 0.5; }
.project-name { font-weight: 450; }

/* Animations */
.fade-enter-active, .fade-leave-active { transition: opacity 0.6s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* Responsive */
@media (max-width: 850px) {
  .section-grid, .process-cards, .dual-grid, .some-complex-grid, .results-container, .reviews-wrapper {
    grid-template-columns: 1fr;
  }
  .some-images-stack { flex-direction: row; height: auto; }
  .some-mid-img { height: 300px; }
  .project-intro-header h1 { font-size: 40px; }
}
</style>