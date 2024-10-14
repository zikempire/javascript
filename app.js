// // DOM - Document Object Note 1
// // How to select element on the page

// // get element by the ID
// const text = document.getElementById("text");
// console.log(text);

// // get element with class  name
// const message = document.getElementsByClassName("message");
// console.log(message);

// // querySelector, querySelectorAll
// const paragraph = document.querySelector("#text");
// console.log(paragraph);
// const paragraphs = document.querySelectorAll(".message");
// console.log(paragraphs);

// const heading6 = document.querySelector(" div h6");

// // textContent, innerText, innerHTML
// const heading = document.querySelector("h1");
// console.log(heading.textContent);
// heading.textContents += "JS IS FUN";
// // console.log(heading.innerHTMl);
// // heading.innerHTMl += "JS is good";
// //
// const div = document.querySelector("div");
// console.log(div.innerHTMl);
// div.innerHTMl += "<p>okay</p>";
// const name = "John";
// div.innerHTMl = `<h1>Welcome ${name}<h1>`;

// // change
// const beginPara = document.querySelector(".begin");
// console.log(beginPara);
// beginPara.className = "okay";
// beginPara.id = "good";
// beginPara.style.color = "red";
// beginPara.style.backgroundColor = "green";
// //
// // interact with css classnames
// const h1 = document.querySelector("h1");
// h1.className = "success";
// //
// // classList- add or remove
// const msg = document.querySelector("h2.message");
// // consolelog (msg.classList)
// // msg.classList.add("error");
// // msg.classList.remove("example");
// // console.log(msg.classList.contains("good"));
// // console.log(msg);

// // Create elements
// const section = document.createElement("section");
// section.innerHTML = "<h1>Created from JS</h1>";

// // append it
// // const body = documents.querySelector("body");
// // body.appendChild(section);

// // // remove element removeChild
// // body.removeChild(section);

// // reponding to users interaction
// // events (click), event handler
// // addEventListener - handler
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   console.log("btn clicked ");
//   body.style.backgroundColor = "aqua";
// });

const form = document.querySelector("form");
// submit
form.addEventListener("submit", (event) => {
  // default of form when submitted is to refresh the page
  event.preventDefault();
  //   select input field
  const username = document.querySelector(".username");
  const password = document.querySelector(".password");
  const usernameValue = username.value.trim();
  const passwordValue = password.value;
  const small = document.querySelector("small");
  //   console.log(usernameValue, passwordValue);
  //   validate()
  if (!usernameValue || !passwordValue) {
    // display error message
    small.textContent = "Please fill all fields";
  } else if (usernameValue.length < 5) {
    small.textContent = "Minimum username length is 5";
  } else if (passwordValue.toLowerCase().includes("password")) {
    small.innerText = "Password must not include password";
  }else{
    // submit form 
    small.textContent = "Form Submitted"
  }
});
