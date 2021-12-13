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
      color="primary"
      dark
      elevation="2"
      absolute
      large
      top
      right
      fab
      @click="createNews"
    >
      <v-icon class="px-2">fas fa-plus</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import ApiNews from '@/api/news.api.js'
import NewsList from '@/components/NewsList'

export default {
  data: () => ({
    loading: true,
    showCreateNewsDialog: false,
    news: [],
  }),
  computed: {
    loggedUser() {
      return this.$store.getters['auth/getLoggedUser']
    },
  },
  methods: {
    getNews() {
      this.loading = true
      this.showCreateNewsDialog = false
      ApiNews.list().then((data) => {
        this.news = data
        this.loading = false
      })
    },
    createNews() {
      this.$router.push({ name: 'news.create' })
    },
  },
  created() {
    this.getNews()
    this.$store.dispatch('auth/loadLoggedUser')
  },
  components: {
    NewsList,
  },
}
</script>
