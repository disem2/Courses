<template>
  <ul id="breadcrumbs">
    <li v-for="breadcrumb in breadcrumbs" :key="breadcrumb.id">
      <a href="#">{{ breadcrumb.title }}</a> 
    </li>   
  </ul>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbs: [
        { id: 0, title: 'Home'},
        { id: 1, title: 'Courses'}
      ]
    };
  }
};
</script>

<style scoped>
ul li+li:before {
    padding: 8px;
    color: black;
    content: "/\00a0";
}

li {
  display: inline-block;
}
</style>

<style>
#breadcrumbs {
  margin-top: 90px;
  font-size: 20px;
}
</style>