<template>
  <div id="content-wrapper" class="relative z-2 min-h-screen w-full">
    
    <!-- Background Pattern -->
    <div class="bg-pattern-light dark:bg-pattern-dark">

      <!-- About Section -->
      <div class="container mx-auto px-4 py-16 mt-8">
        <section id="about" class="min-h-screen py-8 sm:py-15 relative overflow-hidden">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Image on the left -->

            <!-- Image Container with gradient border animation -->
          <div class="w-full flex justify-center mb-12 md:mb-4 sm:mb-8" data-aos="fade-up" data-aos-delay="100">
            <div class="relative group">
              <div class="w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] overflow-hidden rounded-[20%] relative">
                <!-- Gradient Border -->
                <div class="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-[20%] animate-gradient-border">
                <!-- Image -->
                <img 
                  src="/assets/images/me.jpg" 
                  alt="Dev_Kiran" 
                  class="relative w-full h-full object-cover object-center transform group-hover:scale-105 transition duration-700 rounded-[20%] p-[8px]"
                >
                </div>
              </div>
            </div>
          </div>

            <!-- Text on the right -->
            <div class="space-y-6 md:order-2 order-1 flex flex-col justify-center">
              <h1 class="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent mb-8">
                 About Me
              </h1>
              <p class="text-lg text-text/80 dark:text-dark-text/80 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                I'm a Software Engineer in the making, passionate about <span class="font-bold">Data Science, Web Development, and Design</span>.
                I love exploring new technologies, building user-friendly applications, and sharing what I learn.
                Currently, I'm honing my skills in <span class="font-bold">JavaScript and Python</span>, constantly pushing my boundaries. <br>
                Let's build something amazing together!
              </p>
            </div>
          </div>
        </section>

        <!-- Video Introduction Section -->
        <section id="video-intro" class="min-h-screen py-8 sm:py-15 relative overflow-hidden">
          <!-- Decorative elements -->
          <div class="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div class="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

          <div class="container mx-auto px-4">
            <h2 class="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
              Get to Know Me Better
            </h2>

            <div class="max-w-4xl mx-auto">
              <!-- Description -->
              <div class="mt-8 text-center">
                <p class="text-text/80 dark:text-dark-text/80 max-w-2xl mx-auto">
                  A brief introduction video where I share my journey, passion for technology, and what drives me to create innovative solutions.
                </p>
              </div>
              <!-- Add margin here for spacing -->
              
              <!-- Video Container -->
              <div class="relative group">
                <!-- Video Placeholder -->
                <div class="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 backdrop-blur-sm border border-gray-100 dark:border-gray-800 shadow-xl">
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="text-center">
                      <div class="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p class="text-lg text-text/80 dark:text-dark-text/80 font-medium">Coming Soon</p>
                    </div>
                  </div>
                </div>

                <!-- Decorative Elements -->
                <div class="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>

              
            </div>
          </div>
        </section>

        <!-- Certificates Section -->
        <section id="certificates" class="min-h-screen py-8 sm:py-15 relative overflow-hidden">
          <h2 class="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent mb-12 text-center">
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
                  <p class="text-text/80 dark:text-dark-text/80 mb-4 font-medium">Issuing Organization</p>
                  <p class="text-sm text-text/60 dark:text-dark-text/60 flex items-center">
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

            <!-- Certificate Card 2 -->
            <div class="group bg-white/80 dark:bg-dark-card/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-100 dark:border-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div class="p-8">
                <div class="mb-6">
                  <div class="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 class="text-2xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">Certificate Title 2</h3>
                  <p class="text-text/80 dark:text-dark-text/80 mb-4 font-medium">Issuing Organization</p>
                  <p class="text-sm text-text/60 dark:text-dark-text/60 flex items-center">
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

            <!-- Certificate Card 3 -->
            <div class="group bg-white/80 dark:bg-dark-card/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-100 dark:border-gray-800" data-aos="fade-up" data-aos-delay="300">
              <div class="p-8">
                <div class="mb-6">
                  <div class="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 class="text-2xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">Certificate Title 3</h3>
                  <p class="text-text/80 dark:text-dark-text/80 mb-4 font-medium">Issuing Organization</p>
                  <p class="text-sm text-text/60 dark:text-dark-text/60 flex items-center">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      certificates: [
        {
          title: 'Certificate Title 1',
          organization: 'Issuing Organization',
          date: 'Month Year',
          link: '#'
        },
        {
          title: 'Certificate Title 2',
          organization: 'Issuing Organization',
          date: 'Month Year',
          link: '#'
        },
        {
          title: 'Certificate Title 3',
          organization: 'Issuing Organization',
          date: 'Month Year',
          link: '#'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Component specific styles */
</style>