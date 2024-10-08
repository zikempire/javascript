// arrow function
const myFunction = (p1, p2) => {
  //
};

// writing an arrow function to check if a password is long enough ( min password length is 7)

const passwordCheck = (value) => {
  //  not advisable to tamper wuth password
  if (value.length >= 7) {
    console.log("Password is long enough");
  } else {
    console.log("Short Password");
  }
};
const passwordCheck2 = (value) =>
  value.length >= 7 ? "password is long enough" : "short password";
passwordCheck("password ");
passwordCheck2("pas");
// shorter way to check for password

// return keyword

// const calAverage = (num1, num2) => {
//   return (num1 + num2) / 2;
// };

// console.log(calAverage(8, 5));

// if its one line of code
const calAverage = (num1, num2) => (num1 + num2) / 2;
console.log(calAverage(8, 5));

const knToMetersAgain = (value) => `${value} km is equal to ${value * 1000} m`;
console.log(knToMetersAgain(8.5));

// scoping
// 2 typeof
// Global local

const mySavings = 9000;

const seeBalance = () => {
  const mySavings = 10000;
  console.log(mySavings);
};
seeBalance();
console.log(mySavings);
const num = 8;
const func1 = () => {
  const num = 89;
  console.log(num);
};

const func2 = (num = 78) => {
  // const num = 12;
  console.log(num);
};

console.log(num);

//write a function that takes in a string as parameter and returns the strinhg in all vapital letter

const capitalizeStr = (value) => value.toUpperCase();
console.log(capitalizeStr("mart"));

// write a javascript function that accepts a string as a parameter and converts the first latter of the word to uppercase
const capitalizeFirstLetter = (value) =>
  value.charAt(0).toUpperCase() + value.slice(1);
console.log(capitalizeFirstLetter("david"));

//write a function that accepts an argument and return the datatype.
const checkDataType = (arg) => typeof arg;
console.log(checkDataType(true));
//write a fucntion that returns whether a number is even or odd.

const evenOrOdd = (number) => (number % 2 === 0 ? "even" : "odd");

console.log(evenOrOdd(8));

//write a function named minutesTohours that receives a number of minutes as parameter
// and returns a number representing the same amount of time but in hours

const minutesToHours = (value) => value / 60;
console.log(minutesToHours(60));

// write a function called longestString that receives two strings as parameters and return the longest of the two strings
const longestString = (str1, str2) => (str1.length > str2.length ? str1 : str2);
console.log(longestString("tokumbo", "Omokunepon"));

// write a fuction named concat3 that receives 3 strings as paeameters
// (string1, string2, string3) and an additional string named seperator, the function should concatenate the three strings using the provided seperator and return the result.
//text hello world again - expected result hello-world-again.
const concat3 = (str1, str2, str3, seperator) =>
  str1 + seperator + str2 + seperator + str3;
console.log(concat3("Ade", "Wale", "Ola", "-"));

// write a fuction that returms the square of a number

const number = (num) => num ** 2;
console.log(number(4));

// write a function called checkloaneligibility, which will receives an amount as a paremeter and returns whether a user is eligible or not base ont the ccriterer
//  the loan amount can not be more than twise the amount

let savings = 60000;
// 45000, 200000 , 70000
const checkLoanElibility = (loanAmount) =>
  loanAmountoanAmount > savings * 2 ? "ineligible" : "Eligibility";
console.log;

// function
// func decleration
// func expression
// return keyword
// arrow fuction
// scoping

// write a function logs hello world to the console
function greeting() {
  console.log("Hello-world");
}
greeting();

// write a function thats returns 34
const loggerNum = () => 34;
console.log(loggerNum());

// write  a function that return the number of vowels in a string in a short way
// function longestString(...strings) {
//   return strings.reduce((a, b) => (a.length > b.length ? a : b));
// }

// console.log(longestString("Hello World")); // Outputs: 3
// console.log(countVowels("AEIOU")); // Outputs: 5
// console.log(countVowels("bcdfgh")); // Outputs: 0

// write  a function that return the number of vowels in a string in a short way
const countNumOfVowels = (str) => {
  let vowels = "aeiou";
  let numOfVowels = 0;
  const lowerCaseStr = str.toLowerCase();
  // loop over the lowercasestr
  for (let i = 0; i < lowerCaseStr.length; i++) {
    if (vowels.includes(lowerCaseStr[i])) {
      numOfVowels;
    }
  }
  return numOfVowels;
};
// Accoun
console.log(countNUmOfVowels("Hello weddqaorld"));
