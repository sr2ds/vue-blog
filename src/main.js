import Vue from 'vue'
import App from './App.vue'
import router from './routes'

// VueBlog Services
import Article from './services/Article'

// Global Style
import './../node_modules/bulma/css/bulma.css';

// Global Vue Settings
Vue.config.productionTip = false


// Global Blog Settings
window.ownerOfGist = "sr2ds"
window.indexFileDescript = "Index of my Vue-Blog"

// Modules/Services
Vue.prototype.$article = Article

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
