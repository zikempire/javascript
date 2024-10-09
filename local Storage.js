// // Local Storage

// // set sth inth localstorage
// localStorage.setItem("token", "hello");

// // getting sth from the localstorge
// localStorage.getItem("token");

// // remove value in the local storage
// localStorage.removeItem("token");

// // clear our local storage

// localStorage.clear();

// localstorage can only take in strings
const user = {
  id: 1,
  theme: "dark",
};
// JSON.stringify
// Javascript object notation
localStorage.setItem("user", JSON.stringify(user));
// JSON.parse
localStorage.getItem("user");
