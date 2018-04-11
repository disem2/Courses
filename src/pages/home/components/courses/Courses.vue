<template>
  <ul>
    <li v-for='course in filtredCourses' :key='course.id'>
      <CourseItem :course='course'
        :deleteCourse='deleteCourse' />
    </li>
  </ul>
</template>

<script>
import searchMixin from '../../../../mixins/searchMixin';
import CourseItem from './CourseItem.vue';

export default {
  components: {
    CourseItem
  },
  methods: {
    deleteCourse: function(id) {
      return this.courses = this.courses
        .filter(course => course.id !== id);
    }
  },
  mixins: [ searchMixin ],
  data() {
    return {
      wanted: '',
      courses: [
        { 
          id: 1,
          title: 'Udemy Course', 
          duration: 61, 
          text: 'some text some some'
        },
        { 
          id: 2,
          title: 'NetNinja Course', 
          duration: 233, 
          text: 'some text some some'
        },
        { 
          id: 3,
          title: 'Traversy Course', 
          duration: 44, 
          text: 'some text some some'
        },                
        { 
          id: 4,
          title: 'Another Course', 
          duration: 78, 
          text: 'some text some some'
        },                
        { 
          id: 5,
          title: 'Last Course', 
          duration: 44, 
          text: 'some text some some'
        },                                
      ]
    };
  }
};
</script>

<style>
ul {
  padding: 0;
  list-style-type: none;
  width: 70%;
  margin: 20px auto;
}
</style>


