import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './plugins/dayjs'
import i18n from './plugins/i18n'
import amplify from './plugins/amplify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  amplify,
  render: h => h(App)
}).$mount('#app')
