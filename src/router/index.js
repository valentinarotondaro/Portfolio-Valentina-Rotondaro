import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioView from '../views/PortfolioView.vue'

const router = createRouter({
  history: createWebHistory(),
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
    { path: '/collage-workshops', name: 'collage-workshops', component: () => import('../views/collage-workshops.vue') },
    { path: '/multimedia-design', name: 'multimedia-design', component: () => import('../views/multimedia-design.vue') },
    { path: '/Digital-Playground', name: 'digital-playground', component: () => import('../views/DigitalPlayground.vue') }
  ]
})

export default router