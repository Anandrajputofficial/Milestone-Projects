function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  const celsius = 20;
  const fahrenheit = celsiusToFahrenheit(celsius);
  console.log(`${celsius}°C is equal to ${fahrenheit}°F`);
    