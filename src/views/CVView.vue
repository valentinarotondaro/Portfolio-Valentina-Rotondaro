<template>
  <main class="about-container">

    <!-- ─── HERO ──────────────────────────────────────────── -->
    <section class="about-hero">

      <div class="about-text">
        <h1>Hi there! I'm <span>Valentina Rotondaro</span>, a creative based in Denmark.</h1>
        <p class="intro-p desktop-only">As a Multimedia Design student I combine visual storytelling with a technical mindset. My work lives at the intersection of UX/UI, branding, and content creation, supported by a solid foundation in frontend, WordPress, and video editing.</p>
        <p class="intro-p desktop-only">Beyond the screen, I am an analog collage artist and a creative workshop facilitator. I believe in the power of hands-on art to connect with our own expression and with others.</p>
      </div>

      <div class="about-image">
        <div class="blob-frame">
          <img src="/img/valentina-perfil.JPG" alt="Valentina Rotondaro profile picture" />
          <a href="/img/CV Valentina Rotondaro.pdf" download class="btn-download">Download my CV</a>
        </div>
      </div>

    </section>

    <!-- Intro visible solo en mobile, debajo de la foto -->
    <section class="mobile-intro mobile-only">
      <p class="intro-p">As a Multimedia Design student I combine visual storytelling with a technical mindset. My work lives at the intersection of UX/UI, branding, and content creation, supported by a solid foundation in frontend, WordPress, and video editing.</p>
      <p class="intro-p">Beyond the screen, I am an analog collage artist and a creative workshop facilitator. I believe in the power of hands-on art to connect with our own expression and with others.</p>
    </section>

    <!-- ─── RESUME ────────────────────────────────────────── -->
    <section class="resume-grid">

      <div class="col col-left">

        <div class="experience-block">
          <h2 class="section-title">Experience</h2>
          <div class="resume-item">
            <h3>Event coordination | Syddansk Erhvervsakademi | present</h3>
            <ul class="exp-list">
              <li>Plan and coordinate inclusive university events from concept to execution, designing high-impact visual assets and social media campaigns to drive student engagement and ensure a seamless, human-centered experience.</li>
            </ul>
          </div>
          <div class="resume-item">
            <h3>Workshop facilitation & Content creation | 2023-present</h3>
            <ul class="exp-list">
              <li>I host monthly analog collage workshops for international groups of 20+ participants in collaboration with DOKK1 and the Royal Danish Library, managing the end-to-end production, from experience design and materials logistics to multi-channel marketing, to foster community through hands-on creativity.</li>
            </ul>
          </div>
          <div class="resume-item">
            <h3>Hospitality & Customer service roles | 2021-2025</h3>
            <ul class="exp-list">
              <li>Deliver high-quality guest experiences in fast-paced hotels and restaurants across France, Sweden, Spain, and Denmark, effectively assisting hundreds of international guests per week in multiple languages.</li>
            </ul>
          </div>
        </div>

        <div class="skills-block">
          <h2 class="section-title skills-title">Skills</h2>
          <ul class="bullet-list">
            <li>Deadline & workflow management</li>
            <li>Brand alignment</li>
            <li>Trend awareness</li>
            <li>Collaboration and teamwork</li>
            <li>Adaptability and flexibility</li>
            <li>Community building</li>
            <li>Critical thinking</li>
          </ul>
        </div>

        <div class="tools-block">
          <h2 class="section-title tools-title">Tools</h2>
          <div class="tools-grid">
            <img src="/img/figma.png"         alt="Figma"         class="figma-icon" />
            <img src="/img/premiere.png"      alt="Premiere" />
            <img src="/img/illustrator.png"   alt="Illustrator" />
            <img src="/img/photoshop.png"     alt="Photoshop" />
            <img src="/img/indesign.png"      alt="InDesign" />
            <img src="/img/after-effects.png" alt="After Effects" />
            <img src="/img/procreate.png"     alt="Procreate"     class="procreate-icon" />
            <img src="/img/html.png"          alt="HTML5" />
            <img src="/img/css.png"           alt="CSS3" />
            <img src="/img/js.png"            alt="JS" />
            <img src="/img/vue-logo.png"      alt="Vue" />
            <img src="/img/tailwind-logo.png" alt="Tailwind" />
          </div>
        </div>

      </div>

      <div class="col col-right">

        <div class="education-block">
          <h2 class="section-title">Education</h2>
          <div class="resume-item education-list">
            <h3>2025</h3>
            <ul>
              <li>Multimedia Design | Syddansk Erhvervsakademi (ongoing)</li>
              <li>UX/UI Design | Redi School Aarhus</li>
            </ul>
            <h3>2024</h3>
            <ul>
              <li>Responsive Web Design | FreeCodeCamp</li>
              <li>Graphic Design & Visual Communication | Domestika</li>
              <li>Paid Media | Rúcula Digital Academy</li>
            </ul>
            <h3>2023</h3>
            <ul>
              <li>Content Marketing & Instagram Reels | Patricia Marra</li>
            </ul>
            <h3>2022</h3>
            <ul>
              <li>Community Management | Domestika</li>
            </ul>
            <h3>2021</h3>
            <ul>
              <li>Fashion Design | Universidad de Buenos Aires (UBA)</li>
              <li>Sociology | Universidad de Buenos Aires (UBA)</li>
            </ul>
            <h3>2020</h3>
            <ul>
              <li>Digital Marketing | Espacio Buenos Aires</li>
              <li>Fashion Management | Espacio Buenos Aires</li>
            </ul>
          </div>
        </div>

        <div class="languages-block">
          <h2 class="section-title">Languages</h2>
          <ul class="bullet-list">
            <li>Spanish: Native</li>
            <li>English: Advanced</li>
            <li>French: Intermediate</li>
            <li>Danish: Basic</li>
          </ul>
        </div>

      </div>

    </section>
  </main>
</template>

<script setup>
</script>

<style scoped>
/* ─── BASE ──────────────────────────────────────────────── */
.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 40px 0 40px;
  font-family: 'Inter', sans-serif;
}

/* ─── VISIBILITY HELPERS ────────────────────────────────── */
.mobile-only  { display: none; }
.desktop-only { display: block; }

/* ─── HERO ──────────────────────────────────────────────── */
.about-hero {
  display: flex;
  align-items: center;
  gap: 60px;
  margin-bottom: 10px;
}

.about-text h1 {
  font-size: 64px;
  font-weight: 450;
  line-height: 1.1;
  margin-top: 20px;
  margin-bottom: 30px;
  letter-spacing: -0.02em;
}

.about-text h1 span {
  color: var(--pink);
}

.intro-p {
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 20px;
  color: #000;
  text-align: justify;
}

.intro-p:last-of-type {
  margin-bottom: 60px;
}

/* ─── PHOTO BLOB ────────────────────────────────────────── */
.about-image {
  position: relative;
  flex-shrink: 0;
  transform: translateY(-10px);
}

.blob-frame {
  width: 450px;
  height: 480px;
  border-radius: 40% 60% 65% 35% / 40% 45% 55% 60%;
  position: relative;
}

.blob-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 40% 60% 65% 35% / 40% 45% 55% 60%;
}

.btn-download {
  position: absolute;
  top: 15%;
  left: 290px;
  display: inline-block;
  padding: 12px 30px;
  background-color: var(--lima);
  color: #000;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 450;
  font-size: 16px;
  white-space: nowrap;
  z-index: 10;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.btn-download:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* ─── RESUME GRID (desktop) ─────────────────────────────── */
.resume-grid {
  display: grid;
  grid-template-columns: 1.2fr 1.2fr;
  gap: 100px;
  margin-top: 15px;
  margin-bottom: 100px;
}

/* ─── SECTION TITLES ────────────────────────────────────── */
.section-title {
  color: var(--pink);
  font-size: 38px;
  font-weight: 550;
  margin-bottom: 12px;
  letter-spacing: -0.02em;
}

.skills-title,
.tools-title {
  margin-top: 60px;
}

/* ─── RESUME ITEMS ──────────────────────────────────────── */
.resume-item {
  margin-bottom: 35px;
  margin-top: 30px;
}

.resume-item h3 {
  font-size: 22px;
  font-weight: 700;
  color: #000;
  letter-spacing: -0.02em;
  margin-bottom: 15px;
}

/* ─── LISTS ─────────────────────────────────────────────── */
.exp-list,
.bullet-list,
.resume-item ul {
  list-style: none;
  padding: 0;
  margin: 10px 0;
}

.exp-list li,
.bullet-list li,
.resume-item li {
  position: relative;
  padding-left: 25px;
  margin-bottom: 12px;
  font-size: 20px;
  line-height: 1.5;
  text-align: justify;
  color: #000;
}

.exp-list li::before,
.bullet-list li::before,
.resume-item li::before {
  content: "•";
  position: absolute;
  left: 0;
  top: -2px;
  color: #000;
  font-size: 24px;
}

.education-list h3 {
  margin-top: 25px;
  margin-bottom: 10px;
}

/* ─── TOOLS GRID ────────────────────────────────────────── */
.tools-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  max-width: 520px;
  margin-top: 30px;
  align-items: center;
  justify-items: center;
}

.tools-grid img {
  max-width: 55px;
  max-height: 55px;
  width: auto;
  height: auto;
  object-fit: contain;
  cursor: pointer;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.tools-grid img:hover         { transform: scale(1.45) rotate(5deg); filter: drop-shadow(0 8px 12px rgba(0,0,0,0.1)); }
.tools-grid img.figma-icon    { transform: scale(1.2); }
.tools-grid img.figma-icon:hover    { transform: scale(1.45) rotate(5deg); }
.tools-grid img.procreate-icon      { transform: scale(1.7); }
.tools-grid img.procreate-icon:hover { transform: scale(1.95) rotate(5deg); }

/* ─── RESPONSIVE ────────────────────────────────────────── */
@media (max-width: 900px) {
  .mobile-only  { display: block; }
  .desktop-only { display: none; }

  .about-container {
    padding: 20px 5%;
  }

  /* Título arriba, foto debajo */
  .about-hero {
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin-bottom: 0;
  }

  .about-text {
    width: 100%;
    text-align: center;
  }

  .about-text h1 {
    font-size: 32px;
    margin-bottom: 0;
    margin-top: 10px;
  }

  /* Foto centrada */
  .about-image {
    transform: none;
    display: flex;
    justify-content: center;
  }

  .blob-frame {
    width: 260px;
    height: 280px;
  }

  /* Botón superpuesto en la parte baja de la foto */
  .btn-download {
    top: unset;
    left: 50%;
    bottom: -18px;
    transform: translateX(-50%);
    font-size: 14px;
    padding: 10px 22px;
  }

  /* Intro debajo de la foto */
  .mobile-intro {
    margin-top: 40px;
  }

  .intro-p {
    font-size: 16px;
    text-align: justify;
    margin-top: 15px;
    margin-bottom: 5px;
  }

  .intro-p:last-of-type {
    margin-bottom: 30px;
  }

  /* Resume: flex column con order para controlar el orden */
  .resume-grid {
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-top: 40px;
    margin-bottom: 60px;
  }

  .col-left,
  .col-right {
    display: contents;
  }

  /* Orden: Experience → Education → Tools → Skills → Languages */
  .experience-block  { order: 1; }
  .education-block   { order: 2; }
  .tools-block       { order: 3; }
  .skills-block      { order: 4; }
  .languages-block   { order: 5; }

  .section-title {
    font-size: 28px;
    margin-top: 10px;
    padding: 5px;
  }

  .skills-title {
    margin-top: 25px;
  }

  .tools-title {
    margin-top: 10px;
  }

  .resume-item h3 {
    font-size: 17px;
  }

  .exp-list li,
  .bullet-list li,
  .resume-item li {
    font-size: 15px;
  }

  .tools-grid {
    grid-template-columns: repeat(4, 1fr);
    max-width: 100%;
  }
}

@media (max-width: 500px) {
  .about-text h1 {
    font-size: 26px;
  }

  .blob-frame {
    width: 220px;
    height: 240px;
  }

  .section-title {
    font-size: 24px;
  }

  .tools-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }
}
</style>