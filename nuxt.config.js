export default {
  target: 'static',
  app: {
    baseURL: '/theladderprimer.github.io/'
  },
  buildModules: [
  ],
  css: ['~/assets/css/tailwind.css'],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  // css: [
  //   '@/assets/css/main.css',
  // ]
}