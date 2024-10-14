// write a function that takes in a string and converts the first letter of everyword to uppercase

// hello world ===> hello world
const firstLetterToCaps = (str) => {
  const result = str.split(" ").map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return result.join(" ");
};
console.log(firstLetterToCaps("test is fun and stressfull"));

// write a function that checks if the parameter is a number or not
// return true or false
const checkNumber = (arg) => typeof arg === "number";
console.log(checkNumber("hello"));

const currentData = [
  { from: "GBP", to: "NGN", rate: 2200 },
  { from: "USD", to: "NGN", rate: 1700 },
  { from: "EUR", to: "NGN", rate: 1900 },
  { from: "YEN", to: "NGN", rate: 400 },
];

// iterate over the currencydata and log a message
// the exchange rate for USD to NGN is 1700
currentData.forEach((currency) => {
  console.log(
    `The exchange rate for ${currency.from} to ${currency.to} is ${currency.rate}`
  );
});

// write a func that returns the exchange rate for that currency pair
//or an appropriate message if the pair is not found
const findCurrencyPair = (baseCurrency, toCurrency) => {
  //search through the currencyData to find a match
  const pair = currentData.find((currency) => {
    return currency.from === baseCurrency && currency.to === toCurrency;
  });

  if (pair) {
    console.log(
      `The Exchange Rate for ${pair.from} to ${pair.to} is ${pair.rate}`
    );
  } else {
    console.log("The currency pair cannot be found");
  }
};

findCurrencyPair("YEN", "NGN");
// write a coversion function
// 2 usd
const convertCurrency = (baseCurrency, toCurrency, amount) => {
  const pair = currentData.find((currency) => {
    return currency.from === baseCurrency && currency.to === toCurrency;
  });

  if (pair) {
    //conversion
    console.log(
      `${amount} ${pair.from} is equaivalent to ${amount * pair.rate} ${
        pair.to
      }`
    );
  } else {
    console.log("Currency pair not found");
  }
};

convertCurrency("GBP", "NGN", 500);

// write a funct to add to the currency data list
// Aus NHN 300

const addNewCurrency = (from, to, rate) => {
  // push
  currentData.push({ from, to, rate });
  console.log(currentData);
};
addNewCurrency("AUA", "NGN", 1040);
addNewCurrency("AUA", "NGN", 1040);
