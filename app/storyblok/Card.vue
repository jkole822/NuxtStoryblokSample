<script setup>
defineProps({ blok: Object });
</script>
<template>
  <div
    class="bg-neutral-100 flex flex-col gap-2 justify-start overflow-hidden rounded-lg shadow-md text-neutral-800"
  >
    <div v-if="blok.Image?.filename">
      <img
        :src="blok.Image.filename"
        :alt="blok.Image.alt || ''"
        class="object-cover size-full"
      />
    </div>
    <div class="flex flex-col gap-6 h-full justify-between p-3">
    <div v-if="!!blok.Title || !!blok.Description">
      <div
        v-if="blok.Title"
        class="font-extralight text-3xl tracking-widest uppercase"
      >
        {{ blok.Title }}
      </div>
      <div class="mt-2">{{ blok.Description }}</div>
    </div>
    <UButton
      class="font-bold justify-center place-self-end text-center w-fit sm:place-self-auto sm:w-full"
      :to="blok.CTA.cached_url"
    >
      {{ blok.CTAText }}
    </UButton>
    </div>
  </div>
</template>
