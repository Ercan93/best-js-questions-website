<template>
  <div id="app">
    <nav-header></nav-header>
    <router-view></router-view>
  </div>
</template>

<script>
import navHeader from "./components/Header";
export default {
  name: "app",
  components: {
    navHeader
  },
  data() {
    return {};
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Playfair Display";
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(255, 230, 0);
  font-weight: bold;
}
</style>
