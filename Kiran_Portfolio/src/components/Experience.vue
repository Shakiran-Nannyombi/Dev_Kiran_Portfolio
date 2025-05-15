<template>
  <div id="content-wrapper" class="relative z-2 min-h-screen w-full">
    <div class="bg-pattern-light dark:bg-pattern-dark">
      <div class="container mx-auto px-4 py-16">
        <section class="min-h-screen">
          <h1 class="text-4xl md:text-5xl font-bold text-primary dark:text-dark-primary mb-8">
            Work Experience
          </h1>
          <div class="space-y-12">
            <!-- Experience Timeline -->
            <div class="relative">
              <!-- Timeline items will be added here -->
              <div class="border-l-2 border-primary dark:border-dark-primary pl-8 pb-12">
                <div class="absolute -left-3 mt-1.5 h-6 w-6 rounded-full border-2 border-primary dark:border-dark-primary bg-white dark:bg-gray-900"></div>
                <div class="p-6 rounded-lg bg-white/10 backdrop-blur-sm dark:bg-gray-900/10">
                  <h3 class="text-xl font-bold text-primary dark:text-dark-primary">Job Title</h3>
                  <p class="text-text dark:text-dark-text">Company Name</p>
                  <p class="text-sm text-gray-600 dark:text-gray-400">Duration</p>
                  <p class="mt-4 text-text dark:text-dark-text">
                    <!-- Add job description here -->
                  </p>
                </div>
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
  name: 'Experience',
  data() {
    return {
      // Add your experience data here
    }
  }
}
</script>

<style scoped>
/* Component specific styles */
</style> 