/*DOCUMENT OBJECT MODEL - when a web page is loaded the browser create a document object model of the page .

Console.log -print 
Console.dir-document -program , methods 

Window -> document -> html ->head ->meta -> title -> link
			-> html -> body > div-> script -> 
					    div-> img->h1->p->div

console.dir(window.document ) to see html code in javascript

To change the color in javascript document.body.style=”green”; 

DOM MANIPULATION : 
Selecting the with id -let threading =document.getElementById(“header”);//it will retur any value
console.log(heading);  by using #
Selecting the with class -document.getElementBy
*/
//Document object model


// <style> tag connects html with css


alert("hello");
//se;ecting with the id;
let heading = document.getElementById("heading");
console.dir(heading);
//selecting with class
let headings = document.getElementsByClassName("heading");
console.dir(headings);
console.log(heading);
//selecting with tag


document.getElementBytagName("heading").;


//query selector


let element = document.querySelector(selector);
console.dir(firstElements)
    //DOM MANIPULATION  document, t query, selector


//PROPERTICES :
/*
tagName: returns tag for element nodes
innerText: returns the text content of the element and all its children
innerHtml: returns the plain text and HTML tags  contents in the element
textContent : return textual content even for hidden elements


*/
