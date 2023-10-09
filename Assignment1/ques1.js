//Hosting with 'var'
console.log(x); // output: Undefined
var x = 5;

//Hoisting with 'let'
console.log(y); // Reference Error:can't access y before initialization
let y = 10;

//Hoisting with 'const'

console.log(z); //Reference Error:can't access z before initialization
const z = 15;