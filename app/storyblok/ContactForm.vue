<script setup>
import PageMargins from "../components/PageMargins/index.vue";
defineProps({ blok: Object });
</script>

<template>
  <PageMargins className="py-10">
    <form class="flex flex-col gap-3 max-w-2xl">
      <StoryblokComponent
        v-for="currentBlok in blok.Fields"
        :key="currentBlok._uid"
        :blok="currentBlok"
      />
    </form>
  </PageMargins>
</template>
