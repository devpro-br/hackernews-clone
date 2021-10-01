<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Lista de notícias" :news="news" />
  </div>
</template>

<script>
import ApiNews from '@/api/news.api.js'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data: () => ({
    news: [],
  }),
  components: {
    HelloWorld,
  },
  methods: {},
  created() {
    ApiNews.list().then((data) => {
      this.news = data
    })
  },
}
</script>

<style scoped lang="scss"></style>
