export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    // '@nuxtjs/tailwindcss',
    // '@nuxtjs/pwa',
    // '@nuxtjs/markdownit'
  ],
});
// export default {
//   // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
//   ssr: false,

//   // Target: https://go.nuxtjs.dev/config-target
//   target: 'static',

//   // Global page headers: https://go.nuxtjs.dev/config-head
//   head: {
//     title: 'markdown-editor',
//     meta: [
//       { charset: 'utf-8' },
//       { name: 'viewport', content: 'width=device-width, initial-scale=1' },
//       { hid: 'description', name: 'description', content: '' }
//     ],
//     link: [
//       { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
//     ]
//   },

//   // Global CSS: https://go.nuxtjs.dev/config-css
//   css: [
//     'codemirror/lib/codemirror.css',
//     'codemirror/theme/ayu-mirage.css',
//     'codemirror/addon/scroll/simplescrollbars.css',
//     'highlight.js/styles/nord.css'
//     // "@/assets/css/tailwind.css"
//   ],

//   // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
//   plugins: [
//     { src: '~/plugins/vuex-persist', ssr: false },
//     { src: '~plugins/nuxt-codemirror', ssr: false },
//     { src: '~plugins/clickaway.js', ssr: false },
//   ],

//   // Auto import components: https://go.nuxtjs.dev/config-components
//   components: true,

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
