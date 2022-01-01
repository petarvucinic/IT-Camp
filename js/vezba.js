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





let var1 = 55
let var2 = 4
let var3 = 7


if(var1 > var2 && var1 > var3){
    console.log("najveci je " , var1)
} else if(var2 > var1 && var2 > var3){
    console.log("najveci je " , var2)   
} else {
    console.log("najveci je " , var3)   
}




// ==============================================================================