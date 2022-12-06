<script>
import { defineAsyncComponent } from "vue";

export default {
  name: "svg-icon",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    dynamicComponent() {
      return defineAsyncComponent(() => import(`./icons/icon-${this.name}.vue`));
    },
  },
};
</script>

<template>
  <component :is="dynamicComponent" />
</template>
