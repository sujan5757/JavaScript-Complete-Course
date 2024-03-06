//creating the strings by using the template literals creation
//back ticks we used here
// a way to have embedded expression in strings
let specialStrings = `I am sujanps`; //we create a string by using the back ticks
console.log(specialStrings); //I am sujanps
console.log(typeof specialStrings); //string
console.log(specialStrings.length); //12




//by using the backticks we can easily print the objects
let students = {
    name: 'Sujanps',
    age: 23,
    city: 'Delhi'
}


console.log(students.name); //Sujanps
//string interpolation - to create a strings by doing substitution of placeholders
let output = `Name: ${students.name}, age:${students.age}, city:${students.city},${1+2+3}`;
//inside ${1+2+3} if you write anything arthimetic operation will automatically works
console.log(output); //Name: Sujanps, age:23, city:Delhi
