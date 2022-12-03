import { shallowMount } from "@vue/test-utils";
import Container from "./Container.vue";

describe("Container", () => {
  it("renders default slot as expected", () => {
    const wrapper = shallowMount(Container, {
      slots: {
        default: "text",
      },
    });
    expect(wrapper.text()).toBe("text");
  });
});
