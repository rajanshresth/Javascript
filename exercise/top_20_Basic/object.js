// Create an object representing a person with properties like name, age, and address. Write a function that prints out the person's details.

const person={
    name:"Rajan",
    age:"20",
    address:"Kathmandu"
}

function printObject(...obj){
    return obj.map((person)=>{
        console.log(`Name:${person.name}`);
        console.log(`Age: ${person.age}`);
        console.log(`Address: ${person.address}`)
    });
}

// console.log(printObject(person)); 

//Create an object representing a book with properties like title, author, and publication year. Write a function that displays the book's information.
const book=[
    {
        title:"The Alchemist",
        author:"Paulo Coelho",
        publication_year:"1988"
    },
    {
        title:"The Monk Who Sold His Ferrari",
        author:"Robin Sharma",
        publication_year:"1997"
    },
    {
        title:"The Power of Your Subconscious Mind",
        author:"Joseph Murphy",
        publication_year:"1963"
    }
]

const printBookInfo = (book) => {
    book.map((book) => {
        // console.log(`Title: ${book.title}`);
        // console.log(`Author: ${book.author}`);
        // console.log(`Publication Year: ${book.publication_year}`);
        console.table([`Title: ${book.title}`, `Author: ${book.author}`, `Publication Year: ${book.publication_year}`])
    });
}

printBookInfo(book);