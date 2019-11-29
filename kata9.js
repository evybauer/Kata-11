// Kata 9 - Talking Calendar


let talkingCalendar = function(date) {
const dateSplitted = date.split('/');
const myDate = new Date(date);
const options = {month: 'long'};
const monthString = myDate.toLocaleDateString('en-US', options);
const intMonth = parseInt(dateSplitted[2])
const dayString = ordinal_suffix_of(intMonth);

return monthString + ' ' + dayString + ', ' + dateSplitted[0];

function ordinal_suffix_of(i) {
  var j = i % 10,
      k = i % 100;
    if (j == 1 && k != 11) {
      return i + "st";
    }
    if (j == 2 && k != 12) {
      return i + "nd";
    }
    if (j == 3 && k != 13) {
    return i + "rd";
    }
    return i + "th";
  }
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));