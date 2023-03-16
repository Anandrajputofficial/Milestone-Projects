// removeduplicates.js

// Define an array of items in the customer's cart with duplicates
const cartWithDuplicates = ["shirt", "pants", "shoes", "shirt", "hat", "pants", "socks"];

// Remove duplicates from the cart using the Set object and the spread operator
const cartWithoutDuplicates = [...new Set(cartWithDuplicates)];

// Print the new cart without duplicates to the console
console.log(cartWithoutDuplicates);


