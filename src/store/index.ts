import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

interface State {
  user?: firebase.default.User;
}

const store = new Vuex.Store<State>({
  state: {
    user: undefined,
  },
  mutations: {
    setUser(state, user?: firebase.default.User) {
      state.user = user;
    },
  },
});

export default store;
