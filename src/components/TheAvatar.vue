<template>
  <v-avatar v-if="avatarUrl">
    <img :src="avatarUrl" :alt="name" />
  </v-avatar>
  <v-avatar color="red" v-else>
    <span class="white--text text-h5">{{ nameShort }}</span>
  </v-avatar>
</template>

<script>
export default {
  props: {
    name: null,
    avatarUrl: null,
  },
  computed: {
    nameShort() {
      return this.name.charAt(0) || 'U'
    },
  },
}
</script>
