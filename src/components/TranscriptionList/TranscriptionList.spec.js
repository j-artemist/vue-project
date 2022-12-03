import { shallowMount } from "@vue/test-utils";
import TranscriptionList from "./TranscriptionList.vue";
import TranscriptionListItem from "./TranscriptionListItem.vue";

describe("TranscriptionList", () => {
  const wrapper = shallowMount(TranscriptionList, {
    propsData: {
      items: [
        { voice: "voice 1", id: 1, text: "text 1" },
        { voice: "voice 2", id: 2, text: "text 2" },
        { voice: "voice 3", id: 3, text: "text 3" },
      ],
    },
  });

  it("renders the correct number of items", () => {
    expect(wrapper.findAllComponents(TranscriptionListItem).length).toBe(3);
  });
});
