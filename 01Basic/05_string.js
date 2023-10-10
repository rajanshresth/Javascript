let namer = "Rajan";
let age = 20;

let message = `My name is ${namer} and I am ${age} years old.`;
//console.log(message);

// String Methods
let str = new String("apple");
// console.log(str.charAt(3));
// console.log(str.indexOf("a"));

function countVowel(str){
    let count = 0;
    let vowels = "aeiouAEIOU";
    for(let i = 0; i < str.length; i++){
        // indexOf() returns -1 if the character is not found
        if(vowels.indexOf(str[i]) !== -1){
            count++;
        }
    }
    return count;
}
//console.log(countVowel(str));

let newStr = new String("Rajan");
//console.log(newStr.substring(0,3)); //Raj
console.log(newStr.slice(-4, 4)); // aja
console.log(newStr.split("a")); // [ 'R', 'j', 'n' ]


let str1 = new String("  Shrestha  ");
console.log(str1.trim()); // Shrestha

console.log(str1.includes("Shrestha")); // true

let url = "https://www.google.com%20/search?q=javascript";
console.log(url.replace("%20", "-")); // https://www.google.com-/search?q=javascript



