<script setup>
const props = defineProps({ blok: Object });

const selectOptions = computed(() => {
  if (props.blok.SelectOptions) {
    return props.blok.SelectOptions.split(',').map(option => ({
      label: option.trim(),
      value: option.trim()
    }));
  }
  return [];
});
</script>

<template>
  <label
    class="flex flex-col font-light gap-1 tracking-wider uppercase">
    <span>{{ blok.Label }}</span>
    <select
      v-if="blok.Type === 'select'"
      class="outline-hidden px-3 py-2 ring-2 ring-red-400 rounded transition-all focus-visible:ring-red-300 hover:ring-red-300"
      :name="blok.Name"
      :required="blok.Required"
    >
      <option v-for="option in selectOptions" :key="option" :value="option.value">
        {{ option.label }}
      </option>
    </select>
    <textarea
      v-else-if="blok.Type === 'textarea'"
      class="outline-hidden px-3 py-2 ring-2 ring-red-400 rounded transition-all focus-visible:ring-red-300 hover:ring-red-300"
      :name="blok.Name"
      :required="blok.Required"
    ></textarea>
    <input
      v-else
      class="outline-hidden px-3 py-2 ring-2 ring-red-400 rounded transition-all focus-visible:ring-red-300 hover:ring-red-300"
      :name="blok.Name"
      :required="blok.Required"
      :type="blok.Type"
    />
  </label>
</template>
