//create a game where you start with any random game number ask the user to keep guessing the game number until the user enters correct value




let gameNumber = 7;


let userNumber = prompt("Guess game number");
while (userNumber != gameNumber) {
    userNumber = prompt("You entered wrong number ");
}
console.log("congratulations, you entered correct number  ");
