// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import Message from './Message.vue';

Vue.component('app-message',Message);

// Vue.config.productionTip = false

// /* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
