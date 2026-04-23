<script setup>
const imgVisual = '/img/arandastyles.png';
const imghome = '/img/arandahero.png';
</script>

<template>
  <div class="case-study">

    <nav class="top-nav">
      <router-link to="/portfolio" class="back-btn">&lt; Back to Works</router-link>
    </nav>

    <main class="content-wrapper">

      <header class="project-intro-header">
        <span class="category-badge">Visual Design</span>
        <h1>Lic. Aranda Coria</h1>
      </header>

      <section class="hero">
        <img :src="imghome" alt="Lic. Aranda Coria Hero" class="hero-img" />
      </section>

      <section class="section-grid">
        <div class="text-col">
          <h2 class="section-label">01. Context</h2>
          <p class="body-text">Lic. Aranda Coria sought to transition from a dependent role to establishing her own professional space. The challenge was to create a personal brand that reflected her authenticity, professional authority, and the human warmth that defines her clinical practice.</p>
        </div>
        <div class="text-col">
          <h2 class="section-label">02. Objective</h2>
          <p class="body-text">Develop a visual system that bridges the gap between academic expertise and emotional connection. The goal was to build an identity that feels welcoming rather than distant, positioning her as a solvent yet deeply empathetic specialist.</p>
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
            <p class="body-text">The starting point to understand the heart of her personal brand, defining core objectives and essential values.</p>
          </div>

          <div class="process-card">
            <h3 class="process-step-title">Figma Compilation & Analysis</h3>
            <div class="process-img-container">
              <img src="/img/arandafigma.png" alt="Information Analysis" class="process-step-img" />
            </div>
            <p class="body-text">Synthesizing information to extract key insights and keywords that capture her unique visual essence.</p>
          </div>

          <div class="process-card">
            <h3 class="process-step-title">Videocall & Concept Sketches</h3>
            <div class="process-img-container">
              <img src="/img/arandasketchI.png" alt="Collaborative Sketching" class="process-step-img" />
            </div>
            <p class="body-text">A collaborative review of initial sketches to ensure the creative direction resonates deeply with her professional identity.</p>
          </div>

          <div class="process-card">
            <h3 class="process-step-title">Moodboard & Style Definition</h3>
            <div class="process-img-container">
              <img src="/img/arandamoodboard.png" alt="Visual Style Definition" class="process-step-img" />
            </div>
            <p class="body-text">Final definition of the visual universe based on the synthesized insights and agreed-upon creative path.</p>
          </div>

        </div>
      </section>

      <section class="visual-identity-full">
        <img :src="imgVisual" alt="Visual Identity" class="full-img" />
      </section>

      <section class="gallery-dual-grid">
        <div class="gallery-item">
          <img src="/img/arandatote.png" alt="Tote Bag Mockup" class="gallery-img" />
        </div>
        <div class="gallery-item">
          <img src="/img/arandabottle.png" alt="Bottle Mockup" class="gallery-img" />
        </div>
      </section>

      <section class="results-section">
        <video src="/img/arandahero.mp4" autoplay loop muted playsinline class="result-video"></video>
        <div class="results-text">
          <h2 class="section-label">04. Result</h2>
          <p class="body-text">The final logo is a beautiful balance between science and nature. By combining a brain with a plant, the design represents both professional wisdom and the organic growth of a therapy process.</p>
          <br />
        </div>
      </section>

    </main>

    <footer class="case-footer">
      <div class="pagination-wrapper">
        <router-link to="/portfolio" class="footer-link">&lt; Back to Works</router-link>
        <router-link to="/portfolio/collage-afternoon" class="footer-link">Next project &gt;</router-link>
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
  max-width: 1000px;
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

/* ─── HERO ──────────────────────────────────────────────── */
.hero {
  margin-bottom: 50px;
}

.hero-img {
  width: 100%;
  height: 60vh;
  object-fit: cover;
  border-radius: 12px;
}

/* ─── TWO-COLUMN GRID ───────────────────────────────────── */
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
  display: block;
}

.body-text {
  font-size: 18px;
  color: #333;
  text-align: justify;
  margin: 0;
}

/* ─── PROCESS ───────────────────────────────────────────── */
.process-section {
  margin-bottom: 50px;
}

.process-steps-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-top: 30px;
}

.process-card {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.process-step-title {
  font-size: 20px;
  font-weight: 500;
  margin: 0;
}

.process-img-container {
  width: 100%;
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

/* ─── VISUAL IDENTITY ───────────────────────────────────── */
.visual-identity-full {
  width: 85%;
  margin: 20px auto 30px auto;
}

.full-img {
  width: 100%;
  border-radius: 12px;
}

/* ─── GALLERY ───────────────────────────────────────────── */
.gallery-dual-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 70px;
}

.gallery-img {
  width: 100%;
  height: 75vh;
  object-fit: cover;
  border-radius: 12px;
}

/* ─── RESULTS ───────────────────────────────────────────── */
.results-section {
  display: flex;
  align-items: center;
  gap: 60px;
  margin-bottom: 90px;
}

.result-video {
  width: 65%;
  height: 280px;
  border-radius: 12px;
  object-fit: cover;
  flex-shrink: 0;
}

.results-text {
  flex: 1;
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
  .project-intro-header h1 {
    font-size: 40px;
  }
.hero {
    padding: 0 !important;
  }
  
  .hero-img {
    height: 40vh;
  }

  .section-grid,
  .gallery-dual-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .process-steps-grid {
    grid-template-columns: 1fr;
  }

  .visual-identity-full {
    width: 100%;
  }

  .gallery-img {
    height: 50vw;
  }

  .results-section {
    flex-direction: column;
    gap: 30px;
  }

  .result-video {
    width: 100%;
    height: auto;
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

  .process-step-title {
    font-size: 17px;
  }

  .footer-link {
    font-size: 18px;
  }
}
</style>