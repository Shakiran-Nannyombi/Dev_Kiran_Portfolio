<template>
  <div id="content-wrapper" class="relative z-2 min-h-screen w-full">
    <div class="bg-pattern-light dark:bg-pattern-dark">
      <!-- Hero Section -->
      <section class="relative py-16 overflow-hidden">
        <div class="container mx-auto mt-24 px-8">
          <div class="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h1 class="text-4xl md:text-6xl font-bold text-primary mb-12 text-center">
              Skills & Expertise
            </h1>
            <img
              src="/assets/images/skills-hero-light.svg"
              alt="Skills Illustration Light"
              class="mx-auto mb-12 w-72 md:w-96 rounded-lg shadow-lg animate-fade-in block dark:hidden"
            />
            <img
              src="/assets/images/skills-hero-dark.svg"
              alt="Skills Illustration Dark"
              class="mx-auto mb-12 w-72 md:w-96 rounded-lg shadow-lg animate-fade-in hidden dark:block"
            />
            <p class="text-lg md:text-2xl text-text dark:text-dark-text mb-8">
              A comprehensive overview of my technical skills and expertise
            </p>
          </div>
        </div>
      </section>

      <!-- My Skills Cards Section -->
      <section class="py-16">
        <div class="container mx-auto px-8">
          <h2 class="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent mb-12 text-center" data-aos="fade-up">
            My Skills
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Skill Card Example -->
            <div class="bg-white/80 dark:bg-dark-text/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-100 dark:border-gray-800" data-aos="fade-up">
              <div class="p-8">
                <div class="mb-6 flex items-center">
                  <img src="/assets/images/website.png" alt="Vue.js" class="h-12 w-12 mr-4">
                  <h3 class="text-2xl font-bold text-primary dark:text-dark-primary">Website Buliding</h3>
                </div>
                <p class="text-text dark:text-dark-background">
                  I specialize in building responsive and user-friendly websites using modern frameworks. My focus is on creating seamless user experiences and optimizing performance.
                </p>
              </div>
            </div>
            
            <!-- Add more skill cards here -->
            <div class="bg-white/80 dark:bg-dark-text/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-100 dark:border-gray-800" data-aos="fade-up">
              <div class="p-8">
                <div class="mb-6 flex items-center">
                  <img src="/assets/images/tech/app.svg" alt="Mobile App Development" class="h-12 w-12 mr-4">
                  <h3 class="text-2xl font-bold text-primary dark:text-dark-primary">Mobile App Development</h3>
                </div>
                <p class="text-text dark:text-dark-background">
                  I am building experiences with mobile Development. I'm focusing on creating intuitive and engaging mobile applications that meet user needs.
                </p>
              </div>
            </div>

            <!-- Add more skill cards here -->
            <div class="bg-white/80 dark:bg-dark-text/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-100 dark:border-gray-800" data-aos="fade-up">
              <div class="p-8">
                <div class="mb-6 flex items-center">
                  <img src="/assets/images/data.png" alt="Mobile App Development" class="h-12 w-12 mr-4">
                  <h3 class="text-2xl font-bold text-primary dark:text-dark-primary">Data Science</h3>
                </div>
                <p class="text-text dark:text-dark-background">
                  I am building experiences with Data Science. I'm focusing on creating intuitive and engaging data-driven applications that meet user needs.
                </p>
              </div>
            </div>

            <div class="bg-white/80 dark:bg-dark-text/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-100 dark:border-gray-800" data-aos="fade-up">
              <div class="p-8">
                <div class="mb-6 flex items-center">
                  <img src="/assets/images/UIUX.png" alt="AI & ML" class="h-12 w-12 mr-4">
                  <h3 class="text-2xl font-bold text-primary dark:text-dark-primary">UI/UX Design</h3>
                </div>
                <p class="text-text dark:text-dark-background">
                  I am building experiences with UI/UX Design. I'm focusing on creating intuitive and engaging designs that meet user needs.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

       <!-- Certificates Section -->
        <section id="certificates" class="min-h-screen py-8 sm:py-15 relative overflow-hidden">
          <h2 class="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent  mb-12 text-center">
            Certificates
          </h2>
          
          <!-- Decorative elements -->
          <div class="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div class="absolute bottom-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            <!-- Certificate Card 1 -->
            <div class="group bg-white/80 dark:bg-dark-card/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-100 dark:border-gray-800" data-aos="fade-up" data-aos-delay="100">
              <div class="p-8">
                <div class="mb-6">
                  <div class="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 class="text-2xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">Certificate Title 1</h3>
                  <p class="text-text dark:text-dark-background mb-4 font-medium">Issuing Organization</p>
                  <p class="text-sm text-text dark:text-dark-background flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Month Year
                  </p>
                </div>
                <a href="#" class="inline-flex items-center text-primary hover:text-secondary transition-colors group-hover:translate-x-2 duration-300">
                  View Certificate
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

      <!-- Logo Grid Section -->
      <section class="py-8 relative ">
        <div class="container mx-auto px-8">
          <h2 class="text-4xl font-bold text-primary dark:text-dark-primary mb-6 text-center">
            Frameworks & Tools
          </h2>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-12 gap-x-8 items-center justify-items-center py-8">
            <div
              v-for="tool in logoGrid"
              :key="tool.name"
              class="flex flex-col items-center"
            >
              <img
                :src="tool.image"
                :alt="tool.name"
                class="h-10 w-auto max-w-[120px] mb-2"
                draggable="false"
              />
              <span class="text-base font-semibold text-text dark:text-dark-text tracking-wide">{{ tool.name }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Grid Section -->
      <section class="py-8">
        <div class="container mx-auto px-8 mb-16">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <!-- Languages -->
            <div class="bg-white/5 dark:bg-black/5 backdrop-blur-sm rounded-2xl p-8" data-aos="fade-up">
              <h3 class="text-4xl font-bold text-primary dark:text-dark-primary mb-6">Languages</h3>
              <!-- GitHub Language Grid -->
              <div class="flex justify-center mb-6">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=Shakiran-Nannyombi&layout=compact&theme=radical"
                alt="GitHub Language Stats"
                class="rounded-lg shadow-lg"
                style="max-width: 100%; height: auto;"
              />
              </div>
            </div>
          </div>

          <!-- Badges Section -->
          <div class="bg-white/5 dark:bg-black/5 backdrop-blur-sm rounded-2xl p-8" data-aos="fade-up">
            <h3 class="text-4xl font-bold text-primary dark:text-dark-primary mb-6">Badges</h3>
            <div class="flex flex-wrap gap-4">
              <!-- <img
                src="https://img.shields.io/badge/Certified-Frontend_Developer-brightgreen"
                alt="Frontend Developer Badge"
                class="h-10"
              /> -->
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

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

export default {
  name: 'Skills',
  data() {
    return {
      logoGrid: [
         { name: 'Vue.js', image: '/assets/images/tech/vue.svg' },
          { name: 'React', image: '/assets/images/tech/react.svg' },
          { name: 'Node.js', image: '/assets/images/tech/nodejs.svg' },
          { name: 'Tailwind CSS', image: '/assets/images/tech/tailwind.svg'},
          { name: 'Bootstrap', image: '/assets/images/tech/bootstrap.svg' },
          { name: 'Express.js', image: '/assets/images/tech/express.svg' },
          { name: 'MongoDB', image: '/assets/images/tech/mongodb.svg' },
          { name: 'Laravel', image: '/assets/images/tech/laravel.png' },
          { name: 'Python', image: '/assets/images/tech/python.svg' },
           { name: 'Git', image: '/assets/images/tech/git.svg' },
          { name: 'VS Code', image: '/assets/images/tech/vscode.svg' },
          { name: 'Figma', image: '/assets/images/tech/figma.svg' },
          { name: 'Postman', image: '/assets/images/tech/postman.png' },
          { name: 'AWS', image: '/assets/images/tech/aws.svg' },
          { name: 'Canva', image: '/assets/images/tech/canva.svg' }
      ]
    }
  },
  computed: {
    scatteredSkills() {
      // Combine only frameworks and tools into one array with random positions
      const arr = [];
      
      // Frameworks
      this.skills.frameworks.forEach(fw => {
        arr.push({
          name: fw.name,
          image: fw.image,
          left: getRandom(5, 90),
          top: getRandom(5, 90)
        });
      });
      // Tools
      this.skills.tools.forEach(tool => {
        arr.push({
          name: tool.name,
          image: tool.image,
          left: getRandom(5, 90),
          top: getRandom(5, 90)
        });
      });
      
      // Add Languages and Databases back to a separate static list if needed, or remove them entirely
      // For now, only frameworks and tools will be scattered.

      return arr;
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

/* Optional: prevent overflow of skill bubbles */
section.relative > .relative {
  min-height: 400px;
  max-width: 100%;
}
</style>