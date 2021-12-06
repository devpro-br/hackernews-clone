<template>
  <v-footer padless fixed>
    <v-row justify="center" no-gutters>
      <v-col class="secondary pt-5 text-center grey--text" cols="12">
        Copyright® {{ new Date().getFullYear() }} —
        <strong>Confraria News</strong>
      </v-col>
      <v-col
        class="secondary pb-5 text-center grey--text text-caption"
        cols="12"
      >
        {{ apiBaseUrl }} — <strong>{{ version }}</strong> -
        {{ nodeEnv }}
        <p>
          <v-btn
            link
            small
            href="https://github.com/confraria-devpro/hackernews-clone"
            target="_blank"
            text
            color="white"
          >
            <span class="mr-2">confrarianews Github</span>
            <v-icon>fab fa-github</v-icon>
          </v-btn>
        </p>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
import settings from '@/settings'

export default {
  data: () => ({
    apiBaseUrl: settings.apiBaseUrl,
    version: settings.version,
    nodeEnv: settings.nodeEnv,
  }),
}
</script>
