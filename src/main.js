import Vue from 'vue'
import App from './App.vue'
import router from "./router"  //Change: Import routes

Vue.config.productionTip = false

new Vue({
  router, // Change: Configure routes
  render: h => h(App),
}).$mount('#app')
