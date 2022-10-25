// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["@/assets/css/styles.css"],
  target: 'static',
  router: {
    base: '/theladderprimer.github.io/'
  },
  // app: {
  //   baseURL: '/theladderprimer.github.io/'
  // },
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
  // buildModules: [
  //   '@nuxtjs/google-fonts'
  // ],
  // googleFonts: {
  //   families: {
  //     Inter: true,
  //     'Amatic+CS': true,
  //     Lato: [100, 300],
  //     Raleway: {
  //       wght: [100, 400],
  //       ital: [100]
  //     },
  //   }
  // }
})
