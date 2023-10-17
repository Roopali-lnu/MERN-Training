/*The scope chain in JavaScript is a concept that determines how the engine looks up 
and resolves variable names or identifiers when you reference them in your code
*/
var globalVar = "I'm in the global scope";

function outerFunction() {
  var outerVar = "I'm in the outer function scope";

  function innerFunction() {
    var innerVar = "I'm in the inner function scope";
    console.log(globalVar); // Accesses globalVar from the global scope
    console.log(outerVar); // Accesses outerVar from the outer function scope
    console.log(innerVar); // Accesses innerVar from the inner function scope
  }

  innerFunction();
}

outerFunction();
console.log(globalVar); // Accesses globalVar from the global scope


// Illegal Shadowing

/*Illegal shadowing, also known as improper shadowing, is a programming practice 
where a variable declared in an inner scope unintentionally or mistakenly has the same 
name as a variable in an outer scope
*/

var x = 10;

function example() {
  var x = 20; // This is illegal shadowing
  console.log(x); // Refers to the inner x, not the outer x
}

example();