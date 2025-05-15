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
              Crafting digital experiences with modern technologies and creative solutions
            </p>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section id="services" class="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div class="container mx-auto px-8">
          <div class="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
            <!-- Services List -->
            <div class="w-full md:w-1/2" data-aos="fade-right">
              <h2 class="text-3xl font-bold text-primary dark:text-dark-primary mb-8">Services I Offer</h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div class="p-6 rounded-xl bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div class="flex flex-col items-center text-center gap-4">
                    <div class="w-16 h-16 rounded-full bg-primary/10 dark:bg-dark-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg class="w-8 h-8 text-primary dark:text-dark-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 class="text-xl font-semibold">Web Development</h3>
                    <p class="text-gray-600 dark:text-gray-400">Modern and responsive websites built with the latest technologies</p>
                  </div>
                </div>
                <div class="p-6 rounded-xl bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div class="flex flex-col items-center text-center gap-4">
                    <div class="w-16 h-16 rounded-full bg-secondary/10 dark:bg-dark-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg class="w-8 h-8 text-secondary dark:text-dark-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    </div>
                    <h3 class="text-xl font-semibold">UI/UX Design</h3>
                    <p class="text-gray-600 dark:text-gray-400">Creating intuitive and visually appealing user interfaces</p>
                  </div>
                </div>
                <div class="p-6 rounded-xl bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div class="flex flex-col items-center text-center gap-4">
                    <div class="w-16 h-16 rounded-full bg-accent/10 dark:bg-dark-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg class="w-8 h-8 text-accent dark:text-dark-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 class="text-xl font-semibold">Data Science</h3>
                    <p class="text-gray-600 dark:text-gray-400">Analyzing and interpreting complex data to drive business decisions</p>
                  </div>
                </div>
                <div class="p-6 rounded-xl bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div class="flex flex-col items-center text-center gap-4">
                    <div class="w-16 h-16 rounded-full bg-primary/10 dark:bg-dark-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg class="w-8 h-8 text-primary dark:text-dark-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h3 class="text-xl font-semibold">Full Stack Development</h3>
                    <p class="text-gray-600 dark:text-gray-400">Building complete web applications from front to back</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Image Section with Animation -->
            <div class="w-full md:w-1/2" data-aos="fade-left">
              <div class="relative">
                <div class="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
                <div class="relative rounded-2xl overflow-hidden border border-gray-200/20 dark:border-gray-700/20 backdrop-blur-sm">
                  <img src="/assets/images/about.png" alt="Skills Illustration" class="w-full h-auto dark:hidden">
                  <img src="/assets/images/about1.png" alt="Skills Illustration" class="w-full h-auto hidden dark:block">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Technologies Section -->
      <section class="py-20">
        <div class="container mx-auto px-8">
          <!-- Languages -->
          <div class="mb-20" data-aos="fade-up">
            <h2 class="text-3xl font-bold text-center text-primary dark:text-dark-primary mb-12">Languages & Frameworks</h2>
            <div class="relative">
              <div class="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background dark:from-gray-900 to-transparent z-10"></div>
              <div class="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background dark:from-gray-900 to-transparent z-10"></div>
              <div class="flex animate-infinite-scroll">
                <div class="flex gap-8 items-center whitespace-nowrap px-4">
                  <div class="group flex items-center gap-3 px-6 py-4 rounded-xl bg-white/10 dark:bg-black/10 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 border border-gray-200/20 dark:border-gray-700/20">
                    <img src="/assets/images/tech/javascript.svg" alt="JavaScript" class="w-8 h-8 group-hover:scale-110 transition-transform duration-300">
                    <span class="font-medium">JavaScript</span>
                  </div>
                  <div class="group flex items-center gap-3 px-6 py-4 rounded-xl bg-white/10 dark:bg-black/10 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 border border-gray-200/20 dark:border-gray-700/20">
                    <img src="/assets/images/tech/python.svg" alt="Python" class="w-8 h-8 group-hover:scale-110 transition-transform duration-300">
                    <span class="font-medium">Python</span>
                  </div>
                  <div class="group flex items-center gap-3 px-6 py-4 rounded-xl bg-white/10 dark:bg-black/10 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 border border-gray-200/20 dark:border-gray-700/20">
                    <img src="/assets/images/tech/tailwind.svg" alt="TailwindCSS" class="w-8 h-8 group-hover:scale-110 transition-transform duration-300">
                    <span class="font-medium">TailwindCSS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Tools -->
          <div class="mb-20" data-aos="fade-up" data-aos-delay="200">
            <h2 class="text-3xl font-bold text-center text-primary dark:text-dark-primary mb-12">Development Tools</h2>
            <div class="relative">
              <div class="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background dark:from-gray-900 to-transparent z-10"></div>
              <div class="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background dark:from-gray-900 to-transparent z-10"></div>
              <div class="flex animate-infinite-scroll-reverse">
                <div class="flex gap-8 items-center whitespace-nowrap px-4">
                  <div class="group flex items-center gap-3 px-6 py-4 rounded-xl bg-white/10 dark:bg-black/10 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 border border-gray-200/20 dark:border-gray-700/20">
                    <img src="/assets/images/tools/figma.svg" alt="Figma" class="w-8 h-8 group-hover:scale-110 transition-transform duration-300">
                    <span class="font-medium">Figma</span>
                  </div>
                  <div class="group flex items-center gap-3 px-6 py-4 rounded-xl bg-white/10 dark:bg-black/10 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 border border-gray-200/20 dark:border-gray-700/20">
                    <img src="/assets/images/tools/framer.svg" alt="Framer" class="w-8 h-8 group-hover:scale-110 transition-transform duration-300">
                    <span class="font-medium">Framer</span>
                  </div>
                  <div class="group flex items-center gap-3 px-6 py-4 rounded-xl bg-white/10 dark:bg-black/10 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 border border-gray-200/20 dark:border-gray-700/20">
                    <img src="/assets/images/tools/canva.svg" alt="Canva" class="w-8 h-8 group-hover:scale-110 transition-transform duration-300">
                    <span class="font-medium">Canva</span>
                  </div>
                  <div class="group flex items-center gap-3 px-6 py-4 rounded-xl bg-white/10 dark:bg-black/10 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 border border-gray-200/20 dark:border-gray-700/20">
                    <img src="/assets/images/tools/vscode.svg" alt="VS Code" class="w-8 h-8 group-hover:scale-110 transition-transform duration-300">
                    <span class="font-medium">VS Code</span>
                  </div>
                  <div class="group flex items-center gap-3 px-6 py-4 rounded-xl bg-white/10 dark:bg-black/10 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300 border border-gray-200/20 dark:border-gray-700/20">
                    <img src="/assets/images/tools/cursor.svg" alt="Cursor" class="w-8 h-8 dark:invert group-hover:scale-110 transition-transform duration-300">
                    <span class="font-medium">Cursor</span>
                  </div>
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
  name: 'Skills',
  data() {
    return {
      // Add your skills data here
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
.animate-infinite-scroll {
  animation: scroll 20s linear infinite;
}

.animate-infinite-scroll-reverse {
  animation: scroll-reverse 20s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes scroll-reverse {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style> 