// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}

function convertTemperature(temperature, fromUnit, toUnit) {
    let convertedTemperature;
    if (fromUnit === "C" && toUnit === "F") {
      convertedTemperature = celsiusToFahrenheit(temperature);
    } else if (fromUnit === "F" && toUnit === "C") {
      convertedTemperature = fahrenheitToCelsius(temperature);
    }
    return convertedTemperature;
}

// const temperature = 40;
// const fromUnit = "C";
// const toUnit = "F";
console.log(`Enter a temperature: ${temperature=40}${fromUnit="C"}, converting to ${toUnit="F"}: ${convertTemperature(temperature, fromUnit, toUnit)}${toUnit}`);