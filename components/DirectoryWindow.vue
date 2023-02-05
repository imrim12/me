<template>
  <Teleport v-if="visible" to="body">
    <div
      ref="windowResizeableContainerRef"
      class="fixed top-0 left-0 h-lg w-xl border-1 border-gray-200 flex flex-col"
    >
      <header
        ref="windowDraggableHeaderRef"
        class="flex flex-row items-center justify-between h-8 bg-gray-900"
      >
        <div class="flex flex-row items-center h-full gap-2 px-2 text-gray-200 text-sm">
          <button>
            <i class="fa-solid fa-folder" />
          </button>
          <span>|</span>
          <button>
            <i class="fa-regular fa-file"></i>
          </button>
          <button>
            <i class="fa-solid fa-folder" />
          </button>
          <span>|</span>
          <span>
            {{ currentDirectory.name }}
          </span>
        </div>
        <div class="flex flex-row items-center h-full text-gray-200 text-sm">
          <button class="h-full w-12 bg-gray-900 hover:bg-gray-800" @click="minimizeWindow">
            <i class="fa-solid fa-window-minimize"></i>
          </button>
          <button class="h-full w-12 bg-gray-900 hover:bg-gray-800" @click="maximizeWindow">
            <i class="fa-solid fa-window-maximize"></i>
          </button>
          <button class="h-full w-12 bg-gray-900 hover:bg-red-700" @click="closeWindow">
            <i class="fa-solid fa-xmark" />
          </button>
        </div>
      </header>
      <div class="flex flex-row items-center h-7 gap-2 px-2 bg-black text-gray-200 text-xs">
        <button>Home</button>
        <button>Share</button>
        <button>View</button>
      </div>
      <div class="flex flex-row items-center h-10 bg-gray-900">
        <div class="flex flex-row items-center w-24 gap-2 px-2 text-gray-200">
          <button>
            <i class="fa-solid fa-circle-arrow-left"></i>
          </button>
          <button>
            <i class="fa-solid fa-circle-arrow-right"></i>
          </button>
          <button class="text-xs">
            <i class="fa-solid fa-caret-down"></i>
          </button>
          <button>
            <i class="fa-solid fa-arrow-up"></i>
          </button>
        </div>
        <!-- Breadcrumb -->
        <div class="flex-1 h-full py-2 pr-2">
          <!--  -->
          <div class="border-1 border-gray-600 h-full"></div>
        </div>
        <div class="w-40 h-full py-2 pr-2 bg-gray-900 text-gray-200">
          <div class="flex flex-row items-center border-1 border-gray-600 pl-3 text-xs h-full">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              class="w-32 bg-transparent pl-3 pr-1 !outline-none"
              :placeholder="'Search ' + currentDirectory.name"
            />
          </div>
        </div>
      </div>
      <main class="flex flex-1 flex-row overflow-hidden">
        <aside class="border-r-1 border-gray-700 h-full w-64 bg-gray-900 overflow-y-auto">
          <DirectoryTree :directory="sidebarDirectory" />
        </aside>
        <section class="flex-1 h-full bg-gray-800">
          <slot />
        </section>
      </main>
      <footer class="h-6 bg-gray-700"></footer>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { useRootStore } from "~~/store";

import { useWindowInteraction } from "./useWindowInteraction";

defineProps<{
  visible: boolean;
}>();

const emit = defineEmits<{
  (event: "update:visible", value: boolean): void;
}>();

const rootStore = useRootStore();

const currentDirectory = computed(() => rootStore.$state.currentDirectory);

const sidebarDirectory = computed(() => rootStore.$state.sidebarDirectory);

const { windowDraggableHeaderRef, windowResizeableContainerRef } = useWindowInteraction();

const show = () => {
  emit("update:visible", true);
};

const hide = () => {
  emit("update:visible", false);
};

const minimizeWindow = () => {};

const maximizeWindow = () => {};

const closeWindow = () => {};
</script>
