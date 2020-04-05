// Question 1

const myFunctionExpression = function() {
  console.log("Trond Fuglseth Spjelkavik");
};
myFunctionExpression();

// Question 2

const buttonClicked = document.querySelector(".btn");

buttonClicked.addEventListener("click", () => {
  console.log("I was clicked");
});

// Question 3

const pushedKey = document.querySelector("#firstName");

pushedKey.addEventListener("keydown", event => {
  console.log(event.target.value);
});

// Question 4

const hoverOver = document.querySelector("button");

hoverOver.addEventListener("mouseover", () => {
  hoverOver.classList.add("hover");
  console.dir(hoverOver);
});

// Question 5

const hoverOut = document.querySelector("[data-animal='dog']");

hoverOut.addEventListener("mouseout", () => {
  hoverOut.classList.remove("hover");
  console.dir(hoverOut);
});

// Question 6

const listOfThings = document.querySelectorAll("li");

for (let i = 0; i < listOfThings.length; i++) {
  listOfThings[i].addEventListener("mouseover", logAtri);
}

function logAtri(event) {
  console.log(event.target.dataset);
}

// Question 7

const animal = "Trond";

switch (animal) {
  case "cat":
    console.log("Meow");
    break;
  case "cow":
    console.log("Moo");
    break;
  case "bird":
    console.log("Tweet");
    break;

  default:
    console.log("Harrumph");
}

// Question 8

const sheep = ["Malcolm", "Anders", "Marie"];

sheep.forEach(function(sheeps) {
  console.log(sheeps);
});

// Question 9

function sayHello() {
  console.dir("Hello");

  if (counter === 5) {
    clearInterval(intervalId);
  }

  counter++;
}

let counter = 0;

const intervalId = setInterval(sayHello, 500);

// Question 10

const updateText = document.querySelector(".container");

function updateDiv() {
  updateText.innerHTML = "Text updated";
}

setTimeout(updateDiv, 2000);
