<template>
  <hello-world msg="Lista de notícias" :news="news" />
</template>

<script>
import ApiNews from '@/api/news.api.js'
import HelloWorld from '../components/HelloWorld'

export default {
  data: () => ({
    news: [],
  }),
  created() {
    ApiNews.list().then((data) => {
      this.news = data
    })
  },
  components: {
    HelloWorld,
  },
}
</script>
