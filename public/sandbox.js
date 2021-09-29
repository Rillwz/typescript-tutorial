"use strict";
// Functions basics
let greet;
greet = () => {
    console.log("hello, again!");
};
const add = (a, b, c = 10) => {
    console.log(a + b);
};
add(5, 10, "20");
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
const users = (user) => {
    console.log(`${user.name} says hello!`);
};
// -- Function Signatures
// example 1
let gree;
gree = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
