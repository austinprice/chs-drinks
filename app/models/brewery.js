import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({

  name: DS.attr('string'),
  address: DS.attr('string'),
  website: DS.attr('string'),
  hoursString: DS.attr('string'),
  description: DS.attr('string'),
  location: DS.attr('string'),
  hours: DS.attr(),

});
