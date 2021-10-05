import Default from '@/pages/layouts/Default.vue'
import Home from '@/pages/news/Home.vue'

export default [
  {
    path: '/',
    component: Default,
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
      },
    ],
  },
]
