const myNums = [1,2,3];

const total = myNums.reduce((acc,curr)=>{
    console.log(`acc: ${acc} and curr: ${curr}`)
    return acc+curr;
},0);
console.log(total);

const shoppingCart = [
    {
        product:"phone",
        price:999,
    },
    {
        product:"laptop",
        price:1299,
    },
    {
        product:"headphone",
        price:99,
    },
    {
        product:"keyboard",
        price:199,
    },
];

const totalAmount = shoppingCart.reduce((acc,curr)=>{
    return acc+curr.price;
},0);
console.log(totalAmount);