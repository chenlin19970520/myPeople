module.exports = {
  mode: "spa",
  /*
   ** Headers of the page
   */
  router: {
    scrollBehavior: function(to, from, savedPostion) {
      return { x: 0, y: 0 };
    }
  },
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["@/assets/css/common.css", "element-ui/lib/theme-chalk/index.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "@/plugins/element-ui", }],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios"],
  /*
   ** Build configuration
   */
  axios: {},
  proxy: {},
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
