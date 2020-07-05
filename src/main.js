import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import biliButton from './components/common/bili-bubble.vue'
import NavBubble from './components/common-nav/nav-bubble.vue'

import directives from './directives';
directives;
import filters from './filters';
filters;
import commonComponents from './components/common/index.js'
commonComponents;

import api from "./assets/js/api"
// import { component } from 'vue/types/umd'
Vue.use(api);


Vue.component('bili-bubble',biliButton);
Vue.component('nav-bubble',NavBubble)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
