<template>
  <div class="container">
    <router-link class="router" to="/">
      <h1 class="logo-name">JS Questions</h1>
    </router-link>
    <nav class="menu">
      <a class="menu-item">Profil</a>
      <a class="menu-item">Hakkında</a>
      <a class="menu-item">Github</a>
    </nav>
  </div>
</template>

<style scoped>
.container {
  background-color: rgb(255, 230, 0);
  height: 10vh;
  display: flex;
  align-items: center;
  border-radius: 0 0 20px 20px;
}
.router {
  text-decoration: none;
  color: black;
}
.menu {
  margin-left: auto;
  display: flex;
}
.menu-item {
  margin: 10px 40px 10px 0;
  font-weight: bold;
}
.logo-name {
  margin-left: 30px;
}

@media screen and (max-width: 550px) {
  .logo-name {
    font-size: 20px;
    margin-left: 10px;
  }
  .menu-item {
    font-size: 15px;
    margin: 10px 15px 10px 0;
  }
}
</style>
