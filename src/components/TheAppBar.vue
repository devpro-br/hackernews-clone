<template>
  <div>
    <v-toolbar
      dark
      prominent
      src="https://www.eluniversohoy.net/wp-content/uploads/2017/02/Brian-Emfinger-IMG_1830_1488026678.jpg"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-img
          alt="FullStack Logo"
          class="shrink mr-2"
          contain
          src="https://www.bytelion.com/wp-content/uploads/2016/09/full_stack.png"
          transition="scale-transition"
          width="40"
        />
      </div>
      <v-toolbar-title>Confraria News</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/confraria-devpro/hackernews-clone"
        target="_blank"
        text
      >
        <span class="mr-2">confrarianews Github</span>
        <v-icon>fab fa-github</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data: () => ({}),
}
</script>
