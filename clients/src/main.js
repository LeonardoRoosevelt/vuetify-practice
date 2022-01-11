import Vue from 'vue'
import App from './views/App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './plugins/dayjs'
import i18n from './plugins/i18n'
import amplify from './plugins/amplify'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  amplify,
  vuetify,
  render: h => h(App)
}).$mount('#app')
