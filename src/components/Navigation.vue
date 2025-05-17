<template>
  <nav class="flex items-center justify-between p-4">
    <!-- Logo -->
    <router-link to="/" class="flex items-center gap-2" @click="closeMobileMenu">
      <img 
        src="/assets/images/profile.png"
        alt="Dev Kiran Profile"
        class="w-10 h-10 rounded-full object-cover"
      />
      <span class="text-s text-text dark:text-dark-text hover:text-primary dark:hover:text-dark-primary transition-colors duration-300">
        Dev_Kiran
      </span>
    </router-link>

    <!-- Links for Large Screens -->
    <ul class="hidden md:flex gap-6 text-lg">
      <li v-for="link in links" :key="link.id">
        <router-link
          :to="link.href"
          class="text-gray-800 dark:text-white hover:text-secondary dark:hover:text-dark-primary transition-colors duration-300"
          @click="closeMobileMenu"
        >
          {{ link.name }}
        </router-link>
      </li>
    </ul>

    <!-- Mobile Menu Button -->
    <button 
      @click="toggleMobileMenu" 
      class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        class="h-6 w-6 text-gray-800 dark:text-white" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          v-if="!isMobileMenuOpen" 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M4 6h16M4 12h16M4 18h16"
        />
        <path 
          v-else 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          stroke-width="2" 
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <!-- Mobile Menu -->
    <div 
      v-if="isMobileMenuOpen" 
      class="fixed top-[72px] left-0 w-full h-screen bg-white/95 dark:bg-gray-900/95 backdrop-blur-md md:hidden transition-all duration-300 ease-in-out z-50"
      @click="closeMobileMenu"
    >
      <ul class="flex flex-col p-4 space-y-4" @click.stop>
        <li v-for="link in links" :key="link.id">
          <router-link
            :to="link.href"
            class="block py-2 text-gray-800 dark:text-white hover:text-secondary dark:hover:text-dark-primary transition-colors duration-300"
            @click="closeMobileMenu"
          >
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      isMobileMenuOpen: false,
      hideNavbar: false,
      isScrollingUp: false,
      links: [
        { id: 1, name: 'Home', href: '/' },
        { id: 2, name: 'About', href: '/about' },
        { id: 3, name: 'Services', href: '/services' },
        { id: 4, name: 'Projects', href: '/projects' },
        { id: 5, name: 'Contact', href: '/contact' }
      ]
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
    }
  },
  watch: {
    $route() {
      this.closeMobileMenu()
    }
  },
  mounted() {
    // Add click outside listener
    document.addEventListener('click', (e) => {
      const nav = this.$el
      const mobileMenu = nav.querySelector('.md\\:hidden')
      if (this.isMobileMenuOpen && mobileMenu && !mobileMenu.contains(e.target)) {
        this.closeMobileMenu()
      }
    })
  },
  beforeDestroy() {
    // Clean up event listener
    document.removeEventListener('click', this.closeMobileMenu)
  }
}
</script> 