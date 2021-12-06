<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="../assets/logo-confraria-white.png"
        transition="scale-transition"
        width="40"
      />
    </div>

    <v-toolbar-title>Confraria News</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn plain @click="login">Login</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({}),
  methods: {
    login() {
      this.$router.push({ name: 'login' })
    },
  },
}
</script>
