import { ref, onMounted, onUnmounted } from 'vue'

export function useScroll() {
  const scrollY = ref(0)
  const isScrolling = ref(false)
  let scrollTimeout

  const handleScroll = () => {
    scrollY.value = window.scrollY
    isScrolling.value = true

    clearTimeout(scrollTimeout)
    scrollTimeout = setTimeout(() => {
      isScrolling.value = false
    }, 150)
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    clearTimeout(scrollTimeout)
  })

  return {
    scrollY,
    isScrolling
  }
} 