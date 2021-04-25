import { onMounted, ref } from '@vue/composition-api'
import { router } from '@router'

export const useMyMagicalTitle = () => {
  const myName = ref('Rim')

  const title = ref({
    h1: 'Developer',
    h2: 'Designer',
    h3: 'Memer',
  })

  const setMagicalTitle = () => {
    switch (router.currentRoute.name) {
      case 'home':
        title.value = {
          h1: 'Developer',
          h2: 'Designer',
          h3: 'Memer',
        }
        break
      case 'about':
        title.value = {
          h1: 'About',
        }
        break
      case 'experience':
        title.value = {
          h1: 'Experience',
        }
        break
      case 'projects':
        title.value = {
          h1: 'Projects',
        }
        break
      case 'skills':
        title.value = {
          h1: 'Skills',
        }
        break
      default:
        title.value = {
          h1: 'Developer',
          h2: 'Designer',
          h3: 'Memer',
        }
        break
    }
  }

  onMounted(() => {
    setMagicalTitle()
  })

  return { myName, title, setMagicalTitle }
}
