let score= "33";

//console.log(typeof score); // string

let valueInNumber = Number(score);
//console.log(typeof valueInNumber); // number    

// "33" -> 33
// "33a" -> NaN
// "a33" -> NaN
// true -> 1
// false -> 0

let isLoggnedIn = 1;
let booleanValue = Boolean(isLoggnedIn);
//console.log(booleanValue); // true

// 0 -> false
// 1 -> true
// "" -> false
// "abc" -> true
// null -> false
// undefined -> false
// NaN -> false
// Infinity -> true

let someNumber = 10;
let someString = String(someNumber);
//console.log(someString); // "10"


// ******* Operations **********
let value = 10;
let negativeValue = -value;
//console.log(negativeValue); // -10

// ******* Arithmetic Operations **********
let a = 10;
let b = 3;
let c = a + b;
let d = a - b;
let e = a * b;
let f = a / b;
let g = a % b;
let h = a ** b;
// console.log(h); // 1000

let str1 = "Hello";
let str2 = "World";
let str3 = str1 + " " + str2;
// console.log(str3); // "Hello World"

// console.log(10 + 20 + "30"); // "3030"
// console.log("10" + 20 + 30); // "102030"
// console.log(1+2+"3"+4+5); // "3345"

// prefix and postfix --> increment and decrement

let x = 3;
let y = x++;
// console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let xNum = 5;
const zNum = xNum--;
console.log(`xNum:${xNum}, zNum:${zNum}`);


let aNum = 3;
const bNum = ++aNum;

console.log(`a:${aNum}, b:${bNum}`);
// Expected output: "a:4, b:4"

let aNumber = 5;
const bNumber = --aNumber;
console.log(`aNumber:${aNumber}, bNumber:${bNumber}`);
// Expected output: "aNumber:4, bNumber:4"



