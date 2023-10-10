/*
// Primitive 
    7 types of primitive data types
    Number, string, boolean, null, undefined, symbol, BigInt

// Non-Primitive or reference
    //Array, Object, Function, 
*/

// Stack and Heap Memory
// Stack Memory - Primitive Data Types
// Heap Memory - Non-Primitive Data Types

let myName = "Rajan";

let anotherName = myName;
anotherName = "Rajan Shrestha";
console.log(myName);
console.log(anotherName);

let user1 = {
    name: "Rajan",
    age: 22
}

let user2 = user1;

user2.name = "Rajan Shrestha";
console.log(user1.name);
console.log(user2.name);