function countVowels(name) {
  var vowelCount = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  for (var i = 0; i < name.length; i++) {
    if (vowels.indexOf(name[i].toLowerCase()) !== -1) {
      vowelCount++;
    }
  }

  return vowelCount;
}

var name = "Anand";
var numVowels = countVowels(name);
console.log("The number of vowels in your name is: " + numVowels);
