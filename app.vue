<template>
  <div class="h-screen w-screen">
    <DirectoryWindow v-model:visible="isWindowVisible" />
  </div>
</template>

<script lang="ts" setup>
useHead({
  script: [
    {
      src: "https://kit.fontawesome.com/df79702077.js",
      crossorigin: "anonymous",
    },
  ],
});

const isWindowVisible = ref(true);
</script>
