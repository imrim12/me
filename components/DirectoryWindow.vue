<template>
  <Teleport v-if="visible" to="body">
    <div class="resizable fixed top-0 left-0 h-lg w-xl border-1 border-gray-200 flex flex-col">
      <header class="h-8 bg-gray-900"></header>
      <div class="h-7 bg-black"></div>
      <div class="h-10 bg-gray-900"></div>
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

import interact from "interactjs";

defineProps<{
  visible: boolean;
}>();

const emit = defineEmits<{
  (event: "update:visible", value: boolean): void;
}>();

const rootStore = useRootStore();

const sidebarDirectory = computed(() => rootStore.$state.sidebarDirectory);

onMounted(() => {
  interact(".resizable").resizable({
    edges: { top: true, left: true, bottom: true, right: true },
    listeners: {
      move: function (event) {
        let { x, y } = event.target.dataset;

        x = (parseFloat(x) || 0) + event.deltaRect.left;
        y = (parseFloat(y) || 0) + event.deltaRect.top;

        Object.assign(event.target.style, {
          width: `${event.rect.width}px`,
          height: `${event.rect.height}px`,
          transform: `translate(${x}px, ${y}px)`,
        });

        Object.assign(event.target.dataset, { x, y });
      },
    },
  });
});

const handleOpen = () => {
  emit("update:visible", true);
};
</script>
