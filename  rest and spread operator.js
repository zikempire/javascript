//
// rest and spread operator
// optional chining
// nullish coalescence
// leftExpressiom (null || undefined)?? defaultValue
//
//
// rest operator
const countries = ["cuba", "Algeria", "Mexico", "USA"];
const [one, ...others] = countries;
console.log(one);
console.log(others);

const country = {
  name: "Nigeria",
  yearOfIndependence: 1960,
  nativeLanguage: "English",
  isIsLand: false,
};
const { name, isIsLand, ...remaining } = country;
console.log(remaining);

//
// Spread operator ...
const africanCountries = ["Mali", "Togo", "Keny", "Uganda"];
const asianCountries = ["china", "Japan", "BAngladash", "Vietman"];
const allCountries = [
  ...africanCountries,
  "congo",
  ...asianCountries,
  "Australia",
  "France",
];
console.log(allCountries);

// optional chaining
const user = {
  name: "John Tope ",
  age: 34,
  gender: "Male",
  previousJobs: {
    one: "Jumia",
    two: "paystack",
    three: "Meta",
  },
};
console.log(user?.name);
console.log(user?.car);
console.log(user?.previousJobs?.three);

// null coalescence
const username = null;
console.log(username ?? "unknow User");
