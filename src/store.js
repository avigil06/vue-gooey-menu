import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    menuToggled: false,
  },
  mutations: {
    menuOpen(state) {
      Object.assign(state, { menuToggled: true });
    },
    menuClose(state) {
      Object.assign(state, { menuToggled: false });
    },
  },
});

export default store;
