import index from './index.vue'

export const routes = [
  {
    name: 'skills',
    path: '/skills',
    component: index,
    meta: {
      //
    },
  },
]

export const data = [
  {
    logo: '/img/skills/vue.png',
    name: 'Vue.js',
    years: new Date().getFullYear() - 2018 + ' years',
    description: `I have experience in using Vue with Vue CLI, VueX and Nuxt.js for
      building Single Page Application with a RESTful API server and have
      good knowledge about virtual DOM.`,
  },
  {
    logo: '/img/skills/nuxt.png',
    name: 'Nuxt.js',
    years: new Date().getFullYear() - 2019 + ' years',
    description: `With Nuxt.js, I have done many projects and built many code bases,
      configure plugins, webpack, axios interceptors, auto-required modules in
      order not to meet merge conflict in teamwork.`,
  },
  {
    name: 'HTML, CSS, JS',
    years: new Date().getFullYear() - 2017 + ' years',
    description: `I have worked on many landing pages and websites with pure
      HTML, CSS, JS and sometimes jQuery.`,
  },
  {
    logo: '/img/skills/laravel.png',
    name: 'Laravel PHP',
    years: 1 + ' years',
    description: `I took a PHP course in Aptech and did a management system for
      a company as a freelancer.`,
  },
  {
    logo: '/img/skills/wordpress.png',
    name: 'Wordpress PHP',
    years: 1 + ' years',
    description: `I worked on 2 websites and countless landing pages, both
      pure coded and using theme builders like Elementor, WP theme baker,...`,
  },
  {
    name: 'Others',
    years: 'High school - Present',
    description: `I have advanced skills in Photoshop, Illustrator, Premiere
      pro, After Effect. For web designing, i’m good with Adobe XD and Figma`,
  },
]

export default { routes }
