import actions from "./actions";

describe("actions", () => {
  describe("updateTranscription", () => {
    it("calls setTranscription mutation with payload", () => {
      const commit = jest.fn();
      const payload = "payload";

      actions.updateTranscription({ commit }, payload);

      expect(commit).toHaveBeenCalledWith("setTranscription", payload);
    });
  });

  describe("deleteTranscription", () => {
    it("calls deleteTranscription mutation with payload", () => {
      const commit = jest.fn();
      const payload = "payload";

      actions.deleteTranscription({ commit }, payload);

      expect(commit).toHaveBeenCalledWith("deleteTranscription", payload);
    });
  });
});
