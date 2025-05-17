<template>
  <div class="relative min-h-screen overflow-hidden">

    <!-- Background with animations -->
   <div class="absolute inset-0 w-full h-full bg-pattern-light dark:bg-pattern-dark animate-gradientShift bg-repeat bg-[length:200%_200%] z-0 pointer-events-none"></div>
   
    <!-- Content Wrapper -->
    <div id="content-wrapper" class=" relative z-10 text-text dark:text-dark-text relative z-2 min-h-screen w-full">
       <!-- Welcome Section -->
    <section id="home" class="min-h-screen flex items-center">
      <div class="container mx-auto px-8 py-32">
        <div class="max-w-4xl">
          <!-- Welcome text with slide-in animation -->
          <h3 class="text-2xl text-secondary dark:text-dark-text mb-4 font-bold font-serif slide-in-left" data-aos="fade-right" data-aos-delay="100">
            Hey Welcome!
          </h3>
          
            <!-- Introduction with typing animation -->
            <h1 class="text-2xl md:text-3xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent mb-6 typing-text" data-aos="fade-up" data-aos-delay="200">
            I'm Shakiran Nannyombi
            </h1>

          <!-- Main heading with slide-in animation -->
          <h2 class="text-2xl md:text-5xl lg:text-7xl font-bold font-serif text-text dark:text-dark-text leading-tight mb-8 slide-in-right" data-aos="fade-up" data-aos-delay="300">
            Designing Websites & Apps That Make a Long Lasting Impact
          </h2>
          
          <!-- CTA Buttons -->
          <div class="flex gap-4" data-aos="fade-up" data-aos-delay="400">
            <router-link to="/contact" class="inline-flex items-center px-6 py-3 text-lg border-2 border-primary hover:border-secondary dark:border-dark-primary hover:dark:border-dark-accent text-primary dark:text-dark-primary hover:bg-secondary hover:text-white dark:hover:bg-dark-accent dark:hover:text-[#0b0410] transition-all duration-300 rounded-lg group">
              Let's Connect
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </router-link>
            <a href="/assets/files/CV.pdf" download class="inline-flex items-center px-6 py-3 text-lg bg-primary dark:bg-dark-primary text-white dark:text-[#0b0410] hover:bg-secondary dark:hover:bg-dark-accent hover:text-black dark:hover:text-white transition-all duration-300 rounded-lg group">
              Download CV
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 group-hover:translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
    </div>
  </div>
</template>

<script>
// Update image imports to use public directory
const meImage = '/assets/images/me.jpg'
const aboutImage = '/assets/images/about.png'
import '@/assets/css/animations.css'
import { initTextAnimations } from '@/assets/js/text-animations.js'

export default {
  name: 'Home',
  data() {
    return {
      meImage,
      aboutImage
    }
  },
  mounted() {
    // Initialize AOS
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 800,
        once: false,
        offset: 100,
        delay: 100,
        easing: 'ease-out',
        mirror: true,
        anchorPlacement: 'top-bottom'
      });
    }
    // Initialize text animations
    initTextAnimations()
  },
  methods: {
    // Add your methods here
  }
}
</script>

<style scoped>

/* Component-specific styles */
#content-wrapper {
  position: relative;
  z-index: 2;
}

/* Ensure animations work properly */
.typing-text {
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid;
  animation: typing 3.5s steps(40, end),
             blink .75s step-end infinite;
}

.slide-in-left {
  animation: slideInFromLeft 1s ease-out forwards;
  opacity: 0;
}

.slide-in-right {
  animation: slideInFromRight 1s ease-out forwards;
  opacity: 0;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink {
  50% { border-color: transparent }
}

@keyframes slideInFromLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInFromRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
