<template>
  <v-container>
    <h1>Lista de notícias</h1>
    <v-progress-linear
      v-if="loading"
      indeterminate
      size="6"
      color="yellow darken-2"
    ></v-progress-linear>
    <news-list :news="news" />
  </v-container>
</template>

<script>
import ApiNews from '@/api/news.api.js'
import NewsList from '@/components/NewsList'

export default {
  data: () => ({
    loading: true,
    news: [],
  }),
  created() {
    ApiNews.list().then((data) => {
      this.news = data
      this.loading = false
    })
  },
  components: {
    NewsList,
  },
}
</script>
