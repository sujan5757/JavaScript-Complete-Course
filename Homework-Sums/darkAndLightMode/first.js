let bt1 = document.querySelector("#bt1");
let cMode = "light";
bt1.addEventListener("click", () => {
    console.log("your trying to change mode");
    if (cMode === "light") {
        cMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        cMode = "light";
        document.querySelector("body").style.backgroundColor = "white";


    }
    console.log(cMode);
});

