"use strict";

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#acd600";
  p.style.fontSize = "50px";
}

// #1. Using the debugger tool to find the problem with a code base

// #02. Regular
console.log("Hello");

// #03. Interpolated
console.log("Hello, I am a %s string!", "💩");

// #04. Styled (used to add styles frm CSS shorthand)
console.log("%c I am some big text", "font-size:30px; background-color:aqua; ");

// #05. warning
console.warn("OHH.. NOO");

// #06. error (throw an error to the console)
console.error("SHIT!");

// #07. info
console.info("Nigerian passports takes Nigerians to fewer countries");

// #08. assert (returns nothing if true, and the result if false)
console.assert(1 === 2, "That is wrong");
const p = document.querySelector("p");
console.assert(
  p.classList.contains("paragraph"),
  "You did not select the right element"
);

// #09. clearing (clears the console)
console.clear();

// #10. Viewing dom elements (opens up the dom attributes, key elements, data set, styles, etc)
console.log(p);
console.dir(p);
console.clear();

// #11. grouping together (groups a large amount of data)
const dogs = [
  { name: "Snickers", age: 3 },
  { name: "Bounty", age: 6 },
];

dogs.forEach((dog) => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd();
});

// #12. counting (counts the number of times a specific word, number, object or DOM, anything is being used)
console.count("Makis");
console.count("Sandra");
console.count("Makis");
console.count("Sandra");
console.count("Makis");
console.count("Makis");
console.count("Sandra");
console.count("Makis");

// #13. timing (to see how long something lasts)
console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

// #14. Tabling
console.table(dogs);
