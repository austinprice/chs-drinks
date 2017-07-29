import Ember from 'ember';
const { computed } = Ember;

export default Ember.Controller.extend({

  locationFilter: 'All Charleston',
  locationsList: ['All Charleston', 'Downtown', 'James Island', 'Johns Island', 'Mount Pleasant', 'North Charleston', 'West Ashley'],

  dayFilter: {name: 'Any Day', open: 'all'},
  daysList: [{name: 'Any Day', open: 'all', close: 'all'}, {name: 'Monday', open: 'hours.monday.open', close: 'hours.monday.close'}, {name: 'Tuesday', open: 'hours.tuesday.open', close: 'hours.tuesday.close'}, {name: 'Wednesday', open: 'hours.wednesday.open', close: 'hours.wednesday.open'}, {name: 'Thursday', open: 'hours.thursday.open', close: 'hours.thursday.close'}, {name: 'Friday', open: 'hours.friday.open', close: 'hours.friday.close'}, {name: 'Saturday', open: 'hours.saturday.open', close: 'hours.saturday.close'}, {name: 'Sunday', open: 'hours.sunday.open', close: 'hours.sunday.close'}],

  hourFilter: {name: 'Any Time', value: 'all'},
  hoursList: [{name: 'Any Time', value: 'all'}, {name: '11:00 AM', value: 1100}, {name: '12:00 PM', value: 1200}, {name: '1:00 PM', value: 1300}, {name: '2:00 PM', value: 1400}, {name: '3:00 PM', value: 1500}, {name: '4:00 PM', value: 1600}, {name: '5:00 PM', value: 1700}, {name: '6:00 PM', value: 1800}, {name: '7:00 PM', value: 1900}, {name: '8:00 PM', value: 2000}, {name: '9:00 PM', value: 2100}, {name: '10:00 PM', value: 2200}, {name: '11:00 PM', value: 2300}, {name: '12:00 AM', value: 2400}],

  sortProps: ['name'],
  sortedBreweries: computed.sort('breweries', 'sortProps'),

  dayIsSelected: false,
  // dayIsSelected: computed.equal('dayFilter.close', "all"),

  // breweriesArray: [],
  //
  // filteredBreweriesByLocation: computed('sortedBreweries', 'locationFilter', function() {
  //   var locationFilter = this.get('locationFilter');
  //   var breweries = this.get('sortedBreweries');
  //
  //    if (locationFilter === 'All Charleston') {
  //      return breweries;
  //    } else {
  //      return breweries.filterBy('location', (locationFilter));
  //    }
  // }),
  //
  // filteredBreweries: computed('filteredBreweriesByLocation', 'dayFilter', function() {
  //   var dayFilter = this.get('dayFilter');
  //   var breweries = this.get('filteredBreweriesByLocation');
  //
  //   if (dayFilter.open === 'all') {
  //     return breweries;
  //   } else {
  //     return breweries.filterBy(dayFilter.open);
  //   }
  // }),
  //
  // filteredBreweriesByHour: computed('filteredBreweries', 'hourFilter', function() {
  //
  //   var dayFilter = this.get('dayFilter');
  //   var hourFilter = this.get('hourFilter');
  //   var breweries = this.get('filteredBreweries');
  //
  //   let breweriesArray = this.get('breweriesArray');
  //
  //   breweriesArray.clear();
  //
  //   breweries.forEach(function (brewery) {
  //     // let hours = brewery.hours.findBy('name', dayFilter.name).objectAt(0);
  //     //
  //     // if (hourFilter.value > hours.open) {
  //     //   breweriesArray.pushObject(brewery);
  //     // }
  //   });
  //
  //
  //
  //   console.log(breweriesArray);
  //
  //   if (hourFilter.value === 'all') {
  //     return breweries;
  //   } else if (dayFilter.open === 'all') {
  //     return breweries;
  //   } else {
  //     return breweriesArray;
  //   }
  //
  // }),


  actions: {
    updateLocationFilter(location) {
      var hour = this.get('hourFilter.value');
      var day = this.get('dayFilter.name').toLowerCase();


      this.set('locationFilter', location);
      this.send("updateHoursFilter", { hour: hour, day: day, location: location });
    },

    updateDayFilter(day) {
      if (day.open === 'all') {
        var hoursList = this.get('hoursList');
        this.set('hourFilter', {name: 'Any Time', value: 'all'});
        this.set('dayIsSelected', false);
      } else {
        this.set('dayIsSelected', true);
      }

      this.set('dayFilter', day);
      var dayName = this.get('dayFilter.name').toLowerCase();
      var location = this.get('locationFilter');

      var hour = this.get('hourFilter.value');


      this.send("updateHoursFilter", { hour: hour, day: dayName, location: location });
    },

    updateHourFilter(hour) {
      var day = this.get('dayFilter.name').toLowerCase();
      this.set('hourFilter', hour);
      var location = this.get('locationFilter');

      this.send("updateHoursFilter", { hour: hour.value, day: day, location: location });
    }
  }

});
