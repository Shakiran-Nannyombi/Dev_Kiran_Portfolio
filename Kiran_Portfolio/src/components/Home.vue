<template>
  <div id="content-wrapper" class="relative z-2 min-h-screen w-full">
    <div class="bg-pattern-light dark:bg-pattern-dark">
      <div class="container mx-auto px-4 py-16">
        <!-- Hero Section -->
        <section class="min-h-screen flex items-center justify-center">
          <div class="text-center space-y-6">
            <h2 class="slide-in-left text-2xl md:text-3xl font-serif text-text dark:text-dark-text">
              Welcome to my Portfolio
            </h2>
            <h1 class="typing-text text-4xl md:text-6xl font-bold text-primary dark:text-dark-primary">
              Kiran's Portfolio
            </h1>
            <p class="slide-in-right text-xl md:text-2xl text-text dark:text-dark-text">
              Full Stack Developer & Designer
            </p>
          </div>
        </section>

        <!-- Skills Section -->
        <section class="py-16">
          <div class="animate-scroll-left flex space-x-8 overflow-hidden">
            <!-- Add your skills content here -->
          </div>
        </section>

        <!-- Projects Section -->
        <section class="py-16">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Add your projects content here -->
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      // Add your data properties here
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
  },
  methods: {
    // Add your methods here
  }
}
</script>

<style scoped>
/* The animations and base styles are already defined in your animations.css */
/* Additional component-specific styles can be added here */
</style>
