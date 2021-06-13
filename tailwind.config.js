const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-image-lg': "url('assets/images/HeroImagelg.png')",
        'hero-image-md': "url('assets/images/HeroImagemd.png')",
        'hero-image-sm': "url('assets/images/HeroImagesm.png')"
      }),
      colors: {
        'brown': '#291507',
        'brown-two': '#4D270C',
        'gray-bg': '#E3E1DC'
      }
    },
    aspectRatio: {
      'square': '1'
    }
  },
  variants: {
    aspectRatio: ['responsive', 'hover'],
    extend: {
      display: ['focus-within'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),

  ],
}
