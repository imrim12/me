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
        label: 'GDSC-DUT',
        url: 'https://www.facebook.com/gdsc.dut',
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
    description: `I like building enterprise code bases so I created this project on Github as a place for me and my friends to share their project templates, boilerplates, starter projects, whatever they’re called.`,
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
  {
    key: 'unigo',
    place: 'uniGO - Digital map for university',
    role: 'Project manager',
    description: `In my time joining the GDSC community, i have the opportunity to work with so many young talents, who are enthusiastic about technology and build products for the community`,
    tags: [
      {
        label: 'unigo',
        url: 'https://unigo.pro',
      },
    ],
    image: {
      src: '/img/projects/3.png',
      alt: 'unigo',
    },
    theme: {
      color: 'var(--color-primary)',
      backgroundColor: '#FFF',
    },
    backgroundColor: '#FFF',
  },
  {
    key: 'eavesdrop',
    place: 'Eavesdrop - A marketing tool that help you to find your customers',
    role: 'Frontend developer',
    description: `Eavesdrop is a marketing tool that help you to find customers for your early stage product, it finds conversation on social media platforms and help you engage people who are interested with the provided keywords.`,
    tags: [
      {
        label: 'eavesdrop',
        url: 'https://eavesdrop.so',
      },
    ],
    image: {
      src: '/img/projects/4.png',
      alt: 'eavesdrop',
    },
    theme: {
      color: '#22BC66',
      backgroundColor: '#FFF',
    },
    backgroundColor: '#FFF',
  },
]

export default { routes }
