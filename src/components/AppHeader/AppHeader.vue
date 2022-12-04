<script>
import Container from "../Container/Container.vue";

export default {
  name: "app-header",
  components: {
    Container,
  },
};
</script>

<template>
  <header>
    <container>
      <div class="content">
        <slot name="left-content" /><slot name="right-content" />
      </div>
    </container>
  </header>
</template>

<style scoped>
header {
  width: 100vw;
  background: var(--secondary-background-color);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24);
}

.content {
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
</style>
