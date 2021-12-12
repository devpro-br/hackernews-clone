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
    <the-avatar
      v-if="user"
      :name="user.name"
      :avatarUrl="user.avatar"
    ></the-avatar>
    <span class="px-2 text-capitalize">{{ nameShort }}</span>
    <v-btn v-if="!user" plain @click="login">Login or Create account</v-btn>
    <v-btn v-else plain @click="logout">Logout</v-btn>
  </v-app-bar>
</template>

<script>
import TheAvatar from '@/components/TheAvatar.vue'

export default {
  props: {
    user: null,
  },
  data: () => ({}),
  methods: {
    login() {
      this.$router.push({ name: 'login' })
    },
    logout() {
      this.$router.push({ name: 'login' })
    },
  },
  computed: {
    nameShort() {
      if (!this.user) {
        return ''
      }
      return this.user.name.split(' ')[0]
    },
  },
  components: {
    TheAvatar,
  },
}
</script>
