<template>
  <div class="portfolio-page">
    <main>
      <section class="portfolio-header-clean">
        <div class="header-text">
          <h1>Works</h1>
          <p class="works-subtitle">
            A showcase of projects defined by a constant curiosity and a commitment to learning by doing.
          </p>
        </div>
      </section>

      <section class="projects-grid-section">
  <div class="works-container">
    
    <div class="filter-group">
      <button 
        v-for="filter in filters" 
        :key="filter.label" 
        class="filter-tag"
        :class="{ 'btn-active': activeFilter === filter.value }"
        @click="activeFilter = filter.value"
      >
        {{ filter.label }}
      </button>
    </div>

    <div class="projects-list-grid">
      <div 
        v-for="project in filteredProjects" 
        :key="project.title" 
        class="project-card"
        @click="project.title === 'Raíz y Sazón' ? null : $router.push(project.link)" 
        :style="{ cursor: project.title === 'Raíz y Sazón' ? 'default' : 'pointer' }"
      >
        <div class="project-image-container">
          <img :src="project.image" :alt="project.title" class="project-image" />
        </div>

        <div class="project-details">
          <h3 class="project-name">{{ project.title }}</h3>
          <p class="project-description">{{ project.description }}</p>

          <div class="project-footer">
            <div class="project-tags">
              <span 
                v-for="tag in project.tags" 
                :key="tag" 
                class="project-tag-pill"
              >
                {{ tag }}
              </span>
            </div>

            <div v-if="project.title === 'Raíz y Sazón'" class="status-badge-work">
              Coming Soon
            </div>
            <router-link v-else :to="project.link" class="btn-lime btn-small">
              View Project
            </router-link>
          </div>
        </div>
      </div> </div> </div> </section>

      <section class="cv-callout">
        <h2>Curious to learn more about my background?</h2>
        <router-link to="/cv" class="btn-lime">Check out my CV</router-link>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const filters = ref([
  { label: 'All', value: 'all' },
  { label: 'UX/UI', value: 'UX/UI' },
  { label: 'Web design', value: 'Web Design' },
  { label: 'Visual design', value: 'Visual Design' },
  { label: 'Content creation', value: 'Content Creation' },
  { label: 'Workshops', value: 'Workshops' },
]);

const activeFilter = ref('all');

const projectsList = ref([
  {
    title: 'Under',
    description: 'Naming, logo, and color palette for the Syddansk Erhvervsakademi student bar.',
    tags: ['Visual Design'],
    image: '/img/underhorizontal.png',
    link: '/portfolio/under' // Corregido
  },
  {
    title: 'Itinero',
    description: 'A mobile application designed to simplify and enhance travel experiences.',
    tags: ['UX/UI'],
    image: '/img/itineroapp.png',
    link: '/portfolio/itinero' // Corregido
  },
  {
    title: 'SoMe Content creation',
    description: 'Strategy and creation of engaging content for Instagram and TikTok.',
    tags: ['Content Creation'],
    image: '/img/someproject.png',
    link: '/portfolio/content-creation' // Corregido
  },
 {
    /* AQUÍ ESTÁ EL CAMBIO: Agregué la tilde para que coincida con el v-if */
    title: 'Raíz y Sazón', 
    description: 'A dedicated site focused on South American vegan recipes.',    tags: ['UX/UI', 'Web Design'],
    image: '/img/raizysazonproject.png',
  },
  {
    title: 'Amada amiga',
    description: 'Unique wine label design capturing the essence of a beloved friend.',
    tags: ['Visual Design'],
    image: '/img/amadaamigaproject.png',
    link: '/portfolio/amada-amiga' // Corregido
  },
  {
    title: 'Lic. Aranda Coria',
    description: 'Brand identity design for a psichologist, reflecting professionalism and empathy.',
    tags: ['Visual Design'],
    image: '/img/arandacoria.png',
    link: '/portfolio/lic-aranda' // Corregido
  },
  {
    title: 'Collage Afternoon',
    description: 'A collaborative and creative workshop held at the modern DOKK1 library.',
    tags: ['Workshops'],
    image: '/img/Collageafternoondokk1.JPG',
    link: '/portfolio/collage-afternoon' // Corregido
  },
  {
    title: 'Collage Workshop ACW 26',
    description: 'A welcoming creative session as part of the official Aarhus City Welcome event.',
    tags: ['Workshops'],
    image: '/img/CollageworkshopAarhusCityWelcome.JPG',
    link: '/portfolio/city-welcome' // Corregido
  },
  {
    title: 'Monochromatic Collage Workshop',
    description: 'An inspiring creative experience within the historic Royal Danish Library.',
    tags: ['Workshops'],
    image: '/img/royalcollage2.JPEG',
    link: '/portfolio/royal-library' // Corregido
  },
  {
    title: 'Collage & Migrant Emotions ',
    description: 'An expressive workshop exploring migrant emotions through art.',
    tags: ['Workshops'],
    image: '/img/collagesome.JPEG',
    link: '/portfolio/migrant-emotions' // Corregido
  }
]);

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projectsList.value;
  }
  return projectsList.value.filter(project => project.tags.includes(activeFilter.value));
});
</script>

<style scoped>
.btn-lime {
    display: inline-block;
    padding: 15px 35px;
    background-color: #E2FF54; 
    color: black;
    text-decoration: none;
    border-radius: 50px;
    font-weight: 450 !important; 
    font-size: 16px;
    border: none;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1); 
    backface-visibility: hidden; /* Evita micro-saltos de píxeles */
    transform: translateZ(0);     /* Fuerza el uso de la tarjeta gráfica */
    will-change: transform;      /* Prepara al navegador para la animación */
}

.btn-lime:hover {
    transform: scale(1.05); /* Lo subí a 1.05 para que se note el movimiento fluido */
    box-shadow: 0 15px 30px rgba(226, 255, 84, 0.3); /* Sombra del color del botón para que brille */
}

.btn-small {
    padding: 10px 25px; 
}

.status-badge-work {
  padding: 10px 25px;
  background-color: #f5f5f5;
  color: #999;
  font-size: 16px;
  border-radius: 50px;
  font-weight: 450;
  letter-spacing: 1px;
  white-space: nowrap;
}

/* --- SECCIÓN 1: CABECERA LIMPIA --- */
.portfolio-header-clean {
    padding: 100px 10% 40px 10%;
    text-align: center;
    background-color: white;
}

.header-text h1 {
    font-size: 70px; /* Misma que "My creative universe" */
    font-weight: 450;
    margin-top: -20px;
    margin-bottom: 30px;
    letter-spacing: -0.02em;
    color: black;
}

.works-subtitle {
    font-size: 20px;
    color: black; /* Adiós gris */
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.4;
}

/* --- SECCIÓN 2: FILTROS --- */
.projects-grid-section {
    padding: 40px 5% 80px 5%;
    background-color: white;
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
    border: 1.5px solid black; /* Borde negro para mantener tu estética */
    padding: 10px 25px;
    font-size: 16px;
    font-weight: 400;
    border-radius: 50px;
    color: black;
    cursor: pointer;
    transition: all 0.2s ease;
}

.filter-tag:hover {
    background-color: #f0f0f0;
}

.filter-tag.btn-active {
    background-color: #E2FF54; /* Tu verde Lima */
    border-color: #E2FF54;
    font-weight: 450;
}

/* --- GRID DE PROYECTOS --- */
.projects-list-grid {
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
    border: 1px solid #eee; /* Muy sutil */
    display: flex;
    flex-direction: column;
    transition: box-shadow 0.3s ease;
}

.project-card:hover {
    box-shadow: 0 15px 30px rgba(0,0,0,0.08);
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
    transform: scale(1.1); /* El zoom de la imagen */
}

.project-details {
    padding: 25px 30px;
    display: flex;
    flex-direction: column;
    gap: 5px !important;
}

.project-name {
    font-size: 28px;
    font-weight: 450;
    color: black;
    margin: 0;
}

.project-description {
    font-size: 16px;
    color: black; /* Adiós gris */
    line-height: 1.5;
    margin: 0;
}

.project-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px !important;
    padding-top: 10px;
}

.project-tags {
    display: flex;
    gap: 12px; /* Aquí aumentas el espacio entre los tags */
}

.project-tag-pill {
    background-color: black; /* Invertido para que resalte más en tu estilo */
    color: white;
    font-size: 12px;
    padding: 6px 14px;
    border-radius: 50px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

/* --- SECCIÓN 3: CV CALLOUT --- */
.cv-callout {
    text-align: center;
    padding: 60px 20px;
    background-color: white;
}

.cv-callout h2 {
    font-size: 34px;
    font-weight: 400;
    color: black;
    margin-bottom: 40px;
}

/* Responsivo para móviles */
@media (max-width: 768px) {
    .projects-list-grid {
        grid-template-columns: 1fr;
    }
    .header-text h1 {
        font-size: 50px;
    }
}
</style>