<template>
  <span>
    <span
      ref="directoryRef"
      class="inline-flex flex-col items-center w-28 cursor-pointer text-blue-300"
      :class="{
        'border-dashed border-1 border-gray-200': isDirectorySelected,
      }"
      @click="handleHighlightDirectory"
      @dblclick="handleOpenDirectory"
    >
      <client-only>
        <Icon class="fa-solid fa-folder text-8xl" />
      </client-only>
      <span class="text-gray-200 text-center select-none">{{ directory.name }}</span>
    </span>
    <DirectoryWindow
      v-model:visible="isDirectoryWindowVisible"
      :key="forceRender"
      :directory="directory"
      :offset="windowPositionOffset"
      @mousedown="handleBringDirectoryToFront"
    />
  </span>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
import { useRootStore } from "~~/store";

const props = defineProps({
  directory: {
    type: Object as PropType<Directory>,
    default: () => ({
      name: "Directory",
      path: "directory",
    }),
  },
});

const directoryRef = ref(null);

const isDirectorySelected = ref(false);
const handleHighlightDirectory = () => {
  isDirectorySelected.value = true;
};

onClickOutside(directoryRef, () => {
  isDirectorySelected.value = false;
});

const rootStore = useRootStore();

const isDirectoryWindowVisible = ref(false);
const forceRender = ref(1);
const windowPositionOffset = ref(0);

const directoryIndex = computed(() => {
  return rootStore.$state.openedDirectories.findIndex(
    (directory) => directory.path === props.directory.path,
  );
});

const handleOpenDirectory = () => {
  isDirectoryWindowVisible.value = true;
  forceRender.value += 1;

  if (
    !rootStore.$state.openedDirectories.find((directory) => directory.path === props.directory.path)
  ) {
    rootStore.addOpenedDirectory(props.directory);

    windowPositionOffset.value += rootStore.$state.openedDirectories.length * 40;
  }
};

const handleBringDirectoryToFront = () => {
  if (directoryIndex.value === -1) return;

  rootStore.swapOpenedDirectories(0, directoryIndex.value);
};

defineExpose({
  handleOpenDirectory,
});
</script>
