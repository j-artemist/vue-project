const TRANSCRIPTION_ENDPOINT =
  "http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c";

export default {
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
};
