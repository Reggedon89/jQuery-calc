$(document).ready(() => {
  const calculator = {
    displayValue: "0",
    firstOperand: null,
    waitingForSecondOperator: false,
    operator: null
  };
  // this displays the actual number pressed on calculator screen

  function inputNum(digit) {
    const { displayValue, waitingForSecondOperator } = calculator;
    // Overwrite the display value if there is nothing in it, otherwise append to it
    // pull displavalue out of calculator in order to use it as a variable
    //Is 0 a digit, if so change displayVale to that digit
    //the second operator now overwrites instead of appending to to it
    if (waitingForSecondOperator === true) {
      calculator.displayValue = digit;
      calculator.waitingForSecondOperator = false;
    } else {
      calculator.displayValue =
        displayValue === "0" ? digit : displayValue + digit;
    }

    console.log(calculator);
  }
  //This function creates a decimal point
  function inputDec(dot) {
    if (!calculator.displayValue.includes(dot)) {
      calculator.displayValue += dot;
    }
    console.log(calculator);
  }

  function handleOperator(nextOperator) {
    //destructure calculator and pull our what is needed
    const { firstOperand, displayValue, operator } = calculator;
    const inputValue = parseFloat(displayValue);

    if (firstOperand === null) {
      calculator.firstOperand = inputValue;
    } else if (operator) {
      const result = performCalculation[operator](firstOperand, inputValue);

      calculator.displayValue = String(result);
      calculator.firstOperand = result;
    }

    calculator.waitingForSecondOperator = true;
    calculator.operator = nextOperator;
    console.log(calculator);
  }

  //this object handles the actual calculations
  const performCalculation = {
    "/": (firstOperand, secondOperand) => firstOperand / secondOperand,

    "*": (firstOperand, secondOperand) => firstOperand * secondOperand,

    "+": (firstOperand, secondOperand) => firstOperand + secondOperand,

    "-": (firstOperand, secondOperand) => firstOperand - secondOperand,

    "=": (firstOperand, secondOperand) => secondOperand
  };

  //changes the display of calculator()
  function display() {
    const updateDisplay = document.querySelector(".calculator-screen");
    updateDisplay.value = calculator.displayValue;
  }
  display();

  const keys = document.querySelector(".calculator-keys");
  // hooks up the keys to return the value associated with them
  keys.addEventListener("click", event => {
    //Object destructuring
    event.preventDefault();
    const { target } = event;
    if (!target.matches("button")) {
      return;
    }
    if (target.classList.contains("operator")) {
      handleOperator(target.value);
      display();
    }

    if (target.classList.contains("decimal")) {
      inputDec(target.value);
      display();
      return;
    }

    if (target.classList.contains("all-clear")) {
      return;
    }
    //When the target is clicked and these functions update the calculator screen
    inputNum(target.value);
    display();
  });
});
