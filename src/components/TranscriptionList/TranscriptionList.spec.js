import { mount } from "@vue/test-utils";
import TranscriptionList from "./TranscriptionList.vue";
import TranscriptionListItem from "./TranscriptionListItem.vue";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("TranscriptionList", () => {
  const wrapper = mount(TranscriptionList, {
    propsData: {
      items: [
        { voice: "voice 1", id: 1, text: "text 1" },
        { voice: "voice 2", id: 2, text: "text 2" },
        { voice: "voice 3", id: 3, text: "text 3" },
      ],
    },
  });

  it("renders the correct number of items", async () => {
    expect(wrapper.findAllComponents(TranscriptionListItem).length).toBe(3);
  });

  it.skip("should have no accessibility violations", async () => {
    const results = await axe(wrapper.element);

    expect(results).toHaveNoViolations();
  });
});
