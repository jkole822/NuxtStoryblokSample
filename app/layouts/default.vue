<script setup>
import PageMargins from "@/components/PageMargins/index.vue";
const api = useStoryblokApi();

const { data: navigation } = await useAsyncData("navigation", async () => {
  try {
    const res = await api.get(`cdn/stories/navigation`, {
      version: "draft",
    });
    console.log("✅ Navigation:", res.data.story);
    return res.data.story;
  } catch (err) {
    console.error("❌ Storyblok error:", err);
    throw err;
  }
});

const items = computed(
  () =>
    navigation.value?.content?.Items?.map((item) => ({
      label: item.LinkText,
      to: item.Link.cached_url,
      children: item.Items?.map((subItem) => ({
        label: subItem.LinkText,
        description: subItem.Description,
        to: subItem.Link.cached_url,
      })),
    })) ?? [],
);
</script>

<template>
  <div class="bg-neutral-950 sticky top-0 z-10">
    <PageMargins class="flex items-center justify-between py-2">
      <div
        v-if="
          navigation.content?.LogoLinkImage?.filename ||
          navigation.content?.Title
        "
        class="flex items-center gap-4"
      >
        <UButton to="/" class="bg-transparent" title="Home">
          <NuxtImg
            v-if="navigation.content?.LogoLinkImage?.filename"
            :alt="navigation.content.LogoLinkImage.alt"
            :src="navigation.content.LogoLinkImage.filename"
            height="80"
            provider="storyblok"
            width="80"
          />
        </UButton>
        <span
          v-if="navigation.content?.Title"
          class="font-extrabold text-3xl text-neutral-50 tracking-wide"
          >{{ navigation.content.Title }}</span
        >
      </div>
      <UNavigationMenu :items="items" />
    </PageMargins>
  </div>
  <NuxtPage />
</template>
