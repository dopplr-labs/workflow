const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{ts,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [],

  future: {
    removeDeprecatedGapUtilities: true,
  },
}
