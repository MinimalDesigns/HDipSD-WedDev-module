// DOM ELEMENTS ////////////////
const select = document.getElementById("pets");
const divs = document.querySelectorAll(".hidden");

// FUNCTONS ////////////////
const displayChoise = () => {
  let choice = select.value;
  if (choice === "") {
    divs.forEach((div) => {
      !div.classList.contains("hidden") ? div.classList.add("hidden") : null;
    });
    document.getElementById("wrong").classList.remove("hidden");
  } else if (choice === "cats") {
    divs.forEach((div) => {
      !div.classList.contains("hidden") ? div.classList.add("hidden") : null;
    });
    document.getElementById("cat").classList.remove("hidden");
  } else if (choice === "dogs") {
    divs.forEach((div) => {
      !div.classList.contains("hidden") ? div.classList.add("hidden") : null;
    });
    document.getElementById("dog").classList.remove("hidden");
  } else if (choice === "spiders") {
    divs.forEach((div) => {
      !div.classList.contains("hidden") ? div.classList.add("hidden") : null;
    });
    document.getElementById("spider").classList.remove("hidden");
  } else if (choice === "snakes") {
    divs.forEach((div) => {
      !div.classList.contains("hidden") ? div.classList.add("hidden") : null;
    });
    document.getElementById("snake").classList.remove("hidden");
  }
};

// LOGIC ////////////////
select.onchange = () => {
  displayChoise();
};
