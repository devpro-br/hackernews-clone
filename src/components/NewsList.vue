<template>
  <v-list two-line>
    <template v-for="(item, index) in news">
      <v-list-item :key="item.id">
        <v-list-item-content>
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
          <v-list-item-subtitle
            >{{ item.reactions }} pontos by {{ item.author.name }} |
            {{ item.date | time }} |
            {{ item.comments }} comentários</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <v-divider v-if="index < news.length - 1" :key="index"></v-divider>
    </template>
  </v-list>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    news: Array,
  },
  filters: {
    time: function (date) {
      const difference = moment.now() - moment(date)
      const duration = moment.duration(difference)

      if (duration.years()) {
        return `${duration.years()} anos atrás`
      }
      if (duration.months()) {
        return `${duration.months()} meses atrás`
      }
      if (duration.days()) {
        return `${duration.days()} dias atrás`
      }
      if (duration.hours()) {
        return `${duration.hours()} horas atrás`
      }

      return `${duration.minutes()} minutos atrás`
    },
  },
}
</script>
