const accountId = 1459;
let accountEmail = "rajan@gmail.com";
var accountName = "Rajan";
accountCity = "Kathmandu"; // not recommended

// accountId = 1234;  // not allowed
accountEmail = "raj23@gmail.com";
accountName = "Rajan Shrestha";
accountCity = "Bhaktapur";

/*
Prefer not to use var
because it is block scoped and function scoped
*/

console.table([accountId, accountEmail, accountName, accountCity])