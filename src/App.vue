<template>
  <main id="app">
    <router-view />
  </main>
</template>

<style>
body,
html {
  padding: 0;
  margin: 0;
}
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
