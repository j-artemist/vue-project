import { mount } from "@vue/test-utils";
import IconButton from "./IconButton.vue";
import { axe, toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

describe("IconButton", () => {
  const wrapper = mount(IconButton, {
    propsData: {
      name: "person",
      ariaLabel: "person",
    },
  });

  it("emits click event on click", async () => {
    wrapper.find("button").trigger("click");

    expect(wrapper.emitted("click")).toBeTruthy();
  });

  it("should have no accessibility violations", async () => {
    const results = await axe(wrapper.element);

    expect(results).toHaveNoViolations();
  });
});
