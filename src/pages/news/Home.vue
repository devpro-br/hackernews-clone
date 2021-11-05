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

    <!-- Create News Dialog -->
    <v-btn
      color="red"
      dark
      elevation="2"
      absolute
      x-large
      top
      right
      fab
      @click="showCreateNewsDialog = true"
    >
      <v-icon class="px-2">fas fa-plus</v-icon>
    </v-btn>
    <news-create-dialog
      :showDialog="showCreateNewsDialog"
      @onClose="showCreateNewsDialog = false"
      @onCreated="getNews"
    >
    </news-create-dialog>
  </v-container>
</template>

<script>
import ApiNews from '@/api/news.api.js'
import NewsList from '@/components/NewsList'
import NewsCreateDialog from '@/components/NewsCreateDialog'

export default {
  data: () => ({
    loading: true,
    showCreateNewsDialog: false,
    news: [],
  }),
  methods: {
    getNews() {
      this.loading = true
      this.showCreateNewsDialog = false
      ApiNews.list().then((data) => {
        this.news = data
        this.loading = false
      })
    },
  },
  created() {
    this.getNews()
  },
  components: {
    NewsList,
    NewsCreateDialog,
  },
}
</script>
