import Vue from 'vue'
import VueRouter from 'vue-router'
import authRoutes from './auth.routes'
import newsRoutes from './news.routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...authRoutes, ...newsRoutes],
})

export default router
