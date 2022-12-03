import { mount } from "@vue/test-utils";
import AppHeader from "./AppHeader.vue";

describe("AppHeader", () => {
  it("renders named slots in the expected order", async () => {
    const wrapper = mount(AppHeader, {
      slots: {
        ["left-content"]: "left content ",
        ["right-content"]: "right content",
      },
    });
    expect(wrapper.text()).toBe("left content right content");
  });
});
