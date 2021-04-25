<template>
  <div class="my-magic-title">
    <div class="pl-3 mb-2 flex items-center">
      <SidebarTrigger />
      <div class="my-name">
        Rim
      </div>
    </div>
    <h1>Developer</h1>
    <h2>Designer</h2>
    <h3>Memer</h3>
  </div>
</template>
<script>
// src\core\components\layout\MyMagicTitle.vue
import { defineComponent } from '@vue/composition-api'
import SidebarTrigger from '@/core/components/layout/Sidebar/SidebarTrigger.vue'

export default defineComponent({
  name: 'MyMagicTitle',
  components: {
    SidebarTrigger,
  },
  props: {},
  setup() {
    //
  },
})
</script>

<style lang="scss" scoped>
.my-magic-title {
  @apply absolute top-1/2 left-1/2 transform text-primary z-10;

  --tw-translate-x: -75%;
  --tw-translate-y: -50%;

  h1 {
    @apply text-[10rem] leading-[10rem] font-bold duration-300;
  }

  h2 {
    @apply text-[8rem] leading-[8rem] font-bold duration-300;
  }

  h3 {
    @apply text-[6rem] leading-[6rem] font-bold duration-300;
  }

  .my-name {
    @apply text-[6rem] leading-[6rem] ml-10;
  }

  @media (max-width: 1280px) {
    --tw-translate-x: 0;
    @apply left-0;
  }

  // Pixel XL
  // iPhone X landscape
  @media (max-width: 823px) {
    h1 {
      @apply text-[6.5rem] leading-[6.5rem] ml-2;
    }

    h2 {
      @apply text-[5rem] leading-[5rem] ml-2;
    }

    h3 {
      @apply text-[4rem] leading-[4rem] ml-2;
    }

    .my-name {
      @apply text-[3.5rem] leading-[3.5rem] ml-3;
    }
  }

  @media (max-width: 768px) {
    h1 {
      @apply text-[3.5rem] leading-[4rem] ml-2;
    }

    h2 {
      @apply text-[3rem] leading-[3.5rem] ml-2;
    }

    h3 {
      @apply text-[2rem] leading-[2.5rem] ml-2;
    }

    .my-name {
      @apply text-[2.5rem] leading-[2rem] ml-3;
    }
  }
}
</style>

<style lang="scss">
.my-magic-title {
  //
}
</style>
