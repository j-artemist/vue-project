import { createEmptyTranscription, removeObjectWithId } from "./utils";

export default {
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
};
