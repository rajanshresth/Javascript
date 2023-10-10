let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2000, 11, 12, 12, 30, 30);
//console.log(myCreatedDate);

let newCreatedDate = new Date("01-14-2024");
//console.log(newCreatedDate);

let newDate = new Date();
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth());
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getHours());
// console.log(newDate.getMinutes());
// console.log(newDate.getSeconds());
// console.log(newDate.getMilliseconds());
// console.log(newDate.getTime());
// console.log(newDate.getTimezoneOffset());
// console.log(newDate.now());

newDate.toLocaleString('default', { 
    month: 'long',
    weekday: 'long',
})


