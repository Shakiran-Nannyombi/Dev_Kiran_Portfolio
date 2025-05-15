<script>
export default {
  name: 'App'
}
</script>

<template>
  <div class="min-h-screen">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 transition-transform duration-300">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <router-link to="/" class="text-2xl font-bold text-primary dark:text-dark-primary">
            Kiran
          </router-link>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex space-x-8">
            <router-link to="/" class="nav-link">Home</router-link>
            <router-link to="/about" class="nav-link">About</router-link>
            <router-link to="/skills" class="nav-link">Skills</router-link>
            <router-link to="/experience" class="nav-link">Experience</router-link>
            <router-link to="/projects" class="nav-link">Projects</router-link>
            <router-link to="/services" class="nav-link">Services</router-link>
            <router-link to="/blog" class="nav-link">Blog</router-link>
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </div>

          <!-- Mobile Menu Button -->
          <button id="menu-icon" class="md:hidden">
            <span class="block w-6 h-0.5 bg-text dark:bg-dark-text mb-1.5 transition-transform"></span>
            <span class="block w-6 h-0.5 bg-text dark:bg-dark-text mb-1.5 transition-opacity"></span>
            <span class="block w-6 h-0.5 bg-text dark:bg-dark-text transition-transform"></span>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div id="mobile-menu" class="md:hidden hidden">
        <div class="container mx-auto px-4 py-4 space-y-4">
          <router-link to="/" class="mobile-nav-link">Home</router-link>
          <router-link to="/about" class="mobile-nav-link">About</router-link>
          <router-link to="/skills" class="mobile-nav-link">Skills</router-link>
          <router-link to="/experience" class="mobile-nav-link">Experience</router-link>
          <router-link to="/projects" class="mobile-nav-link">Projects</router-link>
          <router-link to="/services" class="mobile-nav-link">Services</router-link>
          <router-link to="/blog" class="mobile-nav-link">Blog</router-link>
          <router-link to="/contact" class="mobile-nav-link">Contact</router-link>
        </div>
      </div>
    </nav>

    <!-- Theme Toggle -->
    <button id="theme-toggle" class="fixed bottom-4 right-4 p-3 rounded-full bg-white/10 backdrop-blur-sm dark:bg-gray-900/10 text-primary dark:text-dark-primary">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
      </svg>
    </button>

    <!-- Router View -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style>
/* Navigation Links */
.nav-link {
  @apply text-gray-800 dark:text-white hover:text-primary dark:hover:text-dark-primary transition-colors duration-300;
}

.nav-link.router-link-active {
  @apply text-primary dark:text-dark-primary;
}

/* Mobile Navigation Links */
.mobile-nav-link {
  @apply block text-gray-800 dark:text-white hover:text-primary dark:hover:text-dark-primary transition-colors duration-300;
}

.mobile-nav-link.router-link-active {
  @apply text-primary dark:text-dark-primary;
}

/* Page Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
