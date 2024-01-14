let currentInput = "";
let result = 0;

// Function for buttons
function appendToDisplay(value) {
    currentInput += value;
    updateDisplay();
}

// Function for display
function updateDisplay() {
    document.getElementById("display").value = currentInput;
}

// Function for clear
function clearDisplay() {
    currentInput = "";
    result = 0;
    updateDisplay();
}

// Function for result
function calculateResult() {
    try {
        currentInput = customEval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        updateDisplay();
    }
}

function customEval(expression) {
    const allowedCharacters = /^[\d+\-*/(). ]*$/;
    if (!allowedCharacters.test(expression)) {
      throw new Error("Invalid expression");
    }
  
    // Replace "x" with "*" for multiplication
    // expression = expression.replace(/x/g, '*');
  
    try {
      const result = new Function(`return ${expression}`)();
      return result;
    } catch (error) {
      throw new Error("Invalid expression");
    }
  }
  
