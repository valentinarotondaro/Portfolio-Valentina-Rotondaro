<template>
  <main>
    <!-- Collage section -->
    <section class="about-me-container">
      <div class="collage-wrapper">

        <!-- Objetos izquierda -->
        <div 
  class="obj lamp-interaction-group" 
  @mouseenter="activateLamp" 
  @mouseleave="deactivateLamp"
>
  <img src="/img/lampitradition.png" class="lamp-body-img" alt="Lamp Body" />

  <div class="lamp-head-container">
    <img src="/img/lampitradition.png" class="lamp-head-img" alt="Lamp Head" />
    
    <div class="light-glow" :class="{ 'is-lit': isLampOn }"></div>
  </div>

  <audio ref="lampSound" src="/audio/lampon.mp3" preload="auto"></audio>
</div>
        <img src="/img/tijeraroja.png"     class="obj scissors"   alt="Scissors" />
        <img src="/img/moleskine.png"      class="obj notebook"   alt="Notebook" />
        <img src="/img/collage.png"        class="obj collage"    alt="Collage" />
        <img src="/img/sopadeletras.png"   class="obj wordsearch" alt="Wordsearch" />
        <img src="/img/passport.png"       class="obj passport"   alt="Passport" />
        <img src="/img/boardingpass.png"   class="obj boarding"   alt="Boarding Pass" />
        <img src="/img/lego.png"           class="obj lego"       alt="Lego Flowers" />
        <img src="/img/sagradafamilia.png" class="obj photo"      alt="Sagrada Familia" />

        <!-- Texto central -->
        <div class="about-me-text">
          <p>
            I believe in human-centered design as a tool for clarity and purpose. My focus is on
            intentionality: creating work that is as
            <span class="highlight-pink">functional</span> as it is
            <span class="highlight-pink">visual</span>, ensuring every solution adds genuine
            meaning to the user's experience.
          </p>
        </div>

        <!-- Objetos derecha -->
        <div>
          <img 
  src="/img/spotify.png" 
  class="obj spotify" 
  :class="{ 'is-playing': isPlaying }"
  alt="Spotify Player" 
  @mouseenter="playMusic"
  @mouseleave="pauseMusic"
/>
<audio ref="audioPlayer" src="/audio/comptinedunautreete.mp3" preload="auto" loop></audio>
          <img src="/img/macfigma.png"         class="obj laptop"  alt="Macbook with Figma" />
          <img src="/img/cafeamarillo.png"     class="obj coffee"  alt="Coffee" />
          <img src="/img/candles.png"          class="obj candles" alt="Candles" />
          <img src="/img/cups.png"             class="obj cups"    alt="Smiley Cups" />
          <img src="/img/pastafrola.png"       class="obj pie"     alt="Pastafrola" />
          <img src="/img/bookinspiration.png"  class="obj book"    alt="Book Inspiration" />
        </div>

      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const audioPlayer = ref(null);
const isPlaying = ref(false);

// Configuración de Volúmenes (0 a 1)
const MUSIC_MAX_VOL = 0.35; // Volumen de fondo equilibrado
const LAMP_VOL = 1.0;       // El clic al máximo para que se escuche

// Ajustamos el punto de inicio (en segundos)
const startTime = 10;

onMounted(() => {
  if (audioPlayer.value) {
    audioPlayer.value.load();
    audioPlayer.value.currentTime = startTime;
    audioPlayer.value.volume = 0; 
  }
});

const playMusic = () => {
  if (audioPlayer.value) {
    if (audioPlayer.value.currentTime < startTime) {
      audioPlayer.value.currentTime = startTime;
    }

    const promise = audioPlayer.value.play();

    if (promise !== undefined) {
      promise.then(() => {
        isPlaying.value = true;
        
        // FADE IN Corregido: Sube hasta MUSIC_MAX_VOL, no hasta 1
        let vol = 0;
        const interval = setInterval(() => {
          if (vol < MUSIC_MAX_VOL) {
            vol += 0.05;
            audioPlayer.value.volume = Math.min(vol, MUSIC_MAX_VOL);
          } else {
            clearInterval(interval);
          }
        }, 50);
      }).catch(error => {
        console.log("Autoplay bloqueado");
      });
    }
  }
};

const pauseMusic = () => {
  if (audioPlayer.value) {
    audioPlayer.value.pause();
    isPlaying.value = false;
  }
};

/* LAMP SOUND EFFECT */
const isLampOn = ref(false);
const lampSound = ref(null);

const activateLamp = () => {
  isLampOn.value = true;
  
  // EFECTO "DUCKING": Bajamos Spotify un poco más al prender la lámpara
  if (audioPlayer.value && isPlaying.value) {
    audioPlayer.value.volume = 0.15;
  }
  
  if (lampSound.value) {
    lampSound.value.currentTime = 1;
    lampSound.value.volume = LAMP_VOL; // Volumen fuerte para el clic
    
    const playPromise = lampSound.value.play();
    
    if (playPromise !== undefined) {
      playPromise.then(() => {
        setTimeout(() => {
          // No pausamos si el usuario ya sacó el mouse rápido (deactivateLamp ya lo hizo)
          if (isLampOn.value) { 
            lampSound.value.pause();
          }
        }, 500); 
      }).catch(e => console.log("Error audio lámpara"));
    }
  }
};

const deactivateLamp = () => {
  isLampOn.value = false;
  
  // Restauramos el volumen de la música al salir de la lámpara
  if (audioPlayer.value && isPlaying.value) {
    audioPlayer.value.volume = MUSIC_MAX_VOL;
  }
  
  if (lampSound.value) {
    lampSound.value.pause();
  }
};
</script>

<style scoped>

.about-me-container {
    min-height: auto !important; /* Quitamos el mínimo de 600px */
    height: auto !important;
    margin-bottom: -50px !important; /* Margen negativo para "atraer" a la siguiente sección */
    padding-bottom: 0 !important;
    max-width: 1200px;
    margin: 0 auto;
}

.collage-wrapper {
    position: relative;
    width: 100%;
    max-width: 1200px;
    height: 800px; 
    display: flex;
    justify-content: center;
    align-items: center;
}

.about-me-text {
    max-width: 550px;
    text-align: justify;
    z-index: 10;
}

.about-me-text p {
    font-size: 28px;
    line-height: 1.3;
    margin-bottom: 200px;
    font-weight: 400;
    text-align: justify;
}

.highlight-pink {
    color: var(--pink);
    font-weight: 500;
}


.obj {
    position: absolute;
    height: auto;
    transition: transform 0.3s ease;
}

.obj:hover {
    transform: scale(1.05) rotate(3deg); 
}
.scissors:hover {
    transform: scale(1.05) rotate(205deg) !important; 
}

/* Objects in the left */

.lamp { width: 100px; top: 0; left: 10%; z-index: 4;  }
.scissors { width: 95px; top: 40px; left: 19%; transform: rotate(200deg); }
.notebook { width: 320px; top: 60px; left: -5%; z-index: 11;}
.wordsearch { width: 75px; top: 120px; left: 10%; z-index: 11; }
.passport { width: 150px; bottom: 330px; left: 5%; transform: rotate(-10deg); }
.boarding { width: 200px; bottom: 320px; left: 7%; }
.lego { width: 190px; bottom: 210px; left: 4%; }
.collage { width: 100px; bottom: 500px; left: -1%;}
.photo { width: 100px; bottom: 360px; left: 0%; transform: rotate(-10deg);}

/* Objects in the right */
.spotify { width: 260px; top: 20px; right: -2%; }
.laptop { width: 270px; top: 135px; right: -3%; }
.coffee { width: 100px; bottom: 360px; right: 12%; }
.candles { width: 60px; bottom: 520px; right: 15%; }
.cups { width: 120px; bottom: 220px; right: 12%; }
.pie { width: 160px; bottom: 215px; right: -1%; }
.book { width: 160px; bottom: 290px; right: -4%; transform: rotate(30deg); border-radius: 30px; }


@keyframes music-vibe {
  from { transform: scale(1.05) rotate(3deg); }
  to { transform: scale(1.07) rotate(5deg); }
}
/* Contenedor principal para toda la interacción */
.lamp-interaction-group {
  position: absolute;
  top: 0;
  left: 10%;
  width: 100px;
  cursor: pointer;
  z-index: 4;
}

/* El cuerpo estático de la lámpara */
.lamp-body-img {
  width: 100%;
  height: auto;
  position: relative;
  z-index: 4; /* Por debajo de la cabeza */
}

/* Contenedor para la cabeza y su luz */
.lamp-head-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 4; /* Por encima del cuerpo */
}

.lamp-head-img {
  width: 100%;
  height: auto;
  position: relative;
  z-index: 14;
}

/* El resplandor focalizado tras la cabeza */
.light-glow {
  position: absolute;
  top: 25%; /* Ajusta esto para que el centro de la luz esté bajo la 'cabeza' */
  left: 50%;
  width: 130%; /* Tamaño relativo de la luz */
  height: 100%;
  background: radial-gradient(circle, rgba(255, 235, 59, 0.7) 0%, rgba(255, 235, 59, 0) 65%);
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  pointer-events: none;
  z-index: 1; /* Detrás de la imagen de la cabeza */
  
  /* CLAVE: Recorta el brillo para que no se extienda hacia abajo */
  clip-path: ellipse(50% 50% at 50% 50%); /* O un círculo ajustado */
}

/* El estado 'encendido' */
.is-lit {
  opacity: 1;
}

/* Efecto visual en la cabeza misma al prenderse */
.lamp-interaction-group:hover .lamp-head-img {
  filter: brightness(1.15) drop-shadow(0 0 8px rgba(255, 235, 59, 0.6));
  transform: scale(1.03); /* Un sutil pop */
}

/* Mantenemos el efecto de escala en todo el grupo como lo tenías */
.lamp-interaction-group:hover {
  transform: scale(1.02);
}

/* layer front */
.passport {
    position: absolute; 
    z-index: 10;        
}
/* layer back */
.photo {
    position: absolute;
    z-index: 5;  
    top: 300px;
    left: 0%;
}
/* layer front */
.notebook {
    position: absolute; 
    z-index: 10;        
}
/* layer back */
.collage {
    position: absolute;
    z-index: 5;  
    top: 180px;
    left: -1%;
}
/* layer front */
.pie {
    position: absolute; 
    z-index: 10;        
}
.book {
    position: absolute;
    z-index: 5;  
    top: 360px;
    left: 90%;
}

</style>