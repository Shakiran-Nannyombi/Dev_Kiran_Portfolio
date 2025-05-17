/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        primary: '#3d26ed',
        secondary: '#f584b5',
        accent: '#f25c5a',
        text: '#050217',

        'dark-background': '#020109',
        'dark-primary': '#2912d9',
        'dark-secondary': '#7b0a3b',
        'dark-accent': '#a5100d',
        'dark-text': '#ebe8fd',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Noto Serif Hentaigana', 'serif'],
        slab: ['Slabo 27px', 'serif']
      },
      backgroundImage: {
       'pattern-light': `
       linear-gradient(109deg, transparent 0%, transparent 5%, rgba(149,149,149,0.04) 5%, rgba(149,149,149,0.04) 38%, transparent 38%, transparent 100%),
       linear-gradient(324deg, transparent 0%, transparent 31%, rgba(149,149,149,0.04) 31%, rgba(149,149,149,0.04) 99%, transparent 99%, transparent 100%),
       linear-gradient(259deg, transparent 0%, transparent 11%, rgba(149,149,149,0.04) 11%, rgba(149,149,149,0.04) 57%, transparent 57%, transparent 100%),
       linear-gradient(221deg, transparent 0%, transparent 5%, rgba(149,149,149,0.04) 5%, rgba(149,149,149,0.04) 37%, transparent 37%, transparent 100%)
        `,
       'pattern-dark': `
       linear-gradient(109deg, transparent 0%, transparent 5%, rgba(149,149,149,0.04) 5%, rgba(149,149,149,0.04) 38%, transparent 38%, transparent 100%),
       linear-gradient(324deg, transparent 0%, transparent 31%, rgba(149,149,149,0.04) 31%, rgba(149,149,149,0.04) 99%, transparent 99%, transparent 100%),
       linear-gradient(259deg, transparent 0%, transparent 11%, rgba(149,149,149,0.04) 11%, rgba(149,149,149,0.04) 57%, transparent 57%, transparent 100%),
       linear-gradient(221deg, transparent 0%, transparent 5%, rgba(149,149,149,0.04) 5%, rgba(149,149,149,0.04) 37%, transparent 37%, transparent 100%)
        `,
      },
      animation: {
        'infinite-scroll': 'scroll 25s linear infinite',
        'infinite-scroll-reverse': 'scroll-reverse 25s linear infinite',
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
    },
  },
  plugins: [],
} 