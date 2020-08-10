<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import appHeader from "./components/Header";
export default {
  name: "app",
  components: {
    appHeader,
  },
  data() {
    return {};
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500&display=swap");
:root {
  --yellow: rgb(255, 230, 0);
  --purple: #5b3cc4;
  --green: rgb(23, 201, 100);
  --red: rgb(242, 19, 93);
  --orange: rgb(255, 130, 0);
  --dark: rgb(36, 33, 69);
  --white: rgb(255, 254, 247);
}
* {
  margin: 0;
  padding: 0;
  font-family: "Fira Code", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  background-color: var(--dark);
  color: var(--green);
}
.btn:hover {
  color: var(--white);
  box-shadow: 3px 3px white;
}
</style>
