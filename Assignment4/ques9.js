//a

// var a = 12;
// {
// var a = 10;
// let b = 20;
// const c = 30;
// console.log("Inside Block a= ",a);
// console.log("Inside Block b= ",b);
// console.log("Inside Block c= ",c);
// }
// console.log("Outside Block a= ",a);


/* 
global variable  var a = 12,
inside the block  reassigns the value of the outer a, 
which means that the global a is updated to 10 within the block.
Inside block there are three console.log statements that print the values of variables a, b, and c within the block.
which is 
10,(referring to the inner 'a' declared with var inside the block)
20,
10
After the block there are one more console.log statement that prints the value of the global variable 'a'.
which is 12.
*/

// b 

// let b = 20;
// {
// var a = 10;
// let b = 20;
// const c = 30;
// console.log("Inside Block a= ",a);
// console.log("Inside Block b= ",b);
// console.log("Inside Block c= ",c);
// }
// console.log("Outside Block b= ",b);


/*
Inside the block, there are three console.log statements that print the values of variables a, b, and c within the block
"Inside Block a= 10" (referring to the inner a declared with var inside the block)
"Inside Block b= 20" (referring to the inner b declared with let inside the block)
"Inside Block c= 30"
After the block, there is another console.log statement that prints the value of the outer 'b' variable declared 
in the global scope. Since the inner b declared with let does not affect the global b, 
the value of the global b remains `20".
*/

//c 

let c = 22;
{
var a = 10;
let b = 20;
const c = 30;
console.log("Inside Block a= ",a);
console.log("Inside Block b= ",b);
console.log("Inside Block c= ",c);
}
console.log("Outside Block c= ",c);

/*
The inner a, b, and c variables declared within the block do not affect the 
values of the outer c variable or the outer b variable. The inner a, b, and c have block scope,
 and their values are limited to the block in which they are declared.
 */