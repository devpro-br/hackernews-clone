<script>
import TheFooter from '@/components/TheFooter.vue'
import TheAppBar from '@/components/TheAppBar.vue'

export default {
  data: () => ({}),
  components: {
    TheFooter,
    TheAppBar,
  },
}
</script>

<style></style>

<template>
  <v-main>
    <the-app-bar />
    <router-view />
    <the-footer />
  </v-main>
</template>
