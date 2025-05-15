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
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        text: 'var(--text)',
        background: 'var(--background)',
        'dark-primary': 'var(--dark-primary)',
        'dark-secondary': 'var(--dark-secondary)',
        'dark-accent': 'var(--dark-accent)',
        'dark-text': 'var(--dark-text)',
        'dark-background': 'var(--dark-background)',
      },
      backgroundImage: {
        'pattern-light': "url('/src/assets/images/pattern-light.svg')",
        'pattern-dark': "url('/src/assets/images/pattern-dark.svg')",
      },
    },
  },
  plugins: [],
} 