/*const age = 96;
function calculateKrAge(ageOfForeigner){
  return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);

const calculator = {
  add: function(a, b){
    return a + b;
  }
};

const calculatorAdd = calculator.add(1, 2);

console.log(calculatorAdd);


const age = prompt("How old are you?");
if(isNaN(age)){
  console.log("Please write a number");
}else if (age < 18){
  console.log("You are too young");
}else {
  console.log("You can drink");
}

function handleMouseDown(){
  title.innerText = ("That was a right click!");
  title.style.color = "blue"; 
}
function handleMouseEnter(){
  title.innerText = "The mouse is here!";
}
function handleMouseLeave(){
  title.innerText = "The mouse is gone!";
}
function WindowResize(){
  title.innerText = "You just resized!";
}


title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
window.addEventListener("resize", WindowResize);
title.addEventListener("contextmenu", handleMouseDown);
console.dir(title);

const h1 = document.querySelector("h1");

function handleClick(){
  h1.classList.toggle("active");
}

h1.addEventListener("click", handleClick);*/

const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const loginButton = document.querySelector(".login-form button");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";

function onSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello $(username)`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onSubmit);
