<script setup>
import { ref, computed } from 'vue';

const filters = [
  { label: 'All',              value: 'all'             },
  { label: 'UX/UI',            value: 'UX/UI'           },
  { label: 'Web Design',       value: 'Web Design'      },
  { label: 'Visual Design',    value: 'Visual Design'   },
  { label: 'Content Creation', value: 'Content Creation'},
  { label: 'Workshops',        value: 'Workshops'       },
];

const projectsList = [
  {
    title: 'Under',
    description: 'Identity design for the Syddansk Erhvervsakademi student bar.',
    tags: ['Visual Design'],
    image: '/img/underhorizontal.png',
    link: '/portfolio/under',
  },
  {
    title: 'Itinero',
    description: 'A mobile application designed to simplify and enhance travel experiences.',
    tags: ['UX/UI'],
    image: '/img/itineroapp.png',
    link: '/portfolio/itinero',
  },
  {
    title: 'SoMe Content creation',
    description: 'Strategy and creation of engaging content for Instagram and TikTok.',
    tags: ['Content Creation'],
    image: '/img/someproject.png',
    link: '/portfolio/content-creation',
  },
  {
    title: 'Raíz y Sazón',
    description: 'A dedicated site focused on South American vegan recipes.',
    tags: ['UX/UI', 'Web Design'],
    image: '/img/raizysazonproject.png',
    link: null,
  },
  {
    title: 'Amada amiga',
    description: 'Unique wine label design capturing the essence of a beloved friend.',
    tags: ['Visual Design'],
    image: '/img/amadaamigaproject.png',
    link: '/portfolio/amada-amiga',
  },
  {
    title: 'Lic. Aranda Coria',
    description: 'Brand identity design for a psichologist, reflecting trust and empathy.',
    tags: ['Visual Design'],
    image: '/img/arandacoria.png',
    link: '/portfolio/lic-aranda',
  },
  {
    title: 'Collage Afternoon',
    description: 'A collaborative and creative workshop held at the modern DOKK1 library.',
    tags: ['Workshops'],
    image: '/img/Collageafternoondokk1.JPG',
    link: '/portfolio/collage-afternoon',
  },
  {
    title: 'Collage Workshop ACW 26',
    description: 'A welcoming creative session as part of the Aarhus City Welcome event.',
    tags: ['Workshops'],
    image: '/img/CollageworkshopAarhusCityWelcome.JPG',
    link: '/portfolio/city-welcome',
  },
  {
    title: 'Monochromatic Collage Workshop',
    description: 'An inspiring creative experience within the historic Royal Danish Library.',
    tags: ['Workshops'],
    image: '/img/royalcollage2.JPEG',
    link: '/portfolio/royal-library',
  },
  {
    title: 'Collage & Migrant Emotions',
    description: 'An expressive workshop exploring migrant emotions through art.',
    tags: ['Workshops'],
    image: '/img/collagesome.JPEG',
    link: '/portfolio/migrant-emotions',
  },
];

const activeFilter = ref('all');

const filteredProjects = computed(() =>
  activeFilter.value === 'all'
    ? projectsList
    : projectsList.filter(p => p.tags.includes(activeFilter.value))
);

const isComingSoon = (project) => project.link === null;
</script>

<template>
  <div class="portfolio-page">
    <main>

      <!-- ─── HEADER ─────────────────────────────────────── -->
      <section class="portfolio-header">
        <h1>Works</h1>
      </section>

      <!-- ─── PROJECTS ───────────────────────────────────── -->
      <section class="projects-section">

        <div class="filter-group">
          <button
            v-for="filter in filters"
            :key="filter.value"
            class="filter-tag"
            :class="{ 'btn-active': activeFilter === filter.value }"
            @click="activeFilter = filter.value"
          >
            {{ filter.label }}
          </button>
        </div>

        <div class="projects-grid">
          <div
            v-for="project in filteredProjects"
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
                  <span v-for="tag in project.tags" :key="tag" class="project-tag-pill">
                    {{ tag }}
                  </span>
                </div>
                <div v-if="isComingSoon(project)" class="status-badge">Coming Soon</div>
                <router-link v-else :to="project.link" class="btn-lime btn-small">View Project</router-link>
              </div>
            </div>
          </div>
        </div>

      </section>

      <!-- ─── CV CALLOUT ─────────────────────────────────── -->
      <section class="cv-callout">
        <h2>Curious to learn more about my background?</h2>
        <router-link to="/cv" class="btn-lime">Check out my CV</router-link>
      </section>

    </main>
  </div>
</template>

<style scoped>
/* ─── BUTTONS ───────────────────────────────────────────── */
.btn-lime {
  display: inline-block;
  padding: 15px 35px;
  background-color: #E2FF54;
  color: #000;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 450;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  backface-visibility: hidden;
  transform: translateZ(0);
  will-change: transform;
}

.btn-lime:hover {
  transform: scale(1.05);
  box-shadow: 0 15px 30px rgba(226, 255, 84, 0.3);
}

.btn-small {
  padding: 10px 25px;
}

.status-badge {
  padding: 10px 25px;
  background-color: #f5f5f5;
  color: #999;
  font-size: 16px;
  border-radius: 50px;
  font-weight: 450;
  letter-spacing: 1px;
  white-space: nowrap;
}

/* ─── HEADER ────────────────────────────────────────────── */
.portfolio-header {
  padding: 100px 10% 5px;
  text-align: center;
  background-color: #fff;
}

.portfolio-header h1 {
  font-size: clamp(32px, 4vw, 76px);
  font-weight: 450;
  margin-top: -20px;
  margin-bottom: 30px;
  letter-spacing: -0.02em;
  color: #000;
}

/* ─── FILTERS ───────────────────────────────────────────── */
.projects-section {
  padding: 40px 5% 80px;
  background-color: #fff;
}

.filter-group {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 60px;
  flex-wrap: wrap;
}

.filter-tag {
  background-color: transparent;
  border: 1.5px solid #000;
  padding: 10px 25px;
  font-size: 20px;
  font-weight: 400;
  border-radius: 50px;
  color: #000;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.filter-tag:hover {
  background-color: #f0f0f0;
}

.filter-tag.btn-active {
  background-color: #E2FF54;
  border-color: #E2FF54;
  font-weight: 450;
}

/* ─── PROJECTS GRID ─────────────────────────────────────── */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  gap: 40px;
  max-width: 1400px;
  margin: 0 auto;
}

.project-card {
  background-color: #fff;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease;
}

.project-card:hover {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
}

.project-image-container {
  width: 100%;
  height: 380px;
  overflow: hidden;
  background-color: #f9f9f9;
  border-radius: 24px 24px 0 0;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}

.project-card:hover .project-image {
  transform: scale(1.1);
}

.project-details {
  padding: 25px 30px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.project-name {
  font-size: 28px;
  font-weight: 450;
  color: #000;
  margin: 0;
}

.project-description {
  font-size: 18px;
  color: #000;
  line-height: 1.5;
  margin: 0;
}

.project-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding-top: 10px;
}

.project-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.project-tag-pill {
  background-color: #000;
  color: #fff;
  font-size: 12px;
  padding: 6px 14px;
  border-radius: 50px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
}

/* ─── CV CALLOUT ────────────────────────────────────────── */
.cv-callout {
  text-align: center;
  padding: 60px 20px;
  background-color: #fff;
}

.cv-callout h2 {
  font-size: 34px;
  font-weight: 400;
  color: #000;
  margin-bottom: 40px;
}

/* ─── RESPONSIVE ────────────────────────────────────────── */
@media (max-width: 768px) {
  .portfolio-header {
    padding: 60px 6% 30px;
  }

  .portfolio-header h1 {
    font-size: 52px;
    margin-top: 0;
    margin-bottom: 16px;
  }



  .projects-section {
    padding: 24px 5% 48px;
  }

  .filter-group {
    gap: 8px;
    margin-bottom: 32px;
  }

  .filter-tag {
    font-size: 12px;
    padding: 7px 14px;
    white-space: nowrap;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  /* La card no recorta el botón */
  .project-card {
    overflow: visible;
  }

  .project-image-container {
    height: 220px;
    overflow: hidden; /* solo la imagen */
  }

  .project-details {
    padding: 18px 20px;
  }

  .project-name        { font-size: 22px; }
  .project-description { font-size: 15px; }

  /* Footer siempre en una línea */
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
    font-size: 10px;
    padding: 4px 10px;
  }

  .btn-lime {
    font-size: 13px;
    padding: 9px 16px;
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

  .cv-callout h2 {
    font-size: 22px;
    margin-bottom: 24px;
  }
}
</style>