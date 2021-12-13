import Default from '@/pages/layouts/Default.vue'
import Login from '@/pages/auth/Login.vue'
import SignUp from '@/pages/auth/SignUp.vue'
import SignUpSuccess from '@/pages/auth/SignUpSuccess.vue'

export default [
  {
    path: '/auth',
    component: Default,
    children: [
      {
        path: 'login',
        name: 'login',
        component: Login,
        meta: {
          permission: '*',
        },
      },
      {
        path: 'signup',
        name: 'signup',
        component: SignUp,
        meta: {
          permission: '*',
        },
      },
      {
        path: 'signup/success',
        name: 'signupSuccess',
        component: SignUpSuccess,
        meta: {
          permission: '*',
        },
      },
    ],
  },
]
