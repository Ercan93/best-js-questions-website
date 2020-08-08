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
    navHeader,
  },
  data() {
    return {};
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Fira Code", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  background-color: rgb(255, 230, 0);
}
</style>
