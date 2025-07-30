<script setup lang="ts">
const { className } = defineProps<{
  className?: string;
}>();
</script>

<template>
  <div :class="[className, 'max-w-7xl mx-auto px-5']"><slot /></div>
</template>
