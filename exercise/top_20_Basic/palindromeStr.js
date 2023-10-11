//Write a function to check if a given string is a palindrome (reads the same forwards and backward).

function strPalindrome(str){
    // return str.split("").reverse().join("");
    if(str.split("").reverse().join("")===str){
        return console.log(`${str} is is palindrome`);
    } else {
        return console.log(`${str} isn't a palindrome`);
    }
}

strPalindrome("mom");
strPalindrome("apple");