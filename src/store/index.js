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
    error: null,
  },
  mutations: {
    setError(state, payload) {
      state.error = payload;
    },
    setTranscription(state, payload) {
      const itemIndex = state.transcriptions.findIndex((item) => {
        return item.id === payload.id;
      });

      const updatedItem = {
        ...state.transcriptions[itemIndex],
        ...payload,
      };

      state.transcriptions[itemIndex] = updatedItem;
    },
    setNewTranscription(state) {
      const ids = state.transcriptions.map((item) => item.id);
      const emptyTranscription = createEmptyTranscription(ids);
      const newArray = [...state.transcriptions, emptyTranscription];
      state.transcriptions = newArray;
    },
    setTranscriptions(state, payload) {
      state.transcriptions = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
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
    updateTranscription({ commit }, payload) {
      commit("setTranscription", payload);
    },
    deleteTranscription({ commit }, payload) {
      commit("deleteTranscription", payload);
    },
    addTranscription({ commit }) {
      commit("setNewTranscription");
    },
    async getTranscriptions({ commit }) {
      commit("setLoading", true);
      try {
        const response = await fetch(TRANSCRIPTION_ENDPOINT);
        const data = await response.json();
        commit("setTranscriptions", data);
      } catch (error) {
        commit("setError", error);
      }
      commit("setLoading", false);
    },
    async uploadTranscriptions({ commit, state }) {
      commit("setLoading", true);
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
        commit("setTranscriptions", data);
      } catch (error) {
        commit("setError", error);
      }
      commit("setLoading", false);
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
