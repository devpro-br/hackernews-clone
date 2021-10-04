<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
        <h1>{{ msg }}</h1>
        <p v-for="item in news" :key="item.id">{{ item.title }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    msg: String,
    news: Array,
  },
}
</script>
