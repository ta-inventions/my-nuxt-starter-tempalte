<script setup lang="ts">
// TODO: Make this dynamic based on lang from app config
import { he } from '@nuxt/ui/locale'

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
  <UApp :locale="he">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
