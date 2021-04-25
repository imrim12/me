import Vue from 'vue'
import VueRouter from 'vue-router'
// Pages
import home from '@pages/home/config'
import about from '@pages/about/config'
import projects from '@pages/projects/config'
import experience from '@pages/experience/config'
import skills from '@pages/skills/config'
// Sandbox
import sandbox from '@/core/pages/sandbox/config'
// Errors
import errorPages from '@/core/pages/error/config'

Vue.use(VueRouter)

const routes = [
  ...sandbox.routes,
  // Pages
  ...home.routes,
  ...about.routes,
  ...projects.routes,
  ...experience.routes,
  ...skills.routes,
  // Error pages
  ...errorPages.routes,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

// Global middleware
// router.beforeEach()

export default router
