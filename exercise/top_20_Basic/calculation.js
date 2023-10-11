// Create a simple calculator program that can perform basic operations like addition, subtraction, multiplication, and division.

function addition(x, y, ...num) {
    return x + y + num.reduce((acc, curr) => acc + curr, 0);
}

function subtraction(x, y, ...num) {
    return x - y - num.reduce((acc, curr) => acc + curr, 0);
}

function multiplication(x, y, ...num) {
    return [x, y, ...num].reduce((acc, curr) => acc * curr, 1);
}

function division(x, y, ...num) {
    return [x, y, ...num].reduce((acc, curr) => acc / curr);
}

function calculation(operation,...args){
    switch (operation) {
        case 'add':
            return addition(...args);
        case 'subtract':
            return subtraction(...args);
        case 'multiply':
            return multiplication(...args);
        case 'divide':
            return division(...args);
        default:
            return 'Invalid operation';
    }
}

console.log(calculation('add', 2, 3, 4, 5)); // Output: 14
console.log(calculation('subtract', 10, 2, 3)); // Output: 5
console.log(calculation('multiply', 2, 3, 4)); // Output: 24
console.log(calculation('divide', 20, 2, 2)); // Output: 5
