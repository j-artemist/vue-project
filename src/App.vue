<script>
import "./reset.css";
import "./tokens.css";

export default {
  name: "app",
};
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
