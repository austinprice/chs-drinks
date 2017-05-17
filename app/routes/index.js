import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      breweries: this.store.findAll('brewery'),
      locations: this.store.findAll('location'),
    });
  },

  setupController(controller, models) {
    controller.setProperties(models);
  }

});
