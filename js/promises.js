// obecanje da ce se posao izvrsiti

// myProm = new Promise((res, rej) => {
//   done = false;
//   for (let i = 0; i < 90000; i++) {}
//   if (done) {
//     res(["Burger", "pomfrit"]);
//   } else {
//     rej(new Error("Nema sastojaka"));
//   }
// });

// myProm
//   .then((value) => {
//     console.log("jedem hranu", value);
//   })
//   .catch((err) => {
//     console.log("izlazim iz lokala", err.message);
//   });

// -------------------

// const promise = new Promise((resolve, reject) => {
//     let a = 4
//     if (a === 9){
//         resolve("success")
//     } else {
//         reject("rejected")
//     }
// })

// promise
//     .then((message) => console.log("This is in then block " + message))
//     .catch((message) => console.log("This is in catch block " + message))

// ----------------------------

// const promise1 = new Promise((resolve) => resolve("Promise 1"));
// const promise2 = new Promise((resolve) => resolve("Promise 2"));
// const promise3 = new Promise((resolve) => resolve("Promise 3"));

// // Promise.all([promise1, promise2, promise3]).then((message) => console.log(message))
// Promise.race(
//   [promise1, promise2, promise3]
//   .then((message) => console.log(message))
// );

// ----------------------------------------

// function resolve(value, ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(value), ms)
//     })
// }

// function reject(reason, ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => reject(reason), ms)
//     })
// }

// Promise.race([
//     reject(new Error("bad error!"), 2000),
//     resolve(2, 1000),
//     resolve(1222222, 2000),
// ])
//     .then((value) => console.log("this is Then block ", value))
//     .catch((value) => console.log("this is catch block ", value))

// --------------------------------------------

const sayHello = async () => {
  console.log("hello!");
};

const greeting = async () => {
  await sayHello();
  console.log("How are you?");
};
greeting();


// ----------------------------------