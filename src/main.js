import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/main.scss'
import './style/responsive.scss'
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
