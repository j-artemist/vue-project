<script>
export default {
  name: "hide-visually",
  props: {
    as: { type: String, required: false, default: "span" },
  },
};
</script>

<template>
  <component :is="as" class="hide-visually">
    <slot />
  </component>
</template>

<style scoped>
.hide-visually {
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
</style>

//TODO can we remove this?
