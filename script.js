const num1 = parseInt(prompt("Number 1: "));
const num2 = parseInt(prompt("Number 2: "));
const operator = prompt("Operator: ");

if (operator === "+") {
    alert(num1 + num2);
} else if (operator === "-") {
    alert(num1 - num2);
} else if (operator === "*") {
    alert(num1 * num2);
} else if (operator === "/") {
    alert(num1 / num2);
} else {
    alert("Error: Wrong operator. Allowed operators are +,-,*,/")
}

alert("Reload page to perform another operation")