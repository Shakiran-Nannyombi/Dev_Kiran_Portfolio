import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    isDarkMode: false,
    isMenuOpen: false,
    isLoading: false
  }),
  
  actions: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
      document.documentElement.classList.toggle('dark', this.isDarkMode)
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light')
    },
    
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    
    closeMenu() {
      this.isMenuOpen = false
    },
    
    setLoading(status) {
      this.isLoading = status
    }
  },
  
  getters: {
    isDark: (state) => state.isDarkMode,
    isMenuActive: (state) => state.isMenuOpen
  }
}) 