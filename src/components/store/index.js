import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const USERS_URL = "https://dummyjson.com/users";

export default new Vuex.Store({
  state: {
    error: null,
    loading: false,
    users: [],
  },
  mutations: {
    setAllUsers(state, payload) {
      state.users = payload;
    },
    toggleLoading(state) {
      state.loading = !state.loading;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      commit("toggleLoading");
      const response = await fetch(USERS_URL);
      const { users } = await response.json();
      commit("setAllUsers", users);
      commit("toggleLoading");
    },
  },
  getters: {
    users(state) {
      return state.users;
    },
    isLoading(state) {
      return state.loading;
    },
    getCompanyByName: (state) => (name) => {
      const user = state.users.find((user) => user.company.name === name);
      return user?.company;
    },
  },
});
