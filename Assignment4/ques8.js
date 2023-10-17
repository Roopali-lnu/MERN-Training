console.log(foo());
console.log(bar());
function foo() {
  return "I'm foo!";
}
var bar = function () {
  return "I'm bar!";
};

/* 
The "foo" function is called using foo(), and it returns the string "I'm foo!".
The "bar" function is called using bar(), but since bar is not yet assigned to a function at this point, 
you will get a TypeError, indicating that bar is not a function.
*/