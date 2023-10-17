var x = 10;
function outer() {
  function inner() {
    console.log(x);
  }
  return inner;
}
var closure = outer();
closure();


/* when we call closure() it logs '10' because the 'inner' function,  
which is executed as part of the closure, has access to the x variable in the global scope.
Closures are a powerful feature in JavaScript that allows functions to maintain access to their 
enclosing scope's variables even after the outer function has completed its execution.
*/