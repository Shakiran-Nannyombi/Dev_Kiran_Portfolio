  <!-- About Section -->
  <section id="about" class="min-h-screen py-8 sm:py-15 relative overflow-hidden">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center max-w-6xl mx-auto">
        <!-- Image Container with gradient border animation -->
        <div class="w-full flex justify-center mb-4 sm:mb-8" data-aos="fade-up" data-aos-delay="100">
          <div class="relative group">
            <div class="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] overflow-hidden rounded-[20%] relative">
              <!-- Gradient Border -->
              <div class="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-[20%] animate-gradient-border">
              <!-- Image -->
              <img 
                :src="meImage" 
                alt="Dev_Kiran" 
                class="relative w-full h-full object-cover object-center transform group-hover:scale-105 transition duration-700 rounded-[20%] p-[8px]"
              >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="projects" class="min-h-screen py-12 sm:py-20">
    <div class="container mx-auto px-4 sm:px-8">
      <!-- Section Header -->
      <div class="text-center mb-8 sm:mb-16" data-aos="fade-up">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent mb-4">
          Selected Projects
        </h2>
        <p class="text-base sm:text-lg text-text/80 dark:text-dark-text/80 max-w-2xl mx-auto px-4">
          Here are some of my featured projects that showcase my skills in web development, design, and problem-solving.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
        <!-- Project cards with hover effects -->
        <div class="group relative overflow-hidden rounded-2xl bg-white/5 dark:bg-black/5 backdrop-blur-sm" data-aos="fade-up">
          <div class="relative aspect-video overflow-hidden">
            <img src="/assets/images/project.jpeg" alt="Project" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-500">
          </div>
          <div class="p-4 sm:p-6">
            <h3 class="text-lg sm:text-xl font-bold text-text dark:text-dark-text mb-2">Demo Project Template</h3>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-primary/10 text-primary dark:bg-dark-primary/10 dark:text-dark-primary">Web Design</span>
              <span class="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-secondary/10 text-secondary dark:bg-dark-secondary/10 dark:text-dark-secondary">Frontend Development</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> 