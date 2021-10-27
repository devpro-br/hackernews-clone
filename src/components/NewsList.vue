<template>
  <div>
    <v-list>
      <v-list-item v-for="item in news" :key="item.id">
        <v-list-item-content>
          <v-list-item-title>
            #{{ item.id }} {{ item.title }}
          </v-list-item-title>
          <v-list-item-subtitle>
            by {{ item.author.name }} | {{ item.date | time }} |
            {{ item.comments_count }} comentários</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    news: [],
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
