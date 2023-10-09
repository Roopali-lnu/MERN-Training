//WA function that can take any number of arguments and return their sum

function sum(...number) {
    return number.reduce((num, sum) => num + sum);
}
console.log(sum(1,2));
console.log(sum(3,4,5));
console.log(sum(6,7,8,9));