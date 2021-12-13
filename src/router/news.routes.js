import Default from '@/pages/layouts/Default.vue'
import NewsList from '@/pages/news/NewsList.vue'
import NewsCreate from '@/pages/news/NewsCreate.vue'

export default [
  {
    path: '/',
    component: Default,
    children: [
      {
        path: '',
        name: 'news.list',
        component: NewsList,
        meta: {
          permission: '*',
        },
      },
      {
        path: 'news/create',
        name: 'news.create',
        component: NewsCreate,
        meta: {
          permission: 'news:create',
        },
      },
    ],
  },
]
