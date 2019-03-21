import Vue from 'vue'
import App from './App.vue'
import GitHub from 'github-base'

import './../node_modules/bulma/css/bulma.css';

Vue.config.productionTip = false
Vue.GitHub = GitHub

new Vue({
  render: h => h(App),
}).$mount('#app')
