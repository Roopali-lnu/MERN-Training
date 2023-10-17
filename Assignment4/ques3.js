// a
// const a = 2;
// {
//     const a = 10;
//     {
//         const a = 90;
//         console.log(a);
       
//     }
    
// }


/* when you execute the code, it will log 90 to the console,
 which is the value of the innermost a variable declared within the innermost block.
  The values of the outer and middle a variables remain unchanged and do not affect 
  the innermost a due to block-level scoping.
*/

// b

// const a = 2;
// {
//     const a = 10;
//     {
//           console.log(a);
//     }
// }

/*
when we execute the code it looks for the nearest declaration in its scope chain, 
which is the "a" declared in the first nested block.
The values of the outer a and the innermost block's a are not in scope for the console.log, 
and therefore, they do not affect the logged value.
 */


// c

const a = 2;
{
     {
        console.log(a);
    }
}


/* 
 when we execute the code,it will log 2. so, statement looks for the nearest declaration of "a" in its scope chain. 
In this case, it doesn't find "a" declared in the innermost block, 
so it looks in the immediately surrounding block, which is the outermost block.
*/