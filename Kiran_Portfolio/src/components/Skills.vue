<template>
  <div id="content-wrapper" class="relative z-2 min-h-screen w-full">
    <div class="bg-pattern-light dark:bg-pattern-dark">
      <div class="container mx-auto px-4 py-16">
        <section class="min-h-screen">
          <h1 class="text-4xl md:text-5xl font-bold text-primary dark:text-dark-primary mb-8">
            Skills & Expertise
          </h1>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Frontend Skills -->
            <div class="p-6 rounded-lg bg-white/10 backdrop-blur-sm dark:bg-gray-900/10">
              <h2 class="text-2xl font-bold text-primary dark:text-dark-primary mb-4">Frontend</h2>
              <div class="space-y-4">
                <!-- Add your frontend skills here -->
              </div>
            </div>

            <!-- Backend Skills -->
            <div class="p-6 rounded-lg bg-white/10 backdrop-blur-sm dark:bg-gray-900/10">
              <h2 class="text-2xl font-bold text-primary dark:text-dark-primary mb-4">Backend</h2>
              <div class="space-y-4">
                <!-- Add your backend skills here -->
              </div>
            </div>

            <!-- Tools & Others -->
            <div class="p-6 rounded-lg bg-white/10 backdrop-blur-sm dark:bg-gray-900/10">
              <h2 class="text-2xl font-bold text-primary dark:text-dark-primary mb-4">Tools & Others</h2>
              <div class="space-y-4">
                <!-- Add your tools and other skills here -->
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
  name: 'Skills',
  data() {
    return {
      // Add your skills data here
    }
  }
}
</script>

<style scoped>
/* Component specific styles */
</style> 