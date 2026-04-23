<script setup>
import { ref } from 'vue';

const imgSketches = ref('/img/undersketches.jpg');
const imgBeer     = ref('/img/underbeer.png');
const imgVisual   = ref('/img/undervisual.png');
const imgIsotipo  = ref('/img/underisotipo.png');
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
        <h1>Under</h1>
      </header>

      <section class="hero">
        <div class="hero-image-container">
          <img src="/img/underhorizontal.png" alt="Under Bar Atmosphere" class="hero-img" />
        </div>
      </section>

      <section class="section-grid">
        <div class="text-col">
          <h2 class="section-label">01. Context</h2>
          <p class="body-text">
            The university launched a design competition to modernize the identity of its student bar,
            formerly known as "The Basement." The goal was to shed the outdated image and create a
            fresh, recognizable brand that students would actually want to belong to.
          </p>
        </div>
        <div class="text-col">
          <h2 class="section-label">02. Objective</h2>
          <p class="body-text">
            Transform a "dark cellar" perception into a vibrant, social hub. By developing an inclusive
            and youthful identity, the project aimed to build trust, increase foot traffic, and foster
            a sense of community that translates into measurable engagement for the university.
          </p>
        </div>
      </section>

      <section class="process-gallery">
        <div class="gallery-dual-grid">
          <div class="gallery-item">
            <img
              :src="imgSketches"
              class="hover-effect"
              @mouseenter="imgSketches = '/img/undercards.jpg'"
              @mouseleave="imgSketches = '/img/undersketches.jpg'"
            />
          </div>
          <div class="gallery-item">
            <img
              :src="imgBeer"
              class="hover-effect"
              @mouseenter="imgBeer = '/img/underbeerhand.png'"
              @mouseleave="imgBeer = '/img/underbeer.png'"
            />
          </div>
        </div>
      </section>

      <section class="full-text-block">
        <h2 class="section-label">03. Design Strategy</h2>
        <p class="highlight-text">
          <strong>Strategic Renaming:</strong> I proposed UNDER, a punchy, bilingual name that plays
          with the physical location while evoking the "underground" culture of discovery and escape
          from academic stress. The typography choice (Retro Star) features bold, rounded strokes to
          convey confidence and strength. The soft edges make the brand feel approachable, balancing
          the "underground" edge with a welcoming student-first vibe.
        </p>
      </section>

      <section class="visual-identity-full">
        <div class="hero-image-container">
          <img
            :src="imgVisual"
            class="hero-img hover-effect"
            @mouseenter="imgVisual = '/img/underlogo.png'"
            @mouseleave="imgVisual = '/img/undervisual.png'"
          />
        </div>
      </section>

      <section class="results-section">
        <div class="results-container">
          <img
            :src="imgIsotipo"
            class="result-img hover-effect"
            @mouseenter="imgIsotipo = '/img/underbar.png'"
            @mouseleave="imgIsotipo = '/img/underisotipo.png'"
          />
          <div class="results-text">
            <h2 class="section-label">04. Result</h2>
            <p class="body-text">
              My proposal was chosen as the official identity for the bar, with a focus on creating
              a 'social home' for students. The university highlighted how the minimalist visual system
              effectively modernized the space and energized the campus experience.
            </p>
          </div>
        </div>
      </section>

    </main>

    <footer class="case-footer">
      <div class="pagination-wrapper">
        <router-link to="/Portfolio" class="footer-link">
          <span class="nav-arrow"><</span> Back to Works
        </router-link>
        <router-link to="/portfolio/itinero" class="footer-link">
          <span class="project-name">Next project</span> <span class="nav-arrow">></span>
        </router-link>
      </div>
    </footer>

  </div>
</template>

<style scoped>
/* ── BASE ── */
.case-study {
  font-family: 'Inter', sans-serif;
  background-color: #ffffff;
  color: #000;
  line-height: 1.6;
}

.content-wrapper {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 5%;
}

/* ── TOP NAV ── */
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

/* ── PROJECT HEADER ── */
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

/* ── HERO ── */
.hero,
.process-gallery {
  margin-bottom: 50px;
}

.visual-identity-full {
  margin-top: 50px;
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

/* ── DUAL GALLERY ── */
.gallery-dual-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.gallery-item img {
  width: 100%;
  height: 45vh;
  object-fit: cover;
  border-radius: 12px;
}

/* ── CONTEXT / OBJECTIVE GRID ── */
.section-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;
}

/* ── LABELS & TEXT ── */
.section-label {
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #888;
  margin-bottom: 15px;
}

.body-text {
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

/* ── RESULTS ── */
.results-container {
  display: flex;
  align-items: center;
  gap: 60px;
  margin-bottom: 50px;
}

.result-img {
  width: 50%;
  border-radius: 12px;
}

/* ── HOVER EFFECT ── */
.hover-effect {
  transition: opacity 0.4s ease-in-out, transform 0.3s ease;
  cursor: pointer;
}

.hover-effect:hover {
  opacity: 0.9;
  transform: scale(1.01);
}

/* ── FOOTER ── */
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
  display: block;
  margin-top: 10px;
  transition: opacity 0.3s ease;
}

.footer-link:hover {
  opacity: 0.5;
}

.project-name {
  font-weight: 450;
}

/* ── RESPONSIVE ── */
@media (max-width: 768px) {

  /* Top nav — padding-top alto para salir debajo de la navbar global fija */
  .top-nav {
    padding: 50px !important;
  }

  .back-btn {
    font-size: 18px;
  }

  /* Header */
  .project-intro-header {
    margin-bottom: 10px;
  }

  .project-intro-header h1 {
    font-size: 40px;
  }

  /* Hero */
  .hero-image-container {
    height: 25vh;
    margin-top: -80px; /* Ajuste para compensar el padding extra del top nav */
    margin-bottom: 0;
  }

  .hero {
    margin-bottom: 10px;
  }

  /* Context / Objective */
  .section-grid {
    grid-template-columns: 1fr;
    gap: 30px;
    margin-bottom: 40px;
  }

  /* Gallery */
  .gallery-dual-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .gallery-item img {
    height: 35vh;
  }

  .highlight-text {
  margin-bottom: 100px;
  text-align: justify;
}

  /* Visual identity */
  .visual-identity-full {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  /* Text */
  .body-text,
  .highlight-text {
    font-size: 16px;
  }

  /* Results */
  .results-container {
    flex-direction: column;
    gap: 24px;
    margin-bottom: 30px;
  }

  .result-img {
    width: 100%;
  }

  /* Footer */
  .footer-link {
    font-size: 20px;
  }
}
</style>