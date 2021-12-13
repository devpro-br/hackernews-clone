import Vue from 'vue'
import VueRouter from 'vue-router'
import authRoutes from './auth.routes'
import newsRoutes from './news.routes'
import pageGuardian from './guardian'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...authRoutes, ...newsRoutes],
})

router.beforeEach((to, from, next) => {
  pageGuardian(to, from, next)
})

export default router
