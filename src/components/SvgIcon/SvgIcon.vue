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
      const name = this.name;

      return defineAsyncComponent(() => import(`./icons/icon-${name}.vue`));
    },
  },
};
</script>

<template>
  <component :is="dynamicComponent" />
</template>
