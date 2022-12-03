<script>
import SvgIcon from "../SvgIcon/SvgIcon.vue";

export default {
  name: "icon-button",
  components: {
    SvgIcon,
  },
  props: {
    type: { required: false, type: String, default: "button" },
    name: { required: true, type: String },
    ariaLabel: { required: true, type: String },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<template>
  <button :aria-label="ariaLabel" :type="type" @click="handleClick">
    <SvgIcon :name="name" />
  </button>
</template>

<style scoped>
button {
  border: none;
  cursor: pointer;
  background: transparent;
}
</style>

// can we make svg colour darken on hover? //
