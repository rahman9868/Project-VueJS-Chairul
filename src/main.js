// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Users from './Users.vue';
import Home from './Home.vue';


Vue.use(VueRouter);

const routes = [
  { path: '/users/:teamId', component: Users },
  { path: '/', component: Home }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

// /* eslint-disable no-new */
new Vue({
  el: '#app',
    router,
  render: h => h(App)
});
