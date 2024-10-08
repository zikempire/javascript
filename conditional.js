// conditional statement
// control

const myBalance = 3000;
const transaction = 3000;

// if statement
// //  if(condition){
// // lines of code
// }

if (true) {
  console.log("yes");
}

if (myBalance >= transaction) {
  console.log("Transaction successful");
}

// 18+
const age = 18;
if (age >= 18) {
  console.log("you are eligible to vote");
}

//  if the length of the password is 7 and above - good passworld
const password = "Ogunmepon@gmail.com";
if (password.length >= 7 && password.includes("@")) {
  console.log("Good password");
}

// if else statement
// if(condition){
// first action
// }else{
// second action
// }

const age2 = 25;
//  eligible  18+ or not

if (age2 >= 18) {
  console.log("you are eligible to vote");
} else {
  console.log("you are ineligible to vote, you must be 18+");
}

// youth/underagem 0-40  or aged 41+

const age3 = 40;
if (age3 >= 0 && age3 <= 40) {
  console.log("you are in the youth/underage category");
} else {
  console.log("you are in the aged category");
}

// write an if else statement to check if a number is even or odd and

// let num = 100;
// if (num  % 2 === 0){
// console.log(" is even.")
// }else{
//     console.log(" is odd.");
// }

const num = 90;
if (num % 2 === 0) {
  console.log("this is an even number ");
} else {
  console.log("this is an odd numbeer");
}

// declare two variable 1. savings to any number variable 2. transactionAmount
// write an if else statement to check if transaction will be successful
//  or not

const savings = 120000;
const transactionAmount = 4000;

if (savings >= transactionAmount) {
  console.log("Transaction successful");
} else {
  if (savings <= transactionAmount) {
    console.log("In-sufficient fund");
  }
}

// multiple condition else if statement
// posotive>0 negative <0 and zero
let myNum = 0;

if (myNum > 0) {
  console.log("this is a positive number ");
} else if (myNum < 0) {
  console.log("This is Zero");
} else {
  console.log("This is Zero");
}

// underage o-12 teens 13-19 adults 20-40 aged 41
const age4 = 20;

if (age4 >= 0 && age4 <= 12) {
  console.log("underage");
} else if (age4 >= 13 && age4 <= 19) {
  console.log("teens");
} else if (age4 >= 20 && age4 <= 40) {
  console.log("Adults");
} else if (age4 >= 41 && age4 <= 60) {
  console.log("Aged");
} else {
  console.log("invalid age, try again");
}

//

switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Very Good");
    break;
  case "C":
    console.log("Good");
    break;
  case "D":
    console.log("Fair");
    break;
  case "E":
    console.log("Poor");
    break;
}

let myAtmPin = 5678;
let enteredPin = 5679;
const myBalance = 8000;
let transactionAmount = 5000;
if (myAtmPin === enteredPin) {
  console.log("perform Transaction");
} else {
  console.log("incorrect Pin");
}

// ternary operator
// condition ? first action : second action

myAtmPin === enteredPin
  ? console.log("perform Transaction")
  : console.log("incorrect Pin");
