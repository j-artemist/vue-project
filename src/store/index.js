import Vue from "vue";
import Vuex from "vuex";
import { createEmptyTranscription, removeObjectWithId } from "./utils";

Vue.use(Vuex);

const TRANSCRIPTION_ENDPOINT =
  "http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c";

export default new Vuex.Store({
  state: {
    loading: false,
    transcriptions: [],
  },
  mutations: {
    setTranscription(state) {
      state.transcriptions.push(createEmptyTranscription());
    },
    setTranscriptions(state, payload) {
      state.transcriptions = payload;
    },
    toggleLoading(state) {
      state.loading = !state.loading;
    },
    deleteTranscription(state, payload) {
      const filteredTranscriptions = removeObjectWithId(
        state.transcriptions,
        payload
      );
      state.transcriptions = filteredTranscriptions;
    },
  },
  actions: {
    deleteTranscription({ commit }, payload) {
      commit("deleteTranscription", payload);
    },
    addTranscription({ commit }) {
      commit("setTranscription");
    },
    async getTranscriptions({ commit }) {
      commit("toggleLoading");
      const response = await fetch(TRANSCRIPTION_ENDPOINT);
      const data = await response.json();
      commit("setTranscriptions", data);
      commit("toggleLoading");
    },
    async uploadTranscriptions({ commit, state }) {
      commit("toggleLoading");

      try {
        const config = {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(state.transcriptions),
        };
        const response = await fetch(TRANSCRIPTION_ENDPOINT, config);
        const data = await response.json();
        if (response.ok) {
          console.log(data);
          commit("setTranscriptions", data);
        } else {
          //
        }
      } catch (error) {
        console.log(error);
      }

      commit("toggleLoading");
    },
  },
  getters: {
    transcriptions(state) {
      return state.transcriptions;
    },
    isLoading(state) {
      return state.loading;
    },
  },
});
