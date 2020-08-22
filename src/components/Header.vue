<template>
  <header class="container">
    <router-link class="router" to="/">
      <h1 class="logo-name">JS Questions</h1>
    </router-link>
    <nav class="menu">
      <a class="menu-item">Profil</a>
      <a class="menu-item">Hakkında</a>
      <a class="menu-item">Github</a>
    </nav>
  </header>
</template>

<style scoped>
.container {
  height: 10vh;
  display: flex;
  align-items: center;
}
.router {
  text-decoration: none;
  color: var(--green);
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
