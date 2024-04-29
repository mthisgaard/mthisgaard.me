// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
  ],
  plugins: ['~/plugins/fontawesome.ts'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.yml',
      },
      {
        code: 'da',
        name: 'Dansk',
        file: 'da.yml',
      },
    ],
    langDir: './i18n/translations',
    defaultLocale: 'en',
    strategy: 'prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
  },
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
    classSuffix: ''
  },
  nitro: {
    prerender: {
      routes: ['/skills', '/projects'],
    },
  },
})
