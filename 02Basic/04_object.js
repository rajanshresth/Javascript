// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id= 1234;
tinderUser.name = 'Rajan';
tinderUser.isLoggedin = false;

const regularUser = {
    email: "some@something.com",
    fullname: {
        userfullname:{
            firstName: "John",
            lastName: "Doe"
        }
    },
 }

// console.log(regularUser.fullname?.userfullname.firstName);

const obj1 = {
    1: "one",
    2: "two",
    3: "three"
}

const obj2 = {
    4: "four",
    5: "five",
    6: "six"
}

const obj3 = {
    ...obj1,
    ...obj2
}

const obj4= Object.assign({},obj1,obj2);
// console.log(obj3);
// console.log(obj4);

const User = [
    {
        id: 1,
        name: "Rajan",
    },
    {
        id: 2,
        name: "John",
    },
    {
        id: 3,
        name: "Doe",
    }
]

// console.log(User[0].name);

// console.log(Object.keys(User[0])); // returns an array of keys
// console.log(Object.values(User[0])); // returns an array of values
// console.log(Object.entries(User[0])); // returns an array of key-value pairs

// console.log(Object.hasOwnProperty(User[0],'name')); // returns true if the object has the property

const course= {
    courseTitle: "JS",
    price: 100,
    description: "This is a JS course"
}

const {courseTitle: title,price,description} = course;

console.log(title,price,description);