<script>
export default {
  name: "text-input",
  props: {
    value: { required: false, type: String, default: "" },
    ariaLabel: { required: false, type: String },
    placeholder: { required: false, type: String },
  },
  methods: {
    emitInputChangeEvent(event) {
      this.$emit("text-input-change", event.target.value);
    },
  },
};
</script>

<template>
  <input
    :aria-label="ariaLabel"
    :value="value"
    class="text-input"
    type="text"
    @input="emitInputChangeEvent"
    :placeholder="placeholder"
  />
</template>

<style scoped>
.text-input {
  border: none;
  font-size: var(--font-size-root);
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  color: var(--medium-gray-color);
  width: 100%;
}
.text-input:focus {
  box-shadow: 0 0 1px var(--blue-color);
  outline: 1px solid var(--blue-color);
}
</style>
