<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// --- VIDEOS VIMEO CITY WELCOME ---
const heroVideo = "https://player.vimeo.com/video/1124840298?h=e4f3e1cc75&background=1";

const heroRef = ref(null);

onMounted(() => {
  const video = heroRef.value;
  if (video) {
    // Ajuste de tiempo si es necesario, o inicio normal
    video.currentTime = 0; 

    video.addEventListener('timeupdate', () => {
      // Loop personalizado si quieres recortar el final, sino loop normal
      if (video.currentTime >= 46) {
        video.currentTime = 0;
        video.play();
      }
    });
  }
});

const someVideos = ref([
  "https://player.vimeo.com/video/1124840298?h=e4f3e1cc75&background=1",
  "https://player.vimeo.com/video/1124865039?h=5ccb5e3436&background=1"
]);

// --- IMÁGENES CITY WELCOME ---
const dualPhotos = ref([
  '/img/city-welcome-dual-1.JPEG', // Reemplaza con tus fotos de Dokk1
  '/img/city-welcome-dual-2.JPEG'
]);

const someImages = ref([
  '/img/city-process-1.png',
  '/img/city-process-2.JPEG'
]);

const imgResult = ref('/img/city-welcome-result.jpg');

// --- REVIEWS CITY WELCOME ---
const reviews = ref([
  { text: '"A wonderful way to start my life in Aarhus. Making art helped me feel at home immediately!"', author: 'Julia, Brazil' },
  { text: '"I loved seeing everyone\'s different perspective of the city. Dokk1 is the perfect place for this."', author: 'Sara, Spain' },
  { text: '"Creative, fun, and a great way to meet people from all over the world. Thank you for the inspiration!"', author: 'Kateryna, Ukraine' }
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
        <h1>Aarhus City Welcome</h1>
      </header>

      <section class="hero">
        <div class="hero-image-container">
          <video 
            ref="heroRef"
            src="/img/AarhusCityWelcomeCollageReel.mov" 
            autoplay loop muted playsinline 
            class="hero-img">
          </video>
        </div>
      </section>

      <section class="section-grid context-objective">
        <div class="text-col">
          <h2 class="section-label">01. Context</h2>
          <p class="body-text">
            As part of the largest event for the international community in Aarhus, organized by Aarhus Kommune at Dokk1, I facilitated a creative collage workshop where participants were invited to express their personal vision of the city.
          </p>
        </div>
        <div class="text-col">
          <h2 class="section-label">02. Objective</h2>
          <p class="body-text">
            To create a beautiful moment of creativity and connection, where people from all over the world explored belonging and culture through artistic expression in their new home city.
          </p>
        </div>
      </section>

      <section class="full-text-block">
        <h2 class="section-label">03. Process</h2>
        <div class="process-cards">
          <div class="card">
            <h3>Workshop design</h3>
            <p>Developing a creative framework that allows non-artists to express complex feelings about identity and relocation through collage.</p>
          </div>
          <div class="card">
            <h3>Stakeholder collab</h3>
            <p>Coordinating with Aarhus Kommune and Dokk1 to integrate the workshop into the Aarhus City Welcome official program for thousands of newcomers.</p>
          </div>
          <div class="card">
            <h3>Material curation</h3>
            <p>Selecting maps, local magazines, and iconic Aarhus imagery to help participants anchor their stories to their new physical environment.</p>
          </div>
          <div class="card">
            <h3>Live facilitation</h3>
            <p>Managing high-volume participant flow while maintaining a personal, welcoming, and inspiring atmosphere during the event.</p>
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
            <iframe :src="someVideos[0]" 
                    class="vimeo-embed video-zoom" frameborder="0" allow="autoplay; fullscreen">
            </iframe>
          </div>
          
          <div class="some-images-stack">
            <img src="/img/city-process-1.png" class="some-mid-img" />
            <img src="/img/city-process-2.JPEG" class="some-mid-img" />
          </div>
          
          <div class="some-item video-9-16">
            <iframe :src="someVideos[1]" 
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
              The workshop became a highlight of the City Welcome event, producing a collective mural of diverse voices. It successfully introduced newcomers to the library's creative resources while building immediate social bonds.
            </p>
          </div>
        </div>
      </section>
    </main>

    <footer class="case-footer">
      <div class="pagination-wrapper">
        <router-link to="/Portfolio" class="footer-link">
          <span class="nav-arrow"><</span> Back to All Works
        </router-link>
        <router-link to="/portfolio/itinero" class="footer-link">
          Next project <span class="nav-arrow">></span>
        </router-link>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* COPIADO EXACTAMENTE DE MIGRANT EMOTIONS */
.case-study { font-family: 'Inter', sans-serif; background-color: #ffffff; color: black; line-height: 1.6; }
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
.content-wrapper { max-width: 1100px; margin: 0 auto; padding: 0%; }
.project-intro-header { margin: 40px 0; }
.project-intro-header h1 { font-size: 60px; font-weight: 500; letter-spacing: -0.02em; }
.category-badge { color: #888; text-transform: uppercase; letter-spacing: 2px; font-size: 14px; }
.section-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; margin: 60px 0; }
.section-label { color: #888; text-transform: uppercase; letter-spacing: 2px; font-size: 14px; margin-bottom: 20px; }
.section-label-gray { font-size: 14px; text-transform: uppercase; color: #aaa; letter-spacing: 2px; margin-bottom: 30px; display: block; }
.body-text { font-size: 18px; text-align: justify; color: #333; }
.process-cards { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin: 40px 0; }
.card { background-color: #f9f9f9; padding: 40px; border-radius: 20px; border: 1px solid #eee; transition: all 0.4s ease; }
.card:hover { background-color: #d1ff00; border-color: #d1ff00; transform: translateY(-5px); }
.card h3 { font-weight: 600; font-size: 22px; margin-bottom: 12px; }
.dual-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 60px 0; }
.dual-img { width: 100%; height: 500px; object-fit: cover; border-radius: 12px; }
.reviews-section { margin: 100px 0; }
.reviews-wrapper { display: grid; grid-template-columns: 250px 1fr; gap: 40px; }
.review-text { font-size: 24px; font-weight: 450; margin-bottom: 10px; text-align: justify; }
.review-author { color: #888; font-size: 16px; }
/* --- GRILLA COMPACTA --- */
.some-complex-grid {
  display: grid !important;
  grid-template-columns: repeat(3, 1fr) !important;
  gap: 20px !important;
  margin: 40px auto !important;
  max-width: 900px !important;
  /* IMPORTANTE: Alineamos al inicio para que nada se estire hacia abajo */
  align-items: start !important; 
}

/* --- MARCOS DE VIDEO CORTOS --- */
/* --- GRILLA PRINCIPAL --- */
.some-complex-grid {
  display: grid !important;
  grid-template-columns: repeat(3, 1fr) !important;
  gap: 25px !important; /* Un poco menos de espacio para que ganen ancho */
  margin: 40px auto !important;
  max-width: 1000px !important; /* Grilla un poco más cerrada */
  align-items: center !important; /* Centra verticalmente las fotos con los videos */
}

/* --- MARCOS CON FORMA DE REEL (Verticales pero controlados) --- */
.video-9-16 {
  position: relative !important;
  width: 100% !important;
  /* 140% es el punto dulce: se ve vertical como un Reel, pero no es gigante */
  padding-bottom: 178% !important; 
  background: black !important;
  border-radius: 16px !important;
  overflow: hidden !important;
}

.vimeo-embed {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  border: none !important;
}

/* --- RECORTE PARA EL VIDEO QUE TIENE ZOOM --- */
.video-zoom {
  width: 280% !important; /* Zoom para llenar el marco vertical */
  left: 50% !important;
  transform: translateX(-50%) !important;
}

/* --- STACK DE IMÁGENES DEL MEDIO --- */
.some-images-stack { 
  display: flex !important; 
  flex-direction: column !important; 
  gap: 15px !important;
  height: auto !important;
}

.some-mid-img { 
  width: 100% !important;
  /* Altura fija para que el par de fotos sume lo mismo que el video vertical */
  height: 272px !important; 
  object-fit: cover !important; 
  border-radius: 16px !important;
}

.results-container { display: flex; align-items: center; gap: 60px; margin-top: 80px; }
.hero-image-container { position: relative; width: 100%; height: 65vh; border-radius: 12px; overflow: hidden; background: black; }
.hero-img { width: 100%; height: 100%; object-fit: cover; object-position: 50% 20%; }
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
.fade-enter-active, .fade-leave-active { transition: opacity 0.6s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 850px) {
  .section-grid, .process-cards, .dual-grid, .some-complex-grid, .results-container, .reviews-wrapper { grid-template-columns: 1fr; }
  .some-images-stack { flex-direction: row; height: auto; }
  .some-mid-img { height: 300px; }
  .project-intro-header h1 { font-size: 40px; }
}
</style>