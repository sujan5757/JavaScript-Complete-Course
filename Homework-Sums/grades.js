//write a code which can give grades to students according their scores
//80 - 100 A
//70-89B
//60-69 C
// 50-59 D
//0-49 F
let s = prompt("Enter the score");
if (s >= 80 && s <= 100) {
    console.log("Grade is A");
} else if (s >= 70 && s <= 89) {
    console.log("Grade is B");
} else if (s >= 60 && s <= 69) {
    console.log("Grade is C");
} else if (s >= 50 && s <= 59) {
    console.log("Grade is D");
} else {
    console.log("grade ids F");
}
