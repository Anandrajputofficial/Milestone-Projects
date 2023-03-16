function capitalizeName(name) {
  // Check if the first letter is lowercase using regex
  var isFirstLetterLowercase = /^[a-z]/.test(name);

  // Use the ternary operator to capitalize the first letter if it is lowercase
  var capitalized = isFirstLetterLowercase ? name.charAt(0).toUpperCase() + name.slice(1) : name;

  return capitalized;
}

// Example usage
console.log(capitalizeName("john")); // "John"
console.log(capitalizeName("Sarah")); // "Sarah"
console.log(capitalizeName("jane doe")); // "Jane doe"
