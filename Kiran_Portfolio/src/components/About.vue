<template>

  <div id="content-wrapper" class="relative z-2 min-h-screen w-full">

    <div class="bg-background dark:bg-dark-background">

      <div class="container mx-auto px-4 py-16">
        <section id="about" class="min-h-screen py-8 sm:py-15 relative overflow-hidden">
          <h1 class="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent mb-8">
            About Me
          </h1>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Image on the left -->

            <!-- Image Container with gradient border animation -->
          <div class="w-full flex justify-center mb-4 sm:mb-8" data-aos="fade-up" data-aos-delay="100">
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
              <p class="text-lg text-text/80 dark:text-dark-text/80 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
                I'm a Software Engineer in the making, passionate about <span class="font-bold">Data Science, Web Development, and Design</span>.
                I love exploring new technologies, building user-friendly applications, and sharing what I learn.
                Currently, I'm honing my skills in <span class="font-bold">JavaScript and Python</span>, constantly pushing my boundaries. <br>
                Let's build something amazing together!
              </p>
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
      // Add your data properties here
    }
  }
}
</script>

<style scoped>
/* Component specific styles */
</style>