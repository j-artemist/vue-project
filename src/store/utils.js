const guid = () => {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16);
  };

  //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
};

export function createEmptyTranscription() {
  const mockUniqueId = guid();
  console.log(mockUniqueId);
  return {
    voice: "",
    text: "",
    id: Number(guid()),
  };
}

export function removeObjectWithId(arr, id) {
  return arr.filter((obj) => obj.id !== id);
}
