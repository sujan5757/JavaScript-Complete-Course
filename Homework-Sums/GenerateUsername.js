//practice


/* promt the user to neter their full name generate a username for them based on the input start username with @,followed by their fulklname and ending with the fullname length eg: username="sujanps" , username should be "@sujanps123"*/




let fullName = prompt("Enter your full name without space ");
let username = "@" + fullName + fullName.length;
console.log(username); //@Sujanps7


// function generateUsername() {
//     var username = prompt("Enter your full name");
//     var fullname = username.split(" ");
//     var username = "@" + fullname[0] + fullname[1];
//     return username;
// }

