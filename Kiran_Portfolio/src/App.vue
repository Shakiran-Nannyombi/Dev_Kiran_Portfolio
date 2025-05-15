<script>
export default {
  name: 'App',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    }
  },
  watch: {
    $route() {
      this.closeMenu()
    }
  }
}
</script>

<template>
  <div class="min-h-screen">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
         :class="{ 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm': !isMenuOpen }">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <router-link to="/" class="text-2xl font-bold text-primary dark:text-dark-primary hover:opacity-80 transition-opacity">
            Kiran
          </router-link>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex space-x-8">
            <router-link v-for="route in routes" 
                        :key="route.path"
                        :to="route.path"
                        class="nav-link"
                        :class="{ 'text-primary dark:text-dark-primary': $route.path === route.path }">
              {{ route.name }}
            </router-link>
          </div>

          <!-- Mobile Menu Button -->
          <button @click="toggleMenu" class="md:hidden focus:outline-none">
            <div class="w-6 h-6 flex flex-col justify-center items-center">
              <span class="block w-6 h-0.5 bg-primary dark:bg-dark-primary mb-1.5 transition-all"
                    :class="{ 'transform rotate-45 translate-y-2': isMenuOpen }"></span>
              <span class="block w-6 h-0.5 bg-primary dark:bg-dark-primary mb-1.5 transition-all"
                    :class="{ 'opacity-0': isMenuOpen }"></span>
              <span class="block w-6 h-0.5 bg-primary dark:bg-dark-primary transition-all"
                    :class="{ 'transform -rotate-45 -translate-y-2': isMenuOpen }"></span>
            </div>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div class="md:hidden transition-all duration-300 ease-in-out"
           :class="{ 'max-h-96 opacity-100': isMenuOpen, 'max-h-0 opacity-0': !isMenuOpen }">
        <div class="px-4 py-2 space-y-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
          <router-link v-for="route in routes" 
                      :key="route.path"
                      :to="route.path"
                      class="mobile-nav-link"
                      :class="{ 'text-primary dark:text-dark-primary': $route.path === route.path }">
            {{ route.name }}
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="pt-16">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style>
.nav-link {
  @apply text-gray-800 dark:text-white hover:text-primary dark:hover:text-dark-primary transition-colors duration-300 relative;
}

.nav-link::after {
  content: '';
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-primary dark:bg-dark-primary transition-all duration-300;
}

.nav-link:hover::after,
.router-link-active::after {
  @apply w-full;
}

.mobile-nav-link {
  @apply block py-2 text-gray-800 dark:text-white hover:text-primary dark:hover:text-dark-primary transition-colors duration-300;
}

/* Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-out;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
