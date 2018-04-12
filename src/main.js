import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.filter('showInHoures', function(mins) {
  let h = Math.floor(mins / 60);
  let m = mins % 60;
  h < 10 ? '0' + h : h; // TODO Remake to assigments style
  m < 10 ? '0' + m : m;
  let output = h < 1 
    ? `${ m } min`
    : `${ h }h ${ m } min`;
  return output;
});

import VueRouter from 'vue-router';
import App from './App.vue'; // TODO Move filter and directive to shared folder
import routes from './routes';

Vue.config.productionTip = false;

export const bus = new Vue();

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
