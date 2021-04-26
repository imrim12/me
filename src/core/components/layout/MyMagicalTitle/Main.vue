<template>
  <div class="my-magic-title" :class="[$route.name]">
    <transition name="fade" mode="out-in">
      <div class="pl-3 mb-2 flex items-center" v-if="$route.name === 'home'">
        <SidebarTrigger class="my-magic-title-sidebar-trigger duration-300" />
        <!-- Only display my name in home page -->
        <div class="my-name">
          {{ myName }}
        </div>
      </div>
    </transition>
    <transition-group name="list" tag="div">
      <component
        :is="item.tag"
        v-for="item of title"
        :key="item.label"
        class="list-item my-magical-title-item"
      >
        {{ item.label }}
      </component>
    </transition-group>
  </div>
</template>
<script>
// src\core\components\layout\MyMagicalTitle.vue
import { defineComponent } from '@vue/composition-api'
import { useMyMagicalTitle } from './my-magical-title.js'
import SidebarTrigger from '@/core/components/layout/Sidebar/SidebarTrigger.vue'

export default defineComponent({
  name: 'MyMagicalTitle',
  components: {
    SidebarTrigger,
  },
  setup() {
    const { myName, title, setMagicalTitle } = useMyMagicalTitle()

    return { myName, title, setMagicalTitle }
  },
  computed: {
    routerName() {
      return this.$route.name
    },
  },
  watch: {
    routerName() {
      this.setMagicalTitle()
    },
  },
})
</script>

<style lang="scss" scoped src="./style-default.scss"></style>
<style lang="scss" scoped src="./style-about.scss"></style>
<style lang="scss" scoped src="./style-experience.scss"></style>
<style lang="scss" scoped src="./style-projects.scss"></style>
<style lang="scss" scoped src="./style-skills.scss"></style>
