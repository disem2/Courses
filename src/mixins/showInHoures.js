export default {
  filters: {
    'showInHoures': function(mins) {
      let h = Math.floor(mins / 60);
      let m = mins % 60;
      h < 10 ? '0' + h : h;
      m < 10 ? '0' + m : m;
      let output = h < 1 
        ? `${ m } min`
        : `${ h }h ${ m } min`;
      return output;
    }
  }
};