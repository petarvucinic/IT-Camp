

// console.log("Start");

// function loginUser(email, password, callback) {
//   setTimeout(() => {
//     callback({ userEmail: email });
//   }, 1000);
// }

// function getUserVideos(email, callback) {
//   setTimeout(() => {
//     callback(["video1", "video2", "video3"]);
//   }, 1000);
// }

// function videoDetails(video, callback) {
//   setTimeout(() => {
//     callback("title of the video");
//   }, 1000);
// }
// const user = loginUser("cduc@gmail.com", 123, (user) => {
//   console.log(user);
//   getUserVideos(user.userEmail, (videos) => {
//     console.log(videos);
//     videoDetails(videos[0], (title) => {
//       console.log(title);
//     });
//   });
// });

// console.log("Finish");
//----------------------------------------------------------------------------------------------------------------------
// Language: javascript promises



// console.log("Start");

// function loginUser(email, password) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("now we have the data");
//       resolve({ userEmail: email });
//     }, 1000);
//   });
// }

// function getUserVideos(email) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(["video1", "video2", "video3"]);
//     }, 1000);
//   });
// }

// function videoDetails(video) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("title of the video");
//     }, 1500);
//   });
// }

// loginUser("Ed", "bumba")
//   .then((user) => console.log(user))
//   .then((videos) => videoDetails(videos[0]))
//   .then((detail) => console.log(detail));

// // const user = loginUser("cduc@gmail.com", 123, (user) => {
// //   console.log(user);
// //   getUserVideos(user.userEmail, (videos) => {
// //     console.log(videos);
// //     videoDetails(videos[0], (title) => {
// //       console.log(title);
// //     });
// //   });
// // });

// console.log("Finish");

// // --------------------------------------------

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("got the user");
//     // resolve({ user: "ed" });
//     reject(new Error("User not logged in"));
//   }, 1000);
// });

// promise
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((err) => console.log(err.message));

// // --------------------------------------------




// const prom1 = new Promise((res) => res("promise 1"))
// const prom2 = new Promise((res, rej) => rej("promise 2"))
// const prom3 = new Promise((res) => res("promise 3"))


// Promise.all([prom1, prom2, prom3]).then((mes) => console.log(mes))
//                         .catch((er) => console.log)


// --------------------------


// console.log("h1")
// console.log("h2")

// function myFun(a, b){
//   console.log(a+b)
// }

// myFun(10, 9)
// console.log('h13')


// ---------------------------










