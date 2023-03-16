let marks = [87, 92, 78, 95, 88];

let maxMarks = marks[0];

for (let i = 1; i < marks.length; i++) {
  maxMarks = marks[i] > maxMarks ? marks[i] : maxMarks;
}

console.log("The highest marks scored by any student in the class is: " + maxMarks);
