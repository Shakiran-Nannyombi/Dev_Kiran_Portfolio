<template>
  <nav
    :class="[
      'fixed top-0 left-0 w-full z-[9999] bg-transparent transition-all duration-300 ease-in-out flex justify-between items-center px-8 py-4 max-w-[12000px] mx-auto',
      { '-translate-y-full': hideNavbar, 'translate-y-0': !hideNavbar }
    ]"
    id="navbar"
  >
    <!-- Logo -->
    <router-link to="/" class="text-xl font-bold text-text dark:text-dark-text hover:text-primary dark:hover:text-dark-primary transition-colors duration-300">Dev_Kiran</router-link>

    <!-- Links for Large Screens -->
    <ul class="hidden md:flex gap-6 text-lg">
      <li v-for="link in links" :key="link.id">
        <router-link
          :to="link.href"
          class="text-gray-800 dark:text-white hover:text-secondary dark:hover:text-dark-primary transition-colors duration-300"
        >
          {{ link.name }}
        </router-link>
      </li>
    </ul>

    <!-- Theme Toggle and Hamburger Menu -->
    <div class="flex items-center gap-4 md:gap-8">
      <!-- Theme Toggle -->
      <button
        @click="toggleTheme"
        class="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-primary dark:text-dark-primary transform transition-transform duration-500 rotate-0 dark:rotate-[360deg]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            v-show="isDarkMode"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
          <path
            v-show="!isDarkMode"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </button>

      <!-- Hamburger Menu -->
      <div class="relative md:hidden">
        <button @click="toggleMenu" class="flex flex-col gap-1 cursor-pointer p-2">
          <span class="w-6 h-0.5 bg-text dark:bg-dark-text transition-all duration-300"></span>
          <span class="w-6 h-0.5 bg-text dark:bg-dark-text transition-all duration-300"></span>
          <span class="w-6 h-0.5 bg-text dark:bg-dark-text transition-all duration-300"></span>
        </button>
        <div v-show="isMenuOpen" class="absolute right-0 top-16 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2">
          <router-link
            v-for="link in links"
            :key="link.id"
            :to="link.href"
            class="block px-4 py-2 text-text dark:text-dark-text hover:text-secondary dark:hover:text-dark-secondary hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
          >
            {{ link.name }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      isMenuOpen: false,
      isDarkMode: false,
      hideNavbar: false,
      lastScrollY: 0,
      links: [
        { id: 1, name: "Home", href: "/" },
        { id: 2, name: "About", href: "/about" },
        { id: 3, name: "Skills", href: "/skills" },
        { id: 4, name: "Projects", href: "/projects" },
        { id: 5, name: "Experience", href: "/experience" },
        { id: 6, name: "Services", href: "/services" },
        { id: 7, name: "Contact", href: "/contact" },
        { id: 8, name: "Blog", href: "/blog" }
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      document.documentElement.classList.toggle("dark", this.isDarkMode);
    },
      handleScroll() {
      const currentScrollY = window.scrollY;
      if (currentScrollY > this.lastScrollY && currentScrollY > 50) {
        this.hideNavbar = true; // Hide on scroll down
      } else {
        this.hideNavbar = false; // Show on scroll up
      }
      this.lastScrollY = currentScrollY;
    },
  },
   mounted() {
    this.lastScrollY = window.scrollY;
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>
nav {
  will-change: transform;
}
.-translate-y-full {
  transform: translateY(-100%);
}
.translate-y-0 {
  transform: translateY(0);
}
</style> 