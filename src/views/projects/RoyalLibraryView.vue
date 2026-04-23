<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// --- VIDEOS VIMEO CORREGIDOS ---
const heroVideo = "https://player.vimeo.com/video/1119544416?h=547058c68e&background=1";

const heroRef = ref(null);

onMounted(() => {
  const video = heroRef.value;
  if (video) {
    video.currentTime = 2;

    // 2. Monitorear el tiempo para hacer el loop manual
    video.addEventListener('timeupdate', () => {
      if (video.currentTime >= 7) {
        video.currentTime = 2; // Vuelve al segundo 2
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
  '/img/royalchicas2.JPEG',
  '/img/royalchicas3.JPEG'
]);

const someImages = ref([
  '/img/royalchicas1.JPEG',
  '/img/royalchicas2.JPEG'
]);

const imgResult = ref('/img/result-migrant-base.jpg');

// --- REVIEWS ---
const reviews = ref([
  { text: '"Collage has become such a meaningful and essential experience for us in Aarhus ♥ Thank you Valen for hosting it and inspire us to create, and thank you to every woman who created such a warm and beautiful environment. It was my first visit to the Royal Library, and it was absolutely amazing!. Looking forward to the next one :)"', author: 'Cecilia, Argentina' },
 
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
        <h1>Collage workshop    |  Royal Danish Library</h1>
      </header>

      <section class="hero">
  <div class="hero-image-container">
    <video 
  ref="heroRef"
  src="/img/royalhero.MP4" 
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
            The Royal Danish Library provided the perfect setting for a focused creative exploration. In this edition of Collage Afternoon, I wanted to challenge the participants to look beyond the chaos of imagery and focus on the fundamental power of color. By stripping away the palette, we turned a quiet library space into a vibrant laboratory of individual and collective expression.
          </p>
        </div>
        <div class="text-col">
          <h2 class="section-label">02. Objective</h2>
          <p class="body-text">
            The primary goal was to use chromatic limitation as a tool for deeper creativity. By restricting each participant to a single color, the objective was to encourage a more profound exploration of textures, shades, and symbolism while fostering personal storytelling through the psychological weight of the chosen hue.
          </p>
        </div>
      </section>

      <section class="full-text-block">
        <h2 class="section-label">03. Process</h2>
        <div class="process-cards">
          <div class="card">
            <h3>Curation</h3>
            <p>I pre-sorted thousands of magazine cutouts and materials into specific color stations (all reds, all blues, all greens, etc.), ensuring high-quality textures for each palette to provide participants with a rich sensory starting point.</p>
          </div>
          <div class="card">
            <h3>Facilitation</h3>
            <p>We began the session with a round of introductions where each participant was assigned a specific color. I gave a brief talk on the psychology of color, inviting everyone to reflect on whether that hue resonated with their current emotional state or if they identified with its symbolic meaning.</p>
          </div>
          <div class="card">
            <h3>Constraint design</h3>
            <p>By removing the "choice paralysis" of a full palette, I facilitated a flow state where participants could focus purely on composition and symbolism. This simplified decision-making process allowed more time for them to connect with one another and enjoy a truly unforgettable creative moment.</p>
          </div>
          <div class="card">
            <h3>Social connection</h3>
            <p>The workshop concluded with a collective showcase. Each participant shared their work while the group admired the different results. This final stage turned into a deep conversation, reinforcing the bonds formed during the creative process and celebrating their collective expression.</p>
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
          <h2 class="section-label-gray">Participant feedback</h2>
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
      <video 
        src="/img/royalhero.MP4" 
        autoplay 
        loop 
        muted 
        playsinline 
        class="video-local-tag">
      </video>
    </div>
    
    <div class="some-images-stack">
      <img src="/img/royalcollage.JPEG" class="some-mid-img" />
      <img src="/img/royalcollage2.JPEG" class="some-mid-img" />
    </div>

    <div class="some-item video-9-16">
      <video 
        src="/img/royalll.mp4" 
        autoplay 
        loop 
        muted 
        playsinline 
        class="video-local-tag">
      </video>
    </div>
</div>
</section>

      <section class="results-section">
        <div class="results-container">
          <div class="results-text">
            <h2 class="section-label">04. Results & Impact</h2>
            <p class="body-text">
            The workshop produced a stunning series of monochromatic works that showcased a powerful visual harmony. Beyond the art, it successfully repositioned the library as a vibrant hub for the international community; many participants discovered the space for the first time, fostering a lasting connection and a sense of belonging within the city's cultural heart.
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
  object-position: 10% 1%; 
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
/* 1. Reducimos el alto del marco (de 177% o 100% a 145%) */
.video-9-16 {
  position: relative !important;
  width: 100% !important;
  padding-bottom: 180% !important; /* Altura vertical equilibrada */
  background: black !important;
  border-radius: 12px !important;
  overflow: hidden !important;
}

/* 2. Forzamos al video a llenar el marco y eliminar las franjas negras */
.video-local-tag {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important; /* ESTO ES LO QUE QUITA LO NEGRO */
}

/* 3. Ajustamos las fotos del medio para que midan lo mismo que los videos */
.some-images-stack {
  display: flex !important;
  flex-direction: column !important;
  gap: 20px !important;
  height: auto !important; /* Que no fuerce el estiramiento */
}

.some-mid-img {
  width: 100% !important;
  /* 210px en cada foto + 20px de gap ≈ el alto del video lateral */
  height: 248px !important; 
  object-fit: cover !important;
  border-radius: 12px !important;
}

/* 4. Aseguramos que la grilla no estire nada por error */
.some-complex-grid {
  display: grid !important;
  grid-template-columns: repeat(3, 1fr) !important;
  gap: 20px !important;
  margin: 40px auto !important;
  max-width: 900px !important; /* Grilla más cerrada = videos menos largos */
  align-items: center !important; 
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