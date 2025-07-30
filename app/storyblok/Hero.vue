<script setup>
import PageMargins from "../components/PageMargins/index.vue";

const props = defineProps({ blok: Object });
const subtitle = renderRichText(props.blok.Subtitle);
</script>

<template>
  <section class="h-screen xs:h-120" :data-with-overlay="blok.UseOverlay">
    <div v-if="blok.Image?.filename" class="absolute h-[inherit] size-full">
      <img
        :src="blok.Image.filename"
        :alt="blok.Image.alt || ''"
        class="object-cover size-full"
      />
    </div>
    <div
      v-if="blok.UseOverlay"
      class="absolute bg-neutral-900 h-[inherit] opacity-40 size-full"
    ></div>
    <PageMargins className="h-[inherit] pt-20 relative">
      <div class="sm:w-3/4">
        <div
          class="font-black text-6xl tracking-wide in-data-[with-overlay=true]:text-neutral-50"
        >
          {{ blok.Title }}
        </div>
        <div
          v-if="blok.Subtitle"
          v-html="subtitle"
          class="pt-7 text-xl in-data-[with-overlay=true]:text-neutral-50"
        ></div>
      </div>
      <div class="absolute bottom-10 flex gap-4 right-5"></div>
      <div v-if="blok.PrimaryCTA || blok.SecondaryCTA" class="absolute bottom-10 flex gap-4 right-5">
        <UButton v-if="blok.PrimaryCTA" :to="blok.PrimaryCTA.cached_url" class="font-bold">{{ blok.PrimaryCTAText }}</UButton>
        <UButton v-if="blok.SecondaryCTA" :to="blok.SecondaryCTA.cached_url" class="font-bold" color="neutral">{{ blok.SecondaryCTAText }}</UButton>
      </div>
    </PageMargins>
  </section>
</template>
