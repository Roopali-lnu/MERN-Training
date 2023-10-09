
// const myCar = {
//     brand: 'Ford',
//     model: 'Mustang',
//     color: 'red'
// }
// const myNewCar = {
//     type: 'car',
//     year: 2021,
//     color: 'yellow'  //color :overwrite
// }

// const combineCars = {...myCar, ...myNewCar};
// console.log(combineCars);

const myNewCar = {
    type: 'car',
    year: 2021,
    color: 'yellow'
}

const myCar = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'   //color :overwrite
}
const combineCars = {...myNewCar,...myCar};
console.log(combineCars);