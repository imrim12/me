<template>
  <span class="block text-gray-100 hover:bg-gray-500" :style="{ paddingLeft: paddingComputed }">
    {{ directory.name }}
  </span>
</template>

<script lang="ts" setup>
import { PropType } from "vue";

const props = defineProps({
  index: String,
  directory: {
    type: Object as PropType<Directory>,
    required: true,
  },
});

const paddingComputed = computed(() => `${props.index ? props.index.split(".").length * 16 : 0}px`);
</script>
