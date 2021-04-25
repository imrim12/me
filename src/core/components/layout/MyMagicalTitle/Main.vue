<template>
  <div class="my-magic-title" :class="[$route.name]">
    <div class="pl-3 mb-2 flex items-center">
      <SidebarTrigger class="my-magic-title-sidebar-trigger" />
      <!-- Only display my name in home page -->
      <div class="my-name" v-if="$route.name === 'home'">
        {{ myName }}
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <h1 v-if="title.h1">{{ title.h1 }}</h1>
    </transition>
    <transition name="fade" mode="out-in">
      <h2 v-if="title.h2">{{ title.h2 }}</h2>
    </transition>
    <transition name="fade" mode="out-in">
      <h3 v-if="title.h3">{{ title.h3 }}</h3>
    </transition>
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
