<template>
  <div class="sidebar-wrapper">
    <transition name="slide-all-fade" mode="out-in">
      <div class="sidebar-inner" v-if="!options.sidebarCollapse">
        <SidebarTrigger class="sidebar-trigger" />
        <div class="sidebar-item-list">
          <template v-for="item in sidebarItems">
            <div
              :key="'sidebar-item-' + item.label"
              :class="{
                active: item.route.name === $route.name,
              }"
              class="sidebar-item"
              @click="navigateTo(item.route)"
            >
              {{ item.label }}
            </div>
            <br :key="'sidebar-item-br-' + item.label" />
          </template>
        </div>
      </div>
    </transition>
    <transition name="fade" mode="out-in">
      <div
        class="sidebar-backdrop"
        v-if="!options.sidebarCollapse"
        @click="setSidebarCollapse(true)"
      ></div>
    </transition>
  </div>
</template>
<script>
// src\core\components\layout\Sidebar\Main.vue
import { defineComponent } from '@vue/composition-api'
import { useState, useMutations } from 'vuex-composition-helpers'

import { router } from '@router'

import SidebarTrigger from './SidebarTrigger.vue'

export default defineComponent({
  name: 'Sidebar',
  components: {
    SidebarTrigger,
  },
  setup() {
    const { options } = useState(['options'])
    const { SET_SIDEBAR_COLLAPSE } = useMutations(['SET_SIDEBAR_COLLAPSE'])

    const sidebarItems = [
      {
        label: 'Home',
        route: { name: 'home' },
      },
      // {
      //   label: 'About',
      //   route: { name: 'about' },
      // },
      {
        label: 'Skills',
        route: { name: 'skills' },
      },
      {
        label: 'Experience',
        route: { name: 'experience' },
      },
      // {
      //   label: 'Projects',
      //   route: { name: 'projects' },
      // },
    ]

    const navigateTo = (route) => {
      SET_SIDEBAR_COLLAPSE(true)
      setTimeout(() => {
        router.push(route)
      }, 500)
    }

    return {
      options,
      setSidebarCollapse: SET_SIDEBAR_COLLAPSE,
      sidebarItems,
      navigateTo,
    }
  },
})
</script>

<style lang="scss" scoped>
.sidebar-inner {
  @apply h-screen w-96 fixed bg-white z-50 flex justify-center items-center;
  .sidebar-trigger {
    @apply absolute top-0 right-0 transform scale-50 hover:rotate-12;
  }
  @media (max-width: 768px) {
    @apply w-80;
    .sidebar-trigger {
      @apply scale-100 top-2 right-2;
    }
  }
}
.sidebar-backdrop {
  background-color: rgba(15, 24, 38, 0.8);
  @apply h-screen w-screen fixed z-40;
}
.sidebar-item {
  @apply text-5xl font-bold text-primary leading-[5rem] inline-block relative cursor-pointer;
  &::after {
    content: '';
    @apply h-1 w-0 bg-primary absolute bottom-4 left-0 duration-300;
  }
  &:hover {
    &::after {
      @apply w-full;
    }
  }
  &.active {
    &::after {
      @apply w-full;
    }
  }
}
</style>
