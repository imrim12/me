<template>
  <div
    class="flex flex-col h-screen w-screen bg-cover bg-no-repeat bg-center bg-dark-900 bg-opacity-50 bg-blend-darken"
    style="background-image: url(/bg.svg)"
  >
    <main class="flex flex-1 gap-3">
      <Directory
        v-for="directory in availableDirectories"
        :ref="'directory' + directory.name + 'Ref'"
        :key="directory.path"
        :directory="directory"
      />
    </main>
    <footer class="flex gap-2 h-10 bg-dark-700 bg-opacity-50 text-gray-200 text-xl">
      <span
        v-for="directory in openedDirectories"
        :key="directory.path"
        class="inline-flex items-center justify-center h-full w-10 border-b-2 border-b-gray-600"
        @click="handleOpenDirectory(directory)"
      >
        <Icon class="fa-solid fa-folder-closed" />
      </span>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { useRootStore } from "./store";

useHead({
  script: [
    {
      src: "https://kit.fontawesome.com/df79702077.js",
      crossorigin: "anonymous",
    },
  ],
});

const rootStore = useRootStore();

const availableDirectories = computed(() => rootStore.$state.availableDirectories);
const openedDirectories = computed(() => rootStore.$state.openedDirectories);

const vm = getCurrentInstance()?.proxy;
const handleOpenDirectory = (directory: Directory) => {
  if ((vm?.$refs["directory" + directory.name + "Ref"] as any)?.[0]) {
    (vm?.$refs["directory" + directory.name + "Ref"] as any)[0].handleOpenDirectory();
  }
};
</script>
