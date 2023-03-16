// Define the number of rows for the pattern
const numRows = 6;

// Loop through each row of the pattern and print the appropriate number of asterisks
for (let i = numRows; i > 0; i--) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row += "*";
  }
  console.log(row);
}
