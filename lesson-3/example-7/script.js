const form = document.getElementById("form");
const title = document.getElementById("title");
const description = document.getElementById("description");

const paragraph = document.querySelector("p");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!title.value.length || !description.value.length) {
    paragraph.textContent = "Заполни оба поля";
    return;
  }

  paragraph.innerHTML = `
    <strong>Название: ${title.value}</strong>
    <br/>
    <i>Описание: ${description.value}</i>
  `;
});
