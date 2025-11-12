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
