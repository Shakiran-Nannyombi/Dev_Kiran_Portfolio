tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#f6effb',
        primary: '#531a74',
        secondary: '#df7282',
        accent: '#a64e26',
        text: '#14071d',
        
        'dark-background': '#0b0410',
        'dark-primary': '#c48be5',
        'dark-secondary': '#8d2030',
        'dark-accent': '#d98159',
        'dark-text': '#efe2f8',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Noto Serif Hentaigana', 'serif'],
        slab: ['Slabo 27px', 'serif']
      },
      backgroundImage: {
        'pattern-light': "linear-gradient(109deg, transparent 0%, transparent 5%,rgba(149, 149, 149,0.04) 5%, rgba(149, 149, 149,0.04) 38%,transparent 38%, transparent 100%),linear-gradient(324deg, transparent 0%, transparent 31%,rgba(149, 149, 149,0.04) 31%, rgba(149, 149, 149,0.04) 99%,transparent 99%, transparent 100%),linear-gradient(259deg, transparent 0%, transparent 11%,rgba(149, 149, 149,0.04) 11%, rgba(149, 149, 149,0.04) 57%,transparent 57%, transparent 100%),linear-gradient(221deg, transparent 0%, transparent 5%,rgba(149, 149, 149,0.04) 5%, rgba(149, 149, 149,0.04) 37%,transparent 37%, transparent 100%),linear-gradient(90deg, #ffffff,#ffffff)",
        'pattern-dark': "linear-gradient(109deg, transparent 0%, transparent 5%,rgba(149, 149, 149,0.04) 5%, rgba(149, 149, 149,0.04) 38%,transparent 38%, transparent 100%),linear-gradient(324deg, transparent 0%, transparent 31%,rgba(149, 149, 149,0.04) 31%, rgba(149, 149, 149,0.04) 99%,transparent 99%, transparent 100%),linear-gradient(259deg, transparent 0%, transparent 11%,rgba(149, 149, 149,0.04) 11%, rgba(149, 149, 149,0.04) 57%,transparent 57%, transparent 100%),linear-gradient(221deg, transparent 0%, transparent 5%,rgba(149, 149, 149,0.04) 5%, rgba(149, 149, 149,0.04) 37%,transparent 37%, transparent 100%),linear-gradient(90deg, #0b0410,#0b0410)"
      },
      animation: {
        'infinite-scroll': 'scroll 25s linear infinite',
        'infinite-scroll-reverse': 'scroll-reverse 25s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        'scroll-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' }
        }
      },
      keyframes: {
        gradientShift: {
          '0%': { 'background-position': '0% 0%', transform: 'scale(1)' },
          '25%': { 'background-position': '50% 25%', transform: 'scale(1.02)' },
          '50%': { 'background-position': '100% 50%', transform: 'scale(1.01)' },
          '75%': { 'background-position': '50% 75%', transform: 'scale(1.02)' },
          '100%': { 'background-position': '0% 0%', transform: 'scale(1)' },
        },
        patternFloat: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '0.05' },
          '33%': { transform: 'translateY(-10px) rotate(1deg)', opacity: '0.07' },
          '66%': { transform: 'translateY(5px) rotate(-1deg)', opacity: '0.06' },
          '100%': { transform: 'translateY(0) rotate(0deg)', opacity: '0.05' },
        },
      },
      animation: {
        gradientShift: 'gradientShift 20s ease-in-out infinite',
        patternFloat: 'patternFloat 10s ease-in-out infinite',
      },
    }
  }
} 