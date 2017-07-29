import Ember from 'ember';
import ENV from 'chs-drinks/config/environment';

export default Ember.Route.extend({

  queryParams: undefined,

  init() {
    this._super(...arguments);
    var daysList = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    var date = new Date();
    var day = daysList[date.getDay()];
    let hour = date.getHours() * 100;

    if (hour < 1100) {
      hour = 'all';
    }

    this.set('queryParams', { hour: hour, day: day, location: 'All Charleston' })
  },

  model(params) {
    return Ember.RSVP.hash({
      breweries: this.store.query('brewery', this.get('queryParams'))
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

      // var self = this;
      // this.store.query('brewery', this.get('queryParams')).then((response) => {
      //   self.set('model', response);
      // });
    }
  }

});
