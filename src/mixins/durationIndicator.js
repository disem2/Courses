export default {
  computed: {
    durationIndicator: function() {
      if(this.course.duration < 60)
        return { 'border-left': '5px solid gold' };
      if(60 < this.course.duration && this.course.duration < 90)
        return { 'border-left': '5px solid limegreen' };
      if(90 < this.course.duration)
        return { 'border-left': '5px solid crimson' };
    }
  }
};