<script setup>
import PageMargins from "../components/PageMargins/index.vue";
defineProps({ blok: Object });
</script>

<template>
  <PageMargins class="py-10">
    <h2 class="font-light lowercase text-5xl tracking-widest">
      {{ blok.Title }}
    </h2>
    <div class="gap-3 grid grid-cols-1 py-10 sm:grid-cols-3 md:gap-5">
      <StoryblokComponent
        v-for="currentBlok in blok.Items"
        :key="currentBlok._uid"
        :blok="currentBlok"
      />
    </div>
  </PageMargins>
</template>
