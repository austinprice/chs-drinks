import Ember from 'ember';
import ENV from 'chs-drinks/config/environment';

export default Ember.Route.extend({

  queryParams: undefined,

  model(params) {
    return Ember.RSVP.hash({
      //breweries: this.store.findAll('brewery')
      breweries: this.store.query('brewery', this.get('queryParams'))
      //{'hour':'1200','day': 'monday'}
    });
  },

  // afterModel() {
  //   let url = ENV.host + '/breweries/monday/1200';
  //   const headers = {};
  //   Ember.$.ajax({
  //     contentType: 'application/vnd.api+json',
  //     url: url,
  //     method: 'GET',
  //     headers: headers
  //   }).then((response) => {
  //   });
  // },

  setupController(controller, models) {
    controller.setProperties(models);
  },

  actions: {
    updateHoursFilter(params) {
      this.set('queryParams', params);
      this.refresh();
    }
  }

});
