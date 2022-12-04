import { mount } from "@vue/test-utils";
import TranscriptionListItem from "./TranscriptionListItem.vue";

describe("TranscriptionListItem", () => {
  const wrapper = mount(TranscriptionListItem, {
    propsData: {
      voice: "name of the voice",
      text: "transcription text",
      id: 4,
    },
  });

  it("emits delete event when clicking on delete button", async () => {
    wrapper.find("button", { ["aria-label"]: "delete" }).trigger("click");

    expect(wrapper.emitted("delete-transcription")).toBeTruthy();
    expect(wrapper.emitted()["delete-transcription"][0][0]).toEqual(4);
  });

  it("emits voice field change event when typing in text input", () => {
    wrapper.find("input[type='text']").setValue("a value");

    expect(wrapper.emitted("voice-field-change")).toBeTruthy();
    expect(wrapper.emitted()["voice-field-change"][0][0]).toEqual({
      voice: "a value",
      id: 4,
    });
  });

  it("emits text field change event when typing in textarea", () => {
    wrapper.find("textarea").setValue("a value");

    expect(wrapper.emitted("text-field-change")).toBeTruthy();
    expect(wrapper.emitted()["text-field-change"][0][0]).toEqual({
      text: "a value",
      id: 4,
    });
  });
});
