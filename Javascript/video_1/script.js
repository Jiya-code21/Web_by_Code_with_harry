/* why we use alert*/
/*The alert() function is great for grabbing the user's attention because it pauses script execution and prevents them from interacting with the page until they acknowledge the message.
*/
alert("Hello world");
console.log("Jiya Agrawal");
/* why prompt*/
/*
The prompt() function is used in JavaScript to collect input from the user through a popup dialog box, enabling simple interactivity in scripts.*/

var a=prompt("Enter your number");
var istrue=confirm("Are you sure you leave this page")

if(istrue){
    console.log("compurter is blasting")
}

else{
    console.log("computer is not blasting")
}

console.log("Your number is :" + a);

document.body.style.backgroundColor="yellow"