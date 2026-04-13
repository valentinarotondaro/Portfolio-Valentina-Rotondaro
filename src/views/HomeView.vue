<template>
  <main>
    <section class="hero">
      <img src="/img/folder.png"  class="icon icon-folder"  alt="Folder" />
      <img src="/img/arrow.png"   class="icon icon-arrow"   alt="Arrow"  />
      <img src="/img/clips.png"   class="icon icon-clips"   alt="Clips"  />
      <img src="/img/cafeamarillo.png"  class="icon icon-coffee"  alt="Coffee" />
      <img src="/img/camera.png"  class="icon icon-camera"  alt="Camera" />
      <img src="/img/figma.png"   class="icon icon-figma"   alt="Figma"  />

      <div class="hero-content">
        <h1>Hi! I'm <span class="highlight">Valen Rotondaro,</span>
        a Multimedia Design student and UX/UI enthusiast focused on creating intuitive, functional, and aesthetic digital solutions.</h1>
      </div>
    </section>

    <div class="marquee-wrapper">
      <div class="marquee-track">
        <div v-for="n in 2" :key="n" class="marquee-content">
          <div v-for="(img, index) in projects" :key="index" class="project-card">
            <img :src="img.url" :alt="img.name" class="project-img" />
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
  { name: 'Proyecto 7', url: '/img/itinerohome.png' },
  { name: 'Proyecto 3', url: '/img/under.png' },
  { name: 'Proyecto 4', url: '/img/Raizysazon.png' },
  { name: 'Proyecto 5', url: '/img/arandacoriahome.png' },
  { name: 'Proyecto 6', url: '/img/ordendashboard.png' },
  { name: 'Proyecto 2', url: '/img/proyecto2.png' },
  
];
</script>

<style scoped>

/* HERO SECTION */

.hero {
    font-family: 'Inter' !important;
    min-height: 100vh;
    flex-direction: column;
    justify-content: center; /* Centra verticalmente */
    align-items: center;
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
  max-width: 680px;
  margin: 0 auto; /* Centra el bloque horizontalmente */
  
  /* Alineación del texto */
  text-align: justify;
  text-wrap: balance;
  
  /* Espaciado para que no toque los bordes en móviles */
  padding: 0px;
  
  /* Altura de línea para que sea legible */
  line-height: 1.2;
  
  /* Estética (opcional) */
  font-weight: 
  450;
  letter-spacing: -0.02em;
}

/* Color de resaltado personalizado */
.hero-content h1::selection {
    background-color: var(--lima); /* Usa tu variable de color lima */
    color: var(--black);           /* Asegura que el texto sea legible (negro) */
}

/* También para navegadores basados en Firefox */
.hero-content h1::-moz-selection {
    background-color: var(--lima);
    color: var(--black);
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
    font-weight: 450;
    font-size: 18px;
    transition: 0.2s ease-in-out;
}

.btn-explore:hover {
    transform: scale(1.01);
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
    width: 80px;
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


/* CARROUSEL MODERNO */

.marquee-wrapper {
  width: 100%;
  overflow: hidden; /* Oculta lo que sale de la pantalla */
  display: flex;
  justify-content: flex-start;
  padding: 60px 0; /* Espacio para que luzca */
  cursor: ew-resize; /* Indica movimiento */
}

.marquee-track {
  display: flex; /* Alinea los dos bloques de contenido */
  width: fit-content; /* Se ajusta al ancho total */
  flex-shrink: 0;
  /* Controlamos la animación por JS como antes */
  animation: scroll-loop 40s linear infinite;
}

/* Pausa al pasar el mouse */
.marquee-wrapper:hover .marquee-track {
  animation-play-state: paused;
}

/* El bloque de contenido es clave: no puede tener gap */
.marquee-content {
  display: flex;
  flex-shrink: 0;
  /* IMPORTANTE: No dar gap aquí, lo controlamos con el margen de la carta */
  gap: 0px !important; 
  padding: 0 !important;
  margin: 0 !important;
}

/* CADA PROYECTO AHORA ES UNA 'CARTA' (Estilo Bento Box) */
.project-card {
  /* Truco: inline-block para que se alineen perfectamente */
  display: inline-block;
  vertical-align: top;
  
  /* Definimos el tamaño de la carta, como en tu referencia */
  width: 380px !important;
  height: 480px !important;
  
  flex-shrink: 0;
  
  /* Radio de borde grande y moderno */
  border-radius: 35px;
  overflow: hidden;
  position: relative;
  
  /* Espaciado entre cartas (el gap que antes estaba arriba) */
  margin-right: 30px; 
  
  /* Sombra suave y moderna */
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  
  /* Comportamiento al hover */
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* EFECTO ESCALONADO (opcional pero moderno, pruébalo) */
/* Esto hace que las cartas pares suban un poco, creando ritmo visual */
.project-card:nth-child(even) {
  margin-top: 30px;
}
.project-card:nth-child(odd) {
  margin-top: -30px;
}


.project-card:hover {
  transform: translateY(-8px) scale(1.03); /* Sube un poco más y se agranda */
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
  z-index: 10;
}

/* LA IMAGEN DENTRO DE LA CARTA */
.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Clave: ajusta la imagen sin deformar */
  object-position: center;
  display: block;
}

/* KEYFRAMES: Esencial para que el loop no se rompa */
@keyframes scroll-loop {
  0% {
    transform: translateX(0);
  }
  100% {
    /* Se mueve el 50% porque duplicamos el contenido en el HTML */
    transform: translateX(-50%);
  }
}
</style>