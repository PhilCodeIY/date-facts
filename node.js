var moment = require('moment');
const chalk = require('chalk');

let now = "It is " + (chalk.blue(moment().format("dddd, MMMM Do YYYY, h:mm:ss a")));
console.log (now);

let count = "It is the " + (chalk.magenta(moment().dayOfYear())) + " day of the year. ";
console.log (count);

let hours = parseInt(moment().format('kk'));
let minutes = parseInt(moment().format('mm'));
let sec = parseInt(moment().format('ss'));
let multiplyer = 60;
let hsub = (hours * multiplyer) * multiplyer;
let msub = (minutes * multiplyer) + sec;
let total = (hsub + msub);
let secs = "It is " + (chalk.cyan(total)) + " seconds into the day. ";
console.log (secs);

let dst =  ((moment().isDST()));
let daylight = "It" + (chalk.green( " is " )) + "during Daylight Savings Time.";
if (dst == true) {
  console.log (daylight);
}

let lp = moment().isLeapYear();
let leapyear = "It" + (chalk.red(" is not ")) + "a leap year.";
if (lp == false) {
  console.log (leapyear);
}
