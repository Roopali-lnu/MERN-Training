function outer() {
    var x = 10;
    function inner() {
      console.log(x);
    }
    inner();
  }
  outer();

  /* when inner is executed, it logs the value of x, which is 10.
  
  So, when you call outer(), it logs 10 to the console because 
  the inner function has access to the variables in the scope of its containing function, 
  allowing it to access and log the value of the x variable declared in the outer function.
  */
  