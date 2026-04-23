<template>
  <main class="contact-container">
    <div class="contact-text">
      <h1>Let's connect!</h1>
      <p>
        I'm currently seeking a UX/UI design internship, eager to contribute to meaningful projects and grow alongside design-driven teams.
        If you like what you see, feel free to drop me a message on
        <a href="https://www.linkedin.com/in/valentinarotondaro/" class="contact-link" target="_blank">Linkedin</a>
        or send me an
        <a href="mailto:vrotondaro@hotmail.com" class="contact-link">email.</a>
      </p>
    </div>
  </main>
</template>

<script setup>
</script>

<style scoped>
/* ─── BASE ──────────────────────────────────────────────── */
.contact-container {
  max-width: 1200px;
  margin: 0 auto -100px auto;
  padding: 40px 40px 110px 20px;
  min-height: 70vh;
  display: flex;
  align-items: center;
  font-family: 'Inter', sans-serif;
}

/* ─── TEXT ──────────────────────────────────────────────── */
.contact-text h1 {
  font-size: 100px;
  font-weight: 450;
  color: #000;
  line-height: 0.9;
  letter-spacing: -0.03em;
  margin: 0 0 40px 0;
}

.contact-text p {
  font-size: 25px;
  color: #000;
  max-width: 720px;
  line-height: 1.3;
  text-align: justify;
  margin: 0;
}

/* ─── LINK ──────────────────────────────────────────────── */
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

/* ─── SELECTION ─────────────────────────────────────────── */
.contact-text::selection,
.contact-text::-moz-selection {
  background-color: var(--lima);
  color: var(--black);
}

/* ─── RESPONSIVE ────────────────────────────────────────── */
@media (max-width: 768px) {
  .contact-container {
    min-height: unset;
    padding: 100px 5% 300px 5%;
    margin-bottom: 0;
    align-items: flex-start;
  }

  .contact-text h1 {
    font-size: 72px;
    line-height: 0.95;
    margin-bottom: 30px;
  }

  .contact-text p {
    font-size: 17px;
    max-width: 100%;
  }
}

@media (max-width: 400px) {
  .contact-text h1 {
    font-size: 42px;
  }

  .contact-text p {
    font-size: 15px;
  }
}
</style>