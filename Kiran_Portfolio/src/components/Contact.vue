<template>
  <div id="content-wrapper" class="relative z-2 min-h-screen w-full">
    <div class="bg-pattern-light dark:bg-pattern-dark">
      <div class="container mx-auto px-4 py-16">
        <section class="min-h-screen">
          <h1 class="text-4xl md:text-5xl font-bold text-primary dark:text-dark-primary mb-8">
            Contact Me
          </h1>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Contact Form -->
            <div class="p-6 rounded-lg bg-white/10 backdrop-blur-sm dark:bg-gray-900/10">
              <form @submit.prevent="handleSubmit" class="space-y-6">
                <div>
                  <label for="name" class="block text-text dark:text-dark-text mb-2">Name</label>
                  <input type="text" id="name" v-model="form.name" required
                    class="w-full px-4 py-2 rounded-lg bg-white/5 border border-gray-300 dark:border-gray-700 text-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary">
                </div>
                <div>
                  <label for="email" class="block text-text dark:text-dark-text mb-2">Email</label>
                  <input type="email" id="email" v-model="form.email" required
                    class="w-full px-4 py-2 rounded-lg bg-white/5 border border-gray-300 dark:border-gray-700 text-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary">
                </div>
                <div>
                  <label for="message" class="block text-text dark:text-dark-text mb-2">Message</label>
                  <textarea id="message" v-model="form.message" rows="4" required
                    class="w-full px-4 py-2 rounded-lg bg-white/5 border border-gray-300 dark:border-gray-700 text-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary"></textarea>
                </div>
                <button type="submit"
                  class="w-full px-6 py-3 rounded-lg bg-primary dark:bg-dark-primary text-white hover:bg-opacity-90 transition-colors duration-300">
                  Send Message
                </button>
              </form>
            </div>

            <!-- Contact Information -->
            <div class="p-6 rounded-lg bg-white/10 backdrop-blur-sm dark:bg-gray-900/10">
              <div class="space-y-6">
                <div>
                  <h3 class="text-xl font-bold text-primary dark:text-dark-primary mb-2">Email</h3>
                  <p class="text-text dark:text-dark-text">your.email@example.com</p>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-primary dark:text-dark-primary mb-2">Location</h3>
                  <p class="text-text dark:text-dark-text">Your Location</p>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-primary dark:text-dark-primary mb-2">Social Media</h3>
                  <div class="flex space-x-4">
                    <!-- Add your social media links here -->
                  </div>
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
  name: 'Contact',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      // Add form submission logic here
      console.log('Form submitted:', this.form)
    }
  }
}
</script>

<style scoped>
/* Component specific styles */
</style> 