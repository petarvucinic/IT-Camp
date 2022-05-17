// let count = 7

// function foo() {
//   let count = 0;
//   console.log(count);
// }

// foo();
// console.log(count)

// function outerFunc() {
//     let outerVar = "I am outside"
//     function innerFunc() {
//         console.log(outerVar)
//     }

//     innerFunc()
// }

// outerFunc()

// --------------

// const myGlobal = 0;

// function func() {
//   const myVar = 1;
//   console.log(myGlobal);
//   function innerofFunc() {
//     const myInnerVar = 2;
//     console.log(myVar, myGlobal);
//     function innerOfInnerOfFunc() {
//       console.log(myInnerVar, myVar, myGlobal);
//     }
//     innerOfInnerOfFunc();
//   }
//   innerofFunc();
// }
// func();

// ---------------------------

// function outerFunc() {
//   let outerVar = "I am outside";
//   function innerFunc() {
//     console.log(outerVar);
//   }
//   return innerFunc;
// }

// function execute() {
//   const myInnerFunc = outerFunc();
//   myInnerFunc();
// }

// execute();

// --------------------------------

// var count = 1;
// const func = () => {
//     console.log(count)

// }

// func()
// console.log(count)

// ------------------------------------

// const displayValue = (value) => {
//   console.log(value);
// };

// const calculator = (a, b, func) => {
//   value = a + b;
//   //   return value
//   func(value);
// };

// calculator(2, 4, displayValue);

// // displayValue(calculator(2, 5))


// --------------------------

// const displayValue = (value) => {
//   console.log(value);
// };

// const func = () => {}

// setTimeout(() => {
//     displayValue("something")
// }, 3000)

// // setTimeout(displayValue, 3000)

// console.log("123456789")


// ----------------------------------



function displayValue(value){
    for(let i = 0; i < 24; i ++){
        for(let j = 0; j < 60; j++){
            console.log(`${i}:${j}`)
        }
    }
}

setInterval(() => {
    displayValue(`${1}`)
}, 5000)























