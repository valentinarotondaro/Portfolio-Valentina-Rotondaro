import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Esto importa automáticamente tu archivo router/index.js
import './assets/main.css'

createApp(App).use(router).mount('#app')