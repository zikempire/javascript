// alert("hello world")
// console.log(10);

console.log(getDataType("Hello")); // Outputs: "string"
console.log(getDataType(123)); // Outputs: "number"
console.log(getDataType(true)); // Outputs: "boolean"
console.log(getDataType(null)); // Outputs: "object"
console.log(getDataType(undefined)); // Outputs: "undefined"
console.log(getDataType({})); // Outputs: "object"
console.log(getDataType([])); // Outputs: "object"

// <!-- console.log(getDataType("Hello")); // Outputs: "string"
// console.log(getDataType(123)); // Outputs: "number"
// console.log(getDataType(true)); // Outputs: "boolean"
// console.log(getDataType(null)); // Outputs: "object"
// console.log(getDataType(undefined)); // Outputs: "undefined"
// console.log(getDataType({})); // Outputs: "object"
// console.log(getDataType([])); // Outputs: "object" -->

// <!-- const currencyData = {
//   'USD-EUR': 0.85,
//   'USD-GBP': 0.75,
//   'EUR-GBP': 0.88,
//   'EUR-JPY': 130.45,
//   // Add more currency pairs and rates as needed
// };

// const findCurrencyPair = (baseCurrency, toCurrency) => {
//   // Construct the currency pair key
//   const pairKey = `${baseCurrency}-${toCurrency}`;

//   // Check if the pair exists in the currency data
//   if (pairKey in currencyData) {
//     return currencyData[pairKey]; // Return the exchange rate
//   } else {
//     return `Exchange rate for ${baseCurrency} to ${toCurrency} not found.`;
//   }
// };

// // Example usages:
// console.log(findCurrencyPair('USD', 'EUR')); // Output: 0.85
// console.log(findCurrencyPair('USD', 'JPY')); // -->
