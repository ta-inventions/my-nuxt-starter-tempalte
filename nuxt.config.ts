// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/a11y',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/ui',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2025-07-15',

  // Development config
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
