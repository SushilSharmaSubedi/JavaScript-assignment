function celsiusToFahrenheit() {
  let celsius = 100;
  let fahrenheit = (celsius * 9) / 5 + 32;
  console.log("Celsius to Fahrenheit: ", fahrenheit, "°F");
}
function fahrenheitToCelsius() {
  let fahrenheit = 100;
  let celsius = ((fahrenheit - 32) * 5) / 9;
  console.log("Fahrenheit to Celsius: ", celsius, "°C");
}

celsiusToFahrenheit();
fahrenheitToCelsius();
