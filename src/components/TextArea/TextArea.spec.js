import { shallowMount } from "@vue/test-utils";
import TextArea from "./TextArea.vue";

describe("TextArea", () => {
  it("emits change event when typing in input", () => {
    const wrapper = shallowMount(TextArea);

    wrapper.find("textarea").setValue("a value");

    expect(wrapper.emitted("text-area-change")).toBeTruthy();
    expect(wrapper.emitted()["text-area-change"][0][0]).toEqual("a value");
  });
});
