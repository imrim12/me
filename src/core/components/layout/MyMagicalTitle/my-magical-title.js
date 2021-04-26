import { onMounted, ref } from '@vue/composition-api'
import { router } from '@router'

export const useMyMagicalTitle = () => {
  const myName = ref('Rim')

  const title = ref([
    {
      tag: 'h1',
      label: 'Developer',
    },
    {
      tag: 'h2',
      label: 'Designer',
    },
    {
      tag: 'h3',
      label: 'Memer',
    },
  ])

  const setMagicalTitle = () => {
    switch (router.currentRoute.name) {
      case 'home':
        title.value = [
          {
            tag: 'h1',
            label: 'Developer',
          },
          {
            tag: 'h2',
            label: 'Designer',
          },
          {
            tag: 'h3',
            label: 'Memer',
          },
        ]
        break
      case 'about':
        title.value = [
          {
            tag: 'h1',
            label: 'About',
          },
        ]
        break
      case 'experience':
        title.value = [
          {
            tag: 'h1',
            label: 'Experience',
          },
        ]
        break
      case 'projects':
        title.value = [
          {
            tag: 'h1',
            label: 'Projects',
          },
        ]
        break
      case 'skills':
        title.value = [
          {
            tag: 'h1',
            label: 'Skills',
          },
        ]
        break
      default:
        title.value = [
          {
            tag: 'h1',
            label: 'Developer',
          },
          {
            tag: 'h2',
            label: 'Designer',
          },
          {
            tag: 'h3',
            label: 'Memer',
          },
        ]
        break
    }
  }

  onMounted(() => {
    setMagicalTitle()
  })

  return { myName, title, setMagicalTitle }
}
