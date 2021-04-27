<template>
  <div class="home_page-wrapper page">
    <div class="h-full flex-1"></div>
    <div class="home_page_avatar-container h-full flex-1">
      <img
        src="/img/me/1.jpg"
        alt="Nguyễn Hữu Nguyên Ý"
        class="duration-500"
        style="opacity: 0;"
        onload="this.style.opacity = 1"
      />
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  name: 'HomePage',
})
</script>

<style lang="scss" scoped>
.home_page-wrapper {
  display: flex;
  flex-direction: row;

  /* width: 100vw;
  height: 100vh; */
}
.home_page_avatar-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1280px) {
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
