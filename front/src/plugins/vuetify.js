import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: colors.indigo.darken3, // #E53935
    secondary: colors.grey.darken2, // #FFCDD2
    accent: colors.indigo.base // #3F51B5
  }
})