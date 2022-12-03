<script>
export default {
  name: "app-container",
};
</script>

<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped>
.container {
  max-width: 738px;
  margin: 0 auto;
}
</style>
