import { mount } from "@vue/test-utils";
import Layout from "./Layout.vue";

describe("Layout", () => {
  it("renders named slots in the expected order", async () => {
    const wrapper = mount(Layout, {
      slots: {
        header: "header",
        main: "main",
      },
    });
    expect(wrapper.text()).toBe("header main");
  });
});
