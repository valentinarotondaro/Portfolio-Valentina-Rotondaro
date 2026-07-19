<script setup>
import { ref, computed } from 'vue';

const recentFilters = [
  { label: 'All',           value: 'all'          },
  { label: 'UX/UI',         value: 'UX/UI'        },
  { label: 'Web Design',    value: 'Web Design'   },
  { label: 'Visual Design', value: 'Visual Design'},
];

const recentProjects = [
  { title: 'Under', description: 'Identity design for the Syddansk Erhvervsakademi student bar.', tags: ['Visual Design'], image: '/img/underhorizontal.png', link: '/portfolio/under' },
  { title: 'Itinero', description: 'A mobile application designed to simplify and enhance travel experiences.', tags: ['UX/UI'], image: '/img/itineroapp.png', link: '/portfolio/itinero' },
  { title: 'Raíz y Sazón', description: 'A dedicated site focused on South American vegan recipes.', tags: ['UX/UI', 'Web Design'], image: '/img/raizysazonproject.png', link: null },
  { title: 'Amada amiga', description: 'Unique wine label design capturing the essence of a beloved friend.', tags: ['Visual Design'], image: '/img/amadaamigaproject.png', link: '/portfolio/amada-amiga' },
  { title: 'Lic. Aranda Coria', description: 'Brand identity design for a psichologist, reflecting trust and empathy.', tags: ['Visual Design'], image: '/img/arandacoria.png', link: '/portfolio/lic-aranda' },
  { title: 'SoMe Content creation', description: 'Strategy and creation of engaging content for Instagram and TikTok.', tags: ['Content Creation'], image: '/img/someproject.png', link: '/portfolio/content-creation' },
];

const activeRecentFilter = ref('all');
const filteredRecentProjects = computed(() =>
  activeRecentFilter.value === 'all'
    ? recentProjects
    : recentProjects.filter(p => p.tags.includes(activeRecentFilter.value))
);
const isComingSoon = (project) => project.link === null;

</script>

<template>
  <main>

    <!-- ─── HERO ──────────────────────────────────────────── -->
    <section class="hero">
      <img src="/img/washitape.png"       class="icon icon-folder"  alt="Folder" />
<div class="hero-note-wrap">
  <span class="hero-note-label">UX UI Designer</span>
  <img src="/img/heronote.png" class="icon icon-arrow" alt="Arrow" />
</div>      <img src="/img/clips.png"        class="icon icon-clips"   alt="Clips"  />
      <img src="/img/smileyface.png" class="icon icon-coffee"  alt="Coffee" />
      <img src="/img/herostar.png"       class="icon icon-camera"  alt="Camera" />
      <img src="/img/heroscrap.png"        class="icon icon-figma"   alt="Figma"  />

      <div class="hero-content">
        <h1 class="hero-title">Hi! I'm <span class="highlight">Valen Rotondaro</span></h1>
        <p class="hero-subtitle">From pixels to paper, I design experiences that connect.</p>
      </div>
    </section>

      <section class="hero-categories">
      <router-link to="/Portfolio/" class="hero-cat">
        <div class="cat-img-wrap">
          <img src="/img/macfigma.png" alt="Multimedia Design" class="cat-img" />
          <img src="/img/figma.png" alt="" class="cat-img-extra cat-extra--figma" />
        </div>
        <span>Multimedia<br>Design</span>
      </router-link>
      <router-link to="/content-creation" class="hero-cat">
        <div class="cat-img-wrap">
          <img src="/img/camera.png" alt="Content Creation" class="cat-img" />
          <img src="/img/micpink.png" alt="" class="cat-img-extra cat-extra--mic" />
        </div>
        <span>Content<br>Creation</span>
      </router-link>
<router-link to="/collage" class="hero-cat">
            <div class="cat-img-wrap">
          <img src="/img/collage.png" alt="Collage & Crafts" class="cat-img cat-img--collage" />
          <img src="/img/tijeraroja.png" alt="" class="cat-img-extra cat-extra--scissors" />
        </div>
        <span>Collage<br>&amp; Crafts</span>
      </router-link>
    </section>

    <section class="recent-works-section">
  <h2 class="recent-works-title">Recent Works</h2>

  <div class="filter-group">
    <button
      v-for="filter in recentFilters"
      :key="filter.value"
      class="filter-tag"
      :class="{ 'btn-active': activeRecentFilter === filter.value }"
      @click="activeRecentFilter = filter.value"
    >
      {{ filter.label }}
    </button>
  </div>

  <div class="projects-grid">
    <div
      v-for="project in filteredRecentProjects"
      :key="project.title"
      class="project-card"
      :style="{ cursor: isComingSoon(project) ? 'default' : 'pointer' }"
      @click="!isComingSoon(project) && $router.push(project.link)"
    >
      <div class="project-image-container">
        <img :src="project.image" :alt="project.title" class="project-image" />
      </div>
      <div class="project-details">
        <h3 class="project-name">{{ project.title }}</h3>
        <p class="project-description">{{ project.description }}</p>
        <div class="project-footer">
          <div class="project-tags">
            <span v-for="tag in project.tags" :key="tag" class="project-tag-pill">{{ tag }}</span>
          </div>
          <div v-if="isComingSoon(project)" class="status-badge">Coming Soon</div>
          <router-link v-else :to="project.link" class="btn-lime btn-small">View Project</router-link>
        </div>
      </div>
    </div>
  </div>
</section>

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
.icon-clips  { width:  80px; top: 50%;    left: 10%;   --base-rot: -7deg; --hover-tilt:  12deg; }
.icon-coffee { width:  70px; top: 50%;    right:  9%;  --base-rot:  8deg; --hover-tilt:  -6deg; }
.icon-camera { width: 160px; bottom:  8%; left: 13%;   --base-rot: -7deg; --hover-tilt:   9deg; }
.icon-figma  { width: 120px; bottom: 10%; right: 15%;  --base-rot:  2deg; --hover-tilt:  -7deg; }

.hero-note-wrap {
  position: absolute;
  width: 200px;
  top: 10%;
  right: 14%;
  z-index: 0;
  transition: transform 0.3s ease;
  transform-origin: center;
  --base-rot: 1deg;
  --hover-tilt: -15deg;
}
.hero-note-wrap:hover {
  transform: rotate(var(--base-rot)) scale(1.1) rotate(var(--hover-tilt));
}
.hero-note-wrap .icon-arrow {
  position: static;
  width: 100%;
  transition: none;
}
.hero-note-wrap .icon-arrow:hover { transform: none; }
.hero-note-label {
  position: absolute;
  top:160px;
  left: 53%;
  transform: translateX(-50%) rotate(-4deg);
  font-family: 'MyFont', sans-serif !important;
  font-size: 30px;
  letter-spacing: 0.04em;
  color: black;
  text-transform: uppercase;
  white-space: nowrap;
  pointer-events: none;
}

.recent-works-section { padding: 40px 5% 60px; background-color: #fff; }
.recent-works-title { font-size: 56px; font-weight: 450; text-align: center; color: #000; margin-bottom: 40px; letter-spacing: -0.02em; }
.filter-group { display: flex; justify-content: center; gap: 12px; margin-bottom: 60px; flex-wrap: wrap; }
.filter-tag { background-color: transparent; border: 1.5px solid #000; padding: 10px 25px; font-size: 20px; font-weight: 400; border-radius: 50px; color: #000; cursor: pointer; transition: all 0.2s ease; white-space: nowrap; }
.filter-tag:hover { background-color: #f0f0f0; }
.filter-tag.btn-active { background-color: #E2FF54; border-color: #E2FF54; font-weight: 450; }
.projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(450px, 1fr)); gap: 40px; max-width: 1400px; margin: 0 auto; }
.project-card { background-color: #fff; border-radius: 24px; overflow: hidden; border: 1px solid #eee; display: flex; flex-direction: column; transition: box-shadow 0.3s ease; }
.project-card:hover { box-shadow: 0 15px 30px rgba(0,0,0,0.08); }
.project-image-container { width: 100%; height: 380px; overflow: hidden; background-color: #f9f9f9; border-radius: 24px 24px 0 0; }
.project-image { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s cubic-bezier(0.25,1,0.5,1); }
.project-card:hover .project-image { transform: scale(1.1); }
.project-details { padding: 25px 30px; display: flex; flex-direction: column; gap: 5px; }
.project-name { font-size: 28px; font-weight: 450; color: #000; margin: 0; }
.project-description { font-size: 18px; color: #000; line-height: 1.5; margin: 0; }
.project-footer { display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding-top: 10px; }
.project-tags { display: flex; gap: 8px; flex-wrap: wrap; }
.project-tag-pill { background-color: #000; color: #fff; font-size: 12px; padding: 6px 14px; border-radius: 50px; text-transform: uppercase; letter-spacing: 0.05em; white-space: nowrap; }
.status-badge { padding: 10px 25px; background-color: #f5f5f5; color: #999; font-size: 16px; border-radius: 50px; font-weight: 450; letter-spacing: 1px; white-space: nowrap; }
.btn-lime { display: inline-block; padding: 15px 35px; background-color: #E2FF54; color: #000; text-decoration: none; border-radius: 50px; font-weight: 450; font-size: 16px; border: none; cursor: pointer; transition: all 0.4s cubic-bezier(0.25,1,0.5,1); }
.btn-lime:hover { transform: scale(1.05); box-shadow: 0 15px 30px rgba(226,255,84,0.3); }
.btn-small { padding: 10px 25px; }
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

.hero-categories {
  display: flex;
  gap: 100px;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  padding: 40px 5% 60px;
}

.hero-cat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.hero-cat:hover { transform: translateY(-4px); }

.hero-cat span {
  font-size: 25px;
  font-weight: 400;
  color: #111;
  text-align: center;
  line-height: 1.3;
}

.cat-img-wrap {
  position: relative;
  width: 220px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cat-img {
  width: 220px;
  height: 200px;
  object-fit: contain;
}

.cat-img--collage {
  width: 240px;
  height: 210px;
}

.cat-img-extra {
  position: absolute;
  height: auto;
}

.cat-extra--figma {
  width: 70px;
  bottom: 30px;
  right: 5px;
}

.cat-extra--mic {
  width: 80px;
  bottom: 10px;
  right: -10px;
}

.cat-extra--scissors {
  width: 100px;
  bottom: 0;
  right: -20px;
  transform: rotate(-20deg);
}

/* ─── RESPONSIVE ────────────────────────────────────────── */
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
    font-size: 40px;
    text-align: center;
    line-height: 1.1;
  }

  .hero-subtitle {
    font-size: 16px;
    max-width: 90%;
    margin: 24px auto 0;
    text-align: center;
  }

  .icon,
  .hero-note-wrap {
    display: none;
  }

  .hero-categories {
    gap: 40px;
    padding: 24px 5% 40px;
  }

  .cat-img-wrap {
    width: 140px;
    height: 130px;
  }

  .cat-img {
    width: 140px;
    height: 130px;
  }

  .cat-img--collage {
    width: 150px;
    height: 135px;
  }

  .hero-cat span {
    font-size: 16px;
  }

  .recent-works-section {
    padding: 24px 5% 40px;
  }

  .recent-works-title {
    font-size: 32px;
    margin-bottom: 24px;
  }

  .filter-group {
    gap: 8px;
    margin-bottom: 32px;
  }

  .filter-tag {
    font-size: 13px;
    padding: 8px 16px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .project-image-container {
    height: 220px;
  }

  .project-name {
    font-size: 20px;
  }

  .project-description {
    font-size: 14px;
  }

  .project-footer {
    flex-wrap: wrap;
    gap: 10px;
  }

  .btn-explore {
    font-size: 15px;
    padding: 12px 32px;
    margin: 40px auto 22px;
  }
}
</style>