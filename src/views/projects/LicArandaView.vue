<script setup>
import { ref } from 'vue';

const imgSketches = ref('/img/arandasketchI.png');
const imgBeer = ref('/img/aranda-moodboard.png');
const imgVisual = ref('/img/arandastyles.png');
const imgIsotipo = ref('/img/LicArandaCoriaLogoBlue.png');
const imgMoodboard = ref('/img/arandamoodboard.png');
const imghome = ref('/img/arandahero.png');
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
        <span class="category-badge">Visual Design</span>
        <h1>Lic. Aranda Coria</h1>
      </header>

      <section class="hero">
        <div class="hero-image-container">
          <img :src="imghome" class="hero-img hover-effect"   </div>
      </section>

      <section class="section-grid context-objective">
        <div class="text-col">
          <h2 class="section-label">01. Context</h2>
          <p class="body-text">
            Lic. Aranda Coria sought to transition from a dependent role to establishing her own professional space. The challenge was to create a personal brand that reflected her authenticity, professional authority, and the human warmth that defines her clinical practice.
          </p>
        </div>
        <div class="text-col">
          <h2 class="section-label">02. Objective</h2>
          <p class="body-text">
            Develop a visual system that bridges the gap between academic expertise and emotional connection. The goal was to build an identity that feels welcoming rather than distant, positioning her as a solvent yet deeply empathetic specialist.
          </p>
        </div>
      </section>
<section class="process-section">
  <h2 class="section-label">03. Process</h2>
  <div class="process-steps-grid">
    
    <div class="process-card">
      <h3 class="process-step-title">Strategy Form</h3>
      <div class="process-img-container">
        <img src="/img/arandaform.png" alt="Brand Questionnaire" class="process-step-img" />
      </div>
      <p class="process-step-text">
        The starting point to understand the heart of her personal brand, defining core objectives and essential values.
      </p>
    </div>

    <div class="process-card">
      <h3 class="process-step-title">Figma Compilation & Analysis</h3>
      <div class="process-img-container">
        <img src="/img/arandafigma.png" alt="Information Analysis" class="process-step-img" />
      </div>
      <p class="process-step-text">
        Synthesizing information to extract key insights and keywords that capture her unique visual essence.
      </p>
    </div>

    <div class="process-card">
      <h3 class="process-step-title">Videocall & Concept sketches</h3>
      <div class="process-img-container">
        <img src="/img/arandasketchI.png" alt="Collaborative Sketching" class="process-step-img" />
      </div>
      <p class="process-step-text">
        A collaborative review of initial sketches to ensure the creative direction resonates deeply with her professional identity.
      </p>
    </div>

    <div class="process-card">
      <h3 class="process-step-title">Moodboard & Style definition</h3>
      <div class="process-img-container">
        <img src="/img/arandamoodboard.png" alt="Visual Style Definition" class="process-step-img" />
      </div>
      <p class="process-step-text">
        Final definition of the visual universe based on the synthesized insights and agreed-upon creative path.
      </p>
    </div>

  </div>
</section>

      <section class="visual-identity-full">
        <div class="hero-image-container">
        <img :src="imgVisual" class="hero-img hover-effect"  @mouseenter="imgVisual = '/img/arandastyles.png'" @mouseleave="imgVisual = '/img/arandastyles.png'" />
        </div>
      </section>
      <section>
      <div class="gallery-dual-grid">
        <div class="gallery-item">
        <img src="/img/arandatote.png"  alt="Visual Style Definition" class="process-step-img" />
        </div>
        <div class="gallery-item">
        <img src="/img/arandabottle.png"  alt="Visual Style Definition" class="process-step-img" />
      </div>
      </div>
      </section>
      <section class="results-section">
        <div class="results-container">
          <video 
      src="/img/arandahero.mp4" 
      autoplay 
      loop 
      muted 
      playsinline 
      class="hero-video">
    </video>
          <div class="results-text">
            <h2 class="section-label">04. Result</h2>
            <p class="body-text">
              The final logo is a beautiful balance between science and nature. By combining a brain with a plant, the design represents both professional wisdom and the organic growth of a therapy process.

The result is a modern and warm brand identity. It shows Lic. Aranda Coria as a professional who is both expert and flexible, creating a deep connection with her patients and a strong, cohesive presence in her field.
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
/* BASE INTER */
.case-study {
  font-family: 'Inter', sans-serif;
  background-color: #ffffff;
  color: #000;
  line-height: 1.6;
}

.content-wrapper {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0%;
}

/* HEADER - Margen reducido */
.project-intro-header {
  margin-bottom: 25px;
}
.category-badge {
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #888;
  display: block;
  margin-bottom: 5px;
}
.project-intro-header h1 {
  font-size: 60px;
  font-weight: 500;
  margin: 0;
  letter-spacing: -0.02em;
}

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
/* HERO & IMAGES */
.hero, .process-gallery, .visual-identity-full {
  margin-bottom: 50px;
}
.hero-image-container {
  width: 100%;
  height: 60vh;
  border-radius: 12px;
  overflow: hidden;
}
.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* --- PROCESS SECTION --- */
.process-steps-grid {
  display: grid;
  /* Cambio a 2 columnas para que las cards sean más grandes */
  grid-template-columns: repeat(2, 1fr); 
  gap: 40px; /* Aumentamos el gap para dar más aire */
  margin-top: 30px;
}

.process-step-title {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
  margin-top: 10px;
}

.process-card {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.process-img-container {
  width: 100%;
  /* Un formato un poco más panorámico para las fotos grandes */
  aspect-ratio: 16 / 9; 
  border-radius: 12px;
  overflow: hidden;
  background-color: #f9f9f9;
  border: 1px solid #eee;
}

.process-step-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* En móviles volvemos a 1 columna para que no se rompa */
@media (max-width: 650px) {
  .process-steps-grid {
    grid-template-columns: 1fr;
  }
}

/* GRID SECTIONS */
.section-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
}

.section-label {
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #888;
  margin-bottom: 15px;
}

/* TEXTOS */
p, .body-text {
  font-size: 18px;
  color: #333;
  text-align: justify;
  text-justify: inter-word;
}

.highlight-text {
  font-size: 18px;
  margin-bottom: 15px;
  text-align: left;
}

.caption {
  margin-top: 10px;
  font-size: 14px;
  color: #888;
}

/* STYLEGUIDE MINIMAL (Según referencia) */
.styleguide-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 60px 0;
}
.style-card {
  background: #f9f9f9;
  padding: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* GALLERY DUAL */
.gallery-dual-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}
.gallery-item img {
  width: 100%;
  height: 75vh;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 70px;
}

/* Colores */
.color-row-vertical {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 250px;
  gap: 0;
}
.color-rect {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
}
.color-rect.amber { background: #D18A2B; color: #fff; border-radius: 8px 8px 0 0; }
.color-rect.cream { background: #FDFDED; border: 1px solid #eee; border-radius: 0 0 8px 8px; }

/* Tipografía */
.typo-display-minimal {
  text-align: left;
  display: flex;
  align-items: center;
  gap: 25px;
}
.letter-main {
  font-size: 80px;
  font-family: 'Retro Star', sans-serif; /* Asegúrate de tener esta fuente cargada */
  color: #D18A2B;
}
.typo-label {
  font-size: 16px;
  color: #333;
  margin: 0;
  text-align: left;
}
.visual-identity-full {
  width: 85%;
  justify-self: center;
  margin-bottom: 30px;
  margin-top: 20px; /* Bajamos de 50px a 20px */
}

/* RESULTS */
.results-container {
  display: flex;
  align-items: center;
  gap: 60px;
  margin-bottom: 90px;
  margin-top: 0px;
}
.hero-video {
  width: 65%;
  height: 280px;
  border-radius: 12px;
  object-fit: cover;
}

/* FOOTER */
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

/* RESPONSIVE */
@media (max-width: 900px) {
  .section-grid, .results-container, .styleguide-grid, .gallery-dual-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .hero-image-container { height: 40vh; }
  .project-intro-header h1 { font-size: 40px; }
  .typo-display-minimal { flex-direction: column; gap: 10px; align-items: flex-start; }
}
/* Esto aplica a las imágenes con hover */
.hover-effect {
  transition: opacity 0.4s ease-in-out, transform 0.3s ease;
  cursor: pointer;
}

/* Efecto opcional: que la imagen se aclare un poquito al entrar 
   o se mueva apenas para notar la interacción */
.hover-effect:hover {
  opacity: 0.9;
  transform: scale(1.01);
}

img {
  transition: filter 0.3s ease-in-out; /* Opcional: añade suavidad si las imágenes pesan poco */
  cursor: pointer;
}
</style>