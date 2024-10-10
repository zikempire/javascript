// ASYNCHRONOUS JS

// synchronous /blocking
const url = "https://jsonplaceholder.typicode.com/users";

// async

// Promises- fulfilled, rejected, pending

// fetch(url)
//   .then((responce) => {
//     return responce.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

//   async await
const getUsers = async () => {
  try {
    const reponse = await fetch(url);
    const data = await reponse.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
getUser();

// Reguest methods
// Get- retrive data
//  Post- creating a data
//  Patch- updating a data point
//  delete- removing data,
// put - updating (total overhaul)
