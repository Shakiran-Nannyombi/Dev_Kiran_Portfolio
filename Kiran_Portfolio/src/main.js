import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Initialize AOS
AOS.init({
  duration: 800,
  once: false,
  offset: 100,
  delay: 100,
  easing: 'ease-out',
  mirror: true,
  anchorPlacement: 'top-bottom'
})

const app = createApp(App)
app.use(router)
app.mount('#app')
