/*take a number n as input from user create an array of numbers from 1 to n
use the reduce method to calculate sum of all the numbers in that array
use the reduce method to calculate product of all numbers in the array */
let n = prompt("Enter a number :");
let arr = [];
for (let i = 0; i <= n; i++) {
    arr[i - 1] = i;
}
console.log(arr);


let sum = arr.reduce((a, b) => {
    return a + b;
});
console.log(sum);


let product = arr.reduce((a, b) => {
    return a * b;
});
console.log(product); //factorial also same answer
