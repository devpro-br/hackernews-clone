<template>
  <v-container class="ma-0 pa-0">
    <v-row>
      <v-col md="8" xs="12" offset-md="2">
        <div align="center">
          <h1 class="grey--text text--darken-2">Sign Up</h1>

          <v-form v-model="valid">
            <v-text-field
              v-model="name"
              label="Full Name"
              required
              outlined
              append-icon="fa-user"
            ></v-text-field>

            <v-text-field
              v-model="username"
              label="E-Mail"
              :rules="usernameRules"
              required
              outlined
              append-icon="fa-envelope"
            ></v-text-field>

            <v-text-field
              v-model="password"
              label="Password"
              append-icon="fa-key"
              :rules="passwordRules"
              required
              outlined
              type="password"
              loading
            >
              <template v-slot:progress>
                <v-progress-linear
                  :value="progress"
                  :color="color"
                  absolute
                  height="7"
                ></v-progress-linear>
              </template>
            </v-text-field>

            <v-text-field
              v-model="passwordConfirmation"
              label="Password confirmation"
              append-icon="fa-key"
              :rules="[passwordConfirmationRules]"
              required
              outlined
              type="password"
            >
            </v-text-field>

            <v-text-field
              v-model="avatar"
              label="Avatar URL"
              outlined
              append-icon="fa-camera-retro"
              v-on:keyup.enter="login"
            ></v-text-field>

            <v-btn
              color="secondary"
              block
              x-large
              @click="signup"
              :disabled="!valid"
              >Create my account</v-btn
            >
          </v-form>

          <p class="pa-2">
            <span class="grey--text text--darken-3 text-none"
              >Already have account?</span
            >
            <v-btn plain @click="login">
              <span class="grey--text text--darken-3 text-none">Login</span>
            </v-btn>
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row class="pa-5">
      <v-col lg="12" xs="12" class="pa-6"> </v-col>
    </v-row>

    <!-- SNACKBAR TOAST -->
    <v-snackbar v-model="snackbar" :vertical="true" :top="true">
      {{ snackbar_text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import ApiAuth from '@/api/auth.api.js'

export default {
  data: () => ({
    loading: false,
    valid: false,
    name: '',
    username: '',
    avatar: '',
    password: '',
    passwordConfirmation: '',
    usernameRules: [
      (v) => !!v || 'E-Mail is required',
      (v) => v.indexOf('@') != -1 || 'Invalid E-Mail',
    ],
    passwordRules: [(v) => !!v || 'Password is required'],
    snackbar_text: '',
    snackbar: false,
  }),
  computed: {
    progress() {
      return Math.min(100, this.password.length * 10)
    },
    color() {
      if (this.password.length > 10) {
        return 'green'
      }
      if (this.password.length >= 6) {
        return 'yellow'
      }
      return 'error'
    },
  },
  methods: {
    signup() {
      this.loading = true
      const { username, password, name, avatar } = this
      const email = username
      ApiAuth.signup(username, password, email, name, avatar)
        .then((response) => {
          this.$store.dispatch('auth/setEmailSaved', response.data.email)
          this.$router.push({ name: 'signupSuccess' })
        })
        .catch((error) => {
          const response = error.response
          if (response.status == 409) {
            this.snackbar_text = `${response.data.detail}`
            this.snackbar = true
            return
          }
          this.snackbar_text = `${error}`
          this.snackbar = true
        })
    },
    login() {
      this.$router.push({ name: 'login' })
    },
    passwordConfirmationRules(value) {
      return value == this.password || 'Passwords not matching!'
    },
  },
}
</script>
