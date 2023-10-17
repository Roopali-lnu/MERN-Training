function example() {
    console.log(x);
    var x = 10;
  }
  example();


  /* 
  "var" are hoisted to the top of their function or global scope.
  we can use a 'var' variable before it's declared, but its value will be undefined until it's assigned a value.
  "var" variables are also function-scoped, 
  which means they are only accessible within the function in which they are declared.

  when we call example(), it logs undefined to the console because the var x declaration is hoisted, 
  and the variable is declared at the top of the function but has not been assigned a value until 
  after the console.log statement.
  */



