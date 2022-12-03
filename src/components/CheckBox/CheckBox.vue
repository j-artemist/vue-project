<script>
export default {
  name: "check-box",
  props: {
    ariaLabel: { required: false, type: String },
  },
};
</script>

<template>
  <input :aria-label="ariaLabel" type="checkbox" />
</template>

<style scoped>
input[type="checkbox"] {
  -webkit-appearance: none;
  appearance: none;
  background-color: var(--white-color);
  margin: 0;
  width: 16px;
  height: 16px;
  border: 2px solid var(--purple-color);
  border-radius: 2px;
  transform: translateY(-0.075em);
}

input[type="checkbox"]:checked {
  background-color: var(--purple-color);
}

input[type="checkbox"]:checked:after {
  content: "";
  position: absolute;
  left: 0px;
  top: 5px;
  background: var(--purple-color);
  width: 2px;
  height: 2px;
  box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white,
    4px -6px 0 white, 4px -8px 0 white;
  transform: rotate(45deg);
}
</style>
