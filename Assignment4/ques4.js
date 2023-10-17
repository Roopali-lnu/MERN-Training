var x = 10;
function example(x) {
  console.log(x);
}
example(5);

/*
The example function takes a parameter named x, which is a local variable specific to the function's scope.
 It shadows the global variable x within the function.
When we call example(5), the argument 5 is passed to the function as its parameter x. 
The local x inside the function is now set to 5. 

it logs 5 to the console, which is the value of the local x parameter within the function. 
The global variable x remains unchanged and is not affected by the function call.

*/


// b
var x = 10;
function example() {
  console.log(x);
}
example();

/* 
The example () function does not have a local variable named x, so it looks for x in its scope chain.
the function executes the console.log(x) statement. The function looks for the variable x in its scope chain, 
and it finds the global variable x. which is 10.
*/
