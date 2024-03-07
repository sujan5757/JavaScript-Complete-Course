let bt1 = document.querySelector("#bt1");


bt1.addEventListener("click", (e) => {
    console.log("bt1 clicked");
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX);
    console.log(e.clientY);
});
