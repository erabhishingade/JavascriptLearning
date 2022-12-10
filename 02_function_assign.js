function display(){
    console.log("My Father name is: Sanjay Shingade");
    console.log("My Mother name is: Sandhya Shingade");
}
display();

function personaldetails(firstName, lastName){
    console.log(firstName,lastName);
}
personaldetails("Abhishek", "Shingade")

function swapvalues (value1,value2){
    console.log("Before swap", value1,value2);
    var temp = value1
    value1 = value2
    value2 = temp
    console.log("After swap", value1,value2);
}
swapvalues("virat","Anushka");
swapvalues("1000","2000")

function add(val1, val2, val3){
    console.log(val1 + val2 +val3);
}
add(10.23,600,40);

function values(){
    console.log("Hello","Good","Morning");
}
values("Hello","Good","Morning");

