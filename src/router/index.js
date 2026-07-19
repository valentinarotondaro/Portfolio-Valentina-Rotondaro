import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import UnderView from '../views/projects/UnderView.vue'

const router = createRouter({
  // Usamos el BASE_URL para que las rutas funcionen bien en producción
  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
    { path: '/cv', name: 'cv', component: () => import('../views/CVView.vue') },
    { path: '/contact', name: 'contact', component: () => import('../views/ContactView.vue') },
    { 
      path: '/Portfolio', 
      name: 'portfolio', 
      component: PortfolioView 
    },    
    { path: '/content-creation', name: 'content-creation', component: () => import('../views/content-creation.vue') },
{ path: '/collage', name: 'collage', component: () => import('../views/collage-workshops.vue') },
{ path: '/collage/art', name: 'collage-art', component: () => import('../views/CollageArt.vue') },
{ path: '/collage/workshops', name: 'collage-workshops', component: () => import('../views/CollageWorkshopsView.vue') },
{ path: '/collage/brands', name: 'collage-brands', component: () => import('../views/CollageBrandsView.vue') },    { path: '/Digital-Playground', name: 'digital-playground', component: () => import('../views/DigitalPlayground.vue') },    

    { path: '/portfolio/under', name: 'under', component: () => import('../views/projects/UnderView.vue') },
    { path: '/portfolio/itinero', name: 'itinero', component: () => import('../views/projects/ItineroView.vue') },
    { path: '/portfolio/content-creation', name: 'project-content-creation', component: () => import('../views/projects/ContentCreationView.vue') },
    { path: '/portfolio/raiz-sazon', name: 'raiz-sazon', component: () => import('../views/projects/RaizSazonView.vue') },
    { path: '/portfolio/amada-amiga', name: 'amada-amiga', component: () => import('../views/projects/AmadaAmigaView.vue') },
    { path: '/portfolio/lic-aranda', name: 'lic-aranda', component: () => import('../views/projects/LicArandaView.vue') },
    { path: '/portfolio/collage-afternoon', name: 'collage-afternoon', component: () => import('../views/projects/CollageAfternoonView.vue') },
    { path: '/portfolio/city-welcome', name: 'aarhus-city-welcome', component: () => import('../views/projects/AarhusCityWelcomeView.vue') },
    { path: '/portfolio/royal-library', name: 'royal-library', component: () => import('../views/projects/RoyalLibraryView.vue') },
    { path: '/portfolio/migrant-emotions', name: 'migrant-emotions', component: () => import('../views/projects/MigrantEmotionsView.vue') },
  ],

  // ESTO ES LO QUE SOLUCIONA EL SCROLL
  scrollBehavior(to, from, savedPosition) {
    // Si el usuario usa las flechas de atrás/adelante, mantiene la posición
    if (savedPosition) {
      return savedPosition
    } else {
      // Si es un click nuevo, siempre arriba de todo
      return { top: 0 }
    }
  },
})

export default router