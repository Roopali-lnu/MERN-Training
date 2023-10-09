
//WAP that converts temperature given in degree Celcius to degree fahrenheit

function celsiusToDegreeFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }

const celsiusTemperature = 15;
const fahrenheitTemperature = celsiusToDegreeFahrenheit(celsiusTemperature);
console.log(`${celsiusTemperature}°C is equal to ${fahrenheitTemperature}°F`);

//WAP that converts temperature given in degree fahrenheit to degree Celcius 

function degreeFahrenheitToCelsius(fahrenheit){
    return(fahrenheit-32)*5/9;
}
const degreeFahrenheit = 40;
const degreeFahrenheit1 = degreeFahrenheitToCelsius(degreeFahrenheit);
console.log(`${degreeFahrenheit}°F is equal to ${degreeFahrenheit1}°C`);