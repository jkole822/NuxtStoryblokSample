<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = route.params.slug?.length ? route.params.slug.join('/') : 'home';
const api = useStoryblokApi();

const { data: story } = await useAsyncData(slug, async () => {
  try {
    const res = await api.get(`cdn/stories/${slug}`, {
      version: 'draft',
    })
    console.log('✅ Story:', res.data.story)
    return res.data.story
  } catch (err) {
    console.error('❌ Storyblok error:', err)
    throw err
  }
})
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>