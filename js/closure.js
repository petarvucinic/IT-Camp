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

const myGlobal = 0;

function func() {
  const myVar = 1;
  console.log(myGlobal);
  function innerofFunc() {
    const myInnerVar = 2;
    console.log(myVar, myGlobal);
    function innerOfInnerOfFunc() {
      console.log(myInnerVar, myVar, myGlobal);
    }
    innerOfInnerOfFunc();
  }
  innerofFunc();
}
func();


// ---------------------------