<template>
  <div class="about_page-wrapper page">
    <div class="about_page_item-wrapper">
      <h1 class="about_page_item">
        <span class="about_page_item-headline">
          Full name:
        </span>
        <span class="about_page_item-content">
          {{ about.fullName }}
        </span>
      </h1>
      <p class="about_page_item">
        <span class="about_page_item-headline">Age: </span>
        <span class="about_page_item-content">
          {{ about.age }}
        </span>
      </p>
      <h2 class="about_page_item">
        <span class="about_page_item-headline">Introduction: </span>
        <span class="about_page_item-content">
          {{ about.introduction }}
        </span>
      </h2>
      <p class="about_page_item">
        <span class="about_page_item-headline">Religion: </span>
        <span class="about_page_item-content">
          {{ about.religion }}
        </span>
      </p>
      <p class="about_page_item">
        <span class="about_page_item-headline">Language: </span>
        <span class="about_page_item-content">
          {{ about.language }}
        </span>
      </p>
      <div class="about_page_item">
        <span class="about_page_item-headline">Education: </span>
        <ul class="about_page_item-content">
          <li v-for="item in about.education" :key="item.school">
            <p>
              <b>{{ item.school }}</b>
            </p>
            <p>{{ item.degree }}</p>
            <p>
              <small>{{ item.year }}</small>
            </p>
          </li>
        </ul>
      </div>
      <p class="about_page_item">
        <span class="about_page_item-headline">More about me: </span>
        <span class="about_page_item-content">{{ about.moreAboutMe }}</span>
      </p>
    </div>
    <div class="about_page_avatar-container">
      <img
        src="/img/me/2.JPG"
        alt="Nguyễn Hữu Nguyên Ý"
        class="duration-500"
        style="opacity: 0;"
        onload="this.style.opacity = 1"
      />
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'AboutPage',
  props: {},
  setup() {
    const about = ref({
      fullName: 'Nguyễn Hữu Nguyên Ý',
      age: new Date().getFullYear() - 1999,
      introduction: `I have been in website development industry for 4 years,
      have experience in Wordpress or pure HTML, CSS and JS websites, also
      have 3 year experience in VueJS and NuxtJS. I have advanced skills in
      Photoshop and Illustrator which help me in designing my own assets,
      then i put them together in Adobe XD, i love pictures, graphic and
      motions,... that's why i chose front-end from the beginning.`,
      religion: 'Buddhism',
      language: 'Vietnamese, English',
      education: [
        {
          school: 'Danang University of Technology',
          degree: 'Software Engineer',
          year: '2017 - January 2022',
        },
        {
          school: 'Softech Aptech',
          degree: 'PHP Developer',
          year: '2017 - 2018',
        },
        {
          school: 'Phan Chau Trinh high school',
          degree: '',
          year: '2014 - 2017',
        },
      ],
      moreAboutMe: `I'm currently a fourth year student in Danang university of science and technology (DUT).
      For school projects, i've explored and used many technologies to get the jobs done: GCP, AWS, C#,
      Java, Nest.js, Express, React Native, Tensorflow with Python on raspberry pi, Vue, React, Angular...
      I'm also the community leader at DSC-DUT. My desire is to create impact in the community by building
      awesome products to solve local people's problems.
      I like kimbap, sushi, pizza, spaghetti, ice cream and karaoke.
      `,
    })
    return { about }
  },
})
</script>

<style lang="scss" scoped>
.about_page-wrapper {
  @apply flex flex-row;
  @media (max-width: 1280px) {
    @apply flex-col;
  }
}
.about_page_avatar-container {
  @apply relative flex flex-1 items-center justify-center h-full overflow-hidden;

  img {
    @apply h-full object-cover;
  }

  @media (max-width: 1280px) {
    @apply flex-initial h-96 order-1;

    img {
      @apply w-full h-auto;
    }
  }

  @media (max-width: 768px) {
    @apply hidden;
  }
}
.about_page_item-wrapper {
  @apply h-full flex-1 overflow-y-auto p-16;

  @media (max-width: 1280px) {
    @apply pt-12 pb-20 order-2;
  }
  @media (max-width: 823px) {
    @apply pt-12 pb-20;
  }
  @media (max-width: 768px) {
    @apply pt-12 pb-20;
  }
}
.about_page_item {
  @apply flex gap-5 mb-5;
}
.about_page_item-headline {
  @apply block w-36 font-bold text-right;
}
.about_page_item-content {
  @apply flex-1;
}
@media (max-width: 768px) {
  .about_page_item {
    @apply flex-col mb-2 gap-0;
  }
  .about_page_item-headline {
    @apply w-20 text-left;
  }
}
</style>
