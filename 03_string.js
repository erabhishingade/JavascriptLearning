var firstName = "Dinesh";
console.log("Given string is ", firstName);

console.log("Total character in the string is: ", firstName.length);

console.log("Char at index 3: ", firstName.charAt(3));

var lengthTotal = firstName.length;

console.log("Char at last index : ", firstName.charAt(lengthTotal-1));

// Function Expression- Storing a function as a value
var myName = function(num1,num2,city){
    var result = num1*num2;
    return result;
}
var res = myName(10,50,"Pune");
console.log(res);

console.log("======== concat() ==========");
var firstName = "Mohit ";
var lastName = "Sharma";
// Concatenation using + operator 
var result = firstName + lastName;
console.log("Concatenation using + operator:", result);

var result = firstName.concat(" Ravesh " ,lastName);
console.log("Concatenation using concat(): ", result);


var greet = "Good Morning";
var indexOf = greet.indexOf("M");
console.log("Index of character M: ", indexOf);

var indexOfNin = greet.indexOf("nin");
console.log("Index of substring nin: ", indexOfNin);


console.log( greet.replace("Mor", "Eve"));

console.log("To upper case", greet.toUpperCase());
console.log("To lower case", greet.toLowerCase());

var greet = "    Good Morning     ";
 console.log("Length ", greet.length);
 var resultTrim = greet.trim();
  console.log( "trim()", resultTrim, "Length: ", resultTrim.length);

console.log("Include() ",greet.includes("Good"));

var greet = "Good Morning";
var resultSlice = greet.slice(0, 4);
console.log("Slice method", resultSlice);

console.log( "slice() with start index ",greet.slice(4));

console.log("slice with negative start index: ", greet.slice(-7));
console.log("slice with negative start and end index: ", greet.slice(-7, -2));

var studList = "Dips|Jenny|Ganni|Manni|Shani";
var studListSplit = studList.split("|");
console.log(" Student list after split by char ,", studListSplit);
console.log("Total number students: ", studListSplit.length);

var studList = "Dips|Jenny|Ganni|Manni|Shani";
var studListSplit = studList.split("|");
console.log(" Student list after split by char ,", studListSplit);
console.log("Total number students: ", studListSplit.length);

var sentence = "Yes you can do it guys, just keep learning and practising as well";
var wordsInSentence =  sentence.split(" ");
console.log(`Total words in sentence string is:  ${wordsInSentence.length}`);


console.log("======== String template ==========");
console.log(`Yes you can do it "Sanket"  `);


var firstName = "Mohit ";
var lastName = "Sharma";
console.log("First name is: "+ firstName + "Last name is: "+ lastName );

console.log(`First name is: ${firstName} and last name is ${lastName}`);



