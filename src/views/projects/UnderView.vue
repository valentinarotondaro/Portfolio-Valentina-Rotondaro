<template>
  <div class="case-study">
    <nav class="top-nav">
      <router-link to="/Portfolio" class="back-btn">
        <span class="arrow">←</span> Back to Works
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

      <section class="section-grid context-objective">
        <div class="text-col">
          <h2 class="section-label">01. Context</h2>
          <p class="body-text">
            The university launched a design competition to modernize the identity of its student bar, formerly known as "The Basement." The goal was to shed the outdated image and create a fresh, recognizable brand that students would actually want to belong to.
          </p>
        </div>
        <div class="text-col">
          <h2 class="section-label">02. Objective</h2>
          <p class="body-text">
            Transform a "dark cellar" perception into a vibrant, social hub. By developing an inclusive and youthful identity, the project aimed to build trust, increase foot traffic, and foster a sense of community that translates into measurable engagement for the university.
          </p>
        </div>
      </section>

      <section class="process-gallery">
        <div class="gallery-dual-grid">
          <div class="gallery-item">
            <img src="/img/undersketches.jpg" alt="Logo Ideation" />
          </div>
          <div class="gallery-item">
            <img src="/img/underbeer.png" alt="Process detail" />
          </div>
        </div>
      </section>

      <section class="full-text-block">
        <h2 class="section-label">03. Design Strategy</h2>
        <div class="strategy-content">
          <p class="highlight-text">
            <strong>Strategic Renaming:</strong> I proposed UNDER, a punchy, bilingual name that plays with the physical location while evoking the "underground" culture of discovery and escape from academic stress.
            The typography choice (Retro Star) features bold, rounded strokes to convey confidence and strength. The soft edges make the brand feel approachable, balancing the "underground" edge with a welcoming student-first vibe.  
          </p>        
        </div>
      </section>

      <section class="visual-identity-full">
        <div class="hero-image-container">
          <img src="/img/undervisual.png" alt="Visual Identity Full Display" class="hero-img" />
        </div>
      </section>

      <section class="styleguide-grid">
        <div class="style-card colors-minimal">
          <div class="color-row-vertical">
            <div class="color-rect amber"><span>#D18A2B</span></div>
            <div class="color-rect cream"><span>#FDFDED</span></div>
          </div>
        </div>
        <div class="style-card typo-minimal">
          <div class="typo-display-minimal">
            <span class="letter-main">Aa</span>
            <p class="typo-label">Retro Star / Public Sans</p>
          </div>
        </div>
      </section>

      <section class="results-section">
        <div class="results-container">
          <img src="/img/underbeer.png" alt="Final Result Cheers" class="result-img" />
          <div class="results-text">
            <h2 class="section-label">04. Result</h2>
            <p class="body-text">
              My proposal was chosen as the official identity for the bar, with a focus on creating a 'social home' for students. The university highlighted how the minimalist visual system effectively modernized the space and energized the campus experience.
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
          <span class="project-name">Itinero</span> <span class="nav-arrow">→</span>
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
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 5%;
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
}

/* TOP NAV */
.top-nav {
  padding: 25px 5%;
}
.back-btn {
  text-decoration: none;
  color: #000;
  font-weight: 450;
  display: flex;
  align-items: center;
  gap: 10px;
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

/* DUAL GRID */
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

/* RESULTS */
.results-container {
  display: flex;
  align-items: center;
  gap: 60px;
  margin-bottom: 80px;
}
.result-img {
  width: 50%;
  border-radius: 12px;
}

/* FOOTER */
.case-footer {
  padding: 50px 5%;
  border-top: 1px solid #eee;
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

/* RESPONSIVE */
@media (max-width: 900px) {
  .section-grid, .results-container, .styleguide-grid, .gallery-dual-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .result-img { width: 100%; }
  .hero-image-container { height: 40vh; }
  .project-intro-header h1 { font-size: 40px; }
  .typo-display-minimal { flex-direction: column; gap: 10px; align-items: flex-start; }
}
</style>