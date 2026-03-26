<template>
  <main>
    <section class="hero">
      <img src="/img/folder.png"  class="icon icon-folder"  alt="Folder" />
      <img src="/img/arrow.png"   class="icon icon-arrow"   alt="Arrow"  />
      <img src="/img/clips.png"   class="icon icon-clips"   alt="Clips"  />
      <img src="/img/coffee.png"  class="icon icon-coffee"  alt="Coffee" />
      <img src="/img/camera.png"  class="icon icon-camera"  alt="Camera" />
      <img src="/img/figma.png"   class="icon icon-figma"   alt="Figma"  />

      <div class="hero-content">
        <h1>Hi! I'm <span class="highlight">Valen Rotondaro,</span>
        a Multimedia Design student and UX/UI enthusiast focused on creating intuitive, functional, and aesthetic digital solutions.</h1>
      </div>
    </section>

    <div class="marquee-wrapper">
      <div class="marquee-track" >
        
        <div v-for="n in 2" :key="n" class="marquee-content">
          <div v-for="(img, index) in projects" :key="index" class="marquee-item">
            <img :src="img.url" :alt="img.name" class="project-thumb" />
          </div>

        </div>
        

      </div>
    </div>
              <router-link to="/Portfolio" class="btn-explore">
          Explore here all my projects
        </router-link>
  </main>
</template>

<script setup>

const projects = [
  { name: 'Proyecto 1', url: '/img/proyecto1.png' },
  { name: 'Proyecto 2', url: '/img/proyecto2.png' },
  { name: 'Proyecto 3', url: '/img/proyecto3.png' },
  { name: 'Proyecto 4', url: '/img/proyecto4.png' },
  { name: 'Proyecto 5', url: '/img/proyecto5.jpg' },
  { name: 'Proyecto 6', url: '/img/proyecto6.png' },
  { name: 'Proyecto 7', url: '/img/proyecto7.png' },
];
</script>

<style scoped>

/* HERO SECTION */

.hero {
    font-family: 'Inter' !important;
    min-height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: relative;
    padding: 0 15%;
}

.hero-content h1 {
    font-family: 'Inter' !important;
/* Tamaño de letra más equilibrado */
  font-size: 52px; 
  
  /* Centrado y límite de ancho */
  max-width: 720px;
  margin: 0 auto; /* Centra el bloque horizontalmente */
  
  /* Alineación del texto */
  text-align: justify;
  
  /* Espaciado para que no toque los bordes en móviles */
  padding: 0px;
  
  /* Altura de línea para que sea legible */
  line-height: 1.2;
  
  /* Estética (opcional) */
  font-weight: 
  450;
  letter-spacing: -0.02em;
}

.highlight {
    color: var(--pink);
}

.hero-content p {
    font-family: 'Inter' !important;
    font-size: 20px;
    line-height: 1.4;
    max-width: 900px;
    margin: 0 auto;
}

.btn-explore {
    display: block;
    width: fit-content;
    justify-content: center;
    align-items: center;
    margin: 40px auto;
    padding: 15px 45px;
    background-color: var(--lima);
    color: var(--black);
    text-decoration: none;
    border-radius: 50px;
    font-weight: 400;
    font-size: 18px;
    transition: 0.2s ease-in-out;
}

.btn-explore:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}


/* ICONS */
.icon {
    position: absolute;
    width: 70px;
    height: auto;
}

.icon-folder {
    width: 160px;
    top: 2%; 
    left: 10%; 
    }
.icon-arrow  {
    top: 7%;
    right: 14%;
    }
.icon-clips  {
    width: 80px;
    top: 43%;
    left: 8%;
    }
.icon-coffee {
    width: 100px;
    top: 40%;
    right: 9%;
    }
.icon-camera {
    width: 110px;
    bottom: 8%;
    left: 13%;
    }
.icon-figma  {
    bottom: 10%;
    right: 15%;
    }


/* Base behavior for all floating icons */
.icon {
  --base-rot: 0deg;
  --hover-tilt: 8deg; /* extra rotation only on hover */
  transition: transform 0.3s ease;
  transform: rotate(var(--base-rot));
  transform-origin: center;
}

/* Keep base rotation + add scale + add extra tilt */
.icon:hover {
  transform: rotate(var(--base-rot)) scale(1.05) rotate(var(--hover-tilt));
}

.icon-folder { --base-rot: -1deg; --hover-tilt: 10deg; }
.icon-arrow  { --base-rot: 8deg; --hover-tilt: -8deg; }
.icon-clips  { --base-rot: -7deg; --hover-tilt: 12deg; }
.icon-coffee { --base-rot: 8deg; --hover-tilt: -6deg; }
.icon-camera { --base-rot: -7deg; --hover-tilt: 9deg; }
.icon-figma  { --base-rot: 2deg; --hover-tilt: -7deg; }


/*CARROUSEL */

.marquee-wrapper {
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  background: transparent;
  padding: 60px 0;
  /* Cursor opcional para indicar que hay interacción */
  cursor: ew-resize;
}

.marquee-track {
  display: flex;
  width: fit-content;
  flex-shrink: 0;
  /* Usamos la variable de dirección que controlas con JS */
  animation: scroll-loop 35s linear infinite;
}

/* Pausa al hover */
.marquee-wrapper:hover .marquee-track {
  animation-play-state: paused;
}

.marquee-content {
display: flex;
  flex-shrink: 0;
  /* --- CLAVE CLEAN: Volvemos a dar aire entre imágenes --- */
  gap: 30px !important; /* Espacio minimalista y limpio */
  padding-right: 30px !important;
}

.marquee-item {
  width: 400px !important;
  height: 450px !important;
  flex-shrink: 0;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  
  /* --- CLAVE CLEAN: Reseteamos el solapamiento negativo --- */
  margin-right: 0 !important; /* Volvemos a cero */
  /* -------------------------------------------------------- */

  /* Resets de seguridad */
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  margin-left: 0 !important;
  padding: 0 !important;
  border: none !important;
  outline: none !important;
  
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.marquee-item:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.project-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}

/* KEYFRAMES: Esencial para que el loop no se rompa */
@keyframes scroll-loop {
  0% {
    transform: translateX(0);
  }
  100% {
    /* Se mueve exactamente el 50% porque duplicamos el contenido en el HTML */
    transform: translateX(-50%);
  }
}
</style>