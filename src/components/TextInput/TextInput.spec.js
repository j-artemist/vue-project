import { mount } from "@vue/test-utils";
import TextInput from "./TextInput.vue";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("TextInput", () => {
  it("emits change event when typing in input", async () => {
    const wrapper = mount(TextInput);

    wrapper.find("input[type='text']").setValue("a value");

    expect(wrapper.emitted("text-input-change")).toBeTruthy();
    expect(wrapper.emitted()["text-input-change"][0][0]).toEqual("a value");
  });

  it.skip("should have no accessibility violations", async () => {
    const wrapper = mount(TextInput, {
      propsData: {
        ariaLabel: "label",
      },
    });

    const results = await axe(wrapper.element);

    expect(results).toHaveNoViolations();
  });
});
