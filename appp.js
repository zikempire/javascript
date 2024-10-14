//Dom-document object model
//how to selecct element on the page
//class id, tag, combination

//get element by the id
const text = document.getElementById("text");
console.log(text);

//get element by className
const message = document.getElementsByClassName("message");
console.log(message);

//queryselector, queryselectorAll
const paragraph = document.querySelector("#text");
console.log(paragraph);

const paragraphs = document.querySelectorAll(".message");
console.log(paragraphs);

const heading6 = document.querySelector("div h6");
console.log(heading6);

//TextContent, innerText,InnerHtml
const heading = document.querySelector("h1");
// console.log(heading.textContent);
// heading.textContent +="JS IS FUN";
// heading.textContent = "JS IS FUN";

// const heading = document.querySelector("h1");

console.log(heading.innerText);
heading.innerText += "JS IS FUN";
// heading.textContent = "JS IS good";

const div = document.querySelector("div");
console.log(div.innerHTML);
div.innerHTMLl += "<p>okay</p>";
// div.innerHtml="<p>okay</p>"

const name = "john";
div.innerHtml = <h1>welcome ${name}</h1>;

//change attributes

const beginPara = document.querySelector(".begin");
console.log(beginPara);
beginPara.className = "okay";
beginPara.id = "good";
beginPara.style.color = "red";
beginPara.style.backgroundColor = "green";

//interact with css classnames
const h1 = document.querySelector("h1");
h1.className = "success";

//classList - add or remove , contains

const msg = document.querySelector("h2.message");
//console.log(msg.classList);

msg.classList.add("error");
msg.classList.remove("example");
console.log(msg.classList.contains("good"));

console.log(msg);

// create element method
const section = document.createElement("section");
section.innerHTML = "<h1>created from js</h1>";

//append it
const body = document.querySelector("body");
body.appendChild(section);

//remove element removeChild
//body.removeChild(section);

//replace child
const link = document.createElement("a");

link.innerText = "Visit Google";
//link.href = "https://googlr.com";
link.setAttribute("href", "https://google.com");

body.replaceChild(link, section);

//responding to users interactions
