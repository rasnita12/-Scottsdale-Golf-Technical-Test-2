/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,vue,html}',"./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      'oswald': ['Oswald', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
    },
    screens: {
      xs: '370px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px', // changed from 1536px to 1280px
      
    },
    container: {
      center: true,
      maxWidth: '100%',
    },
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('flowbite/plugin')
  ],
}