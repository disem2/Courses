<template>
  <div id="course-item" :style="durationIndicator">
    <div id="course-item-content">
      <h2>{{ course.title }} | Duration: {{ course.duration | showInHoures }}</h2>
      <article>{{ course.text }}</article>
    </div>
    <div id='course-item-controls'>
      <button>Edit Course</button>
      <button @click='deleteCourse(course.id)'>Delete Course</button>
    </div>
  </div>  
</template>

<script>
import {
  showInHoures,
  durationIndicator
} from '../../../../mixins';

export default {
  props: {
    course: {
      type: Object,
      required: true
    },
    deleteCourse: {
      type: Function,
      required: true
    }
  },
  computed: {
    durationIndicator: function() { // TODO Remake to directive
      if(this.course.duration < 60)
        return { 'border-left': '5px solid gold' };
      if(60 < this.course.duration && this.course.duration < 90)
        return { 'border-left': '5px solid limegreen' };
      if(90 < this.course.duration)
        return { 'border-left': '5px solid crimson' };
    }
  }
  mixins: [ 
    showInHoures,
    durationIndicator 
  ],
};
</script>

<style scoped>
#course-item {
  display: flex;
  background-color: rgb(214, 214, 214);
  margin: 10px;
}

#course-item-content {
  display: inline-block;
  width: 50%;
  margin: 5px;
}

#course-item-controls {
  display: flex;
  flex-direction: column;
  width: 50%;
}

button {
  display: inline-block;
  font-size: 15px;
  margin: 5px;
  max-width: 30%;
}

article {
  font-size: 25px;
}
</style>
