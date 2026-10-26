<script setup>
import { ref, computed } from 'vue';
import { useFallingTags } from '../composables/useFallingTags';
import { tagStyle } from '../utils/tagColors';

// ─── HERO TAGS: physics (matter-js), shared with AboutView ───────
// npm install matter-js
const heroTags = [
  'Video Editing',
  'Web Design',
  'UX UI',
  'AI integration',
  'Content Creation',
  'Branding',
  'Workshop Facilitation',
  'Visual Design',
  'Digital marketing',
];
const { stageRef: tagsStage, setTagRef } = useFallingTags();

// ─── HERO HOVER PHOTO ─────────────────────────────────────────
// Positioned via JS (fixed + clamped to the viewport) instead of pure
// CSS so it's never cropped off the top/side of the screen on a
// shorter window — a plain CSS "open upward" was getting cut off.
const introNameRef = ref(null);
const heroPhotoVisible = ref(false);
const heroPhotoStyle = ref({});
const PHOTO_W = 200;
const PHOTO_H = 250; // 4:5
const showIntroPhoto = () => {
  const el = introNameRef.value;
  if (!el) return;
  const rect = el.getBoundingClientRect();
  let left = rect.left;
  let top = rect.top - PHOTO_H - 16;
  // Not enough room above? Clamp to just inside the viewport instead
  // of letting it render off-screen (cropped).
  top = Math.max(top, 12);
  left = Math.min(Math.max(left, 12), window.innerWidth - PHOTO_W - 12);
  heroPhotoStyle.value = { left: `${left}px`, top: `${top}px` };
  heroPhotoVisible.value = true;
};

const recentFilters = [
  { label: 'All',              value: 'all'              },
  { label: 'UX/UI',            value: 'UX/UI'            },
  { label: 'Web Design',       value: 'Web Design'       },
  { label: 'Visual Design',    value: 'Visual Design'    },
  { label: 'Content Creation', value: 'Content Creation' },
  { label: 'Workshops',        value: 'Workshops'        },
];

// ─── RECENT WORKS FILTER: inline dropdown next to the title ──────
const filterOpen = ref(false);
const toggleFilter = () => { filterOpen.value = !filterOpen.value; };
const pickFilter = (value) => { activeRecentFilter.value = value; filterOpen.value = false; };
const activeFilterLabel = computed(() =>
  recentFilters.find(f => f.value === activeRecentFilter.value)?.label ?? 'All'
);
const recentProjects = [
  { title: 'DANES', description: 'A Danish learning platform with courses, live speaking groups and city events.', tags: ['UX/UI', 'Web Design'], image: '/img/danescover.webp', link: null },
  { title: 'Business DE-DK', description: 'Full redesign of a trilingual cross-border business hub for the German-Danish border region.', tags: ['Web Design', 'UX/UI'], image: '/img/businessregionhero.webp', link: '/portfolio/business-dedk' },
  {
  title: 'Departamentos Alfar',
  description: 'Booking site for a family-run apartment complex in Mar del Plata.',
  tags: ['Web Design'],
  image: '/img/alfarhero.webp',
  link: '/portfolio/departamentos-alfar',
},
  { title: 'Itinero', description: 'A mobile application designed to simplify and enhance travel experiences.', tags: ['UX/UI', 'Web Design'], image: '/img/itineroapp.png', link: '/portfolio/itinero' },
    { title: 'Lic. Aranda Coria', description: 'Brand identity design for a psichologist, reflecting trust and empathy.', tags: ['Visual Design'], image: '/img/arandacoria.png', link: '/portfolio/lic-aranda' },
  { title: 'Amada amiga', description: 'Unique wine label design capturing the essence of a beloved friend.', tags: ['Visual Design'], image: '/img/amadaamigaproject.png', link: '/portfolio/amada-amiga' },
  { title: 'SoMe Content creation', description: 'Strategy and creation of engaging content for Instagram and TikTok.', tags: ['Content Creation'], image: '/img/someproject.webp', link: '/portfolio/content-creation' },
  { title: 'Under', description: 'Identity design for the Syddansk Erhvervsakademi student bar.', tags: ['Visual Design'], image: '/img/underhorizontal.png', link: '/portfolio/under' },
  { title: 'Collage Afternoon', description: 'A collaborative and creative workshop held at the modern DOKK1 library.', tags: ['Workshops'], image: '/img/Collageafternoondokk1.JPG', device: 'none', link: '/portfolio/collage-afternoon' },
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
      <div class="hero-intro">
        <span class="hero-intro-text">Hi! I'm</span>
        <span
          class="hero-intro-text hero-intro-name"
          ref="introNameRef"
          @mouseenter="showIntroPhoto"
          @mouseleave="heroPhotoVisible = false"
        >Valen Rotondaro</span>
      </div>

      <transition name="toast-fade">
        <img
          v-if="heroPhotoVisible"
          src="/img/valen-hover-photo.png"
          alt="Valen Rotondaro"
          class="hero-intro-photo"
          :style="heroPhotoStyle"
        />
      </transition>

      <h1 class="hero-title">From pixels to paper, I design experiences that connect.</h1>

      <div class="hero-tags" ref="tagsStage">
        <span
          v-for="(tag, i) in heroTags"
          :key="tag"
          class="hero-tag"
          :style="tagStyle(tag)"
          :ref="el => setTagRef(el, i)"
        >{{ tag }}</span>
      </div>
    </section>

      <section class="hero-categories" v-if="false">
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
  <div class="recent-works-header">
    <h2 class="recent-works-title">Recent Works</h2>

    <div class="rw-filter">
      <button class="rw-filter-trigger" @click="toggleFilter" :aria-expanded="filterOpen">
        <span>Category: {{ activeFilterLabel }}</span>
        <svg width="12" height="8" viewBox="0 0 12 8" :class="{ 'rw-chev--open': filterOpen }" class="rw-chev">
          <path d="M1 1L6 6L11 1" stroke="#000" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>

      <div v-if="filterOpen" class="rw-filter-backdrop" @click="filterOpen = false"></div>

      <div v-if="filterOpen" class="rw-filter-panel">
        <button
          v-for="filter in recentFilters"
          :key="filter.value"
          class="rw-filter-item"
          :class="{ 'rw-filter-item--active': activeRecentFilter === filter.value }"
          @click="pickFilter(filter.value)"
        >
          {{ filter.label }}
        </button>
      </div>
    </div>
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
  min-height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  padding: 130px 5% 60px;
  gap: 28px;
}

.hero-intro {
  display: flex;
  align-items: center;
  gap: 10px;
}

.hero-intro-text {
  font-size: 24px;
  font-weight: 500;
  color: #666;
}

.hero-intro-name {
  position: relative;
  color: var(--pink);
  cursor: default;
}

/* Positioned (left/top) from JS in showIntroPhoto(), clamped to the
   viewport so it's always fully visible, never cropped. */
.hero-intro-photo {
  position: fixed;
  width: 200px;
  height: 250px; /* 4:5 */
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.18);
  transform: rotate(-3deg);
  pointer-events: none;
  z-index: 200;
}

.hero-title {
  font-size: 84px;
  font-weight: 500;
  color: #000;
  line-height: 1.04;
  letter-spacing: -0.03em;
  margin: 0;
  max-width: 1180px;
}

.hero-title::selection,
.hero-title::-moz-selection {
  background-color: var(--lima);
  color: var(--black);
}

/* ─── HERO TAGS (matter-js) ─────────────────────────────── */
.hero-tags {
  position: relative;
  z-index: 50;
  width: 100%;
  max-width: 900px;
  height: 230px;
  margin-top: 10px;
  overflow: visible;
}

.hero-tag {
  position: absolute;
  top: 0;
  left: 0;
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-weight: 500;
  padding: 10px 25px;
  border-radius: 999px;
  white-space: nowrap;
  will-change: transform;
  opacity: 0;
  cursor: grab;
  touch-action: none;
  animation: tagFadeIn 0.3s ease forwards;
  animation-delay: 0.1s;
}

.hero-tag:active {
  cursor: grabbing;
}

@keyframes tagFadeIn {
  to { opacity: 1; }
}

.recent-works-section { padding: 40px 5% 60px; background-color: #fff; }

/* ─── RECENT WORKS HEADER + INLINE FILTER DROPDOWN ───────── */
.recent-works-header { display: flex; align-items: center; justify-content: space-between; gap: 24px; max-width: 1400px; margin: 0 auto 40px; }
.recent-works-title { font-size: 56px; font-weight: 450; color: #000; letter-spacing: -0.02em; margin: 0; }

.rw-filter { position: relative; flex-shrink: 0; }
.rw-filter-trigger {
  display: inline-flex; align-items: center; gap: 10px;
  border: 1.5px solid #000; border-radius: 999px; padding: 10px 20px;
  font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 500; color: #000;
  background: #fff; cursor: pointer; white-space: nowrap; transition: background 0.15s ease;
}
.rw-filter-trigger:hover { background: #f5f5f5; }
.rw-chev { transition: transform 0.15s ease; }
.rw-chev--open { transform: rotate(180deg); }
.rw-filter-backdrop { position: fixed; inset: 0; z-index: 19; }
.rw-filter-panel {
  position: absolute; top: calc(100% + 8px); right: 0; z-index: 20;
  width: 220px; background: #fff; border: 1px solid #e3e3e3; border-radius: 14px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08); padding: 6px; display: flex; flex-direction: column;
}
.rw-filter-item {
  background: none; border: none; text-align: left; cursor: pointer;
  padding: 10px 14px; border-radius: 10px; font-family: 'Inter', sans-serif;
  font-size: 15px; font-weight: 400; color: #000; transition: background 0.15s ease;
}
.rw-filter-item:hover { background: #f7f7f7; }
.rw-filter-item--active { font-weight: 600; background: #f5f5f5; }

.projects-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(450px, 1fr)); gap: 40px; max-width: 1400px; margin: 0 auto; }
.project-card { background-color: #fff; border-radius: 24px; overflow: hidden; border: 1.5px solid #e4e4e4; display: flex; flex-direction: column; transition: box-shadow 0.3s ease; }
.project-card:hover { box-shadow: 0 15px 30px rgba(0,0,0,0.08); }
.project-image-container {
  width: 100%;
  height: 380px;
  overflow: hidden;
  background-color: #f9f9f9;
  border-radius: 24px 24px 0 0;
}
.project-image { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s cubic-bezier(0.25,1,0.5,1); }
.project-card:hover .project-image { transform: scale(1.1); }

.project-details { padding: 25px 30px; display: flex; flex-direction: column; gap: 5px; }
.project-name { font-size: 28px; font-weight: 450; color: #000; margin: 0; }
.project-description { font-size: 18px; color: #000; line-height: 1.5; margin: 0; }
.project-footer { display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding-top: 10px; }
.project-tags { display: flex; gap: 8px; flex-wrap: wrap; }
.project-tag-pill { font-size: 14px; font-weight: 500; padding: 6px 14px; border-radius: 50px; text-transform: uppercase; letter-spacing: 0.05em; white-space: nowrap; background-color: #000; color: #fff; }
.status-badge { padding: 10px 25px; background-color: #f5f5f5; color: #999; font-size: 16px; border-radius: 50px; font-weight: 450; letter-spacing: 1px; white-space: nowrap; }
.btn-dark { display: inline-block; padding: 15px 35px; background-color: #000; color: #fff; text-decoration: none; border-radius: 50px; font-weight: 450; font-size: 16px; border: none; cursor: pointer; transition: all 0.4s cubic-bezier(0.25,1,0.5,1); }
.btn-dark:hover { transform: scale(1.05); box-shadow: 0 15px 30px rgba(0,0,0,0.25); }
.btn-lime { display: inline-block; padding: 15px 35px; background-color: var(--lima); color: #000; text-decoration: none; border-radius: 50px; font-weight: 450; font-size: 16px; border: none; cursor: pointer; transition: all 0.4s cubic-bezier(0.25,1,0.5,1); }
.btn-lime:hover { transform: scale(1.05); box-shadow: 0 15px 30px rgba(0,0,0,0.15); }
.btn-small { padding: 10px 25px; }
/* ─── BUTTON ────────────────────────────────────────────── */
.btn-explore {
  display: block;
  width: fit-content;
  margin: 40px auto;
  padding: 15px 45px;
  background-color: var(--lima);
  color: #000;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 450;
  font-size: 18px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.btn-explore:hover {
  transform: scale(1.01);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
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
    min-height: auto;
    padding: 90px 6% 40px;
    gap: 18px;
  }

  .hero-intro-text {
    font-size: 18px;
  }

  .hero-title {
    font-size: 36px;
    text-align: center;
    line-height: 1.12;
  }

  .hero-tags {
    height: 170px;
    margin-top: 6px;
  }

  .hero-tag {
    font-size: 13px;
    padding: 8px 16px;
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

  .recent-works-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
    margin-bottom: 24px;
  }

  .recent-works-title {
    font-size: 32px;
  }

  .rw-filter-trigger {
    font-size: 14px;
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
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }

  .project-tags {
    flex-wrap: wrap;
    gap: 6px;
    flex: 1;
  }

  .project-tag-pill {
    font-size: 11px;
    padding: 4px 10px;
  }

  .btn-small {
    width: auto;
    padding: 4px 10px;
    font-size: 13px;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .status-badge {
    width: auto;
    font-size: 11px;
    padding: 4px 10px;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .btn-explore {
    font-size: 15px;
    padding: 12px 32px;
    margin: 40px auto 22px;
  }
  .project-card {
    overflow: visible;
  }

  .project-image-container {
    overflow: hidden;
  }
}
</style>