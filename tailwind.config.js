module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        skin: {
          base: "var(--color-theme-base)",
          secondary: "var(--color-theme-secondary)",
          "button-accent": "var(--color-button-base)",
          "button-accent-hover": "var(--color-button-base-hover)",
          dropdown: "var(--color-dropdown-base)",
          "dropdown-item-hover": "var(--color-dropdown-item-hover)"
        }
      },
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          "base-hover": "var(--color-text-base-hover)"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
