

class Person {
    constructor(name, lastname, age, method1){
        this.name = name;
        this.lastname = lastname;
        this.age = age;
        this.method1 = method1
    }
    birthYear = () => {return 2022 - this.age}
    static test(){
        return "hello"
    }
}


let pers1 = new Person("Pero", "Vuc", 17, ()=>{return "132456789"})

// let pers2 = new Person("Ajsa", "Bes", 17)
console.log(pers1)
console.log(pers1.birthYear())
console.log(Person.test())
// console.log(pers2)















