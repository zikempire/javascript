// object
const person1 = ["ade", "wale", 67, "google", true];
// {key :  value, key2: value2}
// key and value pairs are called object properties
const person = {
  firstName: "Ade",
  lastName: "Wale",
  age: 64,
  isMarrried: true,
  friends: ["john", "bola"],
  workHours: {
    monday: "8 hours",
  },
};
console.log(person);

// acess properties inside of object
// two ways to acees properties in an object --dot notation and bracket notation
//
// dot notation
console.log(person.age);
console.log(person.friends);
console.log(person.car);
console.log(person.workHours.monday);

// bracket notation objNAme['propertyName']
console.log(person["age"]);
console.log(person["friends"][1]);
console.log(person["workHours"]["monday"]);

// adding a new property to an object
person.car = "Benz";
console.log(person);
person.hobbies = ["running", "sleeping"];
console.log(person);

// removing a property from an ovject delete
delete person.isMarrried;
console.log(person);

//object method - function that the developer writes to work on the object

const book = {
  title: "Akoni-Ade",
  author: "Adeberu Ezekiel",
  yearPublished: 2000,
  genre: "fiction",
  isBestSeller: false,
  rating: 3.5,
  summary: function () {
    console.log(
      `The book is title ${this.title} it is written by ${this.author} and has a rating of ${this.rating}`
    );
  },
};
book.summary();
book.title;
// this keyword - inside of a function declearation in an object -it refres to the object

// object destruction-
// modern and faster way of picking properties in an object
const user = {
  username: "user001",
  fullName: "Peter Pan",
  password: "********",
  profilePic: "avatar",
  followers: ["Wale", "John", "Jane"],
  following: ["Elon Musk", "T pain", "Ronaldo"],
};
