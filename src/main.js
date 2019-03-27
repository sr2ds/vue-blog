import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import VueAnalytics from 'vue-analytics'
import store from './store'

// VueBlog Services
import Article from './services/Article'

// Global Style
import './../node_modules/bulma/css/bulma.css';

// Global Vue Settings
Vue.config.productionTip = false
Vue.use(VueAnalytics, {
  id: 'UA-137046286-1'
})

// Global Blog Settings
window.ownerOfGist = "sr2ds"
window.indexFileDescript = "Index of my Vue-Blog"

// Modules/Services
Vue.prototype.$article = Article

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
