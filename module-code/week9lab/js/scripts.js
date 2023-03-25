// DOM ELEMENTS ////////////////
const button = document.querySelector("a");

// VARIABLES ////////////////
const animals = ["dog", "elephant", "cat", "mouse", "lion", "seal"];
const colours = new Array("red", "blue", "yellow", "green", "white");

// FUNCTIONS ////////////////
const checkArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 5) {
      alert(array[i] + "!");
    }
  }
};

const printRandomMessage = () => {
  var animlasItem = Math.floor(Math.random() * animals.length);
  var coloursItem = Math.floor(Math.random() * colours.length);
  alert("The " + animals[animlasItem] + " is " + colours[coloursItem]);
};

// LOGIC ////////////////
button.onclick = () => {
  printRandomMessage();
  //   checkArray(animals);
};
