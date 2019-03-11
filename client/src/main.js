// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
import 'vuetify/dist/vuetify.min.css'
import GAuth from 'vue-google-oauth2'
import store from '@/store/store'
import Panel from '@/components/globals/Panel'

Vue.config.productionTip = false

const gauthOption = {
  clientId: '910540364267-1l5e831tupoal1biunv53lf0ch6cr5np.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GAuth, gauthOption)

var AddToCalendar = require('vue-add-to-calendar')
Vue.use(AddToCalendar)

Vue.use(Vuetify, {
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
})

Vue.component('panel', Panel)

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
