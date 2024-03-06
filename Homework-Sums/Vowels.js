//create a function using the function keyword that takes a string as an arrgument and returns the number of vowels in the string


function countVowels(str) {
    let vowels = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u" || str[i] === "A" || str[i] === "E" || str[i] === "I" || str[i] === "O" || str[i] === "U") {
            console.log(str[i]); //e o
            vowels++;
        }
    }
    return vowels;
}
console.log(countVowels("hello")); //2




// create an arrow function that create same method


const countVowels = (str) => {
    let vowels = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u" || str[i] === "A" || str[i] === "E" || str[i] === "I" || str[i] === "O" || str[i] === "U") {
            console.log(str[i]); //e o
            vowels++;
        }
    }
    return vowels;
}
console.log(countVowels("hello")); //2
