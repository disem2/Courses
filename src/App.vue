<template>
  <div id="app">
    <Header />
    <Home />
    <Footer />
  </div>
</template>

<script>
import { Header, Footer } from './common';
import Home from './pages/home/Home.vue';

export default {
  components: {
    Header,
    Home,
    Footer
  },
}
</script>

<style>
body {
  margin: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: rgb(231, 231, 231);
}

#app {
  height: 100%;
  width: 100vw;
}
</style>
