import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import pt from 'vuetify/lib/locale/pt'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#FF8243',
        secondary: '#596475',
        accent: '#FFD07F',
        error: '#bd2d17',
        info: '#bd9117',
        success: '#FFD07F',
        warning: '#bd9117',
        gray80: '#1F2232',
        gray40: '#596475',
        gray20: '#F0F2EF',
      },
    },
  },
  lang: {
    locales: { pt },
    current: 'pt',
  },
  icons: {
    iconfont: 'fa',
  },
})
