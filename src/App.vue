<template>
  <main id="app">
    <nav id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/board">Board</router-link>
    </nav>
    <router-view />
  </main>
</template>

<style>
#nav {
  padding: 2em;
}

#nav a {
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: green;
}
</style>
