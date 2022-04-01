// arr = [1, 2, 3, 4, 65, 22, 76, 4465, 98];

// for(let i = 0; i < arr.length; i++){
//     if(i % 2 === 0){
//         console.log(`${arr[i]} is even`)
//     } else {
//         console.log(`${arr[i]} is odd`)
//     }
// }

// ------------------------------

// arr = [1, 2, 3, 4, 65, 22, 76, 4465, 98];

// console.log(arr.sort(function(a, b){return a - b}))

// ---------------------

// const arr = [34, -345, -1, 100];
// mini = 0

// const smallest = (arr) => {

//     for(let i = 0; i < arr.length; i++){
//         if(i === 0){
//             mini = arr[0]
//         } else {
//             if(mini > arr[i]){
//                 mini = arr[i]
//             }
//         }
//     }
//     return mini
// }

// console.log(smallest(arr))

// ---------------------------------

// const niz = [
//   [1, 3, 6],
//   [4, 9, 1],
//   [4, 1, 9],
// ];

// for (let i = 0; i < niz.length; i++) {
//   for (let j = 0; j < niz.length; j++) {
//     if (i === j) {
//       niz[i][j] = 0;
//     }
//   }
// }

// ----------------------------------------

// const niz = [
//   [1, 3, 6],
//   [4, 9, 1],
//   [4, 1, 9],
// ];

// for(let i = 0; i < niz.length; i++){
//     niz[i][niz.length - 1 - i] = 0
// }

// console.log(niz)

// --------------------------------------------------



// const niz = [
//   [1, 0, 0],
//   [0, 1, 0],
//   [0, 0, 1],
// ];

// const pr = (niz) => {
//   for (let i = 0; i < niz.length; i++) {
//     for (let j = 0; j < niz.length; j++) {
//       if ((i === j && niz[i][j] !== 1) || (i !== j && niz[i][j] !== 0)) {
//         return false;
//       }
//     }
//   }
//   return true;
// };

// console.log(pr(niz))



// ------------------------------------------------



// function spl(arr){
//   even = []
//   odd = []
//   for(let x of arr){
//     if(! even.includes(x) || odd.includes(x)){
//       if (x % 2 == 0){
//         even.push(x)
//       } else {
//         odd.push(odd)
//       }
//     }
//   }
// }


// console.log(spl([2, 3, 7, 6, 2, 4, 9]))




// ---------------------



const mix = (ar1, ar2) => {
  res = []
  for(let i = 0; i < ar1.length + ar2.length; i++){
    if(ar1[i] !== undefined){
      res.push(ar1[i])
    }
    if(ar2[i] !== undefined){
      res.push(ar2[i])
    }
  }
  return res
}


niz = ["a", "b", "c"];
niz2 = [1, 3, 4, 5];
console.log(mix(niz, niz2));














