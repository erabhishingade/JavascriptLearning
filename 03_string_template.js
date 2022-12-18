console.log(`My dream company is "Google"`);

var myhobby1 = "Playing Badminton";
var myhobby2 = "Excercise";
var myhobby3 = "Travelling";

console.log(`My hobbies are : ${myhobby1} ${myhobby2} ${myhobby3}`);
console.log(`Playing Badminton Excercise Travelling`);


console.log("     Hey you are doing Good, Keep it up       ");

var stringHandson ="     Hey you are doing Good, Keep it up       "
console.log("length",stringHandson.length);

console.log("trim()",stringHandson.trim());

var resultTrim = stringHandson.trim();
console.log("trim()",resultTrim.length);

var stringHandson ="     Hey you are doing Good, Keep it up       "
var resultSlice1 = stringHandson.slice(5, 8);
var resultSlice2 = stringHandson.slice(36, 44);
console.log("Slice with first char and last char", resultSlice1, resultSlice2);

var stringHandson ="Hey,you,are,doing,Good,Keep,it,up"
var stringHandsonSplit = stringHandson.split(",");
console.log("Total numbers of words after split by char ,",stringHandsonSplit);

console.log("Total number of words", stringHandsonSplit.length);

var sentence ="Hey you are doing Good Keep it up";
var wordsInSentence =  sentence.split(" ");
console.log(`Total words in sentence string is:  ${wordsInSentence.length}`);


var stringHandson = "     Hey you are doing Good, Keep it up       ";
var indexOf = stringHandson.indexOf("Good");
console.log("Index of word Good: ", indexOf);

var stringHandson = "Hey you are doing Good, Keep it up"
console.log("check string ends with word:", stringHandson.endsWith("up"));

var stringHandson ="Hey you are doing Good, Keep it up"
console.log("check string start with word:", stringHandson.startsWith("Hey"));















