//node.removeEventListener(event,callback)
//In the event listener we can use multiple times the same attribute and same functions so it is better than inline and events normal in js .

let bt1 = document.querySelector("#bt1");


bt1.addEventListener("click", () => {
    console.log("bt1 clicked -h1");


});
bt1.addEventListener("click", () => {
    console.log("bt1 clicked -h2");


});
bt1.addEventListener("click", () => {
    console.log("bt1 clicked -h3");


});
bt1.addEventListener("click", () => {
    console.log("bt1 clicked -h4");


});
bt1.removeEventListener("click", () => {
    console.log("bt1 clicked -h3");
});

