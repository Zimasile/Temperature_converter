function convertToFahrenheit() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
  
    const celsiusValue = parseFloat(celsiusInput.value);
    const fahrenheitValue = (celsiusValue * 9/5) + 32;
  
    if (!isNaN(fahrenheitValue)) {
      fahrenheitInput.value = fahrenheitValue.toFixed(2);
    } else {
      fahrenheitInput.value = '';
    }
  }
  
  function convertToCelsius() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
  
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    const celsiusValue = (fahrenheitValue - 32) * 5/9;
  
    if (!isNaN(celsiusValue)) {
      celsiusInput.value = celsiusValue.toFixed(2);
    } else {
      celsiusInput.value = '';
    }
  }
  