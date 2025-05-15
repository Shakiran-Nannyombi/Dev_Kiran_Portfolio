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
            <router-link to="/services" class="nav-link">Services</router-link>
            <router-link to="/projects" class="nav-link">Projects</router-link>
            <router-link to="/blog" class="nav-link">Blog</router-link>
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </div>

          <!-- Mobile Menu Button -->
          <button id="menu-icon" class="md:hidden">
            <span class="block w-6 h-0.5 bg-primary dark:bg-dark-primary mb-1.5 transition-transform"></span>
            <span class="block w-6 h-0.5 bg-primary dark:bg-dark-primary mb-1.5 transition-opacity"></span>
            <span class="block w-6 h-0.5 bg-primary dark:bg-dark-primary transition-transform"></span>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div id="mobile-menu" class="md:hidden hidden">
        <div class="px-4 py-2 space-y-2">
          <router-link to="/" class="mobile-nav-link">Home</router-link>
          <router-link to="/about" class="mobile-nav-link">About</router-link>
          <router-link to="/skills" class="mobile-nav-link">Skills</router-link>
          <router-link to="/experience" class="mobile-nav-link">Experience</router-link>
          <router-link to="/services" class="mobile-nav-link">Services</router-link>
          <router-link to="/projects" class="mobile-nav-link">Projects</router-link>
          <router-link to="/blog" class="mobile-nav-link">Blog</router-link>
          <router-link to="/contact" class="mobile-nav-link">Contact</router-link>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="pt-16">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style>
.nav-link {
  @apply text-gray-800 dark:text-white hover:text-primary dark:hover:text-dark-primary transition-colors duration-300;
}

.mobile-nav-link {
  @apply block py-2 text-gray-800 dark:text-white hover:text-primary dark:hover:text-dark-primary transition-colors duration-300;
}

/* Router Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
