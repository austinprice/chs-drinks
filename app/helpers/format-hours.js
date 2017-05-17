import Ember from 'ember';

export function formatHours(params/*, hash*/) {
  //return deserialized;

  let hours = params;

  if (params > 1299) {
      hours = params - 1200;
  }

  let hoursString = hours.toString();
  let hour = hoursString.length > 3 ? hoursString.slice(0, 2) : hoursString.slice(0,1);
  var min = hoursString.slice(-2);
  let period = params > 1199 ? 'PM' : 'AM';

  if (params == 2400) {
    period = 'AM';
  }

  return hour + ':' + min + ' ' + period;
}

export default Ember.Helper.helper(formatHours);
