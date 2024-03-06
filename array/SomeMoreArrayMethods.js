//map methods map is very similar to foreach
//map creates a new array with the results of some operation the value its call back returns are used to form


let num = [1, 3, 4];
let a = num.map((val) => {
    return val;
});
console.log(a);




//filter method creates a new arraya of elements that give true for a condition
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let even = arr.filter((val) => {
    return val % 2 == 0;
});
let odd = arr.filter((val) => {


    return val % 2 != 0;
});
console.log(even);
console.log(odd);


//reduce- perform some operation& reduces the array to single value , it returns that single value  




let d = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = d.reduce((a, b) => {
    return a + b;
});
console.log(sum);
