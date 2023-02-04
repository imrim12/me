<template>
  <div class="h-screen w-screen">
    <DirectoryWindow v-model:visible="abc" />
  </div>
</template>

<script lang="ts" setup>
const abc = ref(true);
</script>
