<template>
  <ul>
    <li>
      <DirectoryLabel :directory="directory" :index="index" />
    </li>
    <DirectoryItem
      v-for="(child, i) in directory.children"
      :key="child.name"
      :directory="child"
      :index="[index, String(i)].filter(Boolean).join('.')"
    />
  </ul>
</template>

<script lang="ts" setup>
import { PropType } from "vue";

defineProps({
  index: String,
  directory: {
    type: Object as PropType<Directory>,
    required: true,
  },
});
</script>
