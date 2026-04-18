<template>
  <main>
    <section class="about-hero">
      <div class="hero-content">
        <div class="about-image">
          <div class="blob-frame">
            <img src="/img/valentina-perfil.JPG" alt="Valentina Rotondaro" />
          </div>
          <router-link to="/Digital-Playground" class="btn-playground-overlay">
    Want to know me a little better?
  </router-link>

        </div>
        <div class="about-text">
          <p class="hero-description">
             I'm a colorful creative based in Aarhus, Denmark. Those who know me describe me as friendly, curious, and empathetic.         </p>
        </div>
      </div>
    </section>
    
  <section class="about-extra-text">
    <p>
    Beyond the screen, I'm fueled by 
    <span class="hover-word">
      travel
      <img src="/img/travel.JPEG" class="pop-up-image" alt="Travel">
    </span>, 
    <span class="hover-word">
      interior design
      <img src="/img/interiordesign.jpg" class="pop-up-image" alt="Interior Design">
    </span>, 
    and 
    <span class="hover-word">
      fashion
      <img src="/img/fashion.png" class="pop-up-image" alt="Fashion">
    </span>. 
    When I'm not working on a project, you'll likely find me getting my hands dirty with paint and collage in my 
    <span class="hover-word">
      sketchbook
      <img src="/img/sketchbook.JPEG" class="pop-up-image" alt="Sketchbook">
    </span>.
  </p>
</section>


<section class="about-skills">
      <div class="skills-content">      
          <div class="skills-pile-container">
            <span 
              v-for="(skill, index) in skillsData" 
              :key="index"
              class="skill-tag"
              :style="getFixedStyle(index, skill)">
              {{ skill.text }}
            </span>
          </div>
          <div class="skills-text">
          <h1>I bring a diverse skillset to the table!</h1>
        </div>
        </div>
        </section>


<section class="about-multimedia">
  <div class="video-section">
    <div class="video-container">
      <iframe 
        src="https://www.youtube.com/embed/RIos_-p8gA8" 
        title="Get to know me better"
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
      ></iframe>
    </div>
  </div>

  <div class="cv-section">
    <p>Curious to learn more about my background?</p>
    <a href="CV" target="_blank" class="cv-button">
      Check out my CV
    </a>
  </div>
</section>
  </main>
</template>

<script setup>
import { computed } from 'vue';

const skillsData = [
  // --- Fila inferior (entran primero y quedan horizontales) ---
  { text: 'Video Editing', rotate: 0, xOffset: 0 },
  { text: 'Front-End Development', rotate: 0, xOffset: 5 },
  { text: 'Workshop Facilitation', rotate: 0, xOffset: 5 },
  // --- Fila media (entran segundo y quedan de costado) ---
  { text: 'Continous Learning', rotate: 10, xOffset: -10, yOffset: 6 }, 
  { text: 'SoMe Content', rotate: -12, xOffset: 8 }, 
  { text: 'Visual Storytelling', rotate: 22, xOffset: -25, yOffset: -10 }, 
  { text: 'UX/UI Design', rotate: -20, xOffset: 0, yOffset: -10 },
  // --- Fila superior (entran último y quedan de costado) ---
  { text: 'Critical Thinking', rotate: 10, xOffset: -35, yOffset: 10 },
  { text: 'Team Collaboration', rotate: -7, xOffset: -70, yOffset: -25 }, 
  { text: 'AI Tool Integration', rotate: -10, xOffset: -15, yOffset: 0 },
];

const getFixedStyle = (index, skill) => {
  return {
    '--index-delay': `${index * 0.15}s`,
    '--rotation': `${skill.rotate}deg`,
    '--x-offset': `${skill.xOffset}px`,
    '--y-offset': `${skill.yOffset || 0}px`, // Si no ponés yOffset, que sea 0
  };
};
</script>

<style scoped>

.about-image { 
    position: relative;
    flex-shrink: 0;
    transform: translateY(-20px) translateX(10px);
}

.blob-frame {
    width: 450px;
    height: 480px;
    background-color: transparent;
    /* Esta es la clave del borde irregular */
    border-radius: 40% 60% 65% 35% / 40% 45% 55% 60%;
    position: relative;
    overflow: hidden; /* Para que la foto no se salga del borde redondeado */
}

.blob-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* El radio debe ser igual al del contenedor para que encaje perfecto */
    border-radius: 40% 60% 65% 35% / 40% 45% 55% 60%;
    display: block;
}

.btn-playground-overlay {
    position: absolute;
    bottom: 20px;       /* Distancia desde el borde inferior de la imagen */
    left: 10px;         /* Distancia desde el borde izquierdo */
    background-color: var(--lima); /* Tu color lima definido */
    color: var(--black);
    padding: 12px 20px;
    border-radius: 50px;
    font-weight: 450;
    font-size: 16px;
    text-decoration: none;
    z-index: 10;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    transition: transform 0.2s ease;
}

.btn-playground-overlay:hover {
    transform: scale(1.02);
}

/* Titulo tamaño Beyond */
.beyond-style-title {
    font-size: 45px !important; /* Mismo tamaño que tu sección Beyond */
    font-weight: 450;
    color: #000;
    letter-spacing: -0.02em;
    line-height: 1.2;
}

.hero-content {
    display: flex;
    flex-direction: row; /* Foto izquierda, texto derecha */
    align-items: center;
    justify-content: center;
    gap: 60px;
    padding: 40px 20px;
}

.hero-description {
    font-size: 45px; /* Tamaño similar al de tu imagen de referencia */
    line-height: 1.2;
    color: black;
    max-width: 520px;
    font-weight: 450;
    text-align: justify;
    text-justify: inter-word; /* Mejora cómo se distribuye el espacio */
    letter-spacing: -0.02em;
}

.hero-description::selection {
    background-color: var(--lima); /* Usa tu variable de color lima */
    color: var(--black);           /* Asegura que el texto sea legible (negro) */
}

/* =========================================
   SECCIÓN SKILLS
   ========================================= */
.skills-pile-container {
    display: flex;
    width: 100%;
    max-width: 700px;     /* Aumentamos un poco para que entren más tags */
    margin: 0 auto 40px auto; /* El 'auto' en los laterales lo centra en la página */
    padding-top: 100px;
    min-height: 200px;
    flex-wrap: wrap-reverse; /* Invertimos el orden del wrap: de abajo hacia arriba */
    gap: 8px; /* Reducido para que se amontonen más */
    min-height: 200px;
    align-items: center;
    justify-content: center;
}

.skills-text h1 {
    font-size: 45px;
    font-weight: 450;
    color: black;
    text-align: center; 
    line-height: 1.2;
    white-space: nowrap; /* Fuerza a que todo el texto esté en una sola línea */
    max-width: none;
    letter-spacing: -0.02em;
}
/* ESTILO DEL BOTÓN LIMA */
.skill-tag {
    display: inline-block;
    background-color: #d9fb60; /* Tu color Lima */
    color: #000;
    padding: 10px 22px;
    border-radius: 50px;
    font-size: 18px;
    font-weight: 400;
    white-space: nowrap;
    opacity: 0;
    will-change: transform, opacity;
    animation: pileUpFixed 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.1) forwards;
    animation-delay: var(--index-delay); /* Retraso fijo */
    transition: 0.2s ease-in-out;
}

@keyframes pileUpFixed {
    0% {
        opacity: 0;
        transform: translateY(-100px) scale(0.8);
    }
    100% {
        opacity: 1;
        /* IMPORTANTE: El orden de los factores altera el producto aquí */
        /* Primero movés a la posición (X, Y) y DESPUÉS rotás */
        transform: translate(var(--x-offset), var(--y-offset)) rotate(var(--rotation));
    }
}

/* Hover para que resalte al pasar el mouse */
.skill-tag:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

/* ABOUT ME FINAL TEXT*/

.inline-icon {
    height: 150px; /* Un poco más alto que el font-size (45px) para que destaquen */
    width: auto;
    display: inline-block;
    vertical-align: middle; /* Centra la imagen con el eje del texto */
    margin: 0 8px; /* Espaciado lateral para que no peguen con las letras */
    transition: transform 0.3s ease;
}

/* Efecto opcional: que las imágenes se muevan un poquito al pasar el mouse */
.inline-icon:hover {
    transform: scale(1.1) rotate(5deg);
}

.about-extra-text p {
    width: 90%;
    max-width: 1100px;
    margin: 40px auto; 
    padding: 0 20px; /* Margen interno para que no pegue con los bordes en móvil */
    font-size: 45px;
    font-weight: 450;
    color: black;
    text-align: justify;
     text-justify: inter-word;
    line-height: 1.2;
    letter-spacing: -0.02em;
  }

.hover-word {
    position: relative;
    display: inline;
    cursor: default;
    color: #ff69b4;
    font-weight: 400;
}
.pop-up-image {
    position: absolute;
    width: 220px !important;  
    max-width: 75vw !important; 
    height: auto !important;   
    min-height: 250px !important; 
    object-fit: cover !important; 
    border-radius: 20px !important; 
    box-shadow: 0 15px 35px rgba(0,0,0,0.15);
    border: none;
    background: transparent;
    bottom: 120%;               
    left: 50%;
    transform: translateX(-50%) scale(0.6); 
    opacity: 0;
    pointer-events: none;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    z-index: 1000; 
    display: block;
}

.hover-word:hover .pop-up-image {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(-15px);
}
/* Color de resaltado personalizado */
.about-extra-text::selection {
    background-color: var(--lima); /* Usa tu variable de color lima */
    color: var(--black);           /* Asegura que el texto sea legible (negro) */
}

/* También para navegadores basados en Firefox */
.about-extra-text::-moz-selection {
    background-color: var(--lima);
    color: var(--black);
}

/* SECCIÓN MULTIMEDIA (VIDEO + CV) */
.about-multimedia {
    width: 90%;
    max-width: 1100px;
    margin: 100px auto 40px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px; /* Espacio entre el video y la sección de CV */
}

/* VIDEO */
.video-section {
    width: 100%;
    text-align: center;
}

.video-title {
    font-size: 32px;
    font-weight: 450;
    margin-bottom: 30px;
    color: black;
}

.video-container {
    width: 100%;
    max-width: 800px; /* Tamaño del video según tu boceto */
    margin: 0 auto;
    aspect-ratio: 16 / 9;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.video-container iframe {
    width: 100%;
    height: 100%;
}

/* SECCIÓN CV */
.cv-section {
    text-align: center;
}

.cv-section p {
    font-size: 42px;
    font-weight: 450;
    margin-bottom: 25px;
    color: #000;
}

.cv-section p::selection {
    background-color: var(--lima); 
    color: var(--black);           
    }

.cv-button {
    display: block;
    width: fit-content;
    justify-content: center;
    align-items: center;
    margin: 50px auto 2px auto;
    padding: 15px 45px;
    background-color: var(--lima);
    color: var(--black);
    text-decoration: none;
    border-radius: 50px;
    font-weight: 450;
    font-size: 18px;
    transition: 0.2s ease-in-out;
}

.cv-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

</style>