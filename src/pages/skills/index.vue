<template>
  <div class="skills_page-wrapper page">
    <div class="skills_page_avatar-container">
      <img
        src="/img/me/7.jpg"
        alt="Nguyễn Hữu Nguyên Ý"
        class="duration-500"
        style="opacity: 0;"
        onload="this.style.opacity = 1"
      />
    </div>
    <div class="skills_page_item-wrapper">
      <div
        class="skills_page_item-inner"
        v-for="skill in skills"
        :key="`skill-item-${skill.name}`"
      >
        <div class="skills_page_item-header">
          <div class="flex items-baseline">
            <img v-if="skill.logo" :src="skill.logo" :alt="skill.name" />
            <span class="skills_page_item-skill">{{ skill.name }}</span>
          </div>
          <div class="skills_page_item-years">{{ skill.years }}</div>
        </div>
        <div class="skills_page_item-body">
          {{ skill.description }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'SkillsPage',
  props: {},
  setup() {
    const skills = ref([
      {
        logo: '/img/skills/vue.png',
        name: 'Vue.js',
        years: '3 years',
        description: `I have experience in using Vue with Vue CLI, VueX and Nuxt.js for
          building Single Page Application with a RESTful API server and have
          good knowledge about virtual DOM.`,
      },
      {
        logo: '/img/skills/nuxt.png',
        name: 'Nuxt.js',
        years: '2 years',
        description: `With Nuxt.js, I have done many projects and built many code bases,
          configure plugins, webpack, axios interceptors, auto-required modules in
          order not to meet merge conflict in teamwork.`,
      },
      {
        name: 'HTML, CSS, JS',
        years: '4 years',
        description: `I have worked on many landing pages and websites with pure
          HTML, CSS, JS and sometimes jQuery.`,
      },
      {
        logo: '/img/skills/laravel.png',
        name: 'Laravel PHP',
        years: '1 years',
        description: `I took a PHP course in Aptech and did a management system for
          a company as a freelancer.`,
      },
      {
        logo: '/img/skills/wordpress.png',
        name: 'Wordpress PHP',
        years: '1 years',
        description: `I worked on 2 websites and countless landing pages, both
          pure coded and using theme builders like Elementor, WP theme baker,...`,
      },
      {
        name: 'Others',
        years: 'High school - Present',
        description: `I have advanced skills in Photoshop, Illustrator, Premiere
          pro, After Effect. For web designing, i’m good with Adobe XD and Figma`,
      },
    ])
    return { skills }
  },
})
</script>

<style lang="scss" scoped>
.skills_page-wrapper {
  display: flex;
  flex-direction: row;
  @media (max-width: 1280px) {
    flex-direction: column;
  }
}
.skills_page_avatar-container {
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;

  img {
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 1280px) {
    @apply flex-initial h-1/3;

    img {
      @apply w-full h-auto;
    }
  }

  @media (max-width: 823px) {
    @apply h-1/5;
  }

  @media (max-width: 768px) {
    @apply hidden;
  }
}
.skills_page_item-wrapper {
  @apply h-full flex-1 overflow-y-auto;

  @media (max-width: 1280px) {
    @apply pt-8 pb-20;
  }
  @media (max-width: 823px) {
    @apply pt-8 pb-20;
  }
  @media (max-width: 768px) {
    @apply pt-8 pb-20;
  }
}
.skills_page_item-inner {
  @apply p-10 font-source;
  @media (max-width: 768px) {
    @apply p-5;
  }
}
.skills_page_item-header {
  @apply flex items-baseline justify-between font-source;
  img {
    width: auto;
    height: 60px;
  }
  @media (max-width: 768px) {
    img {
      width: auto;
      height: 30px;
    }
  }
}
.skills_page_item-skill {
  @apply text-5xl font-source text-gray-700 ml-3;
  @media (max-width: 768px) {
    @apply text-3xl;
  }
}
.skills_page_item-years {
  @apply text-2xl font-source text-gray-500;
  @media (max-width: 768px) {
    @apply text-xl;
  }
}
.skills_page_item-body {
  @apply text-right text-2xl text-gray-700 font-source mt-3;
}
</style>
