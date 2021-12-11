<template>
  <v-container class="ma-0 pa-0">
    <v-row>
      <v-col md="8" xs="12" offset-md="2">
        <div align="center">
          <v-img src="../../assets/undraw_login.svg" max-width="300"></v-img>
        </div>
      </v-col>
      <v-col md="8" xs="12" offset-md="2">
        <div align="center">
          <h1 class="grey--text text--darken-2 pa-4">
            Your account has been created!
          </h1>
          <p class="pa-4">
            <v-btn rounded color="secondary" dark x-large @click="login">
              Login
            </v-btn>
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push({ name: 'login' })
    },
  },
}
</script>
