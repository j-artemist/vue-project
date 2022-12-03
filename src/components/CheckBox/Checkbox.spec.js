import { mount } from "@vue/test-utils";
import Checkbox from "./Checkbox.vue";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("Checkbox", () => {
  const wrapper = mount(Checkbox, {
    propsData: {
      ariaLabel: "check-box",
    },
  });

  it.skip("should have no accessibility violations", async () => {
    const results = await axe(wrapper.element);

    expect(results).toHaveNoViolations();
  });
});
