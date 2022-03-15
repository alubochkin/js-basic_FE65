const button = document.getElementById("btn");

button.onclick = () => {
  console.log("first click");
};

button.onclick = () => {
  console.log("second click");
};

// ---------------------------

const button2 = document.getElementById("btn2");

const showInfo = () => {
  console.log("first click");
};

button2.addEventListener("click", showInfo);
button2.addEventListener("click", () => {
  console.log("second click");
});
