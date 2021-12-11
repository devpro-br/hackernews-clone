<template>
  <v-container class="ma-0 pa-0">
    <v-row class="ma-0 pa-0">
      <v-col lg="5" md="5" xs="12" class="pa-6">
        <v-img src="../../assets/undraw_login.svg"></v-img>
      </v-col>
      <v-col lg="7" md="7" xs="12" class="pa-12 flex-grow-1 flex-shrink-0">
        <div align="center">
          <h1 class="pa-6 pt-12 grey--text text--darken-2">
            Log in to Confraria News
          </h1>

          <v-form v-model="valid">
            <v-text-field
              v-model="username"
              label="E-Mail"
              :rules="usernameRules"
              required
              outlined
              append-icon="fa-user"
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="Password"
              :rules="passwordRules"
              required
              outlined
              append-icon="fa-key"
              type="password"
              v-on:keyup.enter="login"
            ></v-text-field>
            <v-btn
              color="secondary"
              block
              x-large
              @click="login"
              :disabled="!valid"
              >Login</v-btn
            >
          </v-form>

          <p class="pa-2">
            <span class="grey--text text--darken-3 text-none"
              >Not registered?</span
            >
            <v-btn text @click="signup">
              <span class="grey--text text--darken-3 text-none"
                >Create Account</span
              >
            </v-btn>
          </p>
          <p class="pa-2">
            <v-btn text @click="home">
              <v-icon class="pr-2">fas fa-angle-left</v-icon>
              <span class="grey--text text--darken-3 text-none">Back home</span>
            </v-btn>
          </p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ApiAuth from '@/api/auth.api.js'

export default {
  data: () => ({
    loading: false,
    valid: false,
    username: '',
    password: '',
    usernameRules: [
      (v) => !!v || 'E-Mail is required',
      (v) => v.indexOf('@') != -1 || 'Invalid E-Mail',
    ],
    passwordRules: [(v) => !!v || 'Password is required'],
  }),
  methods: {
    login() {
      this.loading = true
      const { username, password } = this
      ApiAuth.login(username, password).then((data) => {
        window.localStorage.setItem('loggedUser', JSON.stringify(data))
        this.home()
      })
    },
    home() {
      this.$router.push({ name: 'home' })
    },
    signup() {
      this.$router.push({ name: 'signup' })
    },
  },
}
</script>
