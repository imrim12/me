<template>
  <div class="default_layout-wrapper">
    <Sidebar />
    <MyMagicalTitle />
    <slot />
  </div>
</template>
<script>
// src\core\layouts\default.vue
import { defineComponent } from '@vue/composition-api'

import { Sidebar, MyMagicalTitle } from '@/core/components/layout'

export default defineComponent({
  name: 'defaultLayout',
  components: {
    Sidebar,
    MyMagicalTitle,
  },
  props: {},
  setup() {
    //
  },
})
</script>

<style lang="scss" scoped>
.default_layout-wrapper {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
