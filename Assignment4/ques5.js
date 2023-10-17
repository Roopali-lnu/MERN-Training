/* This is not valid because "a" has already been declared variable "a" declared 
using let in the outer scope and another variable "a" declared using var within the block.
 However, this code would cause a syntax error because it's not allowed to declare two variables 
 with the same name in the same scope, */
let a = 20;
{
    var b = 10;
}


/* this is valid code, variable "a" declared using var in the outer scope 
and another variable "a" declared using let within the block. 
These two variables are in separate scopes, and there's no conflict. 
The console.log(a) statement logs the value of the outer a, which is 20.

*/ 
// var a = 20;
// {
//     let a = 10;
// }
// console.log(a);
