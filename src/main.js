import Vue from 'vue'
import ElementUI from 'element-ui';
import './assets/scss/element-variables.scss';
import 'element-ui/lib/theme-chalk/display.css';
import VueLazyLoad from 'vue-lazyload'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VueLazyLoad)
new Vue({
  router,
  store,
  render: h => h(App),

}).$mount('#app')