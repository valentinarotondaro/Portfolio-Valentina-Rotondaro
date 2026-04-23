<script setup>
const heroImg = '/img/amadahero.png';
const labelDetail = '/img/amadamockup.png';
const processMoodboard = '/img/amada-moodboard.png';
const finalProduct = '/img/amadabox.png';
</script>

<template>
  <div class="case-study amada-theme">

    <nav class="top-nav">
      <router-link to="/portfolio" class="back-btn">&lt; Back to Works</router-link>
    </nav>

    <main class="content-wrapper">

      <header class="project-intro-header">
        <span class="category-badge">Packaging & Personal Storytelling</span>
        <h1>Amada Amiga</h1>
      </header>

      <section class="hero">
        <img :src="heroImg" alt="Amada Amiga Wine Bottles" class="hero-img" />
      </section>

      <section class="section-grid">
        <div class="text-col">
          <h2 class="section-label">01. Context</h2>
          <p class="body-text">This personal project was created as a birthday gift for a close friend, a sommelier and true wine lover. The intention was to design a custom wine label that felt personal, emotional, and deeply connected to her identity.</p>
        </div>
        <div class="text-col">
          <h2 class="section-label">02. Objective</h2>
          <p class="body-text">The goal was to design a custom wine label that goes beyond its commercial purpose and becomes an emotional object, one that tells a story, honors a person, and connects design with memory and affection.</p>
        </div>
      </section>

      <section class="full-width-image-section">
        <img :src="labelDetail" class="detail-img-large" alt="Label Design Detail" />
      </section>

      <section class="section-grid">
        <div class="text-col">
          <h2 class="section-label">03. Process</h2>
          <p class="body-text">The visual concept was inspired by her colorful personality and her love for abstract art. Elements from her pastry chef background and her passion for the brand FARM shaped the moodboard, palette, and typography, guiding the project toward a playful and vibrant aesthetic.</p>
        </div>
        <div class="text-col">
          <img :src="processMoodboard" class="side-img" alt="Creative Process Moodboard" />
        </div>
      </section>

      <section class="dual-grid">
        <img :src="finalProduct" class="dual-img" alt="Final Product with Box" />
        <div class="results-text-box">
          <h2 class="section-label">04. Result</h2>
          <p class="body-text">This project explores the intersection of personal storytelling and product design. It shows how a simple object can become a container of emotions, honoring a person and connecting design with the most colorful parts of life.</p>
        </div>
      </section>

    </main>

    <footer class="case-footer">
      <div class="pagination-wrapper">
        <router-link to="/portfolio" class="footer-link">&lt; Back to Works</router-link>
        <router-link to="/portfolio/lic-aranda" class="footer-link">Next project &gt;</router-link>
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
  margin: 60px 0;
}

.category-badge {
  color: #888;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 14px;
  display: block;
  margin-bottom: 10px;
}

.project-intro-header h1 {
  font-size: clamp(32px, 5vw, 60px);
  font-weight: 500;
  letter-spacing: -0.02em;
  margin: 0;
}

/* ─── HERO ──────────────────────────────────────────────── */
.hero-img {
  width: 100%;
  height: auto;
}

/* ─── TWO-COLUMN GRID ───────────────────────────────────── */
.section-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin: 80px 0;
  align-items: center;
}

.section-label {
  color: #888;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 14px;
  margin-bottom: 20px;
  display: block;
}

.body-text {
  font-size: 18px;
  text-align: justify;
  color: #333;
  margin: 0;
}

/* ─── FULL WIDTH IMAGE ──────────────────────────────────── */
.detail-img-large {
  width: 100%;
  border-radius: 12px;
  margin: 40px 0;
}

.side-img {
  width: 100%;
  border-radius: 12px;
}

/* ─── RESULT GRID ───────────────────────────────────────── */
.dual-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
  margin: 80px 0;
  align-items: center;
}

.dual-img {
  width: 90%;
  border-radius: 12px;
  object-fit: cover;
}

/* ─── FOOTER ────────────────────────────────────────────── */
.case-footer {
  padding: 60px 5%;
  margin-top: 60px;
}

.pagination-wrapper {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
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

  .hero {
    padding: 0 !important;
  }
  .section-grid,
  .dual-grid {
    grid-template-columns: 1fr;
    gap: 40px;
    margin: 50px 0;
  }

  .dual-img {
    width: 100%;
  }
}

@media (max-width: 500px) {
  .project-intro-header {
    margin: 40px 0;
  }

  .back-btn {
    font-size: 18px;
  }

  .body-text {
    font-size: 16px;
  }

  .footer-link {
    font-size: 20px;
  }
}
</style>