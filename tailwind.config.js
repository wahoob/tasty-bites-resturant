/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-bg': "url('/src/images/header-bg.png')",
        'about-bg': "url('/src/images/about-2.jpg')",
        'chefs-bg': "url('/src/images/chefs.jpg')",
      },
      colors: {
        'navbar-main': 'rgba(12, 11, 9, 0.6)',
        'navbar-scroll': 'rgba(0, 0, 0, 0.85)',
        'about-bg-color': 'rgba(12, 11, 9, 0.7)',
        'main-color': '#F0992F',
        'white': '#E9E9EA',
        'custom-red': '#6F1C11',
        'custom-bg': '#FFF6EC',
        'custom-bg-2': '#1E1C1E',
      },
      gridTemplateColumns: {
        'auto-14': 'repeat(auto-fill, minmax(14.5rem, 1fr))',
        'auto-8': 'repeat(auto-fill, minmax(10rem, 1fr))',
      },
      transitionTimingFunction: {
        'custom-cubic': 'cubic-bezier(.84,-0.09,.94,1.12)',
      },
    },
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}