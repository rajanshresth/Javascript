const myNumbers = [1, 2, 3, 4, 5];

// const newNums = myNumbers.map((num) => {
//     return num * 2;
//     }
// );
// console.log(newNums);

const newNums = myNumbers
                .map((num) => num +10)
                .map((n)=>n%2===0);
// console.log(newNums);

