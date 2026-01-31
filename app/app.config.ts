export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate',
    },
  },
  site: {
    title: 'My Nuxt Starter Template',
    description: 'A production-ready starter template powered by Nuxt UI. Build beautiful, accessible, and performant applications in minutes, not hours.',
    lang: 'he',
    dir: 'rtl' as const,
    ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
    twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
    twitterCard: 'summary_large_image' as const,
  },
})
