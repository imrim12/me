<template>
  <div class="home_page-wrapper">
    <div class="h-full flex-1"></div>
    <div class="home_page_avatar-container h-full flex-1"></div>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'HomePage',
  setup() {
    //
  },
})
</script>

<style lang="scss" scoped>
.home_page-wrapper {
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
}
.home_page_avatar-container {
  position: relative;
  background-image: url(/img/me/1.jpg);
  background-position-x: -180px;
  background-size: cover;
  @media (max-width: 1280px) {
    background-position: center;
    &::after {
      content: '';
      @apply w-full h-full bg-white opacity-40 absolute top-0 right-0 z-0;
    }
  }
}
</style>

<style lang="scss">
//
</style>
