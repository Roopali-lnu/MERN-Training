//What is the difference between forEach and map

//forEach: The forEach method is used for iterating over the elements of an array and executing a provided function once for each element.
//It does not return a new array; instead, it operates on the original array and is typically used for performing side effects (e.g., logging, modifying the original array in-place).

const number1 = [1, 2, 3, 4];

number1.forEach((numbers1) => {
  console.log(numbers1); 
});

//map : Map is used for transforming elements and creating a new array with the results.
//it returns a new array without modifying the original one.

const number2 = [1, 2, 3, 4];

const squareNumbers = number2.map((numbers2) => {
  return numbers2 * numbers2;
});

console.log(squareNumbers); 