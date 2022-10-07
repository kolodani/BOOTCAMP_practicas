const Math = {};

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	if (b === 0) {
		console.log("No se puede dividir por cero");
	} else {
		return a / b;
	}
}

Math.add = add;
Math.subtract = subtract;
Math.multiply = multiply;
Math.divide = divide;

function hello(name) {
    console.log("Hello ", name);
}

module.exports = Math;