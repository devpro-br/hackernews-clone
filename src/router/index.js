import Vue from 'vue'
import VueRouter from 'vue-router'
import newsRoutes from './news.routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...newsRoutes],
})

export default router
