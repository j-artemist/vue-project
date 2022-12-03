import { mount } from "@vue/test-utils";
import TranscriptionListItem from "./TranscriptionListItem.vue";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("TranscriptionListItem", () => {
  const wrapper = mount(TranscriptionListItem, {
    propsData: {
      label: "a label",
      text: "transcription text",
      id: 4,
    },
  });

  it("emits delete event when clicking on delete button", async () => {
    wrapper.find("button", { ["aria-label"]: "delete" }).trigger("click");

    expect(wrapper.emitted("delete-transcription")).toBeTruthy();
    expect(wrapper.emitted()["delete-transcription"][0][0]).toEqual(4);
  });

  it.skip("should have no accessibility violations", async () => {
    const results = await axe(wrapper.element);

    expect(results).toHaveNoViolations();
  });
});
