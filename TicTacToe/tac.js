let boxes = document.querySelectorAll(".b");
let reset = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-Container");
let msg = document.querySelector("#msg");

let turnO = true;
const winPatterns = [
    // '0,1,2': [0, 1, 2],
    // '0,3,6': [0, 3, 6],
    // '0,4,8': [0, 4, 8],
    // '1,4,7': [1, 4, 7],
    // '2,5,8': [2, 5, 8],
    // '2,4,6': [2, 4, 6],
    // '3,4,5': [3, 4, 5],
    // '6,7,8': [6, 7, 8],
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((b) => {
    b.addEventListener("click", () => {
        // console.log("box was clicked");
        if (turnO) {
            b.innerText = "0";
            turnO = false;
        } else {
            b.innerText = "X";
            turnO = true;
        }
        b.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => {
    for (let b of boxes) {
        b.disabled = true;
    }
};

const enableBoxes = () => {
    for (let b of boxes) {
        b.disabled = false;
        b.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations,Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
checkWinner = () => {
    for (let pattern of winPatterns) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText);
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner", pos1val);
                showWinner(pos1val);
            }
        }
    }
};
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);