
// const arr = [1, 2, 3, 4]

// const arr2 = arr.map(el => el ** 2)

// console.log(arr2)



// 


// arr = [1, 2, 3, 4]

// res = arr.reduce((pv, cv) => pv+cv, 10)

// console.log(res)



// 



// sum = [{x:1}, {x:2}, {x:3}]

// res = sum.reduce((pv, cv) => pv + cv.x, 0)

// console.log(res)



// 



const friends = [
  {
    name: "Anna",
    books: ["Bible", "Harry Potter"],
    age: 21,
  },
  {
    name: "Bob",
    books: ["War and peace", "Romeo and JUliet"],
    age: 21,
  },
  {
    name: "Alice",
    books: ["The lord of the rings", "The shinig"],
    age: 21,
  },
];


int = ["Alphabet"]
res = friends.reduce((pv, cv) => {return [... pv, ...cv.books]}, int)

console.log(res)


// 







