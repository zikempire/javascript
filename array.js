// arrays = complex and types
// element1, element2
const mixedAr = [9, "str", true, 65, 9.8, null, [90, false]];

const students = ["Goodness", "Aisha", "Adura"];
console.log(students);

// Array properties (length)
console.log(students.length);
// getting element in an array - position arrName[position]
console.log(students[1]);
// change el in an array
students[0] = "john doe";

// Array methods
// adding and removing els frm an array push shift and unshift
// LIFO
students.push("Theresa");
students.push("Eniola");
students.pop();
students.pop();
console.log(students.pop());

students.unshift("Adedayo");
students.unshift("Timi");
students.shift();

console.log(students);

// conver arrays to a string(toString, john)
console.log(students.toString());
console.log(students.join("-"));

const onlineStudents = ["john", "Peter", "paul"];
const weekdayStudents = ["Ade", "pelumi", "paul"];
const allStudents = onlineStudents.concat(weekdayStudents, ["Ruth", "Gift"]);

// includes
console.log(onlineStudents.includes("tope"));

// sort, reverse
const carBrand = ["toyota", "bmw", "camry", "audi", "benz", "Space-Wagon"];
console.log(carBrand);
console.log(carBrand.sort());
console.log(carBrand.reverse());
// extract portions of an array slice(start, end(not included))
const friends = ["ola", "timi", "tope", "jane", "peace"];
console.log(friends.slice(0, 2));
console.log(friends.slice(1));

// split
let text = "hello world is fun";
console.log(text.split(" "));
const text2 = "tadapal";
console.log(text2.split("a"));

// hello olleh
const reverseStr = (str) => str.split("").reverse().join("");
console.log(reverseStr("hello"));

// push pop unshift shift includes slice sort reverse concat

// higher order array methods (callback function, iterator methods )

// for of method
const fruits = ["oranges", "Mangoes", "Pear", "Grapes"];
for (const fruit of fruits) {
  console.log(`${fruit} is something i like`);
  if (fruit === "Pear") {
    console.log(`${fruit} is my best fruit`);
  }
}

// find, filter, forEach, map, reduce, map, reduce every some
// FOREACH - executes a function for each element in an array
const customers = ["Pete", "Pan", "Jane", "Dwayne", "Dizzy"];
customers.forEach((customer, index) => {
  console.log(customer, index);
});

// MAP - creates a new array with transformed element

const nums = [4, 5, 6, 7];
const transformedNums = nums.map((num) => {
  return num * 2;
});
console.log(transformedNums);

// find - returns the first matching element in an array
const mySpecialNum = nums.find((num) => {
  return num >= 5;
});
console.log(mySpecialNum);

// filter returns all elements that fit a serch condition in an array
const allMyspecialNums = nums.filter((num) => num >= 5);
console.log(allMyspecialNums);

let myBalance = 8000;
const transactions = [4000, -125, 10000, -5000, -2000, 1500];
// we want to generate bank account for all debit and credit
transactions.map((transaction) => {
  if (transaction > 0) {
    console.log(`You have been credidted with ${transaction} Naira`);
  } else {
    console.log(`You have been debited ${transaction} Naira`);
  }
});
transactions.map((transaction) => {
  myBalance += transaction;
});
console.log(myBalance);
const myCreditTransactions = transactions.filter(
  (transaction) => transaction > 0
);
console.log(myCreditTransactions);

const maxTransaction = 50000;
// find if there is any transaction close to that max transaction
transactions.push(100000);

const specialTransaction = transactions.find(
  (transaction) => transaction >= maxTransaction
);
console.log(specialTransaction);

// every and some
// every= check if all elements satisfy a condition
const ages = [20, 42, 61, 81];
const allAdults = ages.every((age) => age >= 18);
console.log(allAdults);
// some = checks if at least one satisfy the condition
const someChildren = ages.some((age) => age < 18);
console.log(someChildren);

//  Reduce method - accumulating numbers
const cartPrices = [25000, 32000, 15000, 4000, -2500];
const cartTotal = cartPrices.reduce((prev, curr) => {
  return prev + curr;
}, 300);
console.log(cartTotal);

// sort
const peoplesNAme = ["Zigi", "Samson", "Niyi", "Ademola"];
// const atoZ = peoplesNAme.sort();
// console.log(atoZ);
// //
const ztoA = peoplesNAme.sort((a, b) => b - a);
console.log(ztoA);

const prices = [7000, 3000, 43944, 505];
// const highesttoLowest = prices.sort((a, b) => b - a);
// console.log(highesttoLowest);
//
const highesttoLowest = prices.sort((a, b) => a - b);
console.log(highesttoLowest);

// includes, reveres Slice, push pop, unshift, shift
// find, filter, forEach, map, reduce every some, sort(ezekiel)

// yet to discourse

// Arrary.isArray- checks if a varaible is array or not
console.log(Array.isArray(45));
// Arrray.from- changes a datatype to an array
console.log(Array.from("123"));

// indexof, lastIndexOf
const arr = ["ade", "john", "jane", "ade"];
console.log(arr.indexOf("ade"));
console.log(arr.lastIndexOf("ade"));

// delete
console.log(arr);
delete arr[1];
console.log(arr);

// findindex - position of the element that matches a search condition
const arr2 = [5, 6, 7, 8, 120, 500, 56];
const theIndexIs = arr2.findIndex((num) => num > 100);
console.log(theIndexIs);
