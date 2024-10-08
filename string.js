const firstName = "John";
const lastName = "Doe";
console.log(firstName);
console.log(lastName);

// string properties length
// string.length
console.log(firstName.length);
console.log(lastName.length);
// string concatination(joining)
const fullName = firstName + "" + lastName;
console.log(fullName);
console.log(fullName.length);

// string method- function that ca be performed on strings
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

// replace, replaceAll
console.log(fullName.replace("o", "$"));
console.log(fullName.replaceAll("o", "@"));
// include
console.log(fullName.includes("y"));
// startWith, endWith
console.log(fullName.startsWith("JO"));
console.log(fullName.endsWith("Doe"));

const myEmail = "adeberuezekiel@gmail.com";
console.log(myEmail.length);
console.log(myEmail.toUpperCase());
console.log(myEmail.includes("e"));
console.log(myEmail.endsWith("google.com"));

// indexOf, lastIndexOf
console.log(myEmail.indexOf("e"));
console.log(myEmail.lastIndexOf("e"));
//
console.log(myEmail.charAt(17));
// concat
console.log(myEmail.concat("ezekiel"));

// teplate literals
// Backticks``
// backticks `the book ${bookTitle}`
// const description =
//   "the book" + bookTitle + author + "was published in the year" + yearpublished;
// // const description2 = `the book ${bookTitle} written by${aurthor} was published in the year ${2016} `;
// console.log(description2);
// trimming
const userName = "     user001     ";
console.log(userName.length);
console.log(userName.trim());
// trim method remove white spaces at the fron and at the end

// trimstart only remove space at the front
console.log(userName.trimStart());
console.log(userName.trimEnd());

// extract portion of a string
// slice, substring, substr(start, num character we want)
// // slice(start,end(non inclusive))
// const surname = "Sandler";
// console.log(surname.slice(0, 4));
// console.log(surname.substring(1));
// console.log(surname.substr(0, 4));

// template liter

const name1 = "Ade";
const name2 = "Wale";
// ade is a boy
const sentence = `${name1} is a boy`;
const sentence2 = `His name is ${name2}`;
console.log(name1 + name2);

const quote = `tinubu said and i quote "let the poor breathe"`;
console.log(quote);

2 == "      ";
