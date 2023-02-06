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

const router = useRouter();

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
const handleOpenDirectory = () => {
  isDirectoryWindowVisible.value = true;
  forceRender.value += 1;
  router.push({
    query: {
      path: props.directory.path,
    },
  });

  if (
    !rootStore.$state.openedDirectories.find((directory) => directory.path === props.directory.path)
  ) {
    rootStore.addDirectory(props.directory);
  }
};

defineExpose({
  handleOpenDirectory,
});
</script>
