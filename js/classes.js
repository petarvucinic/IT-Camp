// class Person {
//     constructor(name, lastname, age, method1){
//         this.name = name;
//         this.lastname = lastname;
//         this.age = age;
//         this.method1 = method1
//     }
//     birthYear = () => {return 2022 - this.age}
//     static test(){
//         return "hello"
//     }
// }

// let pers1 = new Person("Pero", "Vuc", 17, ()=>{return "132456789"})

// // let pers2 = new Person("Ajsa", "Bes", 17)
// console.log(pers1)
// console.log(pers1.birthYear())
// console.log(Person.test())
// // console.log(pers2)

// // console.log(Person.birthYear(pers1))

// ------------------------------

class Car {
  constructor(brand) {
    this.carname = brand;
  }

  present() {
    return "i have a" + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }

  show() {
      return this.present() + "it is a " + this.model
  }
}

let myCar = new Model("Ford", ":Mustang")
console.log(myCar)