<template>
  <div id="content-wrapper" class="relative z-2 min-h-screen w-full">
    <div class="bg-pattern-light dark:bg-pattern-dark">
      <!-- Hero Section -->
      <section class="relative py-20 overflow-hidden">
        <div class="container mx-auto px-8">
          <div class="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h1 class="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              My Projects
            </h1>
            <p class="text-lg md:text-xl text-gray-600 dark:text-gray-400">
              A collection of my work in web development, data science, and design
            </p>
          </div>
        </div>
      </section>

      <!-- Featured Projects Section -->
      <section class="py-20">
        <div class="container mx-auto px-8">
          <h2 class="text-3xl font-bold text-primary dark:text-dark-primary mb-12" data-aos="fade-up">Featured Projects</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Featured Project 1 -->
            <div class="group relative overflow-hidden rounded-2xl bg-white/5 dark:bg-black/5 backdrop-blur-sm" data-aos="fade-up">
              <div class="relative aspect-video overflow-hidden">
                <!-- Image placeholder -->
                <div class="w-full h-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
              </div>
              <div class="p-6">
                <div class="flex gap-2 mb-4">
                  <span class="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary dark:bg-dark-primary/10 dark:text-dark-primary">Web Development</span>
                  <span class="px-3 py-1 text-sm rounded-full bg-secondary/10 text-secondary dark:bg-dark-secondary/10 dark:text-dark-secondary">Vue.js</span>
                </div>
                <h3 class="text-xl font-bold text-text dark:text-dark-text mb-2">Portfolio Website</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4">A modern portfolio website built with Vue.js and TailwindCSS...</p>
                <div class="flex items-center gap-4">
                  <a href="#" class="text-primary dark:text-dark-primary hover:text-secondary dark:hover:text-dark-secondary transition-colors duration-300">
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  <a href="#" class="text-primary dark:text-dark-primary hover:text-secondary dark:hover:text-dark-secondary transition-colors duration-300">
                    Source Code
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <!-- Featured Project 2 -->
            <div class="group relative overflow-hidden rounded-2xl bg-white/5 dark:bg-black/5 backdrop-blur-sm" data-aos="fade-up" data-aos-delay="100">
              <div class="relative aspect-video overflow-hidden">
                <!-- Image placeholder -->
                <div class="w-full h-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
              </div>
              <div class="p-6">
                <div class="flex gap-2 mb-4">
                  <span class="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary dark:bg-dark-primary/10 dark:text-dark-primary">Data Science</span>
                  <span class="px-3 py-1 text-sm rounded-full bg-secondary/10 text-secondary dark:bg-dark-secondary/10 dark:text-dark-secondary">Python</span>
                </div>
                <h3 class="text-xl font-bold text-text dark:text-dark-text mb-2">Data Analysis Dashboard</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4">An interactive dashboard for analyzing and visualizing data...</p>
                <div class="flex items-center gap-4">
                  <a href="#" class="text-primary dark:text-dark-primary hover:text-secondary dark:hover:text-dark-secondary transition-colors duration-300">
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  <a href="#" class="text-primary dark:text-dark-primary hover:text-secondary dark:hover:text-dark-secondary transition-colors duration-300">
                    Source Code
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Project Categories Section -->
      <section class="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div class="container mx-auto px-8">
          <h2 class="text-3xl font-bold text-primary dark:text-dark-primary mb-12" data-aos="fade-up">Project Categories</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <!-- Category 1 -->
            <div class="p-6 rounded-xl bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group" data-aos="fade-up">
              <div class="flex flex-col items-center text-center gap-4">
                <div class="w-16 h-16 rounded-full bg-primary/10 dark:bg-dark-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8 text-primary dark:text-dark-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold">Web Development</h3>
                <p class="text-gray-600 dark:text-gray-400">5 Projects</p>
              </div>
            </div>

            <!-- Category 2 -->
            <div class="p-6 rounded-xl bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group" data-aos="fade-up" data-aos-delay="100">
              <div class="flex flex-col items-center text-center gap-4">
                <div class="w-16 h-16 rounded-full bg-secondary/10 dark:bg-dark-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8 text-secondary dark:text-dark-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold">Data Science</h3>
                <p class="text-gray-600 dark:text-gray-400">3 Projects</p>
              </div>
            </div>

            <!-- Category 3 -->
            <div class="p-6 rounded-xl bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group" data-aos="fade-up" data-aos-delay="200">
              <div class="flex flex-col items-center text-center gap-4">
                <div class="w-16 h-16 rounded-full bg-accent/10 dark:bg-dark-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8 text-accent dark:text-dark-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold">UI/UX Design</h3>
                <p class="text-gray-600 dark:text-gray-400">4 Projects</p>
              </div>
            </div>

            <!-- Category 4 -->
            <div class="p-6 rounded-xl bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group" data-aos="fade-up" data-aos-delay="300">
              <div class="flex flex-col items-center text-center gap-4">
                <div class="w-16 h-16 rounded-full bg-primary/10 dark:bg-dark-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8 text-primary dark:text-dark-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 class="text-xl font-semibold">Mobile Apps</h3>
                <p class="text-gray-600 dark:text-gray-400">2 Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- All Projects Section -->
      <section class="py-20">
        <div class="container mx-auto px-8">
          <h2 class="text-3xl font-bold text-primary dark:text-dark-primary mb-12" data-aos="fade-up">All Projects</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Project 1 -->
            <div class="group relative overflow-hidden rounded-2xl bg-white/5 dark:bg-black/5 backdrop-blur-sm" data-aos="fade-up">
              <div class="relative aspect-video overflow-hidden">
                <!-- Image placeholder -->
                <div class="w-full h-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
              </div>
              <div class="p-6">
                <div class="flex gap-2 mb-4">
                  <span class="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary dark:bg-dark-primary/10 dark:text-dark-primary">Web Development</span>
                </div>
                <h3 class="text-xl font-bold text-text dark:text-dark-text mb-2">E-commerce Platform</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4">A full-featured e-commerce platform with modern design...</p>
                <div class="flex items-center gap-4">
                  <a href="#" class="text-primary dark:text-dark-primary hover:text-secondary dark:hover:text-dark-secondary transition-colors duration-300">
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <!-- Project 2 -->
            <div class="group relative overflow-hidden rounded-2xl bg-white/5 dark:bg-black/5 backdrop-blur-sm" data-aos="fade-up" data-aos-delay="100">
              <div class="relative aspect-video overflow-hidden">
                <!-- Image placeholder -->
                <div class="w-full h-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
              </div>
              <div class="p-6">
                <div class="flex gap-2 mb-4">
                  <span class="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary dark:bg-dark-primary/10 dark:text-dark-primary">Data Science</span>
                </div>
                <h3 class="text-xl font-bold text-text dark:text-dark-text mb-2">Machine Learning Model</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4">A predictive model for analyzing customer behavior...</p>
                <div class="flex items-center gap-4">
                  <a href="#" class="text-primary dark:text-dark-primary hover:text-secondary dark:hover:text-dark-secondary transition-colors duration-300">
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <!-- Project 3 -->
            <div class="group relative overflow-hidden rounded-2xl bg-white/5 dark:bg-black/5 backdrop-blur-sm" data-aos="fade-up" data-aos-delay="200">
              <div class="relative aspect-video overflow-hidden">
                <!-- Image placeholder -->
                <div class="w-full h-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
              </div>
              <div class="p-6">
                <div class="flex gap-2 mb-4">
                  <span class="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary dark:bg-dark-primary/10 dark:text-dark-primary">UI/UX Design</span>
                </div>
                <h3 class="text-xl font-bold text-text dark:text-dark-text mb-2">Design System</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-4">A comprehensive design system for web applications...</p>
                <div class="flex items-center gap-4">
                  <a href="#" class="text-primary dark:text-dark-primary hover:text-secondary dark:hover:text-dark-secondary transition-colors duration-300">
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
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
export default {
  name: 'Projects',
  data() {
    return {
      // Add your projects data here
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
  }
}
</script>

<style scoped>
/* Component specific styles */
</style>
