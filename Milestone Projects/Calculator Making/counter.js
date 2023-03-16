function calculator(num1, num2, operator) {
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      console.log("Invalid operator");
      return;
  }

  console.log("Result:", result);
}

// Example usage
calculator(55, 8, '+'); // Output: Result: 63
calculator(7, 2, '-'); // Output: Result: 5
calculator(9, 22, '*'); // Output: Result: 198
calculator(30, 6, '/'); // Output: Result: 5
calculator(400, 2, '%'); // Output: Invalid operator
