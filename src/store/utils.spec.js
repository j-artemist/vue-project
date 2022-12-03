import {
  biggestNumberInArray,
  createEmptyTranscription,
  removeObjectWithId,
} from "./utils";

describe("utils", () => {
  describe("biggestNumberInArray", () => {
    it("returns biggest number in array", async () => {
      const array = [3, 4, 7, 3, 5, 8, 12];

      const result = biggestNumberInArray(array);

      expect(result).toEqual(12);
    });
  });
  describe("createEmptyTranscription", () => {
    it("returns expected empty transcription", async () => {
      const ids = [3, 4, 7, 3, 5, 8, 12];

      const result = createEmptyTranscription(ids);

      expect(result).toEqual({
        voice: "",
        text: "",
        id: 13,
      });
    });

    it("returns empty transcription with id 1 if ids is an empty array", async () => {
      const result = createEmptyTranscription([]);

      expect(result).toEqual({
        voice: "",
        text: "",
        id: 1,
      });
    });
  });

  describe("removeObjectWithId", () => {
    it("filters out object with given id", async () => {
      const arr = [{ id: 1 }, { id: 4 }];

      const result = removeObjectWithId(arr, 1);

      expect(result).toEqual([{ id: 4 }]);
    });
  });
});
