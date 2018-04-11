<template>
  <ul id="breadcrumbs">
    <li>
      <router-link to='/' exact>Home</router-link> 
    </li> 
    <li>
      <router-link to='/add-course' exact>Add course</router-link> 
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