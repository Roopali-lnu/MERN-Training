//WAP to print elements > 50 in an array of integers using array.filter

const numbers = [10, 15, 20, 40, 50, 55, 60, 70, 78, 80, 90, 95];

const filterNum = numbers.filter((num) => num > 50);

filterNum.forEach((num) => {
    console.log(num);
});