import Ember from 'ember';
const { computed } = Ember;

export default Ember.Controller.extend({

  init() {
    this._super(...arguments);
    var daysList = this.get('daysList');
    var date = new Date();
    let day = daysList[date.getDay()];
    if (date.getDay() === 0) {
      day = daysList[7];
    }
    var hour = date.getHours() * 100;

    this.set('hourFilter', hour);
    this.set('dayFilter', day);

    let h = new Date().getHours();
    let m = 'PM'
    if (h > 12) {
      var hourNumber = h - 12;
    } else if (h === 11) {
      var hourNumber = h;
      m = 'AM'
    } else {
      var hourNumber = 'all'
    }

    let hourName = hourNumber.toString() + ':00 ' + m;

    if (h < 11) {
      hourName = 'Any Time';
    }
    var hourFilter = {name: hourName, value: (h * 100)};

    this.set('hourFilter', hourFilter);
  },

  locationFilter: 'All Charleston',
  locationsList: ['All Charleston', 'Downtown', 'James Island', 'Johns Island', 'Mount Pleasant', 'North Charleston', 'West Ashley'],

  dayFilter: {name: 'Any Day', open: 'all'},
  daysList: [{name: 'Any Day', open: 'all', close: 'all'}, {name: 'Monday', open: 'hours.monday.open', close: 'hours.monday.close'}, {name: 'Tuesday', open: 'hours.tuesday.open', close: 'hours.tuesday.close'}, {name: 'Wednesday', open: 'hours.wednesday.open', close: 'hours.wednesday.open'}, {name: 'Thursday', open: 'hours.thursday.open', close: 'hours.thursday.close'}, {name: 'Friday', open: 'hours.friday.open', close: 'hours.friday.close'}, {name: 'Saturday', open: 'hours.saturday.open', close: 'hours.saturday.close'}, {name: 'Sunday', open: 'hours.sunday.open', close: 'hours.sunday.close'}],

  hourFilter: {name: 'Any Time', value: 'all'},
  hoursList: [{name: 'Any Time', value: 'all'}, {name: '11:00 AM', value: 1100}, {name: '12:00 PM', value: 1200}, {name: '1:00 PM', value: 1300}, {name: '2:00 PM', value: 1400}, {name: '3:00 PM', value: 1500}, {name: '4:00 PM', value: 1600}, {name: '5:00 PM', value: 1700}, {name: '6:00 PM', value: 1800}, {name: '7:00 PM', value: 1900}, {name: '8:00 PM', value: 2000}, {name: '9:00 PM', value: 2100}, {name: '10:00 PM', value: 2200}, {name: '11:00 PM', value: 2300}, {name: '12:00 AM', value: 2400}],

  sortProps: ['name'],
  sortedBreweries: computed.sort('breweries', 'sortProps'),

  dayIsSelected: computed.oneWay('dayFilter', function() {
    if (dayFilter.name === 'Any Day') {
      return false;
    } else {
      return true;
    }
  }),

  initialDay: computed('daysList', function() {
    var d = new Date();
    var daysList = this.get('daysList');
    return daysList[d.getDay()].name;
  }),

  initialHours: computed('initialDay', function() {
    var d = new Date();
    var daysList = this.get('daysList');
    return daysList[d.getDay()].name;
  }),


  actions: {
    updateLocationFilter(location) {
      var hour = this.get('hourFilter.value');
      var day = this.get('dayFilter.name').toLowerCase();


      this.set('locationFilter', location);
      this.send('updateHoursFilter', { hour: hour, day: day, location: location });
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


      this.send('updateHoursFilter', { hour: hour, day: dayName, location: location });
    },

    updateHourFilter(hour) {
      var day = this.get('dayFilter.name').toLowerCase();
      this.set('hourFilter', hour);
      var location = this.get('locationFilter');

      this.send('updateHoursFilter', { hour: hour.value, day: day, location: location });
    }
  }

});
