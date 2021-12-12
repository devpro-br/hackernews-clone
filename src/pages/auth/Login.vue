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
              ref="usernameRef"
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
              ref="passwordRef"
            ></v-text-field>
            <v-btn
              color="secondary"
              block
              x-large
              @click="login"
              :disabled="!valid"
              :loading="loading"
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
export default {
  data: () => ({
    valid: false,
    username: '',
    password: '',
    usernameRules: [
      (v) => !!v || 'E-Mail is required',
      (v) => v.indexOf('@') != -1 || 'Invalid E-Mail',
    ],
    passwordRules: [(v) => !!v || 'Password is required'],
    snackbar_text: '',
    snackbar: false,
  }),
  computed: {
    emailSaved() {
      return this.$store.getters['auth/getEmailSaved']
    },
    loading() {
      return this.$store.getters['auth/getLoading']
    },
  },
  methods: {
    login() {
      const { username, password } = this

      this.$store
        .dispatch('auth/setLoggedUser', { username, password })
        .then(() => {
          this.$store.dispatch('auth/setEmailSaved', username)
          this.home()
        })
        .catch((error) => {
          this.snackbar_text = error
          if (error.response && error.response.status == 401) {
            this.snackbar_text = error.response.data.detail
          }
          this.snackbar = true
        })
    },
    home() {
      this.$router.push({ name: 'home' })
    },
    signup() {
      this.$router.push({ name: 'signup' })
    },
  },
  created() {
    this.$store.dispatch('auth/loadEmailSaved').then(() => {
      this.$refs.usernameRef.focus()
      if (this.emailSaved) {
        this.username = this.emailSaved
        this.$refs.passwordRef.focus()
      }
    })
  },
}
</script>
