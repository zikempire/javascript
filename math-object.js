// Math Object
console.log(Math.PI);

// Math Methods
// round, ceil, floor, trunc, random, max, min,pow, sprt

console.log(Math.pow(4, 4));
// 4 * 4
console.log(Math.sqrt(9));
console.log(Math.max(10, 2, 56, 78));
console.log(Math.min(10, 2, 56, 78));
console.log(Math.round(9.56));
console.log(Math.ceil(-1.2));
console.log(Math.floor(9.9));
//
console.log(Math.trunc(10.3));
// remove the decimal

// random 0-1
console.log(Math.random());

// 0-5
// const randomNumbe1r = Math.random() * 6;
// console.log(randomNumber);

const randomNumber = Math.trunc(Math.random() * 6);
console.log(randomNumber);

const customer = ["Ezekiel", "Eniola", "Aisha", "Olumide", "Sesan"];
const numOfCustomers = customer.length;
const randomCustomerPosition = Math.floor(Math.random() * numOfCustomers);

console.log(customer[randomCustomerPosition]);
