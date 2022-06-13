// obecanje da ce se posao izvrsiti

// const { reject } = require("async")

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

// const sayHello = async () => {
//   console.log("hello!");
// };

// const greeting = async () => {
//   await sayHello();
//   console.log("How are you?");
// };
// greeting();

// ----------------------------------

// const prvaF = () => {
//   return new Promise((resolve, reject) => {
//     a = ""
//     for(i = 0; i < 100000; i++){ a === false ? pom = true : pom = false }
//     if(pom) resolve("uspesno");
//     else reject("nesupeh")
//   })
// }

// prvaF()
//       .then((message) => console.log("evo ga" + message))
//       .catch((message) => console.log("ipak ne"))

// +---------------------------------------

// console.log("start");

// function loginUser(email, password, callback) {
//   setTimeout(() => {
//     callback({ userEmail: email });
//   }, 1500);
// }

// function getUserVideos(email, callback) {
//   setTimeout(() => {
//     callback(["video1", "video2", "video3"]);
//   }, 1500);
// }

// function videoDetails(video, callback) {
//   setTimeout(() => {
//     callback("title of the video")
//   }, 1500)
// }

// const user = loginUser("pero@gmail.com", "1223", (user) => {
//   console.log(user)
//   getUserVideos(user.userEmail, (videos) => {
//     console.log(videos)
//     videoDetails(videos[0], (title) => {
//       console.log(title)
//     })
//   })
// })


// --------------------------------


// console.log("Pocinjemo")


// const prvaF = (ime, prezime, skola, razred, callback) => {
//   setTimeout(() => {
//     callback({ime : ime,
//               prezime : prezime,
//               skola : skola,
//               razred : razred })
//   }, 1110)
// }

// const drugaF = (ime, prezime, callback) => {
//   setTimeout(() => {
//     callback(["Mat, srp, nemacki"])
//   }, 1500)
// }

// const ja = prvaF("Petar", "Vucinic", "Gimnazija", 3, (ja) => {
//   console.log(ja)
//   drugaF(ja.ime, ja.prezime, (predmeti) => {
//     console.log(predmeti)
//   })
// })


// console.log("Zavrsili smo")



// -------------------------------


