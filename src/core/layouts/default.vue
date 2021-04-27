<template>
  <div class="default_layout-wrapper">
    <Sidebar />
    <SidebarTrigger
      v-if="$route.name !== 'home'"
      class="fixed top-0 left-0 duration-300"
    />
    <MyMagicalTitle />
    <slot />
  </div>
</template>
<script>
// src\core\layouts\default.vue
import { defineComponent } from '@vue/composition-api'

import { Sidebar, MyMagicalTitle } from '@/core/components/layout'
import SidebarTrigger from '@/core/components/layout/Sidebar/SidebarTrigger.vue'

export default defineComponent({
  name: 'defaultLayout',
  components: {
    Sidebar,
    MyMagicalTitle,
    SidebarTrigger,
  },
  props: {},
  setup() {
    //
  },
})
</script>

<style lang="scss" scoped>
.default_layout-wrapper {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
