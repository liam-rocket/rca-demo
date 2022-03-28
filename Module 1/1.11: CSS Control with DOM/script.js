const button = document.querySelector("#change");

const allDivs = document.querySelector(".class1");

let counter = 0;

button.addEventListener("click", () => {
  const header = document.querySelector("#header");

  if (counter % 6 === 0) {
    header.classList.add("big");
  } else {
    header.classList.remove("big");
  }

  if (counter % 4 === 0) {
    header.classList.add("red-text");
  } else {
    header.classList.remove("red-text");
  }

  console.log(counter);
  counter += 1;
});
