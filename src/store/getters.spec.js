import getters from "../../src/store/getters.js";

const transcriptions = [
  { voice: "voice 1", id: 1, text: "text 1" },
  { voice: "voice 2", id: 2, text: "text 2" },
  { voice: "voice 3", id: 3, text: "text 3" },
];

const state = { transcriptions, loading: true };

describe("getters", () => {
  describe("transcriptions", () => {
    it("returns transcriptions", () => {
      const result = getters.transcriptions(state);

      expect(result).toEqual(transcriptions);
    });

    it("returns loading", () => {
      const result = getters.isLoading(state);

      expect(result).toEqual(true);
    });
  });
});
