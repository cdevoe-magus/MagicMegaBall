'use strict';

const numbers = [];
const regNums = 5;
const largestRegNumPow = 69;
const largestRegNumMega = 70;
const largestPowNum = 26;
const largestMegNum = 25
console.log("You give the Magic Mega Ball a shake and stare into the swirling mist inside.");

while (numbers.length < regNums) {
    let candidate = Math.ceil(Math.random() * largestRegNumPow);
    if (!numbers.includes(candidate)) {
        numbers.push(candidate);
    }
    //console.log(numbers);
    //console.log(numbers.length);
}
//console.log(numbers);
numbers.push(Math.ceil(Math.random() * largestPowNum));
//console.log(numbers);
console.log("The mist begins to clear....");
let output = "Your lucky numbers are: ";
numbers.forEach((value) => {
    output += value + " ";
});
console.log(output);

function compareNums(a,b) {
    return a - b;
}
function MegaBall(button) {
    //var outzone = button.parentNode
    let numbers = [];
    let outzone = button.parentNode.childNodes[9];
   // console.log(outzone);
    //console.log(button);
   // console.log(button.parentNode);
    while (numbers.length < regNums) {
        let candidate = Math.ceil(Math.random() * largestRegNumMega);
        if (!numbers.includes(candidate)) {
            numbers.push(candidate);
        }
        //console.log(numbers);
        //console.log(numbers.length);
    }
    //console.log(numbers);
    numbers = numbers.sort(compareNums);
    let mega = Math.ceil(Math.random() * largestMegNum);
    //console.log(numbers);
   // console.log("The mist begins to clear....");
    let output = "";
    numbers.forEach((value) => {
        output += value + " ";
    });
    //output += "And the MegaBall is:  " + mega;
    //console.log(output);
    outzone.innerHTML = outzone.innerHTML + "<il><br>Your lucky Megaball numbers are: <div>" + output + "</div><div style=\"color:red\">" + mega + "</il>";

}

function PowerBall(button) {
    let numbers = [];
    let outzone = button.parentNode.childNodes[9];
    while (numbers.length < regNums) {
        let candidate = Math.ceil(Math.random() * largestRegNumPow);
        if (!numbers.includes(candidate)) {
            numbers.push(candidate);
        }
        //console.log(numbers);
        //console.log(numbers.length);
    }
    //console.log(numbers);
    numbers = numbers.sort(compareNums);
    let power = Math.ceil(Math.random() * largestPowNum);
    //console.log(numbers);
   // console.log("The mist begins to clear....");
    let output = "";
    numbers.forEach((value) => {
        output += value + " ";
    });
    //output += "And the Powerball is: " + power;
    //console.log(output);
    outzone.innerHTML = outzone.innerHTML + "<il><br>Your lucky Powerball numbers are: <div>" + output + "</div><div style=\"color:red\">" + power + "</div></il>";

}

function Clear(button) {
    let outzone = button.parentNode.childNodes[9];
    outzone.innerHTML = "<il>You give the ball a shake and the mists swirl anew.</il>";
}
