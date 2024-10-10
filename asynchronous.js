// ASYNCHRONOUS JS

// synchronous /blocking
console.log("a");
console.log("b");
console.log("c");

// nonblockingt commit
console.log(1);

setTimeout(() => {
  console.log(2);
}, 5000);
console.log(3);
