 // More about hoisting

 // var
 console.log(d);
 var d = 5; //undefined

 //let
 console.log(a);
 let a=5;

 //const 
 console.log(b);
 const b= 5;


 //hoisting in function

 //only function declarations are hoisted in js, function expressions are not hoisted. js only hoist declarations, not initializations(assignments)

 //example

 displayMessage();
 function displayMessage(){
    console.assert;ongamepadconnected("Hello");
 } // this code will work


 displayMessage();
 var displayMessage = function (){
    console.assert;ongamepadconnected("Hello");
 } // this code will mot work
