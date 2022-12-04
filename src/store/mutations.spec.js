import mutations from "./mutations";

describe("mutations", () => {
  describe("setError", () => {
    it("updates error state value from payload", () => {
      const state = {
        error: null,
      };
      mutations.setError(state, "an error");

      expect(state.error).toBe("an error");
    });
  });

  describe("setTranscription", () => {
    it("updates transcription that matches payload id ", () => {
      const state = {
        transcriptions: [
          { voice: "voice 1", id: 1, text: "text 1" },
          { voice: "voice 2", id: 2, text: "text 2" },
        ],
      };
      mutations.setTranscription(state, { id: 2, text: "a new line of text" });

      expect(state.transcriptions).toStrictEqual([
        { voice: "voice 1", id: 1, text: "text 1" },
        { voice: "voice 2", id: 2, text: "a new line of text" },
      ]);
    });
  });

  describe("setNewTranscription", () => {
    it("adds new transcription to transcription state ", () => {
      const state = {
        transcriptions: [
          { voice: "voice 1", id: 1, text: "text 1" },
          { voice: "voice 2", id: 2, text: "text 2" },
        ],
      };
      mutations.setNewTranscription(state);

      expect(state.transcriptions).toStrictEqual([
        { voice: "voice 1", id: 1, text: "text 1" },
        { voice: "voice 2", id: 2, text: "text 2" },
        { voice: "", id: 3, text: "" },
      ]);
    });
  });

  describe("setTranscriptions", () => {
    it("sets transcriptions to payload ", () => {
      const state = {
        transcriptions: [],
      };

      const payload = [{ voice: "voice 1", id: 1, text: "text 1" }];

      mutations.setTranscriptions(state, payload);

      expect(state.transcriptions).toStrictEqual([
        { voice: "voice 1", id: 1, text: "text 1" },
      ]);
    });
  });

  describe("setLoading", () => {
    it("sets state loading to payload value ", () => {
      const state = {
        loading: true,
      };

      mutations.setLoading(state, false);

      expect(state.loading).toBe(false);
    });
  });

  describe("deleteTranscription", () => {
    it("removes transcription that matches payload id from transcriptions ", () => {
      const state = {
        transcriptions: [
          { voice: "voice 1", id: 1, text: "text 1" },
          { voice: "voice 2", id: 2, text: "text 2" },
        ],
      };

      mutations.deleteTranscription(state, 2);

      expect(state.transcriptions).toStrictEqual([
        { voice: "voice 1", id: 1, text: "text 1" },
      ]);
    });
  });
});
