import Vue from 'vue'
import '@/plugins/axios'
import App from '@/layouts/App.vue'
import store from '@/store'
import router from '@/router'
import '@/plugins/element.js'
import '@/assets/tailwind.css'
import '@/permission.js'
import '@/directives'
import 'normalize.css/normalize.css'
import '@/assets/fonts/style.css'
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
