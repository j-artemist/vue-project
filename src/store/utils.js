export function biggestNumberInArray(arr) {
  const max = Math.max(...arr);
  return max;
}

export function createEmptyTranscription(ids) {
  // create a unique id not in use
  const id = ids.length > 0 ? biggestNumberInArray(ids) + 1 : 1;

  return {
    title: "",
    text: "",
    id,
  };
}

export function removeObjectWithId(arr, id) {
  return arr.filter((obj) => obj.id !== id);
}

export function transformTranscriptionsToItems(transcriptions) {
  return transcriptions.map((transcription) => {
    return {
      id: transcription.id,
      text: transcription.text,
      title: transcription.voice,
    };
  });
}

export function transformItemsToTranscriptions(items) {
  return items.map((item) => {
    return {
      id: item.id,
      text: item.text,
      voice: item.title,
    };
  });
}
