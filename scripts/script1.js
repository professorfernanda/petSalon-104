let globalVariable = "I am a globla variable";

function myFunction() {
    console.log(globalVariable);

    let localVariable = "I am a local variable";
    console.log(localVariable);
}

function myOtherFunction() {
    console.log(globalVariable);

    //console.log(localVariable);
}

//myFunction();
//myOtherFunction();

/* A funtion with a text as parameter */

function greet(name) {
    console.log("Hello, " + name);
}

greet("Miguel");

/* A function with numbers as parameters  */
/* Add Numbers: num1 + num2 */

function addNumbers(num1, num2) {
    let result = num1 + num2;
    return result;
}

let result1 = addNumbers(2, 3);
console.log(result1)

/* Challenge 1 - Double Number */
function doubleNumber(num) {
    return num * 2;
}

let result2 = doubleNumber(2);
console.log("The Double of the Number is " + result2);
