import Ember from 'ember';
const { computed } = Ember;

export default Ember.Controller.extend({

  locationFilter: 'All Charleston',
  locationsList: ['All Charleston', 'Downtown', 'James Island', 'Johns Island', 'Mount Pleasant', 'North Charleston', 'Upper Peninsula', 'West Ashley'],

  dayFilter: {name: 'Any Day', open: 'all'},
  daysList: [{name: 'Any Day', open: 'all', close: 'all'}, {name: 'Monday', open: 'monday.open', close: 'monday.close'}, {name: 'Tuesday', open: 'tuesday.open', close: 'tuesday.close'}, {name: 'Wednesday', open: 'wednesday.open', close: 'wednesday.open'}, {name: 'Thursday', open: 'thursday.open', close: 'thursday.close'}, {name: 'Friday', open: 'friday.open', close: 'friday.close'}, {name: 'Saturday', open: 'saturday.open', close: 'saturday.close'}, {name: 'Sunday', open: 'sunday.open', close: 'sunday.close'}],

  hourFilter: {name: 'Any Time', value: 'all'},
  hoursList: [{name: 'Any Time', value: 'all'}, {name: '1:00 PM', value: 1300}, {name: '2:00 PM', value: 1400}, {name: '3:00 PM', value: 1500}, {name: '4:00 PM', value: 1600}, {name: '5:00 PM', value: 1700}, {name: '6:00 PM', value: 1800}, {name: '7:00 PM', value: 1900}, {name: '8:00 PM', value: 2000}, {name: '9:00 PM', value: 2100}, {name: '10:00 PM', value: 2200}, {name: '11:00 PM', value: 2300}, {name: '12:00 AM', value: 2400}],

  sortProps: ['name'],
  sortedBreweries: computed.sort('breweries', 'sortProps'),

  filteredBreweriesByLocation: computed('sortedBreweries', 'locationFilter', function() {
    var locationFilter = this.get('locationFilter');
    var breweries = this.get('sortedBreweries');

     if (locationFilter === 'All Charleston') {
       return breweries;
     } else {
       return breweries.filterBy('location', (locationFilter));
     }
  }),

  filteredBreweries: computed('filteredBreweriesByLocation', 'dayFilter', function() {
    var dayFilter = this.get('dayFilter');
    var breweries = this.get('filteredBreweriesByLocation');

    if (dayFilter.open === 'all') {
      return breweries;
    } else {
      return breweries.filterBy(dayFilter.open);
    }
  }),

  filteredBreweriesByHour: computed('filteredBreweriesByDay', 'hourFilter', function() {
    var dayFilter = this.get('dayFilter');
    var hourFilter = this.get('hourFilter');
    var breweries = this.get('filteredBreweriesByDay');

    if (hourFilter.value === 'all') {
      return breweries;
    } else {
      console.log(dayFilter.close);
      return breweries.filterBy(dayFilter.close, hourFilter.value);

    }
  }),


  actions: {
    updateLocationFilter(location) {
      this.set('locationFilter', location);
    },

    updateDayFilter(day) {
      this.set('dayFilter', day);
    },

    updateHourFilter(hour) {
      this.set('hourFilter', hour);
    }
  }

});
