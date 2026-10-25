import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Esto importa automáticamente tu archivo router/index.js
import './assets/main.css'

// Fix: the browser's own scroll-restoration was reopening the page at
// whatever scroll position the last session left it at (looked like the
// page "opened in the middle" instead of at the top of the hero on a
// fresh load / npm run dev). Hand scroll position entirely to the
// router's own scrollBehavior (router/index.js) instead.
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}
window.scrollTo(0, 0)

createApp(App).use(router).mount('#app')