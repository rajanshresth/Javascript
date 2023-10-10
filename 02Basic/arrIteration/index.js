// const coding = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

// const values= coding.forEach((item)=>{
//     console.log(item);
//     return item;
// })
// console.log(values);

const myNums=[1,2,3,4,5,6,7,8,9,10];
// const newNums=myNums.filter((num)=>{
//     return num>4
// })
// console.log(newNums);

const newNums=[];
myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num);
    }
});
console.log(newNums);


// crete a array of object with tittle, genre, publish, edition

const books=[
    {
        title:"The Alchemist", genre:"Adventure", publish:1988, edition:1
    },
    {
        title:"Think and Grow Rich", genre:"Self-help", publish:1937, edition:2
    },
    {
        title:"The Monk Who Sold His Ferrari", genre:"Self-help", publish:1997, edition:3
    },
    {
        title:"The Power of Positive Thinking", genre:"Self-help", publish:1952, edition:4
    }
]

const userBooks=books.filter((book)=>{
    return book.genre==="Self-help"
});
const newUserBooks = books.filter((book) => {
    return book.genre === 'Self-help' && book.publish > 1950;
  });

console.log(newUserBooks);