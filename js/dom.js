// document.title = "dommm"

// const headers = document.getElementsByTagName('h2')

// const list = document.getElementsByClassName("item")


// const headers = document.querySelector('h2')
// const headers = document.querySelectorAll('h2')

// const list = doucment.querySelector(".item")
// const list = doucment.querySelectorAll(".item")



// const list2 = document.querySelector("h2.item")
// const list3 = document.querySelector("#item a")

// qs for, foreach
// gb for, cannot foreach


// const collectionItems = document.getElementsByClassName("item")
// const todolist =  document.getElementById("list")
// const newItem = document.createElement("li")



// newItem.classList.add("item")
// newItem.innerText = "item 4"

// todolist.appendChild(newItem)

// *****

// ne updetuje se,kao statik,big diff, 
// when it assigm, doesnt update, when u use query
// insted use getelmby
// nodelists dont update themselfs
// but collections does

// ******

// ispravka


// const collectionItems = document.querySelectorAll(".item")
const todolist = document.querySelector("#list")
const items = todolist.children
const todonumber = document.querySelector("#todnmbr")

const newItem = document.createElement("li")
newItem.innerText = "Item 5"
newItem.classList.add("item")

const anotherItem = document.createElement("li")
anotherItem.innerText = "Item 6"
anotherItem.classList.add("item")


todolist.appendChild(newItem)
todolist.appendChild(anotherItem)


todonumber.innerText = items.length
