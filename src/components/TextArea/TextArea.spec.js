import { mount } from "@vue/test-utils";
import TextArea from "./TextArea.vue";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("TextArea", () => {
  it("emits change event when typing in input", async () => {
    const wrapper = mount(TextArea);

    wrapper.find("textarea").setValue("a value");

    expect(wrapper.emitted("text-area-change")).toBeTruthy();
    expect(wrapper.emitted()["text-area-change"][0][0]).toEqual("a value");
  });

  it.skip("should have no accessibility violations", async () => {
    const wrapper = mount(TextArea, {
      propsData: {
        ariaLabel: "label",
      },
    });

    const results = await axe(wrapper.element);

    expect(results).toHaveNoViolations();
  });
});
