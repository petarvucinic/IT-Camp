// // console.log("objekti")

// // let person = "ajsa"

// const person = {
//     name: "pero",
//     lastname: "vucinic",
//     age: 17,
//     arr : [
//         1, 2, 3, 4
//     ],
//     fullName : function(){
//         return this.name + this.lastname
//     }
// }

// console.log(person.name)
// console.log(person["name"])

// console.log(person.fullName(person.name, person.lastname))
// console.log(person.fullName("Fatih", "l"))
// console.log(person.fullName())

// person.heigth = 170
// person.age = 20

// console.log(person)

// konstruktor
// let obj = new Object()

// obj.a  = "A"
// obj.b  = "b"

// console.log(obj)

// const person = {
//     name: "pero",
//     lastname: "vucinic",
//     age: 17,
//     arr : [
//         1, 2, 3, 4
//     ],
//     fullName : function(){
//         return this.name + this.lastname
//     }
// }

// for(let i in person){
//     console.log(i, person[i])
// }

// ----

// const person = {
//     name: "pero",
//     lastname: "vucinic",
//     age: 17,
//     arr : [
//         1, 2, 3, 4
//     ],
//     fullName : function(){
//         return this.name + this.lastname
//     },
//     tr : 2022,
//     godr : function(){
//         return `vasa godina rodjenja je ${this.tr - this.age}`
//     }
// }

// console.log(person.godr())

// for(let i in person){
//     if(person[i] === person.age && person.age > 18){
//         console.log("punoletni")

//     } else if (person[i] === person.age && person.age < 18){
//         console.log("niste punoletni")
//     }
// }

// -------------------------

// var a = {
//   a: "a",
//   b: "b",
// };

// let c = {...a}
// c.a = "asuh"
// console.log(a)
// console.log(c)

// let {a, b} = aB/

// -------

// 5 > 4 ? console.log("Aaa") : console.log("bbb")

// -------------

// var student = {
//     name : "David Rayy",
//     scale : "VI",
//     rollnp : 12

// }

// duz = 0
// for(let i in student){
//     duz += 1
// }

// console.log(`duzina niza je ${duz}`)

// ----------

// var library = [
//   {
//     author: "Bill Gates",
//     title: "The Road Ahead",
//     readingStatus: true,
//   },
//   {
//     author: "Steve Jobs",
//     title: "Walter Isaacson",
//     readingStatus: true,
//   },
//   {
//     author: "Suzanne Collins",
//     title: "Mockingjay: The Final Book of The Hunger Games",
//     readingStatus: false,
//   },
// ];

// for (var i = 0; i < library.length; i++) {
//   var book = "'" + library[i].title + "'" + " by " + library[i].author + ".";
//   if (library[i].readingStatus) {
//     console.log("Already read " + book);
//   } else {
//     console.log("You still need to read " + book);
//   }
// }

// ----------------------------------------------

var library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

library.sort(function(a, b){return b.libraryID - a.libraryID})
console.log(library)