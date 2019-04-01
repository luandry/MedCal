// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
import 'vuetify/dist/vuetify.min.css'
import GAuth from 'vue-google-oauth2'
import AddToCalendar from 'vue-add-to-calendar'
import store from '@/store/store'
import Panel from '@/components/globals/Panel'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAkl9ECcFQJ-2FpgDAuekY65nHtYFnNST8', // api key token
    libraries: 'places'
  }
})

Vue.config.productionTip = false

const gauthOption = {
  // local host key : '910540364267-1l5e831tupoal1biunv53lf0ch6cr5np.apps.googleusercontent.com'
  clientId: '910540364267-g1tkon32f90fdnp2j2ldckc12l45f6h3.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GAuth, gauthOption)

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
