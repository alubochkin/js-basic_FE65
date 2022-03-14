const paragraph = document.querySelector("p.text");
const actions = document.getElementById("actions");

actions.addEventListener("click", (event) => {
  if (event.target.classList.contains("show-lower")) {
    paragraph.textContent = event.target.textContent;
  }

  if (event.target.classList.contains("show-upper")) {
    paragraph.textContent = event.target.textContent;
  }

  if (event.target.classList.contains("show-capitalize")) {
    paragraph.textContent = event.target.textContent;
  }
});
