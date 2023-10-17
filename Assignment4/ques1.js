//Scope
// a
// function example() {
//     var x = 10;
//     if (true) {
//       var x = 20;
//     }
//     console.log(x);
//   }
//   example();

  
  // Output : 20 
  /*Inside the if block, another variable x is declared and
   initialized with the value 20. This declaration of x essentially 
   reassigns the value of the outer x variable declared at the beginning of the function. 
   This is because the var keyword does not create a block scope but only has function scope. 
   As a result, the inner x variable "shadows" the outer x variable within the function's scope.*/
  

   // b

   function example() {
    let x = 10;
    if (true) {
      let x = 20;     
    }
    console.log(x);
  }
  example();

  /*So, when we call example(), it prints 10 because the 
  inner declaration of x inside the if block does not affect the outer x variable declared 
  in the function's scope. The let keyword provides block-level scope, 
  ensuring that the inner x variable is separate and has no impact on the outer x variable.

  If I console inside the If block then it prints 20 because the console.log(x) statement 
  inside the if block prints the value of the inner x variable, which is 20 
   the concept of block-level scoping with the let keyword, where the inner x variable 
   is separate and does not affect the outer x variable declared in the function's scope.
  */
  