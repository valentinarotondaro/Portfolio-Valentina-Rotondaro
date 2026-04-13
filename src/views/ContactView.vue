<template>
  <main class="contact-container">
    <div class="contact-hero">

      <div class="contact-text">
        <h1>Let's connect!</h1>
        <p>My goal is to join a collaborative team where I can apply my skills in user experience and visual communication.</p>
        <p>
          Feel free to drop me a message on
          <a href="https://www.linkedin.com/in/valentinarotondaro/" class="contact-link" target="_blank">Linkedin</a>
          or send me an
          <a href="mailto:vrotondaro@hotmail.com" class="contact-link">email.</a>
        </p>
        <p>I would love to connect!</p>
      </div>

      <div class="contact-image-container">
        <div class="blob-frame contact-blob">
          <img src="/img/valentina-perfil.JPG" alt="Valentina Rotondaro" />
        </div>
        <div class="tag tag-opportunities">Open to new opportunities</div>
      </div>

    </div>
  </main>
</template>

<script setup>
</script>

<style scoped>

/* CONTACT */

/* CONTENEDOR PRINCIPAL */
.contact-container {
    max-width: 1200px;
    margin: auto;
    padding: 20px 40px 80px 40px !important;
    min-height: 70vh;
    display: flex;
    align-items: center;
}

.contact-hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 80px;
    width: 100%;
}

/* TEXTO */
.contact-text h1 {
    font-size: 64px;
    font-weight: 500;
    margin-bottom: 40px;
    letter-spacing: -0.02em;
}

.contact-text p {
    font-size: 18px;
    line-height: 1.5;
    margin-bottom: 25px;
    max-width: 500px;
}

.contact-link {
    color: #ff63a7;
    text-decoration: underline;
    text-underline-offset: 4px;
    font-weight: 500;
    transition: opacity 0.3s;
}

.contact-link:hover {
    opacity: 0.7;
}

/* Color de resaltado personalizado */
.contact-text::selection {
    background-color: var(--lima); /* Usa tu variable de color lima */
    color: var(--black);           /* Asegura que el texto sea legible (negro) */
}

/* También para navegadores basados en Firefox */
.contact-text::-moz-selection {
    background-color: var(--lima);
    color: var(--black);
}


/* IMAGEN Y TAG LIMA */
.contact-image-container {
    position: relative;
    flex-shrink: 0;
    transform: translateY(20px);

}

.contact-blob {
    width: 450px;
    height: 480px;
    background-color: transparent; /* Quitamos el gris de fondo */
    border-radius: 40% 60% 65% 35% / 40% 45% 55% 60%;
    position: relative;
}


.contact-blob img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 40% 60% 65% 35% / 40% 45% 55% 60%;
}

.tag-opportunities {
    position: absolute;
    bottom: 25%;
    left: -80px; /* Cruza un poco sobre la imagen como en la captura */
    background-color: #d9fb60; /* Tu verde lima */
    padding: 12px 24px;
    border-radius: 50px;
    font-weight: 450;
    font-size: 16px;
    white-space: nowrap;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    transition: 0.2s ease-in-out;
}


</style>