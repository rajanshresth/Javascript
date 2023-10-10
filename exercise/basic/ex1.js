// Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let today = new Date();
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
const day = today.getDay();
console.log(today);
const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
console.log("Today date is : " + date + ".")
console.log("Today day is : " + daylist[day] + ".");

let hour = today.getHours();;
let minute = today.getMinutes();
let second = today.getSeconds();

let meridiem = (hour >= 12)? " PM ":" AM ";

hour = (hour >= 12)? hour - 12: hour;

console.log("Current Time:"+`${hour}` + meridiem + " : " + `${minute} min` + " : " + `${second} sec`)

