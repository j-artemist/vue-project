<script>
export default {
  name: "app-layout",
};
</script>

<template>
  <div class="layout">
    <slot name="header" />
    <main>
      <slot name="main" />
    </main>
  </div>
</template>

<style scoped>
.layout {
  height: 100vh;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  background: var(--background-color);
}
</style>
