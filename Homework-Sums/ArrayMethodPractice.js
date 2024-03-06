/*create an array to strore companies
"microsoft","uber","google","ibm","netflix"
a)remove the first comapny from the array
b)remove uber & add ola in its place
c) add amazon at the end */




let arr = ["microsoft", "uber", "google", "ibm", "netflix"];


arr.shift();
console.log(arr);
let b = ["microsoft", "uber", "google", "ibm", "netflix"];


b.splice(1, 2, "ola");
console.log(b);
let c = ["microsoft", "uber", "google", "ibm", "netflix"];


c.push("amazon");
console.log(c);
/*
(4) ['uber', 'google', 'ibm', 'netflix']
first.js:15 (4) ['microsoft', 'ola', 'ibm', 'netflix']
first.js:19 (6) ['microsoft', 'uber', 'google', 'ibm', 'netflix', 'amazon']*/
