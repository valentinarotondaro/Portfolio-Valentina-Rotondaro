<template>
  <main class="about-container">

    <!-- HERO -->
    <section class="about-hero">
      <div class="about-text">
        <h1>Hi there! I'm <span>Valentina Rotondaro</span>, a creative based in Denmark.</h1>
        <p class="intro-p">As a Multimedia Design student I combine visual storytelling with a technical mindset. My work lives at the intersection of UX/UI, branding, and content creation, supported by a solid foundation in frontend, WordPress, and video editing.</p>
        <p class="intro-p">Beyond the screen, I am an analog collage artist and a creative workshop facilitator. I believe in the power of hands-on art to connect with our own expression and with others.</p>
        <p class="intro-p">My goal is always the same: mixing beauty with logic to create projects that are as visually stunning as they are easy to use.</p>
      </div>
      <div class="about-image">
        <div class="blob-frame">
          <img src="/img/valentina-perfil.JPG" alt="Valentina Rotondaro profile picture" />
          <a href="/img/CV Valentina Rotondaro.pdf" download class="btn-download">
        Download my CV
      </a>
        </div>
      </div>
    </section>

    <!-- RESUME GRID -->
    <section class="resume-grid">

      <!-- COLUMNA IZQUIERDA -->
      <div class="col">
        <h2 class="section-title">Experience</h2>

        <div class="resume-item" id="event-item">
          <h3>Event coordination | Syddansk Erhvervsakademi | present</h3>
          <ul class="exp-list">
            <li>Plan and coordinate inclusive university events from concept to execution, designing high-impact visual assets and social media campaigns to drive student engagement and ensure a seamless, human-centered experience.</li>
          </ul>
        </div>

        <div class="resume-item">
          <h3>Workshop facilitation & Content creation | 2023-present</h3>
          <ul class="exp-list">
            <li>Host monthly analog collage workshops in collaboration with DOKK1, Royal Danish Library, and Aarhus Kommune, bringing together international groups of 20+ participants to build community and foster creativity through hands-on expression.</li>
            <li>Manage the end-to-end production of each event, including experience design, email marketing, and social media communication, while coordinating all materials and logistics to ensure a seamless and engaging participant journey.</li>
          </ul>
        </div>

        <div class="resume-item">
          <h3>Hospitality & Customer service roles | 2021-2025</h3>
          <ul class="exp-list">
            <li>Deliver high-quality guest experiences in fast-paced hotels and restaurants across France, Sweden, Spain, and Denmark, effectively assisting hundreds of international guests per week in multiple languages.</li>
          </ul>
        </div>

        <h2 class="section-title" id="skills-title">Skills</h2>
        <ul class="bullet-list">
          <li>Deadline & workflow management</li>
          <li>Brand alignment</li>
          <li>Trend awareness</li>
          <li>Collaboration and teamwork</li>
          <li>Adaptability and flexibility</li>
          <li>Community building</li>
          <li>Critical thinking</li>
        </ul>

        <h2 class="section-title" id="tools-title">Tools</h2>
        <div class="tools-grid">
          <img src="/img/figma.png"  class="figma-icon"       alt="Figma" />
          <img src="/img/premiere.png"     alt="Premiere" />
          <img src="/img/illustrator.png"  alt="Illustrator" />
          <img src="/img/photoshop.png"    alt="Photoshop" />
          <img src="/img/indesign.png"     alt="InDesign" />
          <img src="/img/after-effects.png" alt="After Effects" />
          <img src="/img/procreate.png"  class="procreate-icon"  alt="Procreate" />
          <img src="/img/html.png"         alt="HTML5" />
          <img src="/img/css.png"          alt="CSS3" />
          <img src="/img/js.png"           alt="JS" />
          <img src="/img/vue-logo.png" alt="Vue" /> 
          <img src="/img/tailwind-logo.png" alt="Tailwind" /> 
        </div>
      </div>

      <!-- COLUMNA DERECHA -->
      <div class="col">
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

        <h2 class="section-title">Languages</h2>
        <ul class="bullet-list">
          <li>Spanish: Native</li>
          <li>English: Advanced</li>
          <li>French: Intermediate</li>
          <li>Danish: Basic</li>
        </ul>
      </div>

    </section>
  </main>
</template>

<script setup>

</script>

<style scoped>

/* Color de resaltado personalizado */
.about-text h1::selection {
    background-color: var(--lima); /* Usa tu variable de color lima */
    color: var(--black);           /* Asegura que el texto sea legible (negro) */
}

/* También para navegadores basados en Firefox */
.about-text h1::-moz-selection {
    background-color: var(--lima);
    color: var(--black);
}

.about-text p::selection {
    background-color: var(--lima); /* Usa tu variable de color lima */
    color: var(--black);           /* Asegura que el texto sea legible (negro) */
}

.about-text p::-moz-selection {
    background-color: var(--lima);
    color: var(--black);
}

.resume-item::selection {
    background-color: var(--lima); /* Usa tu variable de color lima */
    color: var(--black);           /* Asegura que el texto sea legible (negro) */
}

.resume-item::-moz-selection {
    background-color: var(--lima);
    color: var(--black);
}

.bullet-list::selection {
    background-color: var(--lima); /* Usa tu variable de color lima */
    color: var(--black);           /* Asegura que el texto sea legible (negro) */
}

.bullet-list::-moz-selection {
    background-color: var(--lima);
    color: var(--black);
}


.about-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 40px 0px 40px;
}

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
    margin-bottom: 40px;
    letter-spacing: -0.02em;
}

.about-text h1 span {
    color: var(--pink);
}

/* Forzamos que todo texto de párrafo sea negro y justificado */
.about-text p, .intro-p, .resume-item p {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 20px;
    color: #000000 !important;
    text-align: justify;
}

.about-text p:last-of-type {
    margin-bottom: 60px;
}
/* La forma orgánica de la foto */
.about-image {
    position: relative;
    flex-shrink: 0;
    transform: translateY(-40px);
}

.blob-frame {
    width: 450px;
    height: 480px;
    background-color: transparent; /* Quitamos el gris de fondo */
    border-radius: 40% 60% 65% 35% / 40% 45% 55% 60%;
    position: relative;
}

.blob-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 40% 60% 65% 35% / 40% 45% 55% 60%;
}

/* TAGS LIME */
.tag {
    position: absolute;
    background-color: var(--lima);
    padding: 8px 18px;
    border-radius: 30px;
    font-size: 14px;
    font-weight: 450;
}

.tag-age { top: 35%; right: -25px; }


/* RESUME GRID */
.resume-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 100px;
    margin-top: 15px !important; 
    margin-bottom: 100px;
}

#skills-title {
    margin-top: 60px !important; 
}

#tools-title {
    margin-top: 60px !important; 
}

#event-item {
    margin-top: 30px !important; 
}

#event-item h3 {
    margin-top: 0 !important;
}

.section-title {
    color: var(--pink);
    font-size: 38px;
    margin-bottom: 12px;
    letter-spacing: -0.02em;
}

.resume-item {
    margin-bottom: 35px;
}

.resume-item h3 {
    font-size: 22px;
    margin-bottom: 15px;
    font-weight: 500px;
    color: #000000;
    letter-spacing: -0.02em;
    font-family: 'Inter' !important;
}

.exp-list, .bullet-list, .resume-item ul {
    list-style: none !important;
    padding: 0 !important;
    margin: 10px 0 !important;
}

.exp-list li, .bullet-list li, .resume-item li {
    position: relative;
    padding-left: 25px !important; 
    margin-bottom: 12px !important;
    margin-left: 0 !important;
    font-size: 18px;
    line-height: 1.5;
    text-align: justify;
    color: #000000 !important;
}

.exp-list li::before, .bullet-list li::before, .resume-item li::before {
    content: "•"; 
    position: absolute;
    left: 0;
    top: -2px;
    color: #000000 !important;
    font-size: 24px;
}

.education-list h3 {
    margin-top: 25px;
    margin-bottom: 10px;
}

/* TOOLS */

.tools-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr); 
    gap: 20px;
    max-width: 520px; /* Un poquito más de ancho para que respiren */
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
    /* La transición debe ir ACÁ para que sea fluida al entrar Y al salir */
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.tools-grid img:hover {
    transform: scale(1.2) rotate(5deg);
    filter: drop-shadow(0 8px 12px rgba(0,0,0,0.1));
}

/* BUTTON DOWNLOAD */
.cv-download-container {
    text-align: center;
    margin: 60px 0;
}

.btn-download {
    position: absolute;
    display: inline-block;
    max-width: none;
    width: auto;
    padding: 12px 30px;
    background-color: var(--lima); 
    top: 15%;       /* Ajusta este % para subirlo o bajarlo */
    left: 290px;
    color: #000000;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 450;
    transition: 0.3s;
    font-size: 16px;
    z-index: 10 !important;
    white-space: nowrap !important;
    transition: 0.2s ease-in-out;
}

.btn-download:hover {
    transform: scale(1.01) rotate(3deg);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.tools-grid img.procreate-icon {
    transform: scale(1.7); 
}

.tools-grid img.figma-icon {
    transform: scale(1.2); 
}
.tools-grid :hover {
    transform: scale(1.45) rotate(5deg);
}

.tools-grid img.figma-icon:hover {
    transform: scale(1.45) rotate(5deg) !important;
}

.tools-grid img.procreate-icon:hover {
    transform: scale(1.95) rotate(5deg) !important;
}
</style>