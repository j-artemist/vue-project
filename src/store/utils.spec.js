import {
  biggestNumberInArray,
  createEmptyTranscription,
  removeObjectWithId,
  transformTranscriptionsToItems,
  transformItemsToTranscriptions,
} from "./utils";

describe("utils", () => {
  describe("biggestNumberInArray", () => {
    it("returns biggest number in array", () => {
      const array = [3, 4, 7, 3, 5, 8, 12];

      const result = biggestNumberInArray(array);

      expect(result).toEqual(12);
    });
  });

  describe("createEmptyTranscription", () => {
    it("returns expected empty transcription", () => {
      const ids = [3, 4, 7, 3, 5, 8, 12];

      const result = createEmptyTranscription(ids);

      expect(result).toEqual({
        title: "",
        text: "",
        id: 13,
      });
    });

    it("returns empty transcription with id 1 if ids is an empty array", () => {
      const result = createEmptyTranscription([]);

      expect(result).toEqual({
        title: "",
        text: "",
        id: 1,
      });
    });
  });

  describe("removeObjectWithId", () => {
    it("filters out object with given id", () => {
      const arr = [{ id: 1 }, { id: 4 }];

      const result = removeObjectWithId(arr, 1);

      expect(result).toEqual([{ id: 4 }]);
    });
  });

  describe("transformTranscriptionsToItems", () => {
    it("returns expected data", () => {
      const transcriptions = [{ id: 1, voice: "voice 1", text: "text 1" }];

      const result = transformTranscriptionsToItems(transcriptions);

      expect(result).toEqual([{ id: 1, title: "voice 1", text: "text 1" }]);
    });
  });

  describe("transformItemsToTranscriptions", () => {
    it("returns expected data", () => {
      const items = [{ id: 1, title: "voice 1", text: "text 1" }];

      const result = transformItemsToTranscriptions(items);

      expect(result).toEqual([{ id: 1, voice: "voice 1", text: "text 1" }]);
    });
  });
});
