<script>
export default {
  name: "text-area",
  props: {
    value: { required: false, type: String, default: "" },
    ariaLabel: { required: false, type: String },
    placeholder: { required: false, type: String },
  },
  methods: {
    handleChange(event) {
      this.resize();
      this.$emit("text-area-change", event.target.value);
    },
    resize() {
      const element = this.$refs["textarea"];
      element.style.height = "auto";
      element.style.height = element.scrollHeight + "px";
    },
  },
  mounted() {
    this.resize();
  },
};
</script>

<template>
  <textarea
    :aria-label="ariaLabel"
    @input="handleChange"
    ref="textarea"
    :value="value"
    :placeholder="placeholder"
  ></textarea>
</template>

<style scoped>
textarea {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  height: 100%;
  width: 100%;
  font-size: 16px;
  border: none;
  resize: none;
  overflow: hidden;
  box-sizing: border-box;
}
textarea:focus {
  box-shadow: 0 0 1px var(--blue-color);
  outline: 1px solid var(--blue-color);
}
</style>
