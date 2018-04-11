<template>
  <footer id='footer'>
    <h2 id="footer-text">Copyright {{ currentYear }}</h2>
  </footer>  
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  },
}
</script>

<style>
  #footer {
    position: fixed;
    left: 0px;
    bottom: 0px;
    height: 50px;
    width: 100vw;
    color: rgb(81, 194, 198);
    background-color: rgb(41, 40, 40);
    text-align: center;
    padding-bottom: 5px;
  }
</style>

