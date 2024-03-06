//for a given array with marks of students--> [85,97,44,37,76,60] find the average marks of the entire class .


let arr = [85, 97, 44, 37, 76, 60];


let sum = 0;
let avg;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
avg = sum / arr.length;
console.log(avg);
