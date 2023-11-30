module.exports = {
  content: [
    "./app/**/*.{ts,tsx,jsx,js}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('preline/plugin'),
  ],
};
