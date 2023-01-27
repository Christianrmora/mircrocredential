
console.log('Christian Mora');
// if statement
let day = true;
let night = false;

if (day) {
    console.log(`The condition or statement is ${day}`)
}

let num1 = '20'; //string data
let num2 = 20; // numerical data

if (num1 === num2) {
    console.log(`${num1} and ${num2} are exactly equal to!`)
}

// example 1 = TRUE bc it is not equal too
let goodMood1 = true;
let gotSleep1 = false;

if (goodMood1 !== gotSleep1) {
    console.log('Today is a good day!')
}
console.log('I am moody!');
// example 2 = FALSE because both varibale are equal too each other and both are supposed to be false according to the if STATEMENT
let goodMood2 = true;
let gotSleep2 = true;

if (goodMood2 !== gotSleep2) {
    console.log('Today is a good day!2')
}
// Line 33 shows no matter if the statment is true or false bc it is outside the curvy brackets. But if else STATEMENT is placed it will turn into a block of code and display the else STATEMENT
else {
    console.log('I am moody!2');
}

// != statement  only check the values to see if they are not equal to eachother and the !== checks the data and number type if they are equal to give you a true or false.

// It is better to use the !== bc it will check both data type and numerical value. 

// example 3 === checks for data and value type! STATEMENT has to be exactly the same which is why else STATEMENT would be displayed
let a = 5, b = 4, equalNum;
if (a === b) {
    equalNum = true
}
else {
    equalNum = false;
}
console.log(`Are the numbers the same? ${equalNum}`)

// example 4 this is whole block of code so if one is correct it will skip the others
let n1 = 5, n2 = 8;
if (n1 === n2) {
    console.log('The numbers are equal')
}
else if (n2 > n1) {
    console.log('number 1 is less than number 2')
}
else {
    console.log('INVALID ENTRY')
}

// example 4
let n3 = 5, n4 = 5;
if (n3 === n4) {
    console.log('The numbers are equal')
}
else if (n4 > n3) {
    console.log('number 3 is less than number 4')
}
else {
    console.log('INVALID ENTRY')
}

// example 5 shift + alt + f to center code

let colors = ['red', 'blue', 'yellow', 'orange'];
let userPick = parseInt(prompt('Select a color from 1 to 5'));
let selectColor = colors[userPick - 1]

if (selectColor === 'red') {
    console.log('The selected color is red')
}
else if (selectColor === 'blue') {
    console.log('The selected color is blue')
}
else if (selectColor === 'green') {
    console.log('The selected color is green')
}
else if (selectColor === 'yellow') {
    console.log('The selected color is green')
}
else if (selectColor === 'orange') {
    console.log('The selected color is green')
}
else {
    console.log(`You selected color number ${userPick} which is not in the list!`)
}
// exmaple 5

let userInput = prompt('Enter a number');
let checkInput = parseInt(userInput);
checkInput = isNaN(checkInput);

if (checkInput) {
    console.log(`${userInput} is a string or character`)
}
else {
    console.log(`${userInput} is a number!`)
}

// example 6

let password = prompt('enter a password: ')
if (password.length >= 6) {
    console.log('Password has 6+ characters: ')
    if (password.indexOf(' ') === -1) {
        console.log(`Great! passwprd = ${password} has no space`)
    }
    else {
        console.log(`Warning password = ${password} has SPACE!`)
    }
}
    else {
    console.log('password has less than 6 characters!')
}
// example 7

let name1 = prompt('Enter a name!')

if(name1){
    console.log(`Welcome to the program ${name1}`)
}
else{
    console.log('You did not enter a name! ')
}

// ACTIVIITY 6

let useriNput = prompt('Enter a number or string');
let checkinput = parseInt(useriNput);
let checkString = isNaN(checkinput);
let negNumber = checkinput < 0

if (checkString) {
    console.log(`${useriNput} is a string`)
}
else if (checkinput > 0) {
    console.log(`${useriNput} is a positive number`)
}
else if (negNumber < 0) {
    console.log(`${useriNput} is negative!`)
}
else {
    console.log('Number is less than 0')
}
