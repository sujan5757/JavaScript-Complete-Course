//array methods
//
//push() : add element to end


let veg = ["potato", "tomato", "chilli", "apple", "banana"];
console.log(veg);
veg.push("chips");
console.log(veg);


//pop() : remove element from end
veg.pop();
console.log(veg);


//shift() : remove element from start
veg.shift();
console.log(veg);


//unshift() : add element to start


veg.unshift("onion");
console.log(veg);


//reverse() : reverse array


veg.reverse();
console.log(veg);


//to string method-to convert array into string method
let marks = [12, 34, 45, 46, 47, 48, 49, 50, 51, 52];
let r = marks.toString();
console.log(r);


//join() : convert array into string method


let a = [12, 34, 45, 46, 47, 48, 49, 50, 51, 52];
let b = a.join(",");
console.log(b);


//sort() : sort arrry into string


let c = [12, 34, 45, 46, 47, 48, 49, 50, 51, 52];
let d = c.sort();
console.log(d);


//slice() : slice array


let e = [12, 34, 45, 46, 47, 48, 49, 50, 51, 52];
let f = e.slice(1, 5);
console.log(f);


//splice() : remove element from array (add,remove,replace)
//you want to delete any element splice(2index , 2after index 2 elements will delete ,101,34 it will add from index 2 )(add,remove,replace)
let g = [12, 34, 45, 46, 47, 48, 49, 50, 51, 52];
let h = g.splice(1, 3);
console.log(h);


//concat() : add element to array


let i = [12, 34, 45, 46, 47, 48, 49, 50, 51, 52];
let j = [6, 7, 9, 4, 7, 8, 98];
let y = i.concat(j);
console.log(y);


//indexOf() : find index of element in array


let k = [12, 34, 45, 46, 47, 48, 49, 50, 51, 52];
let l = k.indexOf(34);
console.log(l);


//lastIndexOf() : find last index of element in array


let m = [12, 34, 45, 46, 47, 48, 49, 50, 51, 52];
let n = m.lastIndexOf(47);
console.log(n);


//every() : check if all elements in array are true


let o = [12, 34, 45, 46, 47, 48, 49, 50, 51, 52];
let p = o.every(function(element) {
    return element > 40;
});
console.log(p);


/*first.js:6 (5) ['potato', 'tomato', 'chilli', 'apple', 'banana']
first.js:8 (6) ['potato', 'tomato', 'chilli', 'apple', 'banana', 'chips']
first.js:12 (5) ['potato', 'tomato', 'chilli', 'apple', 'banana']
first.js:16 (4) ['tomato', 'chilli', 'apple', 'banana']
first.js:21 (5) ['onion', 'tomato', 'chilli', 'apple', 'banana']
first.js:26 (5) ['banana', 'apple', 'chilli', 'tomato', 'onion']
first.js:31 12,34,45,46,47,48,49,50,51,52
first.js:37 12,34,45,46,47,48,49,50,51,52
first.js:43 (10) [12, 34, 45, 46, 47, 48, 49, 50, 51, 52]
first.js:49 (4) [34, 45, 46, 47]
first.js:55 (3) [34, 45, 46]
first.js:62 (17) [12, 34, 45, 46, 47, 48, 49, 50, 51, 52, 6, 7, 9, 4, 7, 8, 98]
first.js:68 1
first.js:74 4
first.js:82 false*/

