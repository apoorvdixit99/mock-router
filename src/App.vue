<template>
  <div id="app">
    <div id="nav">
      <router-link to="/one">Page One</router-link> |
      <router-link to="/two">Page Two</router-link> |
      <router-link to="/three">Page Three</router-link> |
      <router-link to="/four">Page Four</router-link> |
      <router-link to="/five">Page Five</router-link> |
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
