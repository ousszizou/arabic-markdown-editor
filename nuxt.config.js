export default defineNuxtConfig({
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  app: {
    head: {
      title: "Arabic Markdown Editor",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    // '@nuxtjs/pwa',
    // '@nuxtjs/markdownit'
  ],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
});
// export default {
//   // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
//   ssr: false,

//   // Target: https://go.nuxtjs.dev/config-target
//   target: 'static',

//   // Global CSS: https://go.nuxtjs.dev/config-css
//   css: [
//     'codemirror/lib/codemirror.css',
//     'codemirror/theme/ayu-mirage.css',
//     'codemirror/addon/scroll/simplescrollbars.css',
//     'highlight.js/styles/nord.css'
//     // "@/assets/css/tailwind.css"
//   ],

//   // PWA module configuration: https://go.nuxtjs.dev/pwa
//   pwa: {
//     manifest: {
//       lang: 'en'
//     }
//   },

//   markdownit: {
//     runtime: true,
//     preset: 'default',
//     html: true,
//     linkify: true,
//     xhtmlOut: true,
//     breaks: true,
//     typographer: true,
//     use: [
//       'markdown-it-div',
//       'markdown-it-attrs',
//       'markdown-it-emoji',
//       'markdown-it-highlightjs'
//     ]
//   },
// }
