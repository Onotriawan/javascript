const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const result = document.getElementById("result");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");

// Add event listeners to the buttons
addButton.addEventListener("click", handleAddition);
subtractButton.addEventListener("click", handleSubtraction);
multiplyButton.addEventListener("click", handleMultiplication);
divideButton.addEventListener("click", handleDivision);

function handleAddition() {
  const sum = parseFloat(input1.value) + parseFloat(input2.value);
  result.value = sum;
}

function handleSubtraction() {
  const difference = parseFloat(input1.value) - parseFloat(input2.value);
  result.value = difference;
}

function handleMultiplication() {
  const product = parseFloat(input1.value) * parseFloat(input2.value);
  result.value = product;
}

function handleDivision() {
  const quotient = parseFloat(input1.value) / parseFloat(input2.value);
  result.value = quotient;
}
