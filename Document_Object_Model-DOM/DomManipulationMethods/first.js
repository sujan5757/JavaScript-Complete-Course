//insert Element
let newBtn = document.createElement("button");
newBtn.innerText = "click me";
console.log(newBtn);


let div = document.querySelector("div");
div.append(newBtn); //adds at the end of the node


// to add first
div.prepend(newBtn);


//adds before the node
div.before(newBtn);


//adds after the node
div.after(newBtn);


let heading = document.createElement("h1");
heading.innerHTML = "<i>Hi iam  new</i>";
document.querySelector("body").prepend(heading);


//delete the node


// let divs = document.querySelector("div");
// divs.remove();


