let bt1 = document.querySelector("#bt1");
bt1.onclick = (e) => {


    console.log(e.type);//click
    console.log(e.target);//that tag with code line displayed
    console.log(e.clientX); //45
    console.log(e.clientY);//35
}
