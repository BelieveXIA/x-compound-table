import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

import xCompoundTable from './components/index.js'

Vue.use(ViewUI)
Vue.use(xCompoundTable)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
