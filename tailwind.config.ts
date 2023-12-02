import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  darkMode: 'class',
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
  plugins: [],
  content: [
    'components/**/*.{vue,js,ts}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}',
    'Error.{js,ts,vue}',
    'error.{js,ts,vue}',
    'content/**/*.md'
  ]
}
