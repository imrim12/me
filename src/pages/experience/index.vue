<template>
  <div class="experience_page-wrapper page bg-gray-200">
    <div class="experience_page-inner" :style="experienceActiveTab.theme">
      <h1>{{ experienceActiveTab.place }} - {{ experienceActiveTab.role }}</h1>
      <p>{{ experienceActiveTab.description }}</p>
      <div>
        <a
          :href="tag.url"
          target="_blank"
          v-for="tag in experienceActiveTab.tags"
          :key="'experience-tag-' + tag.label"
        >
          <b>#{{ tag.label }} </b>
        </a>
      </div>
    </div>
    <div class="experience_page-image">
      <transition name="fade" mode="out-in">
        <img
          :key="experienceActiveTab.image.src"
          :src="experienceActiveTab.image.src"
          :alt="experienceActiveTab.image.alt"
        />
      </transition>
    </div>
    <div class="experience_page-indicators">
      <div class="up" @click="experienceTabPrev">
        <i class="fas fa-chevron-up"></i>
      </div>
      <div class="down" @click="experienceTabNext">
        <i class="fas fa-chevron-down"></i>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, defineComponent, ref } from '@vue/composition-api'
import { data } from './config'

export default defineComponent({
  name: 'ExperiencePage',
  props: {},
  setup() {
    const experienceActiveTabIndex = ref(0)
    const experiences = ref(data)
    const experienceActiveTab = computed(
      () => experiences.value[experienceActiveTabIndex.value]
    )
    const experienceTabPrev = () => {
      if (experienceActiveTabIndex.value === 0) {
        experienceActiveTabIndex.value = experiences.value.length - 1
      } else {
        experienceActiveTabIndex.value--
      }
    }
    const experienceTabNext = () => {
      if (experienceActiveTabIndex.value === experiences.value.length - 1) {
        experienceActiveTabIndex.value = 0
      } else {
        experienceActiveTabIndex.value++
      }
    }
    return {
      experienceActiveTab,
      experienceActiveTabIndex,
      experienceTabPrev,
      experienceTabNext,
    }
  },
})
</script>

<style lang="scss" scoped>
.experience_page-wrapper {
  .experience_page-inner {
    @apply duration-300 absolute bottom-0 left-0 z-10 max-w-5xl bg-white text-gray p-5;
    h1 {
      @apply text-3xl font-bold;
    }
    p {
      margin: 0.75rem 0;
    }
  }
  .experience_page-image {
    @apply duration-300 w-screen h-screen absolute top-0 left-0 overflow-hidden flex items-center justify-center;
    img {
      @apply object-cover;
    }
  }
  .experience_page-indicators {
    @apply duration-300 absolute top-1/2 left-0 z-10 transform -translate-y-1/2;
    .up {
      @apply duration-300 w-14 h-14 bg-white hover:bg-gray-400 cursor-pointer flex justify-center items-center text-3xl hover:text-white;
    }
    .down {
      @apply duration-300 w-14 h-14 bg-white hover:bg-gray-400 cursor-pointer flex justify-center items-center text-3xl hover:text-white;
    }
  }
  @media (max-width: 1280px) {
    .experience_page-inner {
      @apply max-w-3xl;
    }
    .experience_page-image {
      img {
        @apply transform scale-125;
      }
    }
  }
  @media (max-width: 823px) {
    .experience_page-inner {
      @apply max-w-2xl;
    }
    .experience_page-image {
      img {
        @apply h-full w-auto;
      }
    }
  }
  @media (max-width: 768px) {
    .experience_page-inner {
      max-height: 18rem !important;
      @apply max-w-lg overflow-y-scroll;
    }
    .experience_page-indicators {
      @apply top-0 left-full transform translate-y-0 -translate-x-full -rotate-90 origin-left;
      .up {
        @apply w-10 h-10;
      }
      .down {
        @apply w-10 h-10;
      }
    }
  }
  @media (max-width: 576px) {
    .experience_page-inner {
      max-height: 15rem !important;
      max-width: 18rem !important;
    }
  }
  @media (max-width: 340px) {
    .experience_page-inner {
      max-width: 15rem !important;
    }
  }
}
</style>
