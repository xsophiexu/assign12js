// 05-randomWords.js
// Create an array of strings and use random() to select random entries and add
// them to a sentence, printing the result to the console.

var nice = ["enjoyable", "pleasant", "pleasurable", "agreeable", "delightful", "satisfying", "gratifying", "acceptable",
"to one's liking", "entertaining", "amusing", "diverting", "marvelous", "good", "bonny", "lovely", "great", "neat"]
var r1 = Math.floor( Math.random() * nice.length);
var r2 = Math.floor( Math.random() * nice.length);

console.log("Hope you're having a", nice[r1] + ",", nice[r2], "day!");
