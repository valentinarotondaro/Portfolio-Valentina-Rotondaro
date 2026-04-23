<template>
  <main :class="{ 'is-clean-mode': isCleanMode }" @click="closeNote">
    <!-- Collage section -->
    <section class="about-me-container">
      <div class="collage-wrapper">
        <div class="about-me-text" :class="{ 'is-clean': isCleanMode }">
  <h1>Valen Rotondaro</h1>
  <p class="description">
    Hi there! In this corner of my website, you’ll find a curated collection of 
    objects that define my world. Feel free to discover them and reorder the chaos!
  </p>
</div>

        <!-- Objetos izquierda -->
        <div 
  class="obj lamp-interaction-group" :class="{ 'is-clean': isCleanMode }"
  @mouseenter="activateLamp" 
  @mouseleave="deactivateLamp"
  @click="openNote('Denmark sparked my love for lamps ✴︎ I’m obsessed with Danish design.', $event)">
  <div class="lamp-head-container">
    <img src="/img/lampitradition.png" class="lamp-head-img" :class="{ 'is-clean': isCleanMode }" alt="Lamp Head" />
    <div class="light-glow" :class="{ 'is-lit': isLampOn }"></div>
  </div>
  <audio ref="lampSound" src="/audio/lampon.mp3" preload="auto"></audio>
</div>

<div class="obj passport-group" :class="{ 'is-clean': isCleanMode }" @click.stop="openNote('I am from Argentina! I have dual citizenship because my grandma is Italian, but I was born in Buenos Aires ✈︎', $event)"
>
  <img src="/img/passport.png" class="passport-img" alt="Passport" />
  <img src="/img/boardingpass.png" class="boarding-img" alt="Boarding Pass" v-if="!isCleanMode" />
</div>

<div 
  class="obj lego-group" 
  :class="{ 'is-clean': isCleanMode }"
  @mouseenter="playLegoSound"
  @mouseleave="stopLegoSound" 
  @click.stop="openNote('I’m a Lego fan, I am collecting the entire botanical collection ❀', $event)"
>
  <img src="/img/lego.png" class="lego-img" alt="Lego Flowers" />
  <img src="/img/legogreen.png" class="legopalm-img" alt="Lego Palm" v-if="!isCleanMode" />
  
  <audio ref="legoSound" src="/audio/legobricks.mp3" preload="auto"></audio>
</div>

<div class="obj pie-group" :class="{ 'is-clean': isCleanMode }" @click.stop="openNote('This is my favorite cake! It is called Pastafrola and my grandma used to make the best one!', $event)">
  <img src="/img/pastafrola.png" class="pie-img" alt="Pastafrola" />
  <img src="/public/img/migas.png" class="migas-img" alt="Migas" v-if="!isCleanMode" />
</div>

<div class="obj notebook-group" :class="{ 'is-clean': isCleanMode }" @click.stop="openNote('I found this word search and it highlights some of my most important values, the ones I choose every day even when no one is watching.', $event)">
  <img src="/img/moleskine.png" class="notebook-img" alt="Notebook" />
  <img src="/img/coffee-stain.png" class="stain-img" alt="Coffee Stain" v-if="!isCleanMode" />
  <img src="/img/sopadeletras.png" class="wordsearch-img" alt="Wordsearch" />
</div>

<div class="obj candles-group" :class="{ 'is-clean': isCleanMode }" @click.stop="openNote('I always have colorful candles at home!', $event)">
  <img src="/img/candles.png" class="candles-img" alt="Candles" />
  <img src="/img/fosforos.png" class="fosforos-img" alt="Fosforos" />
</div>
        <img src="/img/tijeraroja.png"     class="obj scissors" :class="{ 'is-clean': isCleanMode }" @click.stop="openNote('I always carry scissors with me, you never know when a collage might want to be born ✄', $event)"  alt="Scissors" />
        <img src="/img/sagradafamilia.png" class="obj photo"   :class="{ 'is-clean': isCleanMode }"  @click.stop="openNote('This is a photo of my Sagrada Familia, from that Europe trip we dreamed about for so long.', $event)"  alt="Sagrada Familia" />

        <!-- Texto central -->
        <div class="about-me-text">
          
        </div>

        <!-- Objetos derecha -->
        <div>
          <img 
  src="/img/spotify.png" 
  class="obj spotify" 
  :class="{ 'is-playing': isPlaying, 'is-clean': isCleanMode }" @click.stop="openNote('This is a song from one of my favorite movies, Amélie. If you haven’t seen it, I highly recommend it, it’s pure beauty.', $event)"
  alt="Spotify Player" 
  @mouseenter="playMusic"
  @mouseleave="pauseMusic"
/>
<audio ref="audioPlayer" src="/audio/comptinedunautreete.mp3" preload="auto" loop></audio>
          <img src="/img/macfigma.png"         class="obj laptop" :class="{ 'is-clean': isCleanMode }" @click.stop="openNote('I rarely go anywhere without my laptop. There’s always a project waiting to begin, or one asking to be finished.', $event)" alt="Macbook with Figma" />
          <img src="/img/cafeamarillo.png"     class="obj coffee" :class="{ 'is-clean': isCleanMode }" @click.stop="openNote('I’m a huge coffee fan. On my dates with myself, I’m always out discovering a new café in the city ☕︎', $event)" alt="Coffee" />
          <img src="/img/valenrotondarofeed.png"             class="obj feed"   :class="{ 'is-clean': isCleanMode }" @click.stop="openNote('Creating content is one of my biggest passions. I show up for it every day. You can stalk me on Instagram at @valenrotondaro', $event)"  alt="Instagram Feed" />
        </div>
<div class="mode-controls">
  <div class="control-group">
    <button @click="setChaosMode" :class="{ active: !isCleanMode }" data-label="Chaos mode">
      <img src="/img/coffee-icon.png" class="coffee-icon" alt="Chaos Mode"  /> 
    </button>
  </div>
  <div class="control-group">
    <button @click="setCleanMode" :class="{ active: isCleanMode }" data-label="Clean mode">
      <img src="/img/broom-icon.png" class="broom-icon" alt="Clean Mode" />
    </button>
  </div>
</div>
      </div>
<div class="mode-controls">
  </div>
  <transition name="pop-fade">
  <div 
    v-if="activePopUp" 
    class="object-tooltip" 
    :style="tooltipStyle"
  >
    <div class="tooltip-content">
      <button class="close-tooltip-btn" @click="closeNote">×</button>
      <p>{{ activeObjectText }}</p>
    </div>
  </div>
</transition>
    </section>
  </main>
</template>


<script setup>
import { ref, onMounted } from 'vue';

const activePopUp = ref(false);
const activeObjectText = ref('');
const tooltipStyle = ref({ top: '0px', left: '0px' });

/* MODES */

const isCleanMode = ref(false); 

const setCleanMode = () => { isCleanMode.value = true; };
const setChaosMode = () => { isCleanMode.value = false; };

/* SPOTIFY */

const audioPlayer = ref(null);
const isPlaying = ref(false);
const MUSIC_MAX_VOL = 0.35; 
const LAMP_VOL = 1.0;       
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

/* LAMP */

const isLampOn = ref(false);
const lampSound = ref(null);

const activateLamp = () => {
  isLampOn.value = true;
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
/* LEGO */
const legoSound = ref(null);

const playLegoSound = () => {
  if (legoSound.value) {
    legoSound.value.currentTime = 2; // Empieza en el segundo 4
    legoSound.value.volume = 0.5;
    legoSound.value.play().catch(e => console.log("Error lego audio"));
  }
};
const stopLegoSound = () => {
  if (legoSound.value) {
    legoSound.value.pause(); // Pausa el sonido al sacar el mouse
    // No reseteamos el tiempo acá para que no haga un ruido raro al cortar
  }
};

/* CARD TEXT */

const openNote = (text, event) => {
if (activePopUp.value && activeObjectText.value === text) return;
  event.stopPropagation();
  activeObjectText.value = text;
  activePopUp.value = true;

  // Si el click es muy a la derecha, abrimos la card hacia la izquierda
  const xOffset = event.clientX > window.innerWidth / 2 ? -300 : 20;
  
  tooltipStyle.value = {
    top: `${event.clientY - 50}px`, 
    left: `${event.clientX + xOffset}px`
  };
};
// Función para cerrar la nota
const closeNote = () => {
  activePopUp.value = false;
};

</script>

<style scoped>
/* =========================================
   1. ESTRUCTURA Y TEXTO (Sin cambios)
   ========================================= */
.about-me-container {
    min-height: 0 important;
    height: auto !important;
    padding-bottom: 50px !important;
    max-width: 1200px;
    margin: 0 auto;
    margin-bottom: -150px !important;   
}

.collage-wrapper {
    position: relative;
    width: 100%;
    max-width: 1200px;
    height: 800px; 
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: -150px !important;

}

.about-me-text {
    margin-top: -300px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 550px;
    z-index: 10;
    pointer-events: none;
}

.about-me-text h1 {
    font-size: 75px; 
    font-weight: 450;
    color: #ff63a7;
    margin-bottom: 10px;
    letter-spacing: -0.02em;
    user-select: none;
    
}

.description {
    text-align: justify;
    font-size: 20px;
    width: 450px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: black;
    font-family: 'Inter', sans-serif !important; 
    margin-top: 15px !important;
}
/* =========================================
   2. COMPORTAMIENTO BASE Y HOVERS (FIX DEFINITIVO)
   ========================================= */
.obj {
    position: absolute;
    height: auto;
    transition: transform 0.3s ease, z-index 0s;
}

/* 1. HOVER MODO CAOS (Excluye Lámpara Y Tijeras para que no giren locas) */
.obj:not(.is-clean):not(.lamp-interaction-group):not(.scissors):hover, 
.passport-group:not(.is-clean):hover, 
.lego-group:not(.is-clean):hover, 
.pie-group:not(.is-clean):hover, 
.notebook-group:not(.is-clean):hover, 
.candles-group:not(.is-clean):hover {
    transform: scale(1.05) rotate(3deg) !important;
    z-index: 500 !important;
}

/* 2. HOVER ESPECÍFICO TIJERAS EN CHAOS MODE */
/* Su base es 200deg, así que solo le sumamos 3 */
.scissors:not(.is-clean):hover {
    transform: scale(1.05) rotate(203deg) !important;
    z-index: 500 !important;
}

/* 3. HOVER MODO CLEAN (Casi todos los objetos) */
.about-me-container .obj.is-clean:not(.scissors):not(.passport-group):hover,
.about-me-container .lego-group.is-clean:hover,
.about-me-container .pie-group.is-clean:hover,
.about-me-container .notebook-group.is-clean:hover,
.about-me-container .candles-group.is-clean:hover {
    transform: scale(1.1) rotate(3deg) !important; 
    z-index: 500 !important;
    cursor: pointer;
}

/* 4. CASO ESPECIAL TIJERAS CLEAN (Base 140deg + 3) */
.about-me-container .scissors.is-clean:hover {
    transform: scale(1.1) rotate(143deg) !important;
    z-index: 500 !important;
}

/* 5. CASO ESPECIAL PASAPORTE CLEAN (Base -20deg + 3) */
.about-me-container .passport-group.is-clean:hover {
    transform: scale(1.1) rotate(-17deg) !important;
    z-index: 500 !important;
}
/* =========================================
   3. POSICIONES CHAOS MODE
   ========================================= */
.passport-group { bottom: 373px; left: 9%; width: 120px; z-index: 10; transform: rotate(-15deg); }
.boarding-img  { position: absolute; width: 200px; top: 20px; left: 40px; z-index: -1; transform: rotate(5deg); }

.lego-group    { bottom: 265px; left: 15%; width: 180px; z-index: 12; transform: rotate(-4deg);}
.legopalm-img  { position: absolute; width: 110px; bottom: 20px; left: -130px; }

.notebook-group { top: 92px; left:3%; width: 252px; z-index: 100 !important; }
.stain-img      { position: absolute; width: 50px; top: 60px; left: 60px; transform: rotate(-10deg); }
.wordsearch-img { position: absolute; width: 58px; top: 50px; left: 132px; z-index: 12; transform: rotate(6deg); }

.pie-group     { bottom: 290px; right: 0%; width: 130px; z-index: 10; }
.migas-img     { position: absolute; width: 80px; bottom: 30px; right: 80px; z-index: -1; }

.candles-group { bottom: 539px; right: 12%; width: 55px; z-index: 12; overflow: visible; }
.fosforos-img  { position: absolute; width: 170px; bottom: 10px; right: 70px; transform: rotate(-5deg); }

.scissors { width: 95px; top: 40px; left: 19%; transform: rotate(200deg); }
.photo    { width: 110px; bottom: 385px; left: 4%; transform: rotate(-10deg);  }
.spotify  { width: 240px; top: 25px; right: -2%; transform: rotate(7deg); z-index: 12; }
.laptop   { width: 250px; top: 150px; right: -3.5%; }
.coffee   { width: 75px; bottom: 675px; right: 20%; transform: rotate(-15deg); }
.feed     { width: 75px; bottom: 290px; right: 15.5%;  transform: rotate(5deg); }

/* =========================================
   4. LAMP
   ========================================= */

.lamp-interaction-group { 
    position: absolute; 
    top: 0; 
    left: 10%; 
    width: 100px; 
    cursor: pointer;
    z-index: 4; 
    transition: transform 0.3s ease;
    z-index: 10 !important;
}

/* La imagen ahora es única y ocupa todo el contenedor */
.lamp-head-img { 
    width: 100%; 
    height: auto;
    display: block;
    position: relative;
    z-index: 5;
}

.lamp-head-container { 
    position: relative; 
    width: 100%; 
}

.light-glow {
    position: absolute; 
    top: 15%;  /* Ajustalo para que salga de la campana de la lámpara */
    left: 50%; 
    transform: translateX(-50%);
    width: 140px; 
    height: 140px; 
    background: radial-gradient(circle, rgba(255, 235, 59, 0.8) 0%, rgba(255, 235, 59, 0) 70%);
    opacity: 0; 
    transition: opacity 0.3s ease;
    pointer-events: none; 
    z-index: 1; 
    border-radius: 50%; /* Esto reemplaza al clip-path y no falla nunca */
}

.is-lit { opacity: 1; }

/* HOVER UNIFICADO: Solo escalamos el contenedor padre */
.lamp-interaction-group:hover {
    transform: scale(1.05) !important;
    /* En Chaos mode (no .is-clean) mantenemos z-index bajo para no tapar notebook */
    z-index: 100 !important;
}

/* En Clean mode sí queremos que suba el z-index al hacer hover */
.lamp-interaction-group.is-clean:hover {
    z-index: 100 !important;
}
/* =========================================
   5. MODO CLEAN (REORDENAMIENTO)
   ========================================= */
.about-me-text.is-clean { position: absolute; top: 200px; left: 55%; text-align: justify; align-items: center; margin-top: 0 !important; }

.laptop.is-clean  { width: 210px !important; top: 12px; left: 80%; transform: rotate(0deg) !important; }
.spotify.is-clean { width: 240px !important; top: 20px; left: 10%; transform: rotate(0deg) !important; }
.photo.is-clean    { width: 120px !important; top: 152px; left: 8%; transform: rotate(0deg) !important; }
.lamp-interaction-group.is-clean { width: 110px; top: 50px; left: 43%; transform: rotate(0deg) !important; }
.scissors.is-clean { width: 110px !important; top: 50px; left: 72%; transform: rotate(140deg) !important; }
.coffee.is-clean   { width: 98px !important; top: 30px; left: 32%; transform: rotate(0deg) !important; }
.feed.is-clean     { width: 60px !important; top: 289px; left: 28%; transform: rotate(0deg) !important; }

.passport-group.is-clean { width: 100px !important; top: 125px; left: 37%; transform: rotate(-20deg) !important; }
.notebook-group.is-clean { width: 250px !important; top: 10px; left: 53%; transform: rotate(-9deg) !important; }
.pie-group.is-clean      { width: 120px !important; top: 140px; left: 22%; transform: rotate(0deg) !important; }
.lego-group.is-clean     { width: 210px !important; top: 280px; left: 35.5%; transform: rotate(-3deg) !important; }
.candles-group.is-clean  { width: 70px !important; top: 260px; left: 19%; transform: rotate(0deg) !important; }

/* Internos Clean */
.notebook-group.is-clean .wordsearch-img { width: 60px !important; top: 49px; left: 139px; transform: rotate(7deg) !important; }
.candles-group.is-clean .fosforos-img    { width: 90px !important; top: 50px; left: -80px; }

/* =========================================
   6. CONTROLES (CAFÉ / ESCOBA)
   ========================================= */
.mode-controls { position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%); display: flex; gap: 15px; z-index: 9999; }
.mode-controls button {
    position: relative; padding: 8px !important; width: 64px !important; height: 64px !important;
    cursor: pointer; display: flex; align-items: center; justify-content: center;
    background-color: transparent !important; border: none; border-radius: 18px; transition: all 0.3s ease;
}
.mode-controls button:hover { transform: translateY(-5px) rotate(5deg); background-color: #f7f7f7 !important; }
.mode-controls button.active { background-color: #f0f0f0 !important; box-shadow: 0 4px 10px rgba(0,0,0,0.07); }
.mode-controls img { object-fit: contain; transition: transform 0.2s ease; }
.coffee-icon { width: 80px; height: auto; }
.broom-icon { width: 50px; height: auto; }

/* Tooltip */
.mode-controls button:hover::after {
    content: attr(data-label); position: absolute; top: -50px; left: 50%; transform: translateX(-50%);
    background-color: black; color: white; padding: 6px 12px; border-radius: 8px;
    font-family: 'Inter', sans-serif; font-size: 13px; white-space: nowrap; z-index: 100;
}

main {
    display: block;
    overflow: hidden; /* Corta cualquier reborde invisible */
    height: auto !important;
}

/* Si el footer tiene un margen superior escondido, lo matamos */
:deep(.footer) {
    margin-top: 0 !important;
    padding-top: 20px !important; /* Espacio mínimo controlado */
}

/* LAMP CARD TEXT */

.object-tooltip {
    position: fixed;
    width: 380px;
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    z-index: 10000;
    pointer-events: auto; /* Para que puedas tocar la cruz */
}

.tooltip-content {
    position: relative;
    font-family: 'Inter';
}

.tooltip-content p {
    margin: 0;
    width: 320px;
    font-size: 16px;
    line-height: 1.5;
    color: black;
    padding-right: 15px;
    text-align: justify;
}

.close-tooltip-btn {
    position: absolute;
    top: -25px;
    right: -15px;
    background: none;
    border: none;
    font-size: 20px;
    color: #999;
    cursor: pointer;
    padding: 2px;
}

.close-tooltip-btn:hover {
    color: #ff63a7; /* Tu rosa */
}

/* Animación de entrada */
.pop-fade-enter-active, .pop-fade-leave-active {
    transition: all 0.3s ease;
}
.pop-fade-enter-from, .pop-fade-leave-to {
    opacity: 0;
    transform: scale(0.9) translateY(10px);
}

</style>