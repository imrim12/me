<template>
  <div class="default_layout-wrapper">
    <Sidebar />
    <MyMagicTitle />
    <slot />
  </div>
</template>
<script>
// src\core\layouts\default.vue
import { defineComponent } from '@vue/composition-api'

import { Sidebar, MyMagicTitle } from '@/core/components/layout'

export default defineComponent({
  name: 'defaultLayout',
  components: {
    Sidebar,
    MyMagicTitle,
  },
  props: {},
  setup() {
    //
  },
})
</script>

<style lang="scss" scoped>
.default_layout-wrapper {
  //
}
</style>

<style lang="scss">
.default_layout-wrapper {
  //
}
</style>
