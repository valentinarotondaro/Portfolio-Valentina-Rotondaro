<template>
  <main>
    <!-- PHOTO AND TAGS SECTION -->
<section class="about-hero">
      <div class="hero-content">
        <div class="about-text">
          <h1>I bring a diverse skillset <br> to the table!</h1>
          
          <div class="skills-pile-container">
            <span 
              v-for="(skill, index) in skillsData" 
              :key="index"
              class="skill-tag"
              :style="getFixedStyle(index, skill)"
            >
              {{ skill.text }}
            </span>
          </div>
        </div>

        <div class="about-image">
          <div class="blob-frame">
            <img src="/img/valentina-perfil.JPG" alt="Valentina Rotondaro" />
          </div>
          <div class="photo-caption">
    <p>Want to know me a little better? <br>Dive into my 
       <router-link to="/Digital-Playground" class="pink-link">
      digital playground!
    </router-link>
    </p>
  </div>
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

// 1. Definimos los skills en el orden inverso (primero los de abajo de todo)
const skillsData = [
  // --- Fila inferior (entran primero y quedan horizontales) ---
  { text: 'Video edition', rotate: 0, xOffset: 0 },
  { text: 'Front-End development', rotate: 0, xOffset: 5 },
  
  // --- Fila media (entran segundo y quedan de costado) ---
  { text: 'Workshop facilitation', rotate: 15, xOffset: -5 }, // Rotación positiva fijos y de costado
  { text: 'Flexibility', rotate: -12, xOffset: 8 }, // Rotación negativa fijos y de costado
  { text: 'Visual storytelling', rotate: 22, xOffset: 5, yOffset: 10 }, // Rotación positiva fijos y de costado
  
  // --- Fila superior (entran último y quedan de costado) ---
  { text: 'Critical thinking', rotate: -25, xOffset: 35, yOffset: 20 },// Rotación negativa fijos y de costado
  { text: 'Team player', rotate: 10, xOffset: -10 }, // Rotación positiva fijos y de costado
  { text: 'SoMe Content', rotate: -10, xOffset: 55, yOffset: 40 }, // Rotación negativa fijos y de costado
];

// 2. Función para obtener el estilo fijo para cada botón
const getFixedStyle = (index, skill) => {
  // Retraso escalonado para la animación (más alto para los últimos en entrar)
  const delay = index * 0.2; 
  
  return {
    '--index-delay': `${delay}s`,
    '--rotation': `${skill.rotate}deg`,
    '--x-offset': `${skill.xOffset}px`,
    // Aplicamos la rotación inicial aquí también
    transform: `rotate(${skill.rotate}deg) translateX(${skill.xOffset}px translateY(${skill.yOffset || 0}px)`
  };
};
</script>

<style scoped>
/* PHOTO AND TAGS SECTION*/
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

/* CONTENEDOR DE SKILLS */
.skills-pile-container {
    display: flex;
    flex-wrap: wrap-reverse; /* Invertimos el orden del wrap: de abajo hacia arriba */
    gap: 8px; /* Reducido para que se amontonen más */
    max-width: 650px;
    padding-top: 100px;
    align-items: flex-end; /* Alineamos al fondo */
    justify-content: flex-start;
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
    
    /* Estado inicial (oculto arriba) */
    opacity: 0;
    will-change: transform, opacity;
    
    /* La animación usa las variables del JS */
    animation: pileUpFixed 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.1) forwards;
    animation-delay: var(--index-delay); /* Retraso fijo */
    transition: 0.2s ease-in-out;
}

/* Animación de caída fijos y de costado */
@keyframes pileUpFixed {
    0% {
        opacity: 0;
        /* Entran de arriba, sin rotación */
        transform: translateY(-120px) rotate(0deg) scale(0.8);
    }
    60% {
        opacity: 1;
    }
    100% {
        opacity: 1;
        /* Termina con la rotación y el desplazamiento fijos definidos en JS */
        transform: translateY(0) rotate(var(--rotation)) translateX(var(--x-offset));
    }
}

/* Hover para que resalte al pasar el mouse */
.skill-tag:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}


/* Aseguramos que la foto no se encime de forma rara */
.about-image {
  display: flex;
    flex-direction: column;
    align-items: center; /* Centra el texto con la foto */
    text-align: center;
    gap: 20px; /* Espacio entre el borde de la foto y el texto */
    position: relative;
    z-index: 10;
}

.photo-caption p {
    font-size: 18px;
    line-height: 1.4;
    font-family: Inter;
    color: #000;
    font-weight: 450;
    align-items: center;
    text-align: center;
}

.photo-caption .pink-link {
    color: #ff63a7;
    font-weight: 450;
    font-family: Inter;
    cursor: pointer;
}

/* Ajuste del Hero para que el texto de la izquierda no empuje tanto */
.hero-content {
    align-items: flex-start; /* Alinea el título arriba y la foto fluye abajo */
    padding-bottom: 100px; /* Reducimos el padding exagerado */
}
/* Responsivo rápido: por si lo ves en pantallas más chicas */
@media (max-width: 1024px) {
    .blob-frame {
        width: 350px;
        height: 380px;
    }
}

/* Este contenedor limita el ancho para que no ocupe toda la pantalla */
.about-hero {
    width: 100%;
    display: flex;
    justify-content: center; /* Centra todo el bloque en la pantalla */
    padding: 60px 40px;
}

.hero-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1100px; /* Igual al ancho máximo de tu sección de CV */
    gap: 40px;
    padding: 10x 80px 200px 200px;
}

.about-text {
    flex: 1;
}

.about-text h1 {
    font-size: 54px;
    font-weight: 450;
    line-height: 1.1;
    margin-bottom: 20px; /* Reducido para que las tags queden cerca del texto */
    color: #000;
    letter-spacing: -0.02em;
}

/* ABOUT ME FINAL TEXT*/

.about-extra-text {
    width: 90%;
    max-width: 1100px;
    margin: -80px auto 100px auto !important;
    padding: 0;
    text-align: justify;
}

.about-extra-text p {
    font-size: 45px;
    width: 100%;
    text-align: justify;
    text-justify: inter-word;
    color: var(--black);
    font-weight: 450;
    letter-spacing: -0.02em;
    line-height: 1.1;
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
    width: 250px !important;    /* Bajamos de 450px a 380px para un tamaño equilibrado */
    max-width: 75vw !important; 
    
    /* --- ALTURA DINÁMICA: Proporción Estilizada --- */
    height: auto !important;    /* Que la altura crezca lo que necesite la foto */
    min-height: 250px !important; /* Forzamos un mínimo para que ninguna sea "chiquita" */
    object-fit: cover !important; /* Llena el espacio sin deformar, clave con height:auto */
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
    color: #000;
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