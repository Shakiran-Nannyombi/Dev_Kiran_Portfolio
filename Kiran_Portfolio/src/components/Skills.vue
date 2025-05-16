<template>
  <div id="content-wrapper" class="relative z-2 min-h-screen w-full">
    <div class="bg-pattern-light dark:bg-pattern-dark">
      <!-- Hero Section -->
      <section class="relative py-20 overflow-hidden">
        <div class="container mx-auto px-8">
          <div class="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h1 class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Skills & Expertise
            </h1>
            <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400">
              A comprehensive overview of my technical skills and expertise
            </p>
          </div>
        </div>
      </section>

      <!-- Skills Grid Section -->
      <section class="py-20">
        <div class="container mx-auto px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <!-- Languages -->
            <div class="bg-white/5 dark:bg-black/5 backdrop-blur-sm rounded-2xl p-8" data-aos="fade-up">
              <h3 class="text-2xl font-bold text-primary dark:text-dark-primary mb-6">Languages</h3>
              <div class="grid grid-cols-2 gap-4">
                <div v-for="skill in skills.languages" :key="skill" 
                     class="p-4 bg-white/10 dark:bg-black/10 rounded-xl text-center hover:scale-105 transition-transform duration-300">
                  {{ skill }}
                </div>
              </div>
            </div>

            <!-- Frameworks -->
            <div class="bg-white/5 dark:bg-black/5 backdrop-blur-sm rounded-2xl p-8" data-aos="fade-up" data-aos-delay="100">
              <h3 class="text-2xl font-bold text-primary dark:text-dark-primary mb-6">Frameworks</h3>
              <div class="grid grid-cols-2 gap-4">
                <div v-for="skill in skills.frameworks" :key="skill" 
                     class="p-4 bg-white/10 dark:bg-black/10 rounded-xl text-center hover:scale-105 transition-transform duration-300">
                  {{ skill }}
                </div>
              </div>
            </div>

            <!-- Tools -->
            <div class="bg-white/5 dark:bg-black/5 backdrop-blur-sm rounded-2xl p-8" data-aos="fade-up" data-aos-delay="200">
              <h3 class="text-2xl font-bold text-primary dark:text-dark-primary mb-6">Tools</h3>
              <div class="grid grid-cols-2 gap-4">
                <div v-for="skill in skills.tools" :key="skill" 
                     class="p-4 bg-white/10 dark:bg-black/10 rounded-xl text-center hover:scale-105 transition-transform duration-300">
                  {{ skill }}
                </div>
              </div>
            </div>

            <!-- Databases -->
            <div class="bg-white/5 dark:bg-black/5 backdrop-blur-sm rounded-2xl p-8" data-aos="fade-up" data-aos-delay="300">
              <h3 class="text-2xl font-bold text-primary dark:text-dark-primary mb-6">Databases</h3>
              <div class="grid grid-cols-2 gap-4">
                <div v-for="skill in skills.databases" :key="skill" 
                     class="p-4 bg-white/10 dark:bg-black/10 rounded-xl text-center hover:scale-105 transition-transform duration-300">
                  {{ skill }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import '@/assets/css/animations.css'
import { initTextAnimations } from '@/assets/js/text-animations.js'

export default {
  name: 'Skills',
  data() {
    return {
      skills: {
        languages: ['JavaScript', 'Python', 'TypeScript', 'HTML/CSS'],
        frameworks: ['Vue.js', 'React', 'Node.js', 'Django'],
        tools: ['Git', 'Docker', 'VS Code', 'Figma'],
        databases: ['MongoDB', 'PostgreSQL', 'MySQL']
      }
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
  }
}
</script>

<style scoped>
/* Component specific styles */
</style> 