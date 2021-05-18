<template>
  <div class="experience_page-wrapper page bg-gray-200">
    <div class="experience_page-inner">
      <h1>Google developer student clubs - Lead</h1>
      <p>
        After spending one year in DSC, I wanted to lead the community to build
        amazing products for the community, hold technology events for students
        in my campus.
      </p>
      <div>
        #DSC-DUT #Google #Developer student clubs
      </div>
    </div>
    <div class="experience_page-image">
      <img src="/img/me/8.jpg" alt="DSC Info Session 2020" />
    </div>
    <div class="experience_page-indicators">
      <div class="up">
        <i class="fas fa-chevron-up"></i>
      </div>
      <div class="down">
        <i class="fas fa-chevron-down"></i>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'ExperiencePage',
  props: {},
  setup() {
    //
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
      object-fit: cover;
    }
  }
  .experience_page-indicators {
    @apply duration-300 absolute top-1/2 left-0 z-10 transform -translate-y-1/2;
    .up {
      @apply w-14 h-14 bg-white flex justify-center items-center text-3xl;
    }
    .down {
      @apply w-14 h-14 bg-white flex justify-center items-center text-3xl;
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
