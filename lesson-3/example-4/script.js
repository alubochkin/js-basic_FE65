const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  console.log(event);

  document.querySelector(".info").innerHTML = `
        <p>${event.type} </p>
        <hr/>
        <p>Координаты: ${event.clientX} : ${event.clientY}</p>
        <hr/>
        <p>${JSON.stringify(event, null, "\t")}</p>
    `;
});

button.addEventListener("click", function (event) {
  console.log(this);
  console.log(event.currentTarget);

  console.log(event.currentEvent === this);
});
