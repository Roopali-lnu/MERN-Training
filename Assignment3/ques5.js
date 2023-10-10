//Write a JavaScript function that counts the occurrences of a specified element in an array.

function countDuplicates(num1,num2){
    let count = 0;
    for (let i=0;i<num1.length; i++){
        if (num1[i]===num2){
            count++;
        }
    }
    return count;
}
const numbers = [1,1,2,3,4,5,4,4,6,7,8,9];
const countElements = 1;

const numbersFind = countDuplicates(numbers, countElements);
console.log(`The element ${countElements} appears ${numbersFind} times.`)