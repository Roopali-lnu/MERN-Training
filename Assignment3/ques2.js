//Difference b/w Parameters and Arguments

/*Parameters:-Parameters are variables that are used in the function's declaration.
 They act as placeholders for values that the function expects to receive when it is called.*/

function par(a, b) { //parameters
    return a + b;
}
const arg = par(1, 2); // arguments
console.log(arg);      //outputs :3

/*Arguments are the actual values or expressions that are provided to a function 
when it is called. They correspond to the parameters defined in the function's declaration.*/


//Function Statement and Function Expression

//Function Statement / Function Declaration
//It defines a named function using the function keyword followed by a name, a parameter list, and a function body.

function state(A) {
    console.log(A - 1);

}
const val1 = 10;
const val2 = state(val1);

//Function Expressions
//A function expression defines a function as part of an expression. It can be either anonymous or named.
//Anonymous
const funEx = function (val3) {
    console.log(`Hello, ${val3}`);
}
//Named

const funEx1 = function fun1(fun) {
    console.log(`Hello, ${fun}`);

}

