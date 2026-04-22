<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const imgProcess = ref('/img/collage-action.jpg');
const imgEmails = ref('/img/collage-marketing.png');
const imgResult = ref('/img/collage-final-works.JPG'); // Imagen base de Resultados

// --- NUEVO: Estados para los carruseles ---

// Fotos del Workshop (Llena con tus rutas)
const workshopPhotos = ref([
  '/img/collage-marketing.jpg',
  '/img/collage-visual-system.JPG',
  '/img/collage-action.JPG'
]);
const activePhotoIndex = ref(0);

// Reviews (Llénalos con los textos reales)
const reviews = ref([
  { text: '"Lovely experience to meet new faces and make art! Can\'t wait for the next one!"', author: 'Habiba, Egypt' },
  { text: '"The atmosphere was perfectly curated for meeting wonderful people and enjoy the creative process!"', author: 'Camelia, France' },
  { text: '"Thank you for this marvelous and creative event that brings people together, nurtures, and inspires!"', author: 'Marisol, Argentina' }
]);
const activeReviewIndex = ref(0);

let reviewInterval;
let photoInterval;
onMounted(() => {
  reviewInterval = setInterval(() => {
    activeReviewIndex.value = (activeReviewIndex.value + 1) % reviews.value.length;
  }, 5000);
  photoInterval = setInterval(() => {
    activePhotoIndex.value = (activePhotoIndex.value + 1) % workshopPhotos.value.length;
  }, 2500); // Cambio cada 2.5 segundos
});

onUnmounted(() => {
  clearInterval(reviewInterval);
});

onUnmounted(() => {
  clearInterval(photoInterval);
});

// Videos de SoMe 
const someVideos = ref([
  'https://player.vimeo.com/video/1119202990?h=771babcc8a&background=1',
  'https://player.vimeo.com/video/1119205438?h=8e6c4a122a&background=1',
  'https://player.vimeo.com/video/1119204049?h=1eced4b6cc&background=1'
]);

</script>


<template>
  <div class="case-study">
    <nav class="top-nav">
      <router-link to="/portfolio" class="back-btn">
        <span class="arrow">←</span> Back to Works
      </router-link>
    </nav>

    <main class="content-wrapper">
      <header class="project-intro-header">
        <span class="category-badge">Community Lead & Experience Design</span>
        <h1>Collage Afternoon</h1>
      </header>

      <section class="hero">
  <div class="hero-image-container">
    <video 
      src="/img/collage-hero.MP4" 
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
            Anticipating the arrival of the Danish winter, known for its intensity and potential for isolation , I realized many fellow expats might feel the same need for a support network as I did. To connect with like-minded people, I proposed a collage workshop, a hobby I’ve cherished since childhood. What started as a personal initiative evolved into a monthly creative hub at <strong>Dokk1, Aarhus</strong>.
          </p>
        </div>
        <div class="text-col">
          <h2 class="section-label">02. Objective</h2>
          <p class="body-text">
            Create a "third space" where creativity acts as a bridge. The goal was to foster well-being through art, helping participants find mental balance and genuine community during the colder months in collaboration with the <strong>Department of Sustainable Cities and Communities</strong>.
          </p>
        </div>
      </section>

      <section class="full-text-block">
        <h2 class="section-label">03. Process</h2>
        <div class="strategy-content">
          <p class="highlight-text">
            <strong>From conception to facilitation:</strong> I take full responsibility for every touchpoint of the experience. My role involves a 360° management approach:
          </p>
        <div class="process-cards">
  <div class="card">
    <div class="card-header">
      <h3>Digital Strategy</h3>
    </div>
    <p>Comprehensive management of social media platforms, focusing on community growth and visual storytelling to maintain a consistent and engaging brand identity.</p>
  </div>

  <div class="card">
    <div class="card-header">
      <h3>Automation</h3>
    </div>
    <p>Optimizing the participant journey by designing and implementing automated email workflows for seamless registrations, event reminders, and post-workshop feedback.</p>
  </div>

  <div class="card">
    <div class="card-header">
      <h3>Logistics</h3>
    </div>
    <p>Strategic curation of physical spaces at Dokk1, managing high-quality material sourcing and environment styling to ensure a premium creative experience.</p>
  </div>

  <div class="card">
    <div class="card-header">
      <h3>Facilitation</h3>
    </div>
    <p>Leading the end-to-step workshop flow, fostering an inclusive atmosphere where art acts as a tool for social connection and emotional well-being.</p>
  </div>
</div>
        </div>
      </section>
<section class="content-wrapper carrousel-section">
  <div class="carrousel-container">
    <img 
      :src="workshopPhotos[activePhotoIndex]" 
      class="carrousel-main-img" 
      alt="Workshop moment"
    />
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

<section class="content-wrapper some-section">
  <h2 class="section-label-gray">SoMe Content</h2>
  <div class="some-grid">
    <div v-for="videoUrl in someVideos" :key="videoUrl" class="some-item">
      <iframe :src="videoUrl" frameborder="0" allow="autoplay; fullscreen" class="vimeo-embed"></iframe>
    </div>
  </div>
</section>

      <section class="results-section">
        <div class="results-container">
        <img 
      :src="imgResult" 
      class="result-img hover-effect" 
      @mouseenter="imgResult = '/img/Collageafternoondokk1.JPG'" 
      @mouseleave="imgResult = '/img/collage-final-works.JPG'"
    />
          <div class="results-text">
            <h2 class="section-label">04. Results & Impact</h2>
            <p class="body-text">
              What began as a simple gathering evolved into "Collage Afternoon" to ensure a welcoming space for everyone. Today, it maintains a consistent attendance of 20-25 people. Beyond the art produced, the real success lies in the social fabric it creates: lasting friendships and a vibrant community in Aarhus.
            </p>
          </div>
        </div>
      </section>
    </main>

<footer class="case-footer">
      <div class="pagination-wrapper">
        <router-link to="/Portfolio" class="footer-link back-link">
          <span class="nav-arrow">←</span> Back to All Works
        </router-link>
        
        <router-link to="/portfolio/itinero" class="footer-link next-link">
          <span class="project-name">Next project</span> <span class="nav-arrow">→</span>
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
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  color: black;
  font-weight: 450;
  display: flex;
  align-items: center;
  gap: 10px;
}
/* Contenedor principal de las tarjetas */
.process-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Fuerza 2x2 */
  gap: 24px;
  margin: 40px auto;
  max-width: 1100px;
}

.card {
  background-color: #f9f9f9;
  border: 1px solid #eee;
  padding: 35px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centra el contenido verticalmente */
  transition: all 0.4s ease;
  min-height: 220px;
}

.card:hover {
  background-color: #d1ff00; /* Tu verde lima */
  border-color: #d1ff00;
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(209, 255, 0, 0.15);
}

.card h3 {
  font-family: 'Inter', sans-serif;
  font-size: 22px;
  font-weight: 600; /* Negrita fuerte */
  margin-bottom: 15px;
  color: #000;
}

.card p {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: black; /* Un gris oscuro para legibilidad */
  margin: 0;
  text-align: left;
}

/* El texto se vuelve negro puro en hover para mejor contraste */
.card:hover p {
  color: black;
}

/* Responsivo para móviles */
@media (max-width: 768px) {
  .process-cards {
    grid-template-columns: 1fr;
  }
}

/* Reviews */
.reviews-section { margin: 100px 0; }
.reviews-wrapper { display: grid; grid-template-columns: 250px 1fr; gap: 40px; }
.review-text { font-size: 24px; font-weight: 450; margin-bottom: 10px; text-align: justify; }
.review-author { color: #888; font-size: 16px; }

/* --- ANIMACIÓN FADE --- */
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease-in-out; /* 1 segundo de transición suave */
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Ajuste de imagen carrusel para que no se deforme */

.carrousel-section {
  max-width: 1000px; /* Ajusta este valor para que sea menos ancho que los 1100px generales */
  margin: 20px auto; /* Lo mantiene centrado */
}

.carrousel-main-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
}
/* --- SoMe Content (Vimeo Vertical) --- */
.some-section {
  margin-bottom: 100px;
}
.some-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 videos */
  gap: 20px;
  margin-top: 40px;
}
.some-item {
  position: relative;
  width: 100%;
  /* Truco para mantener proporción 9:16 vertical */
  padding-bottom: 177.78%; 
  background: #000; /* Fondo negro por si tarda en cargar */
  border-radius: 12px;
  overflow: hidden;
}
.vimeo-embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* --- RESPONSIVE --- */
@media (max-width: 900px) {
  .reviews-wrapper { grid-template-columns: 1fr; text-align: center; }
  .section-label-gray { text-align: center; }
  .review-content { align-items: center; }
  .some-grid { grid-template-columns: 1fr; } /* Un video por fila en mobile */
}

.hero-image-container { width: 100%; height: 60vh; border-radius: 12px; overflow: hidden; }
.hero-img { width: 100%; height: 100%; object-fit: cover; }

.gallery-dual-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 40px 0; }
.gallery-item img { width: 100%; height: 45vh; object-fit: cover; border-radius: 12px; }

.results-container { display: flex; align-items: center; gap: 60px; margin-top: 60px; }
.result-img { width: 50%; border-radius: 12px; }

@media (max-width: 850px) {
  .section-grid, .management-grid, .results-container { grid-template-columns: 1fr; }
  .results-container { flex-direction: column; }
  .result-img { width: 100%; }
}

.hover-effect { transition: transform 0.3s ease; cursor: pointer; }
.hover-effect:hover { transform: scale(1.01); }

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
  text-decoration: none;
  color: #000;
  font-size: 18px;
  font-weight: 450;
  transition: opacity 0.3s ease;
}
.footer-link:hover { opacity: 0.5; }
.project-name { font-weight: 450; }
</style>