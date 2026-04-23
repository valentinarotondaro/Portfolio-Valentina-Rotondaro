<script setup>
import { ref } from 'vue';

// --- CONFIGURACIÓN DE VIDEOS POR CATEGORÍA ---
const contentWork = ref([
  {
    category: 'UGC',
    videos: [
      "https://player.vimeo.com/video/1118478920?h=af9b6f0bab&background=1&autoplay=1&loop=1&muted=1",
      "https://player.vimeo.com/video/1117766965?h=963a2edc08&background=1&autoplay=1&loop=1&muted=1",
      "https://player.vimeo.com/video/1117806411?h=a7f3765b75&background=1&autoplay=1&loop=1&muted=1",
      "https://player.vimeo.com/video/1143892207?h=6d94e8a9a5&background=1&autoplay=1&loop=1&muted=1"
    ]
  },
  {
    category: 'Tutorials',
    videos: [
      "https://player.vimeo.com/video/1143891592?h=f2822c00ed&background=1&autoplay=1&loop=1&muted=1",
      "https://player.vimeo.com/video/1143892207?h=6d94e8a9a5&background=1&autoplay=1&loop=1&muted=1",
      "https://player.vimeo.com/video/1117810490?h=b2d3a3f6d4&background=1&autoplay=1&loop=1&muted=1",
      "https://player.vimeo.com/video/1118506149?h=bcca644131&background=1&autoplay=1&loop=1&muted=1"
    ]
  },
  {
    category: 'Inspiration',
    videos: [
      "https://player.vimeo.com/video/1117805604?h=56fde2d074&background=1&autoplay=1&loop=1&muted=1",
      "https://player.vimeo.com/video/1117806411?h=a7f3765b75&background=1&autoplay=1&loop=1&muted=1",
      "https://player.vimeo.com/video/1118512621?h=02bb452692&background=1&autoplay=1&loop=1&muted=1",
      "https://player.vimeo.com/video/1118516919?h=24ed8a6dd0&background=1&autoplay=1&loop=1&muted=1"
    ]
  },
  {
    category: 'Tourism',
    videos: [
      "https://player.vimeo.com/video/1143891411?h=f9faef5ec5&background=1&autoplay=1&loop=1&muted=1",
      "https://player.vimeo.com/video/1143889999?h=a67103b18f&background=1&autoplay=1&loop=1&muted=1",
      "https://player.vimeo.com/video/1143890733?h=aa9b5f70bb&background=1&autoplay=1&loop=1&muted=1",
      "https://player.vimeo.com/video/1143891138?h=d32f490dd3&background=1&autoplay=1&loop=1&muted=1"
    ]
  },
  {
    category: 'Hospitality',
    videos: [
      "https://player.vimeo.com/video/1117860728?h=921b1349bc&background=1&autoplay=1&loop=1&muted=1",
      "https://player.vimeo.com/video/1117864900?h=38cb2cea56&background=1&autoplay=1&loop=1&muted=1",
      "https://player.vimeo.com/video/1117864183?h=507b8f035c&background=1&autoplay=1&loop=1&muted=1",
      "https://player.vimeo.com/video/1117862027?h=1725f1ad98&background=1&autoplay=1&loop=1&muted=1"
    ]
  }
]);
</script>

<template>
  <div class="case-study some-page">
    <nav class="top-nav">
      <router-link to="/portfolio" class="back-btn">
        <span class="arrow"><</span> Back to Works
      </router-link>
    </nav>

    <main class="content-wrapper">
      <header class="project-intro-header">
        <span class="category-badge">Content Creation & Digital Storytelling</span>
        <h1>Social Media Strategy</h1>
        <a href="https://instagram.com/valenrotondaro" target="_blank" class="ig-handle">
    @valenrotondaro <span class="arrow-diagonal">↗</span>
  </a>
      </header>

      <section class="section-grid context-objective">
        <div class="text-col">
          <h2 class="section-label">01. Perspective</h2>
          <p class="body-text">
            Passionate about digital storytelling, I create short-form videos and branded content that drive real engagement. My work combines video editing, design, and strategy to capture attention and make a brand’s essence shine.
          </p>
        </div>
        <div class="text-col">
          <h2 class="section-label">02. Goals</h2>
          <p class="body-text">
            I craft authentic concepts that inspire and build deep connections. Whether it's UGC or high-end tutorials, the goal is always to inspire action and create a lasting impact across digital platforms.
          </p>
        </div>
      </section>

      <section v-for="section in contentWork" :key="section.category" class="category-block">
        <h2 class="section-label-gray">{{ section.category }}</h2>
        <div class="video-grid-four">
          <div v-for="(video, index) in section.videos" :key="index" class="reel-box">
            <iframe 
              :src="video" 
              frameborder="0" 
              allow="autoplay; fullscreen" 
              class="vimeo-frame">
            </iframe>
          </div>
        </div>
      </section>
    </main>
    <footer class="case-footer">
      <div class="pagination-wrapper">
        <router-link to="/portfolio" class="footer-link back-link">
          <span class="nav-arrow"><</span> Back to All Works
        </router-link>
        <router-link to="/portfolio/itinero" class="footer-link next-link">
          <span class="project-name">Next project</span> <span class="nav-arrow">></span>
        </router-link>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.some-page { background-color: #ffffff; color: #000; }

.content-wrapper {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 5%;
}

.top-nav {
  padding: 25px 5%;
}
.back-btn {
  font-size: 25px;
  font-weight: 500;
  color: #000;
  text-decoration: none;
  display: block;
  margin-top: 10px;
  transition: opacity 0.3s ease;
}

.project-intro-header h1 { 
  font-size: clamp(32px, 5vw, 60px); 
  font-weight: 500; 
  letter-spacing: -0.02em; 
  margin-top: 10px; 
}

.category-badge { 
  color: #888; 
  text-transform: uppercase; 
  letter-spacing: 2px; 
  font-size: 14px; 
}

.section-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin: 60px 0 100px 0;
}

.section-label { 
  color: #888; 
  text-transform: uppercase; 
  letter-spacing: 2px; 
  font-size: 14px; 
  margin-bottom: 20px; 
  display: block;
}

.body-text { 
  font-size: 18px; 
  line-height: 1.6; 
  color: #333; 
}

.ig-handle {
    font-size: 40px;
    font-weight: 450;
    color: #ff69b4;
    margin-top: 0;
}
/* Grilla de 4 */
.video-grid-four {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin-bottom: 80px;
}

.reel-box {
  position: relative;
  width: 100%;
  padding-bottom: 177.78%; 
  background: #f7f7f7;
  border-radius: 12px;
  overflow: hidden;
}

.vimeo-frame {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  object-fit: cover;
}

.section-label-gray { 
  font-size: 14px; 
  text-transform: uppercase; 
  color: #aaa; 
  letter-spacing: 2px; 
  margin: 40px 0 20px 0; 
  display: block; 
}

/* Footer */

.case-footer {
  padding: 30px 5%;
  border-top: none;
  margin-top: 30px;
}
.pagination-wrapper {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer-link {
  font-size: 32px;
  font-weight: 500;
  color: #000;
  text-decoration: none;
  display: block;
  margin-top: 10px;
  transition: opacity 0.3s ease;
}
.footer-link:hover { opacity: 0.5; }
.project-name { font-weight: 450; }

@media (max-width: 850px) {
  .section-grid { grid-template-columns: 1fr; gap: 40px; }
  .video-grid-four { grid-template-columns: repeat(2, 1fr); }
  .links-container { flex-direction: column; gap: 10px; }
  .separator { display: none; }
}
</style>