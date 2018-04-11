<template>
  <div id='home-page'>
    <Controls />
    <Courses />
  </div>
</template>

<script>
import Controls from '../../shared/components/Controls.vue';
import Courses from './components/courses/Courses.vue';

export default {
  components: {
    Controls,
    Courses
  },
};

</script>

<style scoped>
#home-page {
  height: 70%;
  margin-top: 95px;
  margin-bottom: 60px;
}
</style>
