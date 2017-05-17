import Ember from 'ember';

export default Ember.Component.extend({

  showHours: false,
  showFullDescription: false,

  actions: {
    toggleHours() {
      this.toggleProperty('showHours');
    },
    toggleDescription() {
      this.toggleProperty('showFullDescription');
    }
  }

});
