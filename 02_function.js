
function display() {
    console.log("My college name is: BIGCE Solapur ");

}
display();

function swapvalues(value1,value2){
     console.log("Befopre swap", value1, value2);
     var temp = value1;
       value1 = value2;
       value2 = temp;
     console.log("After swap", value1, value2);
}
swapvalues(100, 200);
swapvalues(2,4);
swapvalues("Kishor", "Hitesh");
swapvalues("You","Me")

function hello(myName){
    console.log(myName);
}
hello("Sachin")

console.log("Function With arguments and return value");
function raajuBhaiya(paisa){
    console.log("Going in market", paisa);
    console.log("Purchased fresh Vegetable",paisa);
    console.log("Come back");
    return "Bag of Vegetables";
}

var bagofvegetables = raajuBhaiya(100);
console.log(bagofvegetables);

console.log("");



