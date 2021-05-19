<template>
  <div
    class="project_page-wrapper page"
    :style="{ backgroundColor: projectActiveTab.backgroundColor }"
  >
    <div
      class="project_page-inner"
      :style="projectActiveTab.theme"
      v-if="!isMobile"
    >
      <h1>{{ projectActiveTab.place }} - {{ projectActiveTab.role }}</h1>
      <p>{{ projectActiveTab.description }}</p>
      <div>
        <a
          :href="tag.url"
          target="_blank"
          v-for="tag in projectActiveTab.tags"
          :key="'project-tag-' + tag.label"
        >
          <b>#{{ tag.label }} </b>
        </a>
      </div>
    </div>
    <!-- Modal -->
    <div
      v-if="isMobile"
      :style="projectActiveTab.theme"
      class="project_mobile_page-inner"
      :class="[isVisible ? 'is-visible' : '']"
      @click="isVisible = !isVisible"
    >
      <div v-if="isVisible">
        <h1> {{ projectActiveTab.place }} - {{ projectActiveTab.role }} </h1>
        <p>{{ projectActiveTab.description }}</p>
        <div>
          <a
            :href="tag.url"
            target="_blank"
            v-for="tag in projectActiveTab.tags"
            :key="'project-tag-' + tag.label"
          >
            <b>#{{ tag.label }} </b>
          </a>
        </div>
      </div>
      <i v-else class="fas fa-info-circle"></i>
    </div>
    <!-- End modal -->
    <div class="project_page-image">
      <transition name="fade" mode="out-in">
        <img
          :key="projectActiveTab.image.src"
          :src="projectActiveTab.image.src"
          :alt="projectActiveTab.image.alt"
        />
      </transition>
    </div>
    <div class="project_page-indicators" :style="projectActiveTab.theme">
      <div class="up" @click="projectTabPrev">
        <i class="fas fa-chevron-up"></i>
      </div>
      <div class="down" @click="projectTabNext">
        <i class="fas fa-chevron-down"></i>
      </div>
    </div>
  </div>
</template>
<script>
import router from '@/router'
import { computed, defineComponent, onMounted, ref } from '@vue/composition-api'
import { data } from './config'

export default defineComponent({
  name: 'ProjectPage',
  props: {},
  setup() {
    const projectActiveTabIndex = ref(0)
    const projects = ref(data)
    const projectActiveTab = computed(
      () => projects.value[projectActiveTabIndex.value]
    )

    const setProjectRouteQuery = () => {
      router.replace({
        query: {
          project: projectActiveTab.value.key,
        },
      })
    }
    const projectTabPrev = () => {
      if (projectActiveTabIndex.value === 0) {
        projectActiveTabIndex.value = projects.value.length - 1
      } else {
        projectActiveTabIndex.value--
      }
      setProjectRouteQuery()
    }
    const projectTabNext = () => {
      if (projectActiveTabIndex.value === projects.value.length - 1) {
        projectActiveTabIndex.value = 0
      } else {
        projectActiveTabIndex.value++
      }
      setProjectRouteQuery()
    }

    const isMobile = ref(false)
    const isVisible = ref(false)

    onMounted(() => {
      setProjectRouteQuery()
      isMobile.value = window.innerWidth < 576
      window.addEventListener('resize', (event) => {
        isMobile.value = event.target.innerWidth < 576
      })
    })

    return {
      projectActiveTab,
      projectActiveTabIndex,
      projectTabPrev,
      projectTabNext,
      isMobile,
      isVisible,
    }
  },
})
</script>

<style lang="scss" scoped>
.project_page-wrapper {
  .project_page-inner {
    @apply duration-300 absolute bottom-0 right-0 z-10 max-w-5xl bg-white text-gray p-5;
    h1 {
      @apply text-3xl font-bold;
    }
    p {
      margin: 0.75rem 0;
    }
  }
  .project_page-image {
    @apply duration-300 w-screen h-screen absolute top-0 left-0 overflow-hidden flex items-center justify-center;
    img {
      @apply object-cover;
    }
  }
  .project_page-indicators {
    @apply duration-300 absolute top-1/2 right-0 z-10 transform -translate-y-1/2;
    .up {
      @apply duration-300 w-14 h-14 hover:bg-gray-400 cursor-pointer flex justify-center items-center text-3xl hover:text-white;
    }
    .down {
      @apply duration-300 w-14 h-14 hover:bg-gray-400 cursor-pointer flex justify-center items-center text-3xl hover:text-white;
    }
  }
  @media (max-width: 1280px) {
    .project_page-inner {
      @apply max-w-3xl;
    }
    .project_page-image {
      img {
        @apply transform scale-125;
      }
    }
  }
  @media (max-width: 823px) {
    .project_page-inner {
      @apply max-w-2xl;
    }
    .project_page-image {
      img {
        @apply h-full w-auto;
      }
    }
  }
  @media (max-width: 768px) {
    .project_page-inner {
      max-height: 18rem !important;
      @apply max-w-lg overflow-y-scroll;
    }
    .project_page-indicators {
      @apply top-0 transform translate-y-0 -rotate-90 origin-left;
      .up {
        @apply w-10 h-10;
      }
      .down {
        @apply w-10 h-10;
      }
    }
  }
  .project_mobile_page-inner {
    @apply w-16 h-16 duration-300;
    @apply flex items-center justify-center;
    @apply fixed top-full right-0 z-50 bg-white text-primary text-2xl p-5;
    @apply transform -translate-y-full;
    &.is-visible {
      width: 80vw;
      height: 80vh;
      @apply text-gray overflow-y-scroll;
      @apply top-1/2 right-1/2;
      @apply items-start;
      @apply -translate-y-1/2  translate-x-1/2;
    }
    h1 {
      @apply text-3xl font-bold;
    }
    p {
      margin: 0.75rem 0;
    }
  }
}
</style>
