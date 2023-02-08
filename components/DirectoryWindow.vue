<template>
  <Teleport v-if="visible" to="body">
    <div
      ref="windowResizeableContainerRef"
      class="fixed h-lg w-xl border-1 border-gray-700 flex flex-col transform"
      :style="
        Object.assign(
          { zIndex },
          isMaximized
            ? {
                top: '0px',
                left: '0px',
              }
            : { top: `${offset + 80}px`, left: `${offset + 192}px` },
        )
      "
    >
      <header
        ref="windowDraggableHeaderRef"
        class="flex flex-row items-center justify-between h-8 bg-gray-900"
      >
        <div class="flex flex-row items-center h-full gap-2 px-2 text-gray-200 text-sm">
          <button>
            <Icon class="fa-solid fa-folder" />
          </button>
          <span>|</span>
          <button>
            <Icon class="fa-regular fa-file" />
          </button>
          <button>
            <Icon class="fa-solid fa-folder" />
          </button>
          <span>|</span>
          <span>
            {{ directory.name }}
          </span>
        </div>
        <div class="flex flex-row items-center h-full text-gray-200 text-sm">
          <button class="h-full w-12 bg-gray-900 hover:bg-gray-800" @click="minimizeWindow">
            <Icon class="fa-solid fa-window-minimize" />
          </button>
          <button
            v-if="isMaximized"
            class="h-full w-12 bg-gray-900 hover:bg-gray-800"
            @click="restoreWindow"
          >
            <Icon class="fa-solid fa-window-restore" />
          </button>
          <button v-else class="h-full w-12 bg-gray-900 hover:bg-gray-800" @click="maximizeWindow">
            <Icon class="fa-solid fa-window-maximize" />
          </button>
          <button class="h-full w-12 bg-gray-900 hover:bg-red-700" @click="closeWindow">
            <Icon class="fa-solid fa-xmark" />
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
            <Icon class="fa-solid fa-circle-arrow-left" />
          </button>
          <button>
            <Icon class="fa-solid fa-circle-arrow-right" />
          </button>
          <button class="text-xs">
            <Icon class="fa-solid fa-caret-down" />
          </button>
          <button>
            <Icon class="fa-solid fa-arrow-up" />
          </button>
        </div>
        <div class="flex-1 h-full py-2 pr-2">
          <div class="border-1 border-gray-600 h-full"></div>
        </div>
        <div class="w-40 h-full py-2 pr-2 bg-gray-900 text-gray-200">
          <div class="flex flex-row items-center border-1 border-gray-600 pl-3 text-xs h-full">
            <Icon class="fa-solid fa-magnifying-glass" />
            <span>
              <input
                type="text"
                class="w-32 bg-transparent pl-3 pr-1 !outline-none"
                :placeholder="'Search ' + directory.name"
              />
            </span>
          </div>
        </div>
      </div>
      <main class="flex flex-1 flex-row overflow-hidden">
        <aside
          ref="windowResizableSidebarRef"
          class="border-r-1 border-gray-700 h-full w-52 bg-gray-900 overflow-y-auto"
        >
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
import { PropType } from "vue";

import { useRootStore } from "~~/store";

import { useWindowInteraction } from "./useWindowInteraction";

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  directory: {
    type: Object as PropType<Directory>,
    default: () => ({
      name: "Directory",
      path: "directory",
    }),
  },
  offset: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits<{
  (event: "update:visible", value: boolean): void;
  (event: "mousedown"): void;
}>();

const rootStore = useRootStore();

const sidebarDirectory = computed(() => rootStore.$state.sidebarDirectory);

const { windowDraggableHeaderRef, windowResizeableContainerRef, windowResizableSidebarRef } =
  useWindowInteraction();

const show = () => {
  emit("update:visible", true);
};

const hide = () => {
  emit("update:visible", false);
};

const minimizeWindow = hide;

const isMaximized = ref(false);
const maximizeWindow = () => {
  isMaximized.value = true;
  if (windowResizeableContainerRef.value) {
    windowResizeableContainerRef.value.style.width = "100vw";
    windowResizeableContainerRef.value.style.height = "100vh";
    windowResizeableContainerRef.value.style.transform = "translate(0, 0)";
  }
};

const restoreWindow = () => {
  isMaximized.value = false;
  if (windowResizeableContainerRef.value) {
    windowResizeableContainerRef.value.style.width = "576px";
    windowResizeableContainerRef.value.style.height = "512px";
    windowResizeableContainerRef.value.style.transform = "translate(0, 0)";
  }
};

const closeWindow = () => {
  hide();

  rootStore.removeOpenedDirectory(props.directory);
};

const directoryIndex = computed(() => {
  return rootStore.$state.openedDirectories.findIndex(
    (directory) => directory.path === props.directory.path,
  );
});

const zIndex = computed(() => {
  return rootStore.$state.openedDirectories.length - directoryIndex.value + 1;
});
</script>
