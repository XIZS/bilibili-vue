import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import directives from './directives';
directives;
import filters from './filters';
filters;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
