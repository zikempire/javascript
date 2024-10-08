// functions
function greeting() {
  console.log("Welcome to our App");
}
// for a function to work it need to be invoke and be called
greeting();
greeting();

function speak() {
  console.log("hello world");
}
speak();
// function can take parameters
function specialGreeting(name = "user") {
  console.log(`${name}, welcome to our app`);
}
specialGreeting("timi");
specialGreeting("Goodness");
// default parameters
specialGreeting();

// write a function that logs the addition of two numbers
function addTwoNums(num1, num2, num3) {
  const result = num1 + num2 + num3;
  console.log(result);
}
addTwoNums(9, 5, 7);
addTwoNums(-10, 7, 3);

// checks if a number is either positive negative or zero
i;
function checkNum(num) {
  if (num > 0) {
    console.log(`${num} is positive`);
  } else if (num < 0) {
    console.log(`${num} is Negative`);
  } else {
    console.log("This is Zero");
  }
}
checkNum(89);
checkNum(-54);
checkNum(0);

// function expression
function myFunction() {
  console.log("This is a func expression");
}

const myFunction2 = function (parameter1, parameter2) {
  console.log("This is a func expression");
};
myFunction2();
// hoisting - moves all f the func decleration up the script

// return key word
// write a function that calculate the product of two numbers
const productOfTWoNums = function (num1, num2) {
  return num1 * num2;
};

const result = productOfTWoNums(9, 2);
console.log(`The result is ${result}`);

// write a fuction that conversts km to meter
// 7km - 7 * 1000
const kmToMeters = function (value) {
  const meter = value * 1000;
  return `${value}km is equal to ${meter}m`;
  //   inaccessible code
};
console.log(kmToMeters(6));
console.log(kmToMeters(4.5));

// write a fuction that calaculate the average of three numbers
// and returns avarage

const calcAverage = function (n1, n2, n3) {
  const average = (n1 + n2 + n3) / 3;
  return average;
};
console.log(calcAverage(9, 7, 6));

// write a func that calculates the age of user, your function
// should take in year of birth as a parameter

const userAge = function (yearOfBirth) {
  return 2024 - yearOfBirth;
};
console.log(userAge(1960));

//
// write a function that check if a number is even or odd
// const oddOrEven = function (num) {
//   if (num % 2 === 0) {
//     return "This is an even Number";
//   } else {
//     return "This is an odd number";
//   }
// };
// console.log(oddOrEven(62));

// const depositeAmount = function (amount) {
//   savings += amount;
//   return `Deposit of ${amount} is sucessful and your current balance is ${savings}`;
// };
// console.log(depositAmount(900));
// console.log(checkWithDrawal(1200));
// console.log(depositAmount(900));

//  buide a simple atm machine
let userPin = 1234;
let savings = 20000;

// write a function that checks the enteredPin
const checkPin = function (enteredPin) {
  if (enteredPin === userPin) {
    return true;
  } else {
    return false;
  }
};

const withdraw = function (amount) {
  if (checkPin(1234)) {
    if (savings > amount) {
      savings -= amount;
      console.log(
        `the withdrawal of ${amount} is sucessful and balance is ${savings}`
      );
    } else {
      console.log("insufficient funds");
    }
  } else {
    console.log("incorrect pin, try again");
  }
};

withdraw(2000);
withdraw(5000);

const deposit = function (amount) {
  if (checkPin(1234)) {
    savings += amount;
    console.log(
      `the deposite of ${amount} is sucessful and balance is ${savings}`
    );
  } else {
    console.log("incorrect pin, try again");
  }
};
deposit(6000);
deposit(9000);

const balance = function () {
  if (checkPin(1244)) {
    console.log("Incorrect pin, try again");
  } else {
    console.log("Incorrect pin, try again");
  }
};
balance();

// write a function that checks number of attempt on the pin, max

// let attempt = 0;
// let blocked = false;
// const checkCradAttempt = function () {
//   if (checkPin(1254)) {
//     // go througn
//     console.log("perform transaction");
//   } else {
//     attempt++;

//     console.log(`incorrect pin , ${3 - attempt} left`);
//     if (attempt >= 3) {
//       console.log("Your card is blocked");
//     }
//   }
// };
// checkCradAttempt();
// checkCradAttempt();
// checkCradAttempt();
// checkCradAttempt();

// another way
// let attempt = 0;
// let blocked = false;
// const checkCradAttempt = function () {
//   if (checkPin(7689)) {
//     console.log("perform transaction");
//   } else {
//     if (!blocked) {
//       attempt++;
//       console.log(`incorrrect pim, ${3 - attempt} attempt left`);
//     }
//     if (attempt === 3) {
//       console.log("your card is blocked");
//       blocked = true;
//     }
//   }
// };
// checkCradAttempt();
// checkCradAttempt();
// checkCradAttempt();
// checkCradAttempt();

let attempt = 0;
let blocked = false;

const checkCardAttempt = function () {
  if (blocked) {
    console.log("Your Card is Blocked ");
    return;
  }
  if (checkPin(4567)) {
    console.log("perform Transaction");
    attempt = 0;
  } else {
    attempt++;
    if (attempt === 3) {
      console.log("Your card is Blocked");
      blocked = true;
    } else {
      console.log(`Incorrect pin, ${3 - attempt} attempts left`);
    }
  }
};
checkCardAttempt();
checkCardAttempt();
checkCardAttempt();
checkCardAttempt();
checkCardAttempt();

// write a func that check if an email is vaid or not
// @
const emailCheck = function (value) {
  if (value.include("@")) {
    console.log("Email is Valid");
  } else {
    console.log("Invalid email");
  }
};
