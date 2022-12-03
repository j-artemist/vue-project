export function biggestNumberInArray(arr) {
  const max = Math.max(...arr);
  return max;
}

export function createEmptyTranscription(ids) {
  // create a unique id not in use
  const id = ids.length > 0 ? biggestNumberInArray(ids) + 1 : 1;

  return {
    voice: "",
    text: "",
    id,
  };
}

export function removeObjectWithId(arr, id) {
  return arr.filter((obj) => obj.id !== id);
}
