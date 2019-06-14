import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { MdButton, MdIcon, MdField, MdChips, MdDialog } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false

Vue.use(MdButton)
Vue.use(MdIcon)
Vue.use(MdField)
Vue.use(MdChips)
Vue.use(MdDialog)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
