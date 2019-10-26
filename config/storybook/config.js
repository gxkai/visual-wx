/* eslint-disable import/no-extraneous-dependencies */
import { configure } from '@storybook/vue'
const req = require.context('../../src', true, /.stories.js$/)
import Vue from 'vue'
import '@/plugins/axios'
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
  router
})
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
