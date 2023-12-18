import { createStore } from 'vuex';

export default createStore({
  state: {
    gongde: 0,
  },
  actions: {},
  mutations: {
    gd(state, num) {
      state.gongde = state.gongde + num;
    },
  },
});
