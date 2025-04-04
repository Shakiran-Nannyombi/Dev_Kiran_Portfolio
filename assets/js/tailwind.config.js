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
        dark: {
          background: '#0b0410',
          primary: '#c48be5',
          secondary: '#8d2030',
          accent: '#d98159',
          text: '#efe2f8'
        }
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Noto Serif Hentaigana', 'serif'],
        slab: ['Slabo 27px', 'serif']
      },
      backgroundImage: {
        'pattern-light': "linear-gradient(109deg, transparent 0%, transparent 5%,rgba(149, 149, 149,0.04) 5%, rgba(149, 149, 149,0.04) 38%,transparent 38%, transparent 100%),linear-gradient(324deg, transparent 0%, transparent 31%,rgba(149, 149, 149,0.04) 31%, rgba(149, 149, 149,0.04) 99%,transparent 99%, transparent 100%),linear-gradient(259deg, transparent 0%, transparent 11%,rgba(149, 149, 149,0.04) 11%, rgba(149, 149, 149,0.04) 57%,transparent 57%, transparent 100%),linear-gradient(221deg, transparent 0%, transparent 5%,rgba(149, 149, 149,0.04) 5%, rgba(149, 149, 149,0.04) 37%,transparent 37%, transparent 100%),linear-gradient(90deg, #f6effb,#f6effb)",
        'pattern-dark': "linear-gradient(109deg, transparent 0%, transparent 5%,rgba(149, 149, 149,0.04) 5%, rgba(149, 149, 149,0.04) 38%,transparent 38%, transparent 100%),linear-gradient(324deg, transparent 0%, transparent 31%,rgba(149, 149, 149,0.04) 31%, rgba(149, 149, 149,0.04) 99%,transparent 99%, transparent 100%),linear-gradient(259deg, transparent 0%, transparent 11%,rgba(149, 149, 149,0.04) 11%, rgba(149, 149, 149,0.04) 57%,transparent 57%, transparent 100%),linear-gradient(221deg, transparent 0%, transparent 5%,rgba(149, 149, 149,0.04) 5%, rgba(149, 149, 149,0.04) 37%,transparent 37%, transparent 100%),linear-gradient(90deg, #0b0410,#0b0410)"
      }
    }
  }
} 