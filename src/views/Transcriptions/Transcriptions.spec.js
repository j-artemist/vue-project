import { mount } from "@vue/test-utils";
import Transcriptions from "./Transcriptions.vue";

describe("Transcriptions", () => {
  const wrapper = mount(Transcriptions, {
    propsData: {
      items: [
        { voice: "voice 1", id: 1, text: "text 1" },
        { voice: "voice 2", id: 2, text: "text 2" },
        { voice: "voice 3", id: 3, text: "text 3" },
      ],
    },
  });

  it("emits upload-data event when clicking on upload button", () => {
    wrapper.find("button", { name: "upload" }).trigger("click");

    expect(wrapper.emitted("upload-data")).toBeTruthy();
  });
});
