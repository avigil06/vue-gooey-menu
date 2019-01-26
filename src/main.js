import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faList,
  faUser,
  faEnvelope,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';

library.add(faHome);
library.add(faList);
library.add(faUser);
library.add(faEnvelope);
library.add(faPlus);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

router.afterEach((to) => {
  if (to.name === 'about') {
    store.commit('menuOpen');
  } else {
    store.commit('menuClose');
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
