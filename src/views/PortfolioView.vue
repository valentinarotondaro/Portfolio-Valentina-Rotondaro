<template>
  <div class="portfolio-page">
    <main>
      <section class="portfolio-header">
        <img src="/img/folder.png" class="icon icon-folder" alt="Folder">
        <img src="/img/arrow.png" class="icon icon-arrow" alt="Arrow">
        <img src="/img/clips.png" class="icon icon-clips" alt="Clips">
        <img src="/img/cafeamarillo.png" class="icon icon-coffee" alt="Coffee">
        <img src="/img/smile.png" class="icon icon-smile" alt="Smiley">
        <img src="/img/figma.png" class="icon icon-figma" alt="Figma">

        <div class="header-text">
          <h1>My creative universe</h1>
          <p>My work unfolds across three connected worlds:</p>
        </div>
      </section>

      <section class="projects-grid-section">
        <div class="universe-grid">
          
          <div class="universe-item item-camera">
            <router-link to="/content-creation" class="btn-green">Content Creation</router-link>
            <router-link to="/content-creation">
              <img src="/img/camera.png" alt="Camera">
            </router-link>
          </div>

          <div class="universe-item item-collage">
            <router-link to="/collage-workshops" class="btn-green">Collage workshops</router-link>
            <router-link to="/collage-workshops">
              <img src="/img/collage.png" alt="Collage">
            </router-link>
          </div>

          <div class="universe-item">
            <router-link to="/multimedia-design" class="btn-green">Multimedia design</router-link>
            <router-link to="/multimedia-design">
              <img src="/img/mac.png" alt="Laptop">
            </router-link>
          </div>

        </div>
      </section>

      <section class="cv-callout">
        <h2>Curious to learn more about my background?</h2>
        <router-link to="/cv" class="btn-green">Check out my CV</router-link>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'PortfolioView'
}
</script>

<style scoped>
.btn-green {
    display: inline-block;
    padding: 15px 35px;
    background-color: #E2FF54; /* Tu verde lima */
    color: black;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 400;
    font-size: 18px;
    transition: 0.3s ease;
    border: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
}

.btn-green:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

/* --- SECCIÓN 1: CABECERA --- */
.portfolio-header {
    position: relative;
    width: 100%;
    height: 60vh; /* Altura controlada para que los iconos no se pierdan */
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 10%;
    overflow: visible;
}

.header-text h1 {
    font-size: 70px; /* Más pequeño como pediste */
    font-weight: 500;
    margin-bottom: 15px;
    letter-spacing: -0.02em;
}

.header-text p {
    font-size: 20px;
    color: black;
}

/* Posicionamiento de Iconos Flotantes */
.icon {
    position: absolute;
    z-index: 1;
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: pointer;
    z-index: 5;
}

.icon-folder { top: 10%; left: 15%; width: 150px; }
.icon-arrow  { top: 15%; right: 15%; width: 60px; }
.icon-clips  { top: 50%; left: 10%; width: 70px; }
.icon-coffee { top: 45%; right: 10%; width: 90px; }
.icon-smile  { bottom: 5%; left: 20%; width: 60px; }
.icon-figma  { bottom: 10%; right: 20%; width: 60px; }

/* --- SECCIÓN 2: GRID DE PROYECTOS --- */
.projects-grid-section {
    padding: 50px 5%;
    background-color: white;
    padding-bottom: 10px !important;
}

.universe-grid {
    display: flex;
    justify-content: center;
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
}

.universe-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px; /* Espacio entre botón e imagen */
}

.universe-item img {
    width: 100%;
    max-width: 350px;
    height: auto;
    object-fit: contain;
}

.item-collage img {
    margin-top: -70px !important; 
    display: block;
    width: 100%;
    max-width: 350px;
    height: auto;
}

.item-camera img {
    margin-top: -20px !important; 
    display: block;
    width: 100%;
    max-width: 350px;
    height: auto;
}

/* --- SECCIÓN 3: CV CALLOUT --- */
.cv-callout {
    text-align: center;
    background-color: white;
}

.cv-callout h2 {
    font-size: 34px;
    font-weight: 400;
    margin-bottom: 40px;
    letter-spacing: -0.01em;
}


/* --- ANIMACIÓN PARA LOS ICONOS FLOTANTES --- */

.icon:hover {
    transform: scale(1.1) rotate(15deg);
}

.icon-folder:hover, 
.icon-smile:hover, 
.icon-figma:hover {
    transform: scale(1.1) rotate(-15deg);
}
</style>