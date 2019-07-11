$(document).ready(() => {
  const calculator = {
    displayValue: "0",
    firstOperator: null,
    waitingForSecondOperator: false,
    operator: null
  };
  // this displays the actual number pressed on calculator screen
  function inputNum(digit) {
    const { displayValue } = calculator;
    // Overwrite the display value if there is nothing in it, otherwise append to it
    // pull displavalue out of calculator in order to use it as a variable
    //Is 0 a digit, if so change displayVale to that digit
    calculator.displayValue =
      displayValue === "0" ? digit : displayValue + digit;
  }
  //changes the display of calculator()
  function display() {
    const updateDisplay = document.querySelector(".calculator-screen");
    updateDisplay.value = calculator.displayValue;
  }
  display();

  const keys = $(".calculator-keys");
  // hooks up the keys to return the value associated with them
  keys.on("click", function(e) {
    //Object destructuring
    e.preventDefault();
    const { target } = e;
    if (!target.matches("button")) {
      return;
    }
    if ($(target).hasClass("operator")) {
      return;
    }
    if ($(target).hasClass("decimal")) {
      return;
    }
    if ($(target).hasClass("all-clear")) {
      return;
    }
    //When the target is clicked and these functions update the calculator screen
    inputNum(target.value);
    display();
  });
});
