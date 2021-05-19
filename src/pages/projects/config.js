import index from './index.vue'

export const routes = [
  {
    name: 'projects',
    path: '/projects',
    component: index,
    meta: {
      //
    },
  },
]

export const data = [
  {
    key: 'sip',
    place: 'SiP - A side-project community',
    role: 'Frontend developer, designer',
    description: `SiP - side-project community is a website to share your ideas, products and look for partnership or mentorship, the project was initiated by our formal DSC-DUT leader and had its first MVP
    I designed the UI of the first MVP and programed its, i was inspired by the git bash terminal interface and the "hacky" style so the product looks kind of unique
    `,
    tags: [
      {
        label: 'SiP',
        url: 'https://www.facebook.com/communitySiP',
      },
      {
        label: 'DSC-DUT',
        url: 'https://www.facebook.com/dscdut',
      },
      {
        label: 'Google',
        url: 'https://google.com',
      },
      {
        label: 'Developer student clubs',
        url: 'https://dsc.community.dev/da-nang-university-of-technology',
      },
    ],
    image: {
      src: '/img/projects/1.png',
      alt: 'SiP - A side-project community',
    },
    theme: {
      color: '#07BE1A',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    backgroundColor: '#000',
  },
  {
    key: 'thecodeorigin',
    place: 'thecodeorigin',
    role: 'Owner',
    description: `I like building enterprise code bases so I created this project on Github as a place for me and my friends to share their project templates, boilerplates, starter projects, whatever they’re called.
    https://github.com/thecodeorigin
    https://github.com/thecodeorigin/vue-template
    `,
    tags: [
      {
        label: 'thecodeorigin',
        url: 'https://github.com/thecodeorigin',
      },
    ],
    image: {
      src: '/img/projects/2.png',
      alt: 'thecodeorigin',
    },
    theme: {
      color: 'var(--color-primary)',
      backgroundColor: '#FFF',
    },
    backgroundColor: '#FFF',
  },
]

export default { routes }
