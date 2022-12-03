<script>
export default {
  name: "check-box",
  props: {
    ariaLabel: { required: false, type: String },
  },
};
</script>

<template>
  <input
    :aria-label="ariaLabel"
    type="checkbox"
  />
</template>

<style scoped>
input[type="checkbox"] {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid var(--purple-color);
  border-radius: 2px;
  accent-color: var(--purple-color);
}

input[type="checkbox"]:checked {
  -webkit-appearance: checkbox;
  appearance: checkbox;
}
</style>

//TODO look at checkbox
