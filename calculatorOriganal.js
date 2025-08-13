// Input display
let display = document.getElementById("display");
// Function to append values to the display 
let percent = document.getElementById("percentage");

function appendValues(value) {
    if (value === "c") {
        display.value = "";
    }
    else if (value === 'back') {
        display.value = display.value.slice(0, -1);
    }
    else {
        display.value += value; // Append the value to the display
    }
}

// Calculate the result
function calculate() {
     if (display.value.trim() === "") {
        return; // Do nothing if empty
    }
    try {
        let expression = display.value;

        //replace 50% with 50/100
        // This will convert percentage values to decimal for evaluation
        expression = expression.replace(/(\d+)%/g, "($1/100)");

        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";
    }
}
function appendOperator(op) {
    let lastChar = display.value.slice(-1);
    if ("+-*/".includes(lastChar)) {
        // Replace last operator with new one
        display.value = display.value.slice(0, -1) + op;
    } else if (display.value !== "") {
        display.value += op;
    }
}
function appendValue(num) {
    display.value += num;
}
