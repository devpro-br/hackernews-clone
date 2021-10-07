<template>
  <v-container>
    <h1>Lista de notícias</h1>
    <news-list :news="news" />
  </v-container>
</template>

<script>
import ApiNews from '@/api/news.api.js'
import NewsList from '@/components/NewsList'

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
    NewsList,
  },
}
</script>
