<template>
  <div class="sidebar-trigger" @click="triggerSidebarCollapse">
    <div
      class="h-full relative"
      :class="{
        expanded: !options.sidebarCollapse,
      }"
    >
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
  </div>
</template>
<script>
// src\core\components\layout\Sidebar\SidebarTrigger.vue
import { defineComponent } from '@vue/composition-api'
import { useState, useMutations } from 'vuex-composition-helpers'

export default defineComponent({
  name: 'SidebarTrigger',
  props: {},
  setup() {
    const { options } = useState(['options'])
    const { TOGGLE_SIDEBAR_COLLAPSE } = useMutations([
      'TOGGLE_SIDEBAR_COLLAPSE',
    ])

    return {
      options,
      triggerSidebarCollapse: TOGGLE_SIDEBAR_COLLAPSE,
    }
  },
})
</script>

<style lang="scss" scoped>
.sidebar-trigger {
  @apply w-20 h-16 cursor-pointer duration-300 transform hover:rotate-12;
  .bar {
    @apply h-3 w-full bg-primary absolute duration-300;
    &:nth-child(1) {
      @apply top-0 transform;
    }
    &:nth-child(2) {
      @apply top-1/2 left-1/2 transform;

      --tw-translate-x: -50%;
      --tw-translate-y: -50%;
    }
    &:nth-child(3) {
      @apply bottom-0 transform;
    }
  }
  .expanded {
    .bar {
      &:nth-child(1) {
        @apply top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2;

        --tw-rotate: 315deg;
      }
      &:nth-child(2) {
        @apply top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2;

        --tw-rotate: 225deg;
      }
      &:nth-child(3) {
        @apply top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2;

        --tw-rotate: 315deg;
      }
    }
  }

  // Pixel XL
  // iPhone X landscape
  @media (max-width: 823px) {
    @apply w-10 h-10;
    .bar {
      @apply h-2;
    }
  }

  @media (max-width: 768px) {
    @apply w-6 h-6;
    .bar {
      @apply h-1;
    }
  }
}
</style>
