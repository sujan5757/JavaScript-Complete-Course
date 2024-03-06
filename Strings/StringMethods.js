//String method in js - function and  methods are like  a block of code which will do job for us

//String methods
//upper case & lowe case of  the string


let str = "i am a big fan of virat kohli!";
console.log(str); //same output as above


console.log(str.toUpperCase()); //I AM A BIG FAN OF VIRAT KOHLI!


console.log(str.toLowerCase()); //i am a big fan of virat kohli!


//trim method- to remove the whitespace like first and last spaces
let st = "   i Love JS   ";
console.log(st.trim()); //i Love JS






//slice method-retrun part of string


let a = "0123456";
console.log(a.slice(1, 4)); //123end value will not include in strings
let b = "hello";
console.log(b.slice(3)); //lo


//string concatenation method-joins string2 with string 1


let str1 = "hello";
let str2 = "sujan";
console.log(str1 + str2); //hellosujan
console.log(str1.concat(str2)); //hellosujan


//string replace


let str3 = "hello";
console.log(str3.replace("o", "k")); //hekloit replace at only one time
// if you want to replace the value every time then replaceAll
console.log(str3.replaceAll("l", "p")); //heppo


//charAt()


let g = "hello";
console.log(g.charAt(2)); //l
//string index


let str4 = "hello";
console.log(str4.indexOf("l")); //1
console.log(str4.lastIndexOf("l")); //4


//string match


let str5 = "hello";
console.log(str5.match("l")); //l
console.log(str5.match(/l/g)); //l


//string split


let str6 = "hello";
console.log(str6.split("l")); //["hello"]
console.log(str6.split("l", 2)); //["hello", ""]
console.log(str6.split("l", 3)); //["hello", "", ""]


//string substring


let str7 = "hello";
console.log(str7.substring(1, 4)); //ell
console.log(str7.substring(1)); //ell
console.log(str7.substring(1, 5)); //ell


//string trim


let str8 = "hello";
console.log(str8.trim()); //hello
console.log(str8.trimLeft()); //hello
console.log(str8.trimRight()); //hello
