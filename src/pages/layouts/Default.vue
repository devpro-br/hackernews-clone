<script>
import TheFooter from '@/components/TheFooter.vue'
import TheAppBar from '@/components/TheAppBar.vue'

export default {
  data: () => ({}),
  computed: {
    loggedUser() {
      return this.$store.getters['auth/getLoggedUser'] || {}
    },
  },
  created() {
    this.$store.dispatch('auth/loadLoggedUser')
  },
  components: {
    TheFooter,
    TheAppBar,
  },
}
</script>

<style></style>

<template>
  <v-main>
    <the-app-bar :user="loggedUser.auth" />
    <router-view />
    <the-footer />
  </v-main>
</template>
