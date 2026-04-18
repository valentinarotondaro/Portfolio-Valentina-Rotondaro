<template>
  <main class="contact-container">
    <div class="contact-hero">

      <div class="contact-text">
        <h1>Let's connect!</h1>
        <p>
          I'm currently seeking a UX/UI design internship, eager to contribute to meaningful projects and grow alongside design-driven teams.
          <br>
          <p>If you like what you see, feel free to drop me a message on
          <a href="https://www.linkedin.com/in/valentinarotondaro/" class="contact-link" target="_blank">Linkedin</a>
          or send me an
          <a href="mailto:vrotondaro@hotmail.com" class="contact-link">email.</a> </p>
        </p>
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
    margin-bottom: -100px;
    padding: 40px 40px 110px 20px !important;
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
  font-size: 100px; /* Tamaño masivo como en la referencia */
  font-weight: 450;
  color: black;
  line-height: 0.9;
  letter-spacing: -0.03em;
  margin: 0;
  align-items: left;     /* ESTO centra horizontalmente */
  text-align: left;
  overflow: hidden;    
  z-index: 1;  
}

.contact-text p {
  font-family: Inter !important;
  font-size: 30px;
  color: black;
  max-width: 750px;
  margin: 40px auto 0 auto; 
  line-height: 1.3;  
  text-align: justify;
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


</style>