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

    it("on successful get request call setTranscriptions mutation with transformed fetched data", async () => {
      const commit = jest.fn();

      const mockData = [
        { voice: "voice 1", id: 1, text: "text 1" },
        { voice: "voice 2", id: 2, text: "text 2" },
      ];

      const transformedData = [
        { title: "voice 1", id: 1, text: "text 1" },
        { title: "voice 2", id: 2, text: "text 2" },
      ];

      global.fetch = jest.fn().mockImplementation(setupFetchStub(mockData));

      await actions.getTranscriptions({ commit });

      expect(commit.mock.calls).toEqual([
        ["setError", null],
        ["setLoading", true],
        ["setTranscriptions", transformedData],
        ["setLoading", false],
      ]);
    });

    it("on rejected get request sets error in state", async () => {
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

  describe("uploadTranscriptions", () => {
    afterEach(() => {
      global.fetch.mockClear();
      delete global.fetch;
    });

    const transcriptions = [
      { title: "voice 1", id: 1, text: "text 1" },
      { title: "voice 2", id: 2, text: "text 2" },
    ];

    const state = {
      transcriptions,
    };

    it("on successful post request call setTranscriptions mutation with transformed response", async () => {
      const apiData = [
        { voice: "voice 1", id: 1, text: "text 1" },
        { voice: "voice 2", id: 2, text: "text 2" },
      ];

      const commit = jest.fn();

      global.fetch = jest.fn().mockImplementation(setupFetchStub(apiData));

      await actions.uploadTranscriptions({ commit, state });

      expect(commit.mock.calls).toEqual([
        ["setError", null],
        ["setLoading", true],
        ["setTranscriptions", transcriptions],
        ["setLoading", false],
      ]);
    });

    it("on rejected post request sets error in state", async () => {
      const commit = jest.fn();

      global.fetch = jest
        .fn()
        .mockImplementation(() => Promise.reject("API is down"));

      await actions.uploadTranscriptions({ commit, state });

      expect(commit.mock.calls).toEqual([
        ["setError", null],
        ["setLoading", true],
        ["setError", "API is down"],
        ["setLoading", false],
      ]);
    });
  });
});
