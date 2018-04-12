<template>
  <div id="app">
    <Header />
    <Breadcrumbs />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import { Header, Footer } from './common';
import Home from './pages/home/Home.vue';
import Breadcrumbs from './shared/components/Breadcrumbs.vue';

export default {
  components: {
    Header,
    Breadcrumbs,
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
