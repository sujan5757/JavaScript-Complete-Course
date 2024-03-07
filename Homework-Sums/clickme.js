//create new button give a text "click me", background colorred& text color of white
//insert the buttons the first element inside the body tag


const button = document.createElement('button');
button.textContent = 'click me';
button.style.backgroundColor = 'red';
button.style.color = 'white';
document.body.appendChild(button);


document.querySelector("body").prepend(button);
