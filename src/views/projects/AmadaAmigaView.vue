<script setup>
import { ref, onMounted } from 'vue';

// --- IMÁGENES DEL PROYECTO ---
const heroImg = '/img/amadahero.png'; // Imagen de las botellas arriba
const labelDetail = '/img/amadamockup.png'; // El diseño plano de la etiqueta
const processMoodboard = '/img/amada-moodboard.png'; // La composición de fotos de inspiración
const finalProduct = '/img/amadabox.png'; // Foto de la botella con velas o caja

// --- REVIEWS O CITAS (Opcional para este proyecto) ---
const quote = ref({
  text: '"Beyond wine, this is a tribute to friendship and the creative universe we share. A personal story told through color and shape."',
  author: 'Valentina'
});
</script>

<template>
  <div class="case-study amada-theme">
    <nav class="top-nav">
      <router-link to="/portfolio" class="back-btn">
        <span class="arrow">←</span> Back to Works
      </router-link>
    </nav>

    <main class="content-wrapper">
      <header class="project-intro-header">
        <span class="category-badge">Packaging & Personal Storytelling</span>
        <h1>Amada Amiga</h1>
      </header>

      <section class="hero">
        <div class="hero-image-container">
          <img :src="heroImg" alt="Amada Amiga Wine Bottles" class="hero-img" />
        </div>
      </section>

      <section class="section-grid context-objective">
        <div class="text-col">
          <h2 class="section-label">01. Context</h2>
          <p class="body-text">
            This personal project was created as a birthday gift for a close friend, a sommelier and true wine lover. The intention was to design a custom wine label that felt personal, emotional, and deeply connected to her identity.
          </p>
        </div>
        <div class="text-col">
          <h2 class="section-label">02. Objective</h2>
          <p class="body-text">
            The goal was to design a custom wine label that goes beyond its commercial purpose and becomes an emotional object, one that tells a story, honors a person, and connects design with memory and affection.
          </p>
        </div>
      </section>

      <section class="full-width-image-section">
        <img :src="labelDetail" class="detail-img-large" alt="Label Design Detail" />
      </section>

      <section class="process-section">
        <div class="section-grid">
          <div class="text-col">
            <h2 class="section-label">03. Process</h2>
            <p class="body-text">
              The visual concept was inspired by her colorful personality and her love for abstract art. Elements from her pastry chef background and her passion for the brand FARM shaped the moodboard, palette, and typography, guiding the project toward a playful and vibrant aesthetic.
            </p>
          </div>
          <div class="image-col">
             <img :src="processMoodboard" class="side-img" alt="Creative Process Moodboard" />
          </div>
        </div>
      </section>

      <section class="results-section">
        <div class="dual-grid">
          <img :src="finalProduct" class="dual-img" alt="Final Product with Box" />
          <div class="results-text-box">
             <h2 class="section-label">04. Result</h2>
             <p class="body-text">
               This project explores the intersection of personal storytelling and product design. It shows how a simple object can become a container of emotions, honoring a person and connecting design with the most colorful parts of life.
             </p>
          </div>
        </div>
      </section>
    </main>

    <footer class="case-footer">
      <div class="pagination-wrapper">
        <router-link to="/portfolio" class="footer-link back-link">
          <span class="nav-arrow">←</span> Back to All Works
        </router-link>
        
        <router-link to="/portfolio/next-project" class="footer-link next-link">
          <span class="project-name">Next project</span> <span class="nav-arrow">→</span>
        </router-link>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* HERENCIA DE TU ESTILO CLEAN */
.case-study {
  font-family: 'Inter', sans-serif;
  background-color: white; /* Color crema suave del fondo de Amada Amiga */
  color: black;
  line-height: 1.6;
}

.content-wrapper {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 5%;
}

/* Header */
.project-intro-header { margin: 60px 0; }
.project-intro-header h1 { font-size: clamp(32px, 5vw, 60px); font-weight: 500; letter-spacing: -0.02em; }
.category-badge { color: #888; text-transform: uppercase; letter-spacing: 2px; font-size: 14px; display: block; margin-bottom: 10px; }

/* Grid System */
.section-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin: 80px 0;
  align-items: center;
}

.section-label { color: #888; text-transform: uppercase; letter-spacing: 2px; font-size: 14px; margin-bottom: 20px; }
.body-text { font-size: 18px; text-align: justify; color: #333; }

/* Hero & Images */

.hero-img { width: 100%; height: auto; max-height: auto; object-fit: fit; }

.detail-img-large {
  width: 100%;
  border-radius: 12px;
  margin: 40px 0;
}

.side-img { width: 100%; border-radius: 12px; }

/* Results Section */
.dual-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
  margin: 0;
  align-items: center;
}
.dual-img { width: 90%; height: 70%; border-radius: 12px; object-fit: cover;}

/* Navigation */
.top-nav { padding: 30px 5%; }
.back-btn { text-decoration: none; font-weight: 450; color: black; font-size: 18px; display: flex; align-items: center; gap: 10px; }

.case-footer { padding: 60px 5%;  margin-top: 60px; }
.pagination-wrapper { max-width: 1100px; margin: 0 auto; display: flex; justify-content: space-between; }
.footer-link {
  text-decoration: none;
  color: black;
  font-size: 18px;
  font-weight: 450;
  transition: opacity 0.3s ease;
}
.footer-link:hover { opacity: 0.5; }
.project-name { font-weight: 450; }

.hover-effect { transition: transform 0.3s ease; cursor: pointer; }
.hover-effect:hover { transform: scale(1.01); }
/* Responsive */
@media (max-width: 850px) {
  .section-grid, .dual-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>