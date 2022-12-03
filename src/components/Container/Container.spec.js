import { mount } from "@vue/test-utils";
import Container from "./Container.vue";

describe("Container", () => {
  it("renders default slot as expected", async () => {
    const wrapper = mount(Container, {
      slots: {
        default: "text",
      },
    });
    expect(wrapper.text()).toBe("text");
  });
});
