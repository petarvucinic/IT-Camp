const button = document.querySelector("#submit");
const todoList = document.querySelector("#todo-list");
const items = todoList.children;
const todoNr = document.querySelector(".todo-nr b");
const mainTitle = document.querySelector(".main-title");


// click, scroll, resizing the browser

// attach a event listener

// button.addEventListener("click", function () {
// //   console.log("NEW ITEM ADDED");
//     const newItem = document.createElement('li');
//     newItem.classList.add('item');
//     newItem.innerText = `Item ${items.length + 1}`;
//     todoList.appendChild(newItem);
//     todoNr.innerText = items.length;

// });

// console.log(items.length)

// button.addEventListener("click", function () {
//   mainTitle.style.color = "red";
//   mainTitle.style.fontSize = "50px";
// });

// mouseover, click, keydown
button.addEventListener("keydown", function(event){
  // mainTitle.classList.add("color")
  // console.log(event)
  // mainTitle.classList.toggle("color")

  if(event.keyCode === 81){
    mainTitle.classList.toggle("color")
  }
}) 


















