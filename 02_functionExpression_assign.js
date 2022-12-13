var square = function(num){
    console.log("Square of",num, "=", num*num);

}
square(5);
square(6);
square(25);
square(100);

var square = function(num){
    console.log(typeof square);
}
console.log(typeof square);

var rectangle = function(num1,num2){
    console.log(" Area of Rectangle", "=",num1*num2);
}
rectangle (499,917);

function swapvalues (val1,val2){
    console.log("Before Swap",val1,val2);
    var temp = val1;
    val1 =  val2;
    val2 = temp;
    console.log("After Swap",val1,val2);
}
swapvalues("Virat", "Anushka");
swapvalues("1000","2000");

var firstName = "JavaScript";

console.log("Total character in the string is: ", firstName.length);

console.log("Char at index 6: ", firstName.charAt(6));

console.log("Char at index 11: ", firstName.charAt(11));

var lengthTotal = firstName.length;

console.log("Last Char of the string : ", firstName.charAt(lengthTotal-1));

console.log("First Char of the string:", firstName.charAt(lengthTotal-0));








