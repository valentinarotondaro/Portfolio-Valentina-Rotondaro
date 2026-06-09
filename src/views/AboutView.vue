<script setup>
import { computed } from 'vue';

const skillsData = [
  { text: 'Video Editing',           rotate: 0,   xOffset: 0,   yOffset: 0  },
  { text: 'Front-End Development',   rotate: 0,   xOffset: 5,   yOffset: 0  },
  { text: 'Workshop Facilitation',   rotate: 0,   xOffset: 5,   yOffset: 0  },
  { text: 'Continous Learning',      rotate: 10,  xOffset: -10, yOffset: 6  },
  { text: 'SoMe Content',            rotate: -12, xOffset: 8,   yOffset: 0  },
  { text: 'Visual Storytelling',     rotate: 22,  xOffset: -25, yOffset: -10 },
  { text: 'UX/UI Design',            rotate: -20, xOffset: 0,   yOffset: -10 },
  { text: 'Critical Thinking',       rotate: 10,  xOffset: -35, yOffset: 10 },
  { text: 'Team Collaboration',      rotate: -7,  xOffset: -70, yOffset: -25 },
  { text: 'AI Tool Integration',     rotate: -10, xOffset: -15, yOffset: 0  },
];

const getFixedStyle = (index, skill) => ({
  '--index-delay': `${index * 0.15}s`,
  '--rotation':   `${skill.rotate}deg`,
  '--x-offset':   `${skill.xOffset}px`,
  '--y-offset':   `${skill.yOffset}px`,
});
</script>

<template>
  <main class="about-page">

    <!-- ─── HERO ─────────────────────────────────────────── -->
    <section class="about-hero">
      <div class="hero-content">
         <h1 class="about-title">About me!</h1>
        <div class="about-image">
          <div class="hola-sticker">
  <p>Holaaa<br>I am Valen</p>
</div>
          <img src="/img/valentinarotondaroimg.png" alt="Valentina Rotondaro" />          </div>
        </div>
        <p class="hero-description">
          I'm a colorful creative based in Aarhus, Denmark. <br> Those who know me describe me as friendly, curious, and empathetic.
        </p>

    </section>

   <!-- ─── MOODBOARD ────────────────────────────────────────── -->
<section class="about-moodboard">
  <img src="/img/moodboard.png" alt="Moodboard" class="moodboard-img" />
</section>

    <!-- ─── SKILLS ────────────────────────────────────────── -->
    <section class="about-skills">
      <div class="skills-content">
        <div class="skills-pile-container">
          <span
            v-for="(skill, index) in skillsData"
            :key="index"
            class="skill-tag"
            :style="getFixedStyle(index, skill)"
          >{{ skill.text }}</span>
        </div>
        <h1 class="skills-heading">I bring a diverse skillset to the table!</h1>
      </div>
    </section>

    <!-- ─── MULTIMEDIA ────────────────────────────────────── -->
    <section class="about-multimedia">
      <div class="video-container">
        <iframe
          src="https://www.youtube.com/embed/RIos_-p8gA8"
          title="Get to know me better"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="cv-section">
        <p>Curious to learn more about my background?</p>
        <a href="CV" class="cv-button">Check out my CV</a>
      </div>
    </section>

  </main>
</template>

<style scoped>
/* ─── BASE ──────────────────────────────────────────────── */
.about-page {
  font-family: 'Inter', sans-serif;
  background-color: #ffffff;
  color: #000;
  line-height: 1.2;
}

/* ─── HERO ──────────────────────────────────────────────── */
.about-hero {
  padding: 40px 60px;
  background-color: #ffffff;
}

.hero-content {
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto auto;
  max-width: 1100px;
  margin: 0 auto;
  gap: 20px;
}

.about-title {
  grid-column: 1;
  grid-row: 1;
  font-size: 65px;
  font-weight: 450;
  margin: 0;
  letter-spacing: -0.04em;
  align-self: start;
}

.about-image {
  grid-column: 2;
  grid-row: 1;
  justify-self: center;
  position: relative;
}

.about-image img {
  width: 280px;
  height: 350px;
  object-fit: contain;
  margin-bottom: 100px;
}

.hero-description {
  grid-column: 1;
  grid-row: 1;
  font-size: 45px;
  font-weight: 450;
  color: #000;
  text-align: justify;
  align-self: start;
  text-justify: inter-word;
  letter-spacing: -0.04em;
  line-height: 1.2;
}

.hola-sticker {
  position: absolute;
  top: 35%;
  right: -60%;
  background: white;
  padding: 16px 20px;
  border-radius: 4px;
  transform: rotate(8deg);
  z-index: 10;
}

.hola-sticker p {
  font-family: 'BiroScript', cursive !important;
  font-size: 28px;
  font-weight: 400;
  line-height: 1.4;
  color: #000;
  margin: 0;
}

/* ─── MOODBOARD ─────────────────────────────────────────── */
.about-moodboard {
  width: 90%;
  max-width: 1100px;
  margin: 0 auto 60px auto;
}

.moodboard-img {
  width: 100%;
  height: auto;
  border-radius: 24px;
  display: block;
}
/* ─── SKILLS ────────────────────────────────────────────── */
.about-skills {
  padding: 20px;
}

.skills-content {
  max-width: 1100px;
  margin: 0 auto;
}

.skills-pile-container {
  display: flex;
  width: 100%;
  max-width: 700px;
  margin: 0 auto 40px auto;
  padding-top: 100px;
  min-height: 200px;
  flex-wrap: wrap-reverse;
  gap: 8px;
  align-items: center;
  justify-content: center;
}

.skill-tag {
  display: inline-block;
  background-color: #d9fb60;
  color: #000;
  padding: 10px 22px;
  border-radius: 50px;
  font-size: 18px;
  font-weight: 400;
  white-space: nowrap;
  opacity: 0;
  will-change: transform, opacity;
  animation: pileUpFixed 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.1) forwards;
  animation-delay: var(--index-delay);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.skill-tag:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

@keyframes pileUpFixed {
  0%   { opacity: 0; transform: translateY(-100px) scale(0.8); }
  100% { opacity: 1; transform: translate(var(--x-offset), var(--y-offset)) rotate(var(--rotation)); }
}

.skills-heading {
  font-size: 45px;
  font-weight: 450;
  color: #000;
  text-align: center;
  line-height: 1.2;
  white-space: nowrap;
  letter-spacing: -0.02em;
  margin: 0;
}

/* ─── MULTIMEDIA ────────────────────────────────────────── */
.about-multimedia {
  width: 90%;
  max-width: 1100px;
  margin: 100px auto 40px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
}

.video-container {
  width: 100%;
  max-width: 800px;
  aspect-ratio: 16 / 9;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.video-container iframe {
  width: 100%;
  height: 100%;
}

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
  margin: 50px auto 2px auto;
  padding: 15px 45px;
  background-color: var(--lima);
  color: var(--black);
  text-decoration: none;
  border-radius: 50px;
  font-weight: 450;
  font-size: 18px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.cv-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* ─── RESPONSIVE ────────────────────────────────────────── */
@media (max-width: 900px) {
  .about-hero {
    padding: 20px;
  }

  .hero-content {
    flex-direction: column;
    gap: 30px;
    text-align: center;
  }

  /* Título/texto primero, foto después */
  .about-image {
    order: 2;
    transform: none;
  }

  .hero-description {
    order: 1;
    font-size: 30px;
    max-width: 100%;
    text-align: center;
    padding: 0 20px;
  }

  .blob-frame {
    width: 320px;
    height: 340px;
  }

  .about-extra-text p {
    font-size: 28px;
  }

  .skills-pile-container {
    padding-top: 20px;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    max-width: 100%;
  }

  .skill-tag {
    animation: none;
    opacity: 1;
    transform: none !important;
  }

  .skills-heading {
    font-size: 30px;
    white-space: normal;
    text-align: center;
  }

  .cv-section p {
    font-size: 28px;
  }

  .about-multimedia {
    margin-top: 25px;
  }
}

@media (max-width: 500px) {
  .blob-frame {
    width: 260px;
    height: 280px;
  }

  .btn-playground-overlay {
    font-size: 13px;
    padding: 10px 16px;
  }

  .hero-description {
    padding: 20px;
    font-size: 24px;
    text-align: justify;
  }

  .about-extra-text p {
    font-size: 22px;
  }

  .skill-tag {
    font-size: 15px;
    padding: 8px 16px;
  }

  .skills-heading {
    font-size: 24px;
  }

  .cv-section p {
    font-size: 22px;
  }

  .cv-button {
    font-size: 16px;
    padding: 12px 32px;
  }

  .pop-up-image {
    width: 160px;
    min-height: 180px;
  }
}
</style>