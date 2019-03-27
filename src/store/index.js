import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const LOGIN = "LOGIN";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

const store = new Vuex.Store({

  actions: {
    login({
      commit
    }, token) {
      commit(LOGIN);
      return new Promise(resolve => {
        localStorage.setItem("auth_token", token);
        commit(LOGIN_SUCCESS);
        resolve();
      });
    },
    logout({
      commit
    }) {
      localStorage.removeItem("auth_token");
      commit(LOGOUT);
    }
  },
  state: {
    isLoggedIn: !!localStorage.getItem('auth_token'),
  },
  mutations: {
    [LOGIN](state) {
      state.pending = true;
    },
    [LOGIN_SUCCESS](state) {
      state.isLoggedIn = true;
      state.pending = false;
    },
    [LOGOUT](state) {
      state.isLoggedIn = false;
    }
  }

})

export default store;
