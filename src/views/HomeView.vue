<script setup>
const projects = [
  { name: 'Amada Amiga',      url: '/img/amada-mockup.png',         path: '/portfolio/amada-amiga'       },
  { name: 'Itinero',          url: '/img/itinerohome.png',           path: '/portfolio/itinero'           },
  { name: 'Under',            url: '/img/under.png',                 path: '/portfolio/under'             },
  { name: 'Lic. Aranda',      url: '/img/LicArandaCoriaToteBag.png', path: '/portfolio/lic-aranda'        },
  { name: 'SoMe',             url: '/img/somehome.png',              path: '/portfolio/content-creation'  },
  { name: 'Collage Afternoon',url: '/img/collageafternoon.png',      path: '/portfolio/collage-afternoon' },
];
</script>

<template>
  <main>

    <!-- ─── HERO ──────────────────────────────────────────── -->
    <section class="hero">
      <img src="/img/folder.png"       class="icon icon-folder"  alt="Folder" />
      <img src="/img/arrow.png"        class="icon icon-arrow"   alt="Arrow"  />
      <img src="/img/clips.png"        class="icon icon-clips"   alt="Clips"  />
      <img src="/img/cafeamarillo.png" class="icon icon-coffee"  alt="Coffee" />
      <img src="/img/camera.png"       class="icon icon-camera"  alt="Camera" />
      <img src="/img/figma.png"        class="icon icon-figma"   alt="Figma"  />

      <div class="hero-content">
        <h1 class="hero-title">Hi! I'm <span class="highlight">Valen Rotondaro</span></h1>
        <p class="hero-subtitle">I'm a Multimedia design student and UX/UI enthusiast focused on creating intuitive, functional, and aesthetic digital solutions.</p>
      </div>
    </section>

    <!-- ─── MARQUEE ───────────────────────────────────────── -->
    <div class="marquee-wrapper">
      <div class="marquee-track">
        <div v-for="n in 2" :key="n" class="marquee-content">
          <router-link
            v-for="project in projects"
            :key="project.name"
            :to="project.path"
            class="project-card"
          >
            <img :src="project.url" :alt="project.name" class="project-img" />
          </router-link>
        </div>
      </div>
    </div>

    <!-- ─── CTA ───────────────────────────────────────────── -->
    <router-link to="/Portfolio" class="btn-explore">
      Explore here all my projects
    </router-link>

  </main>
</template>

<style scoped>
/* ─── HERO ──────────────────────────────────────────────── */
.hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  margin-top: -160px;
  padding-top: 150px;
  overflow: hidden;
}

.hero-title {
  font-size: 100px;
  font-weight: 450;
  color: #000;
  line-height: 0.9;
  letter-spacing: -0.03em;
  margin: 0;
}

.highlight {
  color: var(--pink);
}

.hero-subtitle {
  font-size: 30px;
  color: #000;
  max-width: 800px;
  margin: 40px auto 0;
  line-height: 1.3;
}

.hero-content h1::selection,
.hero-content h1::-moz-selection,
.hero-subtitle::selection {
  background-color: var(--lima);
  color: var(--black);
}

/* ─── FLOATING ICONS ────────────────────────────────────── */
.icon {
  position: absolute;
  width: 70px;
  height: auto;
  transition: transform 0.3s ease;
  transform-origin: center;
  z-index: 0;
}

.icon:hover {
  transform: rotate(var(--base-rot)) scale(1.1) rotate(var(--hover-tilt));
}

.icon-folder { width: 160px; top: 22%;    left: 15%;   --base-rot: -1deg; --hover-tilt:  10deg; }
.icon-arrow  {               top: 25%;    right: 14%;  --base-rot:  8deg; --hover-tilt:  -8deg; }
.icon-clips  { width:  80px; top: 50%;    left: 10%;   --base-rot: -7deg; --hover-tilt:  12deg; }
.icon-coffee { width:  80px; top: 50%;    right:  9%;  --base-rot:  8deg; --hover-tilt:  -6deg; }
.icon-camera { width: 110px; bottom:  8%; left: 13%;   --base-rot: -7deg; --hover-tilt:   9deg; }
.icon-figma  {               bottom: 10%; right: 15%;  --base-rot:  2deg; --hover-tilt:  -7deg; }

/* ─── MARQUEE ───────────────────────────────────────────── */
.marquee-wrapper {
  width: 100%;
  overflow: hidden;
  display: flex;
  padding: 60px 0;
  cursor: ew-resize;
}

.marquee-track {
  display: flex;
  width: fit-content;
  animation: scroll-loop 40s linear infinite;
}

.marquee-wrapper:hover .marquee-track {
  animation-play-state: paused;
}

.marquee-content {
  display: flex;
}

.project-card {
  display: inline-block;
  width: 380px;
  height: 480px;
  flex-shrink: 0;
  border-radius: 35px;
  overflow: hidden;
  margin-right: 30px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.project-card:nth-child(even) { margin-top:  30px; }
.project-card:nth-child(odd)  { margin-top: -30px; }

.project-card:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
  z-index: 10;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes scroll-loop {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* ─── BUTTON ────────────────────────────────────────────── */
.btn-explore {
  display: block;
  width: fit-content;
  margin: 40px auto;
  padding: 15px 45px;
  background-color: var(--lima);
  color: var(--black);
  text-decoration: none;
  border-radius: 50px;
  font-weight: 450;
  font-size: 18px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.btn-explore:hover {
  transform: scale(1.01);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* ─── RESPONSIVE ────────────────────────────────────────── */
@media (max-width: 768px) {
  .hero {
    margin-top: 0;
    padding-top: 20px;
    height: auto;
    min-height: 60vh;
    padding-bottom: 40px;
  }

  .hero-title {
    font-size: 48px;
    text-align: center;
    line-height: 1.1;
  }

  .hero-subtitle {
    font-size: 18px;
    max-width: 90%;
    margin: 30px auto 0;
    text-align: justify;
    align-self: center;
  }

  .icon { display: none; }

  .marquee-wrapper {
    padding: 20px 0;
  }

  .project-card {
    width: 200px;
    height: 260px;
    border-radius: 20px;
    margin-right: 14px;
  }

  .project-card:nth-child(even) { margin-top:  14px; }
  .project-card:nth-child(odd)  { margin-top: -14px; }

  .btn-explore {
    font-size: 15px;
    padding: 12px 32px;
    margin: 40px auto 22px;
  }
}
</style>