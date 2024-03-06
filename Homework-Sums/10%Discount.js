// for a given array with prices of 5 items--> [250,645,300,900,50] all items have an offer of 10% off on them.change the array to store final price after applying offer .


let arr = [250, 645, 300, 900, 50];


for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 0.9;
}
console.log(arr);
/*let i=0;
for(let val of arr){
    let offer =val/10;
    arr[i] = arr[i]-offer;
    console.log('value after offer =${arr[i]}');
    i++;
} */
