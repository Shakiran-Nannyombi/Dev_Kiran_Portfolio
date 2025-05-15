<template>
  <div id="content-wrapper" class="relative z-2 min-h-screen w-full">
    <div class="bg-pattern-light dark:bg-pattern-dark">
      <div class="container mx-auto px-4 py-16">
        <section class="min-h-screen">
          <h1 class="text-4xl md:text-5xl font-bold text-primary dark:text-dark-primary mb-8">
            About Me
          </h1>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="space-y-6">
              <p class="text-text dark:text-dark-text text-lg">
                <!-- Add your about text here -->
              </p>
            </div>
            <div class="flex items-center justify-center">
              <!-- Add your image here -->
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