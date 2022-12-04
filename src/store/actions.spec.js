import actions from "./actions";
import { setupFetchStub } from "../test-utils";

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

  describe("getTranscriptions", () => {
    afterEach(() => {
      global.fetch.mockClear();
      delete global.fetch;
    });

    it("on successful fetch request call setTranscriptions mutation with fetched data", async () => {
      const commit = jest.fn();

      const mockData = [
        { voice: "voice 1", id: 1, text: "text 1" },
        { voice: "voice 2", id: 2, text: "text 2" },
      ];

      global.fetch = jest.fn().mockImplementation(setupFetchStub(mockData));

      await actions.getTranscriptions({ commit });

      expect(commit.mock.calls).toEqual([
        ["setError", null],
        ["setLoading", true],
        ["setTranscriptions", { data: mockData }],
        ["setLoading", false],
      ]);
    });

    it("on rejected fetch request sets error in state", async () => {
      const commit = jest.fn();

      global.fetch = jest
        .fn()
        .mockImplementation(() => Promise.reject("API is down"));

      await actions.getTranscriptions({ commit });

      expect(commit.mock.calls).toEqual([
        ["setError", null],
        ["setLoading", true],
        ["setError", "API is down"],
        ["setLoading", false],
      ]);
    });
  });
});
