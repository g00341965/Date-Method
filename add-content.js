var today = new Date()
var hourNow = today.getHours();
var greeting;

var day = today.getDay();
var weekDay;

if (day==3){
	weekDay="Wednesday";
}

if(hourNow>=18) {
	greeting='Good evening, its ' + weekDay;
} else if (hourNow>12) {
	greeting='Good afternoon Pauline! Happy ' + weekDay;
} else if (hourNow>0) {
	greeting='Good morning Pauline! Happy ' + WeekDay;
} else {
	greeting='Welcome!';
}



document.write('<h3>' + greeting + '</h3>');