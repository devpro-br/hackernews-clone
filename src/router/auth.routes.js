import Default from '@/pages/layouts/Default.vue'
import Login from '@/pages/auth/Login.vue'

export default [
  {
    path: '/login',
    component: Default,
    children: [
      {
        path: '',
        name: 'login',
        component: Login,
      },
    ],
  },
]
