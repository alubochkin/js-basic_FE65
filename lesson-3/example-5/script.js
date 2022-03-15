// ВСПЛЫТИЕ

// const div = document.querySelector("div");
// const section = document.querySelector("section");
// const button = document.querySelector("button");

// [div, section, button].forEach((element) => {
//   element.addEventListener("click", (event) => {
//     console.log(`currentTarget: ${event.currentTarget.tagName}`);
//   });
// });

// --------------------------------------------------------

// ПОГРУЖЕНИЕ

// const div = document.querySelector("div");
// const section = document.querySelector("section");
// const button = document.querySelector("button");

// [div, section, button].forEach((element) => {
//   element.addEventListener(
//     "click",
//     (event) => {
//       console.log(`currentTarget: ${event.currentTarget.tagName}`);
//     },
//     true
//   );
// });

// --------------------------------------------------------

// event.target

// document.addEventListener("click", (event) => {
//   console.log(`event.target: ${event.target.tagName()}`);
// });

// --------------------------------------------------------

//event.stopPropagation()

// const div = document.querySelector("div");
// const section = document.querySelector("section");
// const button = document.querySelector("button");

// [div, section, button].forEach((element) => {
//   element.addEventListener("click", (event) => {
//     event.stopPropagation();

//     console.log(`currentTarget: ${event.currentTarget.tagName}`);
//   });
// });

// --------------------------------------------------------

//event.stopPropagation()

// const div = document.querySelector("div");
// const section = document.querySelector("section");
// const button = document.querySelector("button");

// [div, section, button].forEach((element) => {
//   element.addEventListener("click", (event) => {
//     event.stopPropagation();
//     console.log(`currentTarget: ${event.currentTarget.tagName} - 1`);
//   });

//   element.addEventListener("click", (event) => {
//     event.stopImmediatePropagation();
//     console.log(`currentTarget: ${event.currentTarget.tagName} - 2`);
//   });

//   // этот обработчик никогда не выполнится
//   element.addEventListener("click", (event) => {
//     event.stopPropagation();
//     console.log(`currentTarget: ${event.currentTarget.tagName} - 3`);
//   });
// });
