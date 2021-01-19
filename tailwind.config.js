module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  theme: {
    fontFamily: {
      sans: ['Josefin Sans'],
      serif: ['Vollkorn', 'serif'],
      monospace: ['Cutive Mono', 'monospace']
    },
    
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
}