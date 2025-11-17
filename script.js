const inputValue = document.getElementById('input-value');
const inputUnit = document.getElementById('input-unit');
const outputUnit = document.getElementById('output-unit');
const convertBtn = document.getElementById('convert-btn');

function checkInputs() {
  if (inputValue.value && inputUnit.value && outputUnit.value) {
    convertBtn.disabled = false;
  } else {
    convertBtn.disabled = true;
  }
}

inputValue.addEventListener('input', checkInputs);
inputUnit.addEventListener('change', checkInputs);
outputUnit.addEventListener('change', checkInputs);


function toCelsius(value, unit) {
  switch (unit) {
    case 'celsius': return value;
    case 'fahrenheit': return (value - 32) * 5 / 9;
    case 'kelvin': return value - 273.15;
  }
}

function fromCelsius(value, unit) {
  switch (unit) {
    case 'celsius': return value;
    case 'fahrenheit': return (value * 9 / 5) + 32;
    case 'kelvin': return value + 273.15;
  }
}
