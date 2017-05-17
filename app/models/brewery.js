import DS from 'ember-data';

export default DS.Model.extend({

  name: DS.attr('string'),
  address: DS.attr('string'),
  website: DS.attr('string'),
  hoursString: DS.attr('string'),
  description: DS.attr('string'),
  location: DS.attr('string'),
  hours: DS.attr(),

  // break down each day's hours for easy filtering later
  monday: Ember.computed('hours', function() {
    return this.get('hours').objectAt(0);
  }),
  tuesday: Ember.computed('hours', function() {
    return this.get('hours').objectAt(1);
  }),
  wednesday: Ember.computed('hours', function() {
    return this.get('hours').objectAt(2);
  }),
  thursday: Ember.computed('hours', function() {
    return this.get('hours').objectAt(3);
  }),
  friday: Ember.computed('hours', function() {
    return this.get('hours').objectAt(4);
  }),
  saturday: Ember.computed('hours', function() {
    return this.get('hours').objectAt(5);
  }),
  sunday: Ember.computed('hours', function() {
    return this.get('hours').objectAt(6);
  })

});
