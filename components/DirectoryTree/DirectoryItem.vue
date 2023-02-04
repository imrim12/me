<template>
  <li>
    <DirectoryTree
      v-if="Number(directory.children?.length) > 0"
      :directory="directory"
      :index="index"
    />
    <DirectoryLabel v-else :directory="directory" :index="index" />
  </li>
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
