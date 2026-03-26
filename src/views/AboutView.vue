<template>
  <main>
    <!-- PHOTO AND TAGS SECTION -->
    <section class="about-hero">
  <div class="hero-content">
    <div class="about-text">
      <h1>I’m a multimedia designer <br> but I’m also...</h1>
      
      <div class="rotating-btn-container">
        <div class="text-track">
          <span>team player</span>
          <span>curious learner</span>
          <span>critical thinker</span>
          <span>visual storyteller</span>
          <span>team player</span>
        </div>
      </div>
    </div>

    <div class="about-image">
      <div class="blob-frame">
        <img src="/img/valentina-perfil.JPG" alt="Valentina Rotondaro" />
      </div>
    </div>
  </div>
</section>
    <!-- TEXTO FINAL CON HOVER -->
    <section class="about-extra-text">
      <p>
        Beyond the screen, I'm fueled by
        <span class="hover-word">
          travel
          <img src="/img/travel.JPEG" alt="Travel" class="pop-up-image" />
        </span>,
        <span class="hover-word">
          interior design
          <img src="/img/interiordesign.jpg" alt="Interior design" class="pop-up-image" />
        </span>, and
        <span class="hover-word">
          fashion
          <img src="/img/fashion.png" alt="Fashion" class="pop-up-image" />
        </span>.
        When I'm not working on a project, you'll likely find me getting my hands dirty with
        paint and collage in my
        <span class="hover-word">
          sketchbook
          <img src="/img/sketchbook.JPEG" alt="Sketchbook" class="pop-up-image" />
        </span>.
      </p>
    </section>

  </main>
</template>

<script setup>
</script>

<style scoped>
/* PHOTO AND TAGS SECTION*/
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
}

.about-text {
    flex: 1;
}

.about-text h1 {
    font-size: 54px;
    font-weight: 450;
    line-height: 1.1;
    margin-top: 0%;
    margin-bottom: 140px;
    color: #000;
    letter-spacing: -0.02em;
    line-height: 1.4;
}

/* EL BOTÓN ROTATIVO */
.rotating-btn-container {
    height: 55px;
    background-color: #d9fb60;
    border-radius: 50px;
    display: inline-flex;
    padding: 0 35px;
    overflow: hidden;
    min-width: 280px;
}

.text-track {
    display: flex;
    flex-direction: column;
    animation: rotate-up 8s infinite cubic-bezier(0.76, 0, 0.24, 1);
}

.text-track span {
    height: 55px;
    display: flex;
    align-items: center;
    font-size: 22px;
    font-weight: 400;
}

/* LA IMAGEN (Posición fija igual al CV) */
.about-image {
    position: relative;
    flex-shrink: 0;
    transform: translateY(-20px) translateX(10px);
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

@keyframes rotate-up {
    0%, 20%   { transform: translateY(0); }
    25%, 45%  { transform: translateY(-55px); }
    50%, 70%  { transform: translateY(-110px); }
    75%, 95%  { transform: translateY(-165px); }
    100%      { transform: translateY(-220px); }
}

/* ABOUT ME FINAL TEXT*/

.about-extra-text {
    width: 90%;
    max-width: 1100px;
    /* Usamos un solo margin para que no se pisen. 
       -80px arriba para subirlo, auto a los lados, 100px abajo */
    margin: -30px auto 50px auto !important; 
    padding: 0;
    text-align: justify;
}

.about-extra-text p {
    font-size: 28px;
    line-height: 1.4;
    width: 100%;
    text-align: justify;
    text-justify: inter-word;
    color: var(--black);
    font-weight: 450;
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
    width: 300px !important;    /* Bajamos de 450px a 380px para un tamaño equilibrado */
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

</style>