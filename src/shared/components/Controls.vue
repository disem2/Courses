<template>
  <div id="app-controls">
    <input type="text" 
      v-model="searchQuery"
      placeholder="Type course name">
    <button>Add new course</button>
  </div>  
</template>

<script>
import { bus } from '../../main';

export default {
  data() {
    return {
      searchQuery: ''
    };
  },
  watch: {
    searchQuery: function() { // TODO This find should trigger event just to parent. It may be side effect
      bus.$emit('courseSearch', this.searchQuery);
    }
  }
};
</script>

<style scoped>
#app-controls {
  max-width: 600px;
  margin: 20px auto;
  display: flex;
}

input[type='text'], button {
  display: block;
  height: 25px;
  font-size: 20px;
  width: 50%;
  margin-right: 30px;
}

button {
  text-align: center;
  padding: auto;
}

</style>


