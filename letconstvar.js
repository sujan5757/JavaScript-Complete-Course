//let keyword:
let name = "Tony stark";
let age = 24;
let totalPrice = 1000;
let ab;
console.log(name, age, totalPrice, ab);
// in intial days we  used var keyword we don't use var keyword after 2015  we got ES6 ecma script 6 in that we got let and const we can redeclare also variable


// var name = "Tony stark";
// var age = 24;
// var totalPrice = 1000;


// var age = 24;
// var age = 59;
// var age = 86;
// console.log(age);


//const keyword


const a = 24;
const PI = 3.14;
// a = 45;
//if you just writing const; then printing that you will get error msg that you have to intialize the const variable
console.log(a);
console.log(PI);


//in let and const  we get block scope means curly bracket{}in a
{
    let a = 90;
    console.log(a);
} {
    let a = 12;
    console.log(a);
} //modren js after 2015
