import { shallowMount } from "@vue/test-utils";
import TextInput from "./TextInput.vue";

describe("TextInput", () => {
  it("emits change event when typing in input", () => {
    const wrapper = shallowMount(TextInput);

    wrapper.find("input[type='text']").setValue("a value");

    expect(wrapper.emitted("text-input-change")).toBeTruthy();
    expect(wrapper.emitted()["text-input-change"][0][0]).toEqual("a value");
  });
});
