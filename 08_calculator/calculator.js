const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	let sum = 0;
  for(const num of array) {
    sum += num;
  }
  return sum;
};

const multiply = function(array) {
  let result = 1;
  for(const num of array) {
    result *= num;
  }

  return result;
};

const power = function(num, exponent) {
  let result = 1;
  for(let i = 0; i < exponent; i++) {
    result = result * num;
  }

  return result;
};

const factorial = function(factorialNum) {
	if(factorialNum === 0) {
    return 1;
  }

  return factorial(factorialNum - 1) * factorialNum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
