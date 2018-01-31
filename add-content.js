var today = new Date()
var hourNow = today.getHours();
var greeting;

var weekDay = today.getDay();


var daysOfTheWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

console.log("the day of the week " + weekDay);

console.log("the days of the week " + daysOfTheWeek);


if(hourNow>=18) {
	greeting='Good evening, its ' + daysOfTheWeek[weekDay];
} else if (hourNow>12) {
	greeting='Good afternoon Pauline! Happy ' + daysOfTheWeek[weekDay];
} else if (hourNow>0) {
	greeting='Good morning Pauline! Happy ' + daysOfTheWeek[weekDay];
} else {
	greeting='Welcome!';
}




document.write('<h3>' + greeting + '</h3>');