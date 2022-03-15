const createElement = (tagName, options = {}) => {
  return Object.assign(document.createElement(tagName), options);
};

const container = document.querySelector(".container");

const buttons = [
  { id: "click", eventName: "click", textContent: "click", className: "btn" },
  {
    id: "contextmenu",
    eventName: "contextmenu",
    textContent: "contextmenu",
    className: "btn",
  },
  {
    id: "mouseover",
    eventName: "mouseover",
    textContent: "mouseover",
    className: "btn",
  },
  {
    id: "mouseout",
    eventName: "mouseout",
    textContent: "mouseout",
    className: "btn",
  },
  {
    id: "mousedown",
    eventName: "mousedown",
    textContent: "mousedown",
    className: "btn",
  },
  {
    id: "mouseup",
    eventName: "mouseup",
    textContent: "mouseup",
    className: "btn",
  },
  {
    id: "mousemove",
    eventName: "mousemove",
    textContent: "mousemove",
    className: "btn",
  },
];

container.append(createElement("h2", { textContent: "buttons" }));

// buttons

buttons.forEach(({ eventName, ...options }) => {
  const button = createElement("button", {
    ...options,
    [`on${eventName}`]: (event) => {
      console.log(eventName);
      console.log(event);
    },
  });

  container.append(button);
});

container.append(createElement("hr"));

// keyboards

const keyboards = [
  { id: "keyup", eventName: "keyup", className: "input", placeholder: "keyup" },
  {
    id: "keydown",
    eventName: "keydown",
    className: "input",
    placeholder: "keydown",
  },
];

container.append(createElement("h2", { textContent: "keyboards" }));

keyboards.forEach(({ eventName, ...options }) => {
  const label = createElement("label", {
    textContent: `for ${eventName}`,
  });

  const input = createElement("input", {
    ...options,
    [`on${eventName}`]: (event) => {
      console.log(eventName);
      console.log(event);
    },
  });

  label.append(input);
  container.append(label);
});

container.append(createElement("hr"));

// inputs

const inputs = [
  { id: "input", placeholder: "input", className: "input", eventName: "input" },
  {
    id: "change",
    placeholder: "change",
    className: "input",
    eventName: "change",
  },
];

container.append(createElement("h2", { textContent: "inputs" }));

inputs.forEach(({ eventName, ...options }) => {
  const label = createElement("label", {
    textContent: `for ${eventName}`,
  });

  const input = createElement("input", {
    ...options,
    [`on${eventName}`]: (event) => {
      console.log(eventName);
      console.log(event);
    },
  });

  label.append(input);
  container.append(label);
});
