// const arr = [1, 4, 9, 16]

// const arr2 = arr.map(el => el**2)

// console.log(arr2)

// -------------------

// function cap(arr){
//     res = arr.map(el => el = el.replace(el[0], el[0].toUpperCase()))
//     // res = arr.map(el => el = el.replace(el[], el[0].toLowerCase()))
//     console.log(res)

// }

// cap(["hff", "vugdv", "ud8uhx", "vDDv"])

// -----------------------------------

// const arr = [1, 2, 3, 4]

// const sum = arr.reduce((prev, curr) => prev + curr)

// console.log(sum)

// ----------------

// sum = [{x:1}, {x:2}, {x:3}]
// int = 0
// res = sum.reduce((pv, cv) => pv + cv.x, int)

// console.log(res)

// -----------------------------

// arr = [[0, 1], [2, 3], [4, 5]]
// int = []
// res = arr.reduce((pv, cv) =>  pv.concat(cv), [])

// console.log(res)

// ---------------------------------

// const friends = [
//   {
//     name: "Anna",
//     books: ["Bible", "Harry Potter"],
//     age: 21,
//   },
//   {
//     name: "Bob",
//     books: ["War and peace", "Romeo and JUliet"],
//     age: 21,
//   },
//   {
//     name: "Alice",
//     books: ["The lord of the rings", "The shinig"],
//     age: 21,
//   },
// ];

// int = ["Alphabet"]

// // res = friends.reduce((pv, cv) => pv.concat(cv.books), int)
// // res = friends.reduce((pv, cv)=> {return [...pv, ...cv.books]}, int)

// // console.log(res)

// izolacija
// const obj = {
//     name : 'asja'
// }
// const {name} = obj;
// console.log(name)

// --------------------

// const myArray = ["a", "a", "b", "b", "c", "c", "b", "b", "d", "d", "d"];

// const arr = myArray.reduce((pv, cv) => {
//   if (!pv.includes(cv)) {
//     return pv.concat(cv);
//   } else {
//     return pv;
//   }
// }, []);

// console.log(arr);

// ---------------------------

// const words = ['spray', 'limit', 'exuberant', 'destruciton', 'abc']

// let filtered = [12, 5, 8, 130, 44].filter(el => el > 9)
// console.log(filtered)

// --------------------

const arr = [-3, -2, -1, 0, 1, 2, 3, 4, 7, 8, 9, 10, 11, 12, 13];

function prime(el) {
  for (let i = 2; i < el; i++) {
    if (el % i == 0) {
      return false;
    }
  }
  if (el > 0) return true;
}
const res = arr.filter((el) => {
  return prime(el);
});
console.log(res);
