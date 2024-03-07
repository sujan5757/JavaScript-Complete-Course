//events in js
/*
Node.event = () => {
    //handle here events
}
*/
let bt1 = document.querySelector("#bt1");
bt1.onclick = () => {
    console.log("bt1 was clicked");
    let a = 24;
    a++;
    console.log(a);
}
let div = document.querySelector("div"); {
    div.onmouseover = () => {
        console.log("your inside the div ");
        div.style.backgroundColor = "red";
    }
}
