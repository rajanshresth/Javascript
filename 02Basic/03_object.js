// singleton
// object literals

// object literals

let mySym =Symbol('key1');

const jsUser = {
    name: 'John',
    age: 32,
    [mySym]: 'key1',
    location: 'USA',
    email: 'hi@google.com',
    isLoggedIn: false,
    lastLoginDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
}

// console.log(jsUser.email);
// console.log(jsUser['email']);
// console.log(jsUser[mySym]);


// jsUser.isLoggedIn = true;
//Object.freeze(jsUser); // this will make the object immutable
// jsUser.name = 'Rajan';
// console.log(jsUser);

jsUser.greeting = function () {
    console.log(`Hello ${this.name}`);
}

console.log(jsUser.greeting());