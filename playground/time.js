const moment = require('moment');

var date = moment();
console.log(date.format('MMM/DD/YYYY'));

console.log(date.format('h:mm a'));

var createdAt = 12341234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));
