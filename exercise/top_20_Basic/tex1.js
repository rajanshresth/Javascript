//Qn.1 Write a JavaScript function that takes two numbers as parameters and returns their sum.

function sum(x,y){
    return x+y;
}
//console.log(sum(2,3));

//Qn.2 Create an array of numbers and write a function to find the largest number in the array.
const arr=[2,1,4,5,9,8,7,3,6]
function largestArr(num){
   if(num.length===0){
    return null; // return null if the array is empty
   }
   //method-1
    //    const largest = Math.max(...num);

    //method-2
    largest = num[0];
    for(let i=1;i<num.length;i++){
        if(num[i]>largest){
            largest = num[i];
        }
    }
   return largest;
}
// console.log(largestArr(arr));


//Qn.3 Write a JavaScript program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz." For numbers which are multiples of both three and five, print "FizzBuzz."

function check_fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} is FizzBuzz`);
        } else if (i % 3 === 0) {
            console.log(`${i} is Fizz`);
        } else if (i % 5 === 0) {
            console.log(`${i} is Buzz`);
        } 
    }
}
// check_fizzBuzz();

//Qn.4 Create a function that takes a string as input and returns the reverse of that string.
function reverseString(str){
    return str.split("").reverse().join("");;
}
// console.log(reverseString("abcde"));

//Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
function evenArr(arr){
    let new_arr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 || arr[i] % 4 === 0) {
            new_arr.push(arr[i]);
        }
    }
    return new_arr;
}
// console.log(evenArr([1,2,3,4,6,8,7,9]));

// Write a JavaScript program that calculates the sum of all the multiples of 3 and 5 below 1000.
function multiple_of_3and5() {
    let result = 0;
    for (let i = 1; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            result += i; // Accumulate the sum
        }
    }
    return result;
}

const sumz35 = multiple_of_3and5();
// console.log("The sum of multiples of 3 and 5 below 1000 is:", sumz35);



// Write a JavaScript program that generates a random password with a specified length.
function randomPassword(length) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
        let at = Math.floor(Math.random() * (charset.length + 1));
        password += charset.charAt(at);
    }
    return password;
}

// console.log(randomPassword(8));
