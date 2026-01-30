<script setup>
const appConfig = useAppConfig()
const site = appConfig.site
useHead({
  htmlAttrs: {
    lang: site.lang,
    dir: site.dir,
  },
})

useSeoMeta({
  title: site.title,
  description: site.description,
  ogTitle: site.title,
  ogDescription: site.description,
  ogImage: site.ogImage,
  twitterImage: site.twitterImage,
  twitterCard: site.twitterCard,
})
</script>

<template>
  <UApp :locale="site.lang">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
