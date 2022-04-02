/*
// za ispis 
console.log("hello world");

neka_promenljiva = 10;


// dek
// global scope
var promenljiva;

// def
promenljiva = 10;

// local scope
let promenljiva2 = 10;

const promenljiva3;
promenljiva3 = 5

var bool 
// undefined

//  ==(vrednosti) i ===(tip)
// != i !==
*/

// ===========================================================================

// FARH U CELZ

// let cel;
// let fah;
// fah = 45;

// cel = (fah - 32)*5/9;
// console.log(cel + "°C");

// ============================================================================

// if (true) {
//     console.log("bla ")
// } else if () {
//     console.log("bla bla")
// } else {
//     console.log("bla bla bla")
// }

// ==========================================================================

// var broj = 32;

// if(broj > 0) {
//     console.log("pozitivan")
// } else if (broj < 0) {
//     console.log("negativan")
// }
// else {
//     console.log("broj je nula")
// }

// ===========================================================================

// var broj1 = 3;

// if(broj1%3==0 && broj1%5==0){
//     console.log("fizzbuzz");
// } else if(broj1%3==0){
//     console.log("fizz");
// } else if(broj1%5==0) {
//     console.log("buzz")
// }
// else {
//     console.log(broj1);
// }

// =============================================================================

// var broj1 = 5;

// if(broj1%2==0){
//     console.log("paran je");
// } else {
//     console.log("nije paran");
// }

// -----------------------------------------------------------------------------

// var broj1 = 15;
// var broj2 = 40;

// if(broj1 == 50 || broj2 == 50){
//     console.log("true");
// } else if (broj1 + broj2 >= 50) {
//     console.log("true");
// } else {
//     console.log("false");
// }

// ==============================================================================

// var num = 1500;

// if(num >= 100 && num <=200){
//     console.log("nalazi se izmedju 100 i 200");
// } else {
//     console.log("ne nalazi se izmedju 100 i 200");
// }

// ==============================================================================

// var godina = 2000;

// if(godina %400==0){
//     console.log("prestupna je");
// }
// else {
//     console.log("nije prestupna");
// }

// -------------------------------------------------------------------------------

// var num1 = 2;
// var num2 = 3;
// var num3 = 4;
// var num4 = 1;
// var num5 = 0;

// if(num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
//     console.log("prvi br=", num1);
// } else if(num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5){
//     console.log("drugi br=", num2);
// } else if(num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5){
//     console.log("treci br=", num3);
// } else if(num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5){
//     console.log("cetvrti br=", num4);
// } else {
//     console.log("peti br=", num5);
// }

// ============================================================================

// let a = 5
// let b = 85
// if ( b > 90 || a>10)
// {
// console.log("Imas 100 poena")
// }
// else if( b >=75 && b <= 90 &&  a >= 5)
// {
//     console.log("Imas 90 poena")
// }
// else if(b>=50 && b<=75 && a>=2)
// {
//     console.log("Imas 75 poena")
// }
// else{
//     console.log("Imas 0 poena")
// }

// ====================================================================================================

// var a = 576;
// var b = 56;

// if(a>b){
//     console.log("a je vece")
// } else if(a<b){
//     console.log("b je vece")
// } else {
//     console.log("a jednako b")
// }

// =====================================================================================================

// let a = 5
// let b = 15
// if(a<2){
//     console.log(b)
// }
// else if (a<3)
// {
//     console.log (b+9)
// }
// else {
//     console.log (b+9+(a-2)*4)
// }

// ===================================================================================

// str = "Hello world"

// console.log(str.split(""))
// console.log(str[2])
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())
// console.log(str.length)
// console.log(typeof(str))
// console.log(str.slice(4,8))
// console.log(str + ' Hello')
// console.log(str.replace('Hello' , '1389'))

// undefined ne postoji ta vrednost
// null kad nzm pa stavimo mi
// NaN greska tipa 16/"dss"

// var arr = [1, 2, 3]
// console.log(arr[10])

// ===================================================================================

// unesite od 1.00 do 5.00
// var prosek = 2.54;

// if(prosek <= 5.00 && prosek >= 4.50){
//     console.log("odlican");
// }else if(prosek <= 4.49 && prosek >= 3.50){
//     console.log("vrlo dobar");
// }else if(prosek <= 3.50 && prosek >= 2.50){
//     console.log("dobar");
// }else if(prosek <= 2.5 && prosek >= 1.5){
//     console.log("dovoljan");
// }else if(prosek <=1.5 && prosek >=1.0){
//     console.log("nedovoljan")
// }else {
//     console.log("pogresan unos")
// }

// =============================================================================================

// var num = 241;

// num = num.toString()

// if(num.length == 1){
//     console.log("jednocifren")
// } else if(num.length == 2){
//     console.log("dvocifren")
// } else if(num.length == 3){
//     console.log("trocifren")
// } else {
//     console.log("visecifren")
// }

// ====================================================================================

// const a = 1
// const b = 2
// const c = 2
// const d = 3

// var k = 5;
// var x = 6;

// if(x > k){
//     console.log(a*x**3 - b*x**2 + c*x -d)
// }else if(x =  k){
//     console.log(0)
// }else if(x < k){
//     console.log(-a*x**3 - b*x**2 + c*x -d)
// }

// =======================================================================================

// var str1 = 552

// if(typeof(str1) == "string"){
//     console.log("string je")
// } else {
//     console.log("nije sting")
// }

//=============================================================================

// var slovo = "e"

// if(slovo == "a" || slovo == "e" || slovo == "o" || slovo == "i" || slovo == "u"){
//     console.log("samoglasnik je")
// } else {
//     console.log("suglasnik")
// }

// =======================================================================

// var mesec = 2

// if(mesec == 1){
//     console.log("januar")
// }else if(mesec == 2){
//     console.log("februar")
// }else if(mesec == 3){
//     console.log("mart")
// }else if(mesec == 4){
//     console.log("april")
// }else if(mesec == 5){
//     console.log("maj")
// }else if(mesec == 6){
//     console.log("jun")
// }else if(mesec == 7){
//     console.log("jul")
// }else if(mesec == 8){
//     console.log("avgust")
// }else if(mesec == 9){
//     console.log("septembar")
// }else if(mesec == 10){
//     console.log("oktobar")
// }else if(mesec == 11){
//     console.log("novembar")
// }else if(mesec == 12){
//     console.log("decembar")
// }else{
//     console.log("pogresan unos")
// }

// ============================================================================

// var broj = 379
// var broj2;
// broj2 = broj.toString();

// if(broj2[0]**3 + broj2[1]**3 + broj2[2]**3 == broj ){
//     console.log("armstrong je")
// } else {
//     console.log("nije armstrong")
// }

// =============================================================================

// var varijabla = ""

// if(varijabla === ""){
//     console.log("blank je")
// } else {
//     console.log("nije blank")
// }

// ============================================================================

// let varijabla = ""
// console.log(varijabla)
// // nista se ne ispisuje

// =============================================================================

// let var1 = 55
// let var2 = 4
// let var3 = 7

// if(var1 > var2 && var1 > var3){
//     console.log("najveci je " , var1)
// } else if(var2 > var1 && var2 > var3){
//     console.log("najveci je " , var2)
// } else {
//     console.log("najveci je " , var3)
// }

// ==============================================================================

// for(let i=0; i<5; i++){
//     console.log(i)
// }

// ==============================================================================

// suma = 0
// for(let i=0; i<=10; i++){
//     suma += i
// }

// console.log(suma)

// ==============================================================================

// for(let i=0; i<10; i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

// ==============================================================================

// var a = [5, 4, 6, 8]

// for(let i=0; i<a.length; i++ ){
//     console.log(a[i])
// }

// ==============================================================================

// a = 5;

// b = 5;

// c = a === b;

// console.log(c);

//

// var varr = ""

// console.log(typeof(""))

// ============================================================================

// Project euler 1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// var suma = 0
// for(let i=1; i<1000; i++){
//     if(i % 3 == 0 || i % 5 == 0){
//         suma = suma + i
//     }
// }
// console.log(suma)

// ===============================================================================

// Problem 4

// var maks = 0
// var x;
// var y;

// for(let i=100; i<1000; i++){
//     for(let j=100; j<100; j++){
//         x = String(i*j)
//         y = x.split("").reverse().join("")
//         if(x === y){
//             if(i*j > maks){
//                 maks = i*j
//             }
//         }
//     }
// }

// console.log(maks)

// ================================================================================================================

// Problem 9

// for(let a=1; a<=1000; a++){
//     for(let b=1; b<=1000; b++){
//         for(let c=1; c<=1000; c++){
//             if (a + b + c == 100 && a**2 + b**2 == c**2 && a < b && b < c){
//                 console.log(a*b*c)
//                 break
//             }
//         }
//     }
// }

// ===============================================================================================

// ternary operator

// broj1 = 10
// broj2 = 6

// broj1 > 5 ? console.log("broj je veci od 5") : console.log("broj nije veci od 5")

// ------------------------------------------

// var1 = 5
// var2 = 5

// var1 === var2 ? console.log("jednaki") : console.log("nisu jednaki")

// var1 = 5
// var2 = 5

// if(var1 === var2)
//     console.log("jednaki")
// else if (var1 > var2)
//     console.log("var1 veci od var2")
// else
//     console.log("var1 manji od var2")

// -----------------------------------------------------------

// for(let i=1; i<11;i++)
//     // console.log("lifting weigths repetition " + i)
//     console.log(`lifting weigths repetition ${}`)

// --------------------------------------------------------------

// str = "perooo"

// for(let i = 0; i < str.length; i++){
//     console.log(str[i])
// }

// ----------------------------------------------------------------

// suma = 0

// for(let i=1; i<=10; i++){
//     suma += i
// }

// console.log(suma)

// -----------------------------------------------------------------

// let br = 100

// suma = 0

// for(let n=0; n<=br; n++)
//     suma += n
// console.log(suma)

// ---------------------------------------------------------------------------

// let suma_neparnih = 0
// let suma_parnih = 0

// for(let i=0; i<=10; i++){
//     if(i%2==0)
//         suma_parnih += i
//     else
//         suma_neparnih += i

// }

// console.log(suma_parnih)
// console.log(suma_neparnih)

// ----------------------------------------------------------------------------

// let var1 = 17

// console.log(`ja imam ${var1}`)

// ---------------------------------------------------------------------------

// for(let i=1; i<=6; i++)
//     console.log(`Curent number ${i} and the cube is ${i**3}`)

// -----------------------------------------------------------

// continue and break

// for(let i = 1; i < 11; i++){
//     if(i%2!=0){
//         continue
//     }
//     else console.log(i)
// }

// --------------

// for(let i = 1; i <= 5; i++)
//     console.log(i * '*')

// for(let i=4; i>0; i--)
//     console.log(i + '*')

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

// for(let i = 1; i <= 5; i++){
//     if(i == 1)
//         console.log("*")
//     else if(i == 2)
//         console.log('**')
//     else if(i == 3)
//         console.log('***')
//     else if(i == 4)
//         console.log('****')
//     else if(i == 5)
//         console.log('*****')
// }

// for(let i = 5; i >= 1; i--){
//     if(i == 1)
//         console.log("*")
//     else if(i == 2)
//         console.log('**')
//     else if(i == 3)
//         console.log('***')
//     else if(i == 4)
//         console.log('****')
//     else if(i == 5)
//         console.log('*****')
// }

// -----------------------------------------------------------------

// objekti kao dict u python-u

// 1. nacin
// var Prvi_obj = {name: "Pero", prezime: 'Vucinic'}

// console.log(Prvi_obj)
// console.log(typeof(Prvi_obj))
//

// 2. naicn preko konstrukotra
// var Drugi_obj = new Object

// Drugi_obj.name = "Vucinic"
// Drugi_obj.prezime = "Pero"

// // console.log(Drugi_obj)

// var str2 = new String()
// // str2 = "pero"

// console.log(typeof(str2))
// console.log(str2)

// var str1 = 'pero'

// console.log(str2 === str1)

// var person = new Object();

// person.ime = "pero"

// person["prezime"] = "vuc"

// console.log(person)

// var ime = "pero"

// var prezime = "vuc"

// var persons = {ime, prezime}

// console.log(persons)

// // nacini
// var obj = {k1: v1, k2: v2}
// var obj2 = new Object()
// obj2.k1 = v1
// k1 = v1
// var obj3  = (k1, k2, kn)

// ispis vrednosti
// var obj = {ime: "pero", prezime: "vucinic"}

// console.log(obj["ime"])

// var objekat = {godine: 15, skola: "gimnazija"}

// for(var i in objekat){
//     console.log(i)
//     console.log(objekat[i])

// }

// // Date()
// var currentdate = new Date
// console.log(currentdate)

// function prvaf(ime, prezime){
//     console.log(ime + prezime)

// }

// prvaf("pero", " vuc")

// function zbir(var1, var2){
//     return var1 + var2
// }
// res = zbir(5, 4)
// console.log(res)

// DRUGI NACIN
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

// suma = ""
// for(let i = 1; i <= 5; i++){
//     suma += "*"
//     console.log(suma)
// }

// suma = "*****"
// for(let i = 5; i >= 1; i--){
//     suma -= '*'
//     console.log(suma)
// }

// -----------------------------------------------

// var veliki_broj = "95984964"
// let suma = 0

// for(let i = 0; i < veliki_broj.length; i++)
// {
//     console.log(veliki_broj[i])
//     suma += parseInt(veliki_broj[i])
// }

// console.log(suma)

// -------------------------------------------------------

// var obj = {""}

// console.log('91' - 1)

// console.log("****" - "*")

// najbolji

// var suma = ""
// for(let i = 1; i <= 5; i++){
//     suma += "*"
//     console.log(suma)
// }

// for(let i = 4; i >= 1; i--){
//     console.log(suma.slice(0, i))
// }

// *****

// ----------------------------------------------------------------------

// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 };

// for(var i in student){
//     console.log(i , "\t", student[i])
// }

// ---------------------------------------------------

// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 };

// delete student.rollno
// console.log(student)

// ----------------------------------------------------

// var student = {
//    name : "David Rayy",
//    sclass : "VI",
//    rollno : 12 };

// console.log(Object.keys(student))
// console.log(Object.values(student))

// -------------------------------------------

// var library = [
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games',
//         readingStatus: false
//     }];

// for(var i in library){
//     for(var j in library[i]){
//         if(j === "readingStatus"){
//             console.log(library[i][j])
//         }
//     }
// }

// -----------------------------------------------------------

// const pi = 3.14

// function Volumen(r, h){
//     return pi * r**2 * h
// }

// var V = Volumen(5, 2)
// console.log(V)

// --------------------------------------------------

// var arr1 = [1, 2, 3, 4]
// var arr2 = [5, 6, 7, 8]

// // promenili mso arr1
// arr1.push.apply(arr1, arr2)
// console.log(arr1)

// ARRAYS

//
//
// function petar() {
// console.log()
// }
//
// const petar = () => {
// console.log()
// }
//

// niz = [1,2,4,12, 33333, 3]

// console.log(niz.sort((a, b) => (a - b)))
//
// niz.push(6)
// niz.pop()
// niz.splice(2, 0, "novi", 'novi2222')
//
// console.log(niz)

// niz = [1, 2, 5, 4, 3]
// console.log(niz[niz.length - 1])
//

// const niz = new Array("volvo", "opel", "audi")

// // document.getElementById("demo").innerHTML = niz

// console.log(niz)

// methods

// dodavanje elementa

// niz = ["a", "b", "v", "c"]
// niz.push("f")
// console.log(niz)

// niz[niz.length] = "volvooooo"

// console.log(niz)

// ********************************************************************************

// ARR METHODS
// push, pop, sort, shift, unshift, splice, slice

// PUSH - dodaje el. na poslednjem mestu, return length niza
// POP - izbacuje poslednji element niza, return ime var koja je izbacena
// SORT - sortitra el. , paznja !!
// SHIFT - brise el. sa indexom 0
// UNSHIFT - dodaje el. na prvom mestu
// SPLICE - dodaje elemente na spec mestu, 1.param. mesto, 2.par. koliko el. da izbacimo
// SLICE = "slicuje" niz, i return niz

// *********************************************************************************

// const arr1 = [1 , 2, 65]
// a = arr1.pop()
// console.log(a)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let length = fruits.push("Kiwi");
// console.log(length)
// console.log(fruits)

// fruits.shift()

// console.log()
// console.log(fruits)

// fruits.unshift("lemon")

// console.log(fruits)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// // fruits[0] = "Kiwi"
// // console.log(fruits)

// // ostavlja hole, undefined
// delete fruits[0]

// fruits.unshift("nesto")
// console.log(fruits)

// const niz1 = [1, 2, 3, 4]
// const niz2 = [5, 6, 7, 8]
// const niz3 = niz1.concat(niz2)

// console.log(niz3)

// const arr = [1, 2, 3, 4, 5, 6]
// arr.splice(3, 2)
// console.log(arr)

// const niz = [1, 2, 5, 6]
// niz.splice(2, 0, 3, 4)
// console.log(niz)

// const arrr = ["volvo", "audi", "bmw"]
// const car = arrr.slice(0,1)
// arrr.slice(0,1)
// console.log(arrr)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.sort()
// console.log(fruits)
// fruits.reverse()
// console.log(fruits)

// SORT - po default sortira ih kao stringove

// const arr = [2, 1, 9, 8, 6, 15]

// // najm -> najv
// arr.sort(function(a, b){return a - b})
// console.log(arr)

// // najv -> najm
// arr.sort(function(a, b){return b - a})
// console.log(arr)

// // random
// arr.sort(function(a, b){return 0.5 - Math.random()})
// console.log(arr)

// -----------------------------------------------

// var name = "ajsaaaaa"

// for(let i = 0; i <= name.length; i++){
//     if( name[i] === "a")
//         name = name.replace("a", "*")
// }
// console.log(name)

// ------------------------------------------------

// var nzm = "545"

// typeof(nzm) === typeof(" ") ? console.log(true) : console.log(false)

// if(typeof(nzm) == "string"){
//     console.log(true)
// } else {
//     console.log(false)
// }
// console.log()

// -------------------------------------------------

// var stri = "js string ex"

// console.log(stri.replace(stri[0], stri[0].toLocaleUpperCase()))

// ----------------------------

// nes nije dbr
// var prom = "AaBbC"

// for(let i = 0; i <= prom.length; i++){
//     if(prom[i] === prom[i].toLocaleUpperCase()){
//         prom[i] = prom.replace(prom[i], prom[i].toLocaleLowerCase())
//     } else {
//         prom[i] = prom.replace(prom[i], prom[i].toLocaleUpperCase())
//     }
// }

// console.log(prom)

// ---------------------------------------------------------

// const arr = [1, 8, 55, 5, 87, 2, 0, 45]
// arr.splice(1, 0, " " , " ")
// console.log(arr)

//

// a = [1, 2, 3]
// if(typeof(a) === "object"){
//     console.log("lista je")
// } else {
//     console.log("nije lista")
// }

// -----------------------

// const niz = ["m", 1, 2, 3]

// function prvi_element_niza(niz){
//     return niz[0]
// }

// console.log(prvi_element_niza(niz))

// ----------------------

// const niz = [7, 0, -9, 11, 5, 6, 8]
// var n = 4

// function n_elemenata_niza(niz, n){
//     niz.splice(n, niz.length - n)
// }
// n_elemenata_niza(niz, n)
// console.log(niz)

// ------------------------------------

// const  myColor = ["Red", "Green", "White", "Black"];

// suma1 = ""
// suma2 = ""

// for(let i = 0; i < myColor.length; i++){

//     suma1 += myColor[i] + ","
//     suma2 += myColor[i] + "+"

// }

// console.log(suma1)
// console.log(suma2)

// -----------------------------------------

// var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]
// console.log(arr1.sort(function(a, b){return a - b}))

// -------------------------------

// const godine = [1, 3, 19, 88, 74, 14, 55, 18]

// const punoletni = godine.filter(provera)
// const nisu_punoletni = godine.filter(provera2)

// function provera2(god){
//     return god <= 18
// }

// function provera(god){
//     return god >= 18
// }

// console.log(nisu_punoletni)
// console.log(punoletni)

// --------------------------------------

// const fruits = ["apple", "orange", "cherry"];
// fruits.forEach(myFunction);

// function myFunction(fruit){
//     console.log(fruit)
// }
// console.log(fruits)

// ---------------------------

// const niz = [1, 2, 3, 4, 5, 6, 7]

// const novi_niz = niz.map(kvadriranje)

// function kvadriranje(el){
//     return el ** 2
// }
// console.log(niz)
// console.log(novi_niz)

// ---------------------------------

// var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

// for(let i = 0; i < a.length; i++){
//     console.log(`ROW ${i}`)
//     for(let j = 0; j < a[i].length; j++){
//         console.log(a[i][j])
//     }
// }

// ----------------------------------------------------------------

// nije dbr

// const niz = [1, 1, 2, 22, 59, 8979, 2];

// for (let i = 0; i < niz.length; i++) {
//   suma = 0;

//   for (let j = i; j < niz.length; j++) {
//     if (i === j) {
//       niz.splice(i - 1, 1);
//     }
//   }
// }
// console.log(niz);

// ----------------------------------

// const fn = () => {

// }

// const godine = [1, 65, 18, 97, 4]
// const rezultat = godine.filter(god => god > 18)
// console.log(rezultat)

// --------------------------------------

// switch
// let ocena = 9

// switch(ocena){
//     case 1 :
//         console.log("nedovoljan");
//         break;
//     case 2 :
//         console.log("dovoljan");
//         break;
//     case 3 :
//         console.log("dobar");
//         break;
//     case 4 :
//         console.log("vrlodobar");
//         break;
//     case 5 :
//         console.log("odlican")
//         break;
//     default:
//         console.log("Niste radili test / greska prilikom unosa")
// }

// ---------------------

// niz = [1, 2, 3];

// niz.forEach(function (br) {
//   if (br === 1) {
//     console.log("evo ga");
//   } else {
//     console.log("nije taj");
//   }
// });

// for (let i of niz) {
//   console.log(i);
//   if (i == 1) console.log("Evo ga");
//   else console.log("nije taj");
// }

// ------------------------

// const nesto = {
//     name: "pero",
//     prezime: "vucinic",

// }

// console.log(nesto["name"])

// for(let i in nesto){
//     console.log(nesto[i])
// }

// ------------

// n = 0
// suma = 0
// while(n <= 100){
//     suma += n
//     n++
// }

// console.log(suma)

//-------------------------

// let i = 0;

// do {
//   console.log(i);
//   i++;

// } while (i > 10);
// {
// }

// -----------------------------

// const niz = [12, 14, 16, 19, 21, 1, 14]

// niz2 = niz.filter(el => el < 18)

// console.log(niz2)

// ---------------------

// const niz = [1, 2, 3, 4, 5]

// niz2 = niz.map(el => el**2)

// console.log(niz2)

// const niz = [1, 2, 3, 4, 5]

// niz2 = niz.filter(el => el > 2)

// console.log(niz2)

// ------------------------------------

// const niz = [1, 2, 3]

// for(let x of niz){
//     console.log(x)
// }

// const obj = {
//     ime : "pero",
//     prezime : "vuc"
// }

// for(let x in obj){
//     console.log(obj[x])
// }

// ------------------------------------

// const niz = [1, 2, 3, 4]
// console.log(niz.length)
// pom = niz.unshift(5)
// console.log(pom)
//

//

// 0  1  2  3
// niz.slice(1, 3)
// console.log(niz.slice(1, 2))

// -----

// const niz = [0, 6, 1, 5, -6, 11, 13, 5]

// let mini = maxx = 0
// for(let x in niz){
//     if(x === 0){
//         mini = maxx = niz[x]
//     }
//     if(niz[x] > maxx){
//         maxx = niz[x]
//     } else if (niz[x] < mini) {
//         mini = niz[x]
//     }
// }

// console.log(mini, maxx)

// ----------------------------------------

// const niz = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const parni = []
// const neparni = []

// for(let x of niz){
//     if (x % 2 == 0){
//         parni.push(x)
//     } else {
//         neparni.push(x)
//     }
// }

// console.log(parni, neparni)

// -----------------------------------------

// const niz = [1, 1, 2, 3, 3, 4, 4, 5];

// function uniqe_values(niz) {
//   count = false;
//   for (let i = 0; i < niz.length; i++) {
//     for (let j = i + 1; j < niz.length; j++) {
//       if (niz[i] == niz[j]) {
//         count = true;
//         vr = niz[i];
//       } else {
//         break;
//       }
//       if (count) {
//         console.log(niz[i]);
//       }
//     }
//   }
// }

// uniqe_values(niz);

// --------------------------------------------------

// let i = 1
// let text;
// while (i <= 10) {
//   text = "The number is " + i;
//   i++;
//   console.log(text)
// }

// ----------------------

// let i = 0

// while(i <= 15){
//     if(i % 2 === 0){
//         console.log(`${i} is even`)
//     } else {
//         console.log(`${i} is odd`)
//     }
//     i++
// }

// for(let j = 0; j <=15; j++){
//     if(j % 2 === 0){
//         console.log(`${j} is even`)
//     } else {
//         console.log(`${j} is odd`)
//     }
// }

// ------------------------------

// arr = [1, 2, 3, 4, 65, 22, 76, 4465, 98];

// let i = 0;
// while (i < arr.length) {
//   if (arr[i] % 2 === 0) {
//     console.log(`${arr[i]} is even`);
//   } else {
//     console.log(`${arr[i]} is odd`);
//   }
//   i++;
// }

// ------------------------------------------

// let i = 10;
// do {
//   console.log("hej");
// } while (i < 5);

// --------------------

//  odavde*****

// arr = [1, 2, 3, 4, 65, 22, 76, 4465, 98];

// let i = 0;
// while (i < arr.length) {
//     if ( arr[i].toString().length <= 2) {
//         if (arr[i] % 2 === 0) {
//             console.log(`${arr[i]} is even`);
//         } else {
//             console.log(`${arr[i]} is odd`);
//         }
//     } else {
//         i++
//         continue;
//     }
//     i++;
// }

// -------

// arr = [1, 266, 3, 4, 65, 22, 76, 4465, 98];

// arr.sort(function (a, b) {
//   return a - b;
// });

// i = 0;
// while (i < arr.length) {
//   if (arr[i].toString().length >= 3) {
//     i++;
//     continue;
//   } else {
//     if (arr[i] % 2 === 0) {
//       console.log(`${arr[i]} is even`);
//     } else {
//       console.log(`${arr[i]} is odd`);
//     }
//     i++;
//   }
// }

// ---------------------------

// const arr = [34, -345, -1, 100];
// function smallest(arr) {
//   let mini;
//   for (let i = 0; i < arr.length; i++) {
//     if (i == 0) {
//       mini = arr[i];
//     } else {
//       if(mini > arr[i]){
//         mini = arr[i]
//       }
//     }
//   }
//   return mini
// }

// res = smallest(arr);
// console.log(res)

// /------------------------------------------

// const arr = [1, 0, 3, -4, 14, 65, -17, 45, 4]

// arr.sort(function(a, b){return a - b})
// console.log(arr[1])

// /------------------------------------------

// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]

// var arr = []
// function pyramid(n){
//   for(let i = 0; i <= n; i++){
//       var arr2 = []
//       i = 1
//       arr2.push(1)
//       arr.push(arr2)
//     }

// }

// n = 3
// pyramid(n)

// /------------- arr

// const niz = [
//   [1, 3, 6],
//   [4, 9, 1],
//   [4, 1, 9],
// ]

// for(let i = 0; i < niz.length; i++){
//   for(let j = 0; j < niz[i].length; j++){
//     process.stdout.write(niz[i][j] + '\t')
//   }
//   console.log()
// }

// console.log("posle promene sporedne dijagonale")
// // console.log(niz)

// for(let i = 0; i < niz.length; i++){
//   for(let j = 0; j < niz[i].length; j++){
//     niz[i][niz[i].length - i - 1] = 0
//   }
// }

// for(let i = 0; i < niz.length; i++){
//   for(let j = 0; j < niz[i].length; j++){
//     process.stdout.write(niz[i][j] + '\t')
//   }
//   console.log()
// }

// console.log(niz)

// -------------------

// const niz = [
//   [1, 3, 6],
//   [4, 9, 1],
//   [4, 1, 9],
// ]

// for(let i = 0; i < niz.length; i++){
//   for(let j = 0; j < niz[i].length; j++){
//     niz[i][niz[i].length - 1 - i] = 0
//   }
// }

// console.log("Posle izmene")

// for(let i = 0; i < niz.length; i++){
//   for(let j = 0; j < niz[i].length; j++){
//     // console.log(niz[i][j])
//     process.stdout.write(niz[i][j] + '\t')
//   }
//   console.log()
//   console.log()
// }

// ------------------------------------------------

// const niz = [
//   [1, 3, 6],
//   [4, 9, 1],
//   [4, 1, 9],
// ]

// for(let i = 0; i < niz.length; i++){
//   for(let j = 0; j < niz[i].length; j++){
//     // console.log(niz[i][j])
//     process.stdout.write(niz[i][j] + '\t')
//   }
//   console.log()
//   console.log()
// }

// -----------------------------

// const niz = [
//   [1, 0, 0],
//   [0, 1, 0],
//   [0, 0, 1],
// ];

// function provera(niz) {
//   suma = 0;
//   for (let i = 0; i < niz.length; i++) {
//     for (let j = 0; j < niz[i].length; j++) {
//       if ((i === j && niz[i][j] !== 1) || (i !== j && niz[i][j] !== 0)) {
//         return false;
//       }
//     }
//   }
//   return true;
// }
// console.log(provera(niz));

// ----------------------------

// nes ne radi

// function orderBySum(niz) {
//   res = [];
//   suma = 0
//   nova_suma = 0
//   for (let i = 0; i < niz.length; i++) {
//     for (let j = 0; j < niz[i].length; j++) {
//       suma += niz[i][j];
//     }
//     break
//   }

//   for (let i = 1; i < niz.length; i++) {
//     for (let j = 0; j < niz[i].length; j++) {
//       nova_suma += niz[i][j];
//     }
//     if(nova_suma < suma){
//         res.push(niz[i])
//         niz.splice(niz.length - 1, 1)
//     }

//     if(niz.length === 1){
//         res.push(niz[0])
//     }
//   }

//     console.log(res)
// }

// const niz = [
//   [1, 3],
//   [4, 2],
//   [2, 1],
// ];

// console.log(orderBySum(niz))

// -----------------------------------------------------------

// -----

// const fnod = (somearray) => {
//   for(let i = 0; i < somearray.length; i++){
//     if(somearray[0] !== somearray[1] && somearray[1] === somearray[2]){
//       return somearray[0]
//     } else if(somearray[i] !== somearray[i + 1]){
//       return somearray[i + 1]
//     }
//   }
// }

// console.log(fnod(["A", "B", "A", "A"]))

// -------------------------

// ne radi nes
// function spl(niz) {
//   var res1 = [];
//   var res2 = [];
//   var konacno = [];
//   for (let x of niz) {
//     if (x % 2 == 0) {
//       if (!res1.includes(x)) {
//         res1.push(x);
//       }
//     } else {
//       if (!res2.includes(x)) {
//         res2.push(x);
//       }
//     }

//     return konacno;
//   }
// }

// niz = [2, 3, 7, 6, 2, 4, 9];

// console.log(spl(niz));

// ----

// function spl(some){
//   let parni = []
//   let neparni = []
//   for(let i = 0; i < some.length; i++){
//     if(some[i] % 2 == 0 && parni.includes(some[i]) === false){
//       parni.push(some[i])
//     } else if (some[i] % 2 !== 0 && neparni.includes(some[i]) === false){
//       neparni.push(some[i])
//     }
//   }

//   parni.sort(function(a, b){ return a - b})
//   neparni.sort(function(a, b){ return a - b})

//   return [parni, neparni]

// }

// console.log(spl([2, 3, 7, 6, 2, 4, 9]))

// krace

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

// -----------------------------------------------------

// function mix(niz, niz2) {
//   var res = [];
//   for (let i = 0; i < niz.length; i++) {
//     res.push(niz[i]);
//     res.push(niz2[i]);
//   }

//   for (let x of niz2) {
//     if (!res.includes(x)) {
//       res.push(x);
//     }
//   }

//   for(let y of res){
//     if(y === undefined){
//       res.pop(y)
//     }
//   }

//   return res;
// }

// niz = ["a", "b", "c"];
// niz2 = [1, 3, 4, 5];
// console.log(mix(niz, niz2));

// boljjiiiii

// const mix = (ar1, ar2) => {
//   res = []
//   for(let i = 0; i < ar1.length + ar2.length; i++){
//     if(ar1[i] !== undefined){
//       res.push(ar1[i])
//     }
//     if(ar2[i] !== undefined){
//       res.push(ar2[i])
//     }
//   }
//   return res
// }

// niz = ["a", "b", "c"];
// niz2 = [1, 3, 4, 5];
// console.log(mix(niz, niz2));

// --------------------

// const buildArray = (someArray, indexes) => {
//   // your code
//   res = [];
//   for (let i = 0; i < someArray.length; i++) {
//     for (let j = 0; j < indexes.length; j++) {
//       if (i === indexes[j]) {
//         res.push(someArray[i]);
//       }
//     }
//   }
//   return res;
// };
// //      0     1      2       3      4
//         //   [tue wed ]
// a = ["mon", "tue", "wed", "thur", "fri"];
// b = [1, 3, 2];
// // console.log(buildArray(["mon", "tue", "wed", "thur", "fri"], [1, 3, 4])
// console.log(buildArray(a, b));
// // ["tue", "thur", "fri"]

// -----------------------

// const move = (someArray, firstIndex, secondIndex) => {
//   for (let i = 0; i < someArray.length; i++) {
//     if (i === firstIndex) {
//         pom = someArray[i]
//         someArray.splice(i, 1)
//         someArray.splice(secondIndex, 0, pom);
//     }
//   }
//   return someArray;
// };

// console.log(move([4, 5, 7], 1, 0)); // [4, 7, 5]

// /------------------------------------------------------------

// const sortTheArray = (someArray) => {
//   res = [];
//   var ar1 = [];
//   var ar2 = [];
//   for (let i = 0; i < someArray.length; i++) {
//     if (typeof someArray[i] === "int") {
//       ar1.push(someArray[i]);
//     } else {
//       ar2.push(someArray[i]);
//     }
//   }
//   ar1.sort(function (a, b) {
//     return a - b;
//   });
//   ar2.sort();
//   for (let x of ar1) {
//     res.push(x);
//   }
//   for (let x of ar2) {
//     res.push(x);
//   }

//   return res;
// };

// console.log(sortTheArray(["b", 6, "a", "q", 7, 2]));
// [2, 6, 7, "a", "b", "q"]

// ----------------------------------------



// const alphabetize = (someArray) => {
//     // your code
//     res = []
//     for(let i = 0; i < someArray.length; i++){
//         someArray[i].sort()
//         res.push(someArray[i])
//     }
//     return res
// }

// const jumbledAlphabet = [
//     ["e", "d", "f"],
//     ["a", "c", "b"],
//     ["m", "o", "n"]
// ]
// console.log(alphabetize(jumbledAlphabet))
// // [["a", "b", "c"], ["d", "e", "f"], ["m", "n", "o"]]



// ----------------------



// const findCommonWords = (firstArray, secondArray) => {
//     var res = []
//     for(let x of firstArray){
//         for(let y of secondArray){
//             if (x === y) res.push(x)
//         }
//     }
//     return res
// }

// firstArray = ["dog", "cat", "parrot"]
// secondArray = ["lizard", "rat", "cat", "parrot"]

// console.log(findCommonWords(firstArray, secondArray))



// -------------------------------------------



// --------------------------------------


// OBJEKTIIIIIIIIIIIIIIIIIIIII
