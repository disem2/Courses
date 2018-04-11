import { bus } from '../main';

export default {
  computed: {
    filtredCourses: function() {
      bus.$on('courseSearch', search => {
        this.wanted = search;
      });
      return this.courses
        .filter(course => {
          return course.title.toLowerCase().trim()
            .match(this.wanted.toLowerCase().trim());
      });
    }
  },
};