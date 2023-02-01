console.log('Christian Mora')
/*
console.log(`The current counter is 1`)
console.log(`The current counter is 2`)
console.log(`The current counter is 3`)
console.log(`The current counter is 4`)
console.log(`The current counter is 5`)


// example 1 simplify the previous lines using loops

for(let counter = 1; counter <= 5; counter++){
    console.log(`The current counter is ${counter}`)
}

// example 2 print number from 100 to 0, inclusive, decreasing order in a step of 10
for(let y = 100; y >= 0; y -= 10){
    console.log(`y=${y}`)
}

// example 3 print number from intial to 50, exclusive, only even. Prompt user for initial
let num = parseInt(prompt('Enter a number between 0 and 40: '));
for(num; num<50;num++){
    if(num%2===0){
        console.log(`number = ${num}`)
    }
}

// example 4 for loop in an array
let cars = ['Tesla', 'BMW', 'Mazda', 'Nissan', 'Jeep']

for(let i=0; i<cars.length; i++){
    console.log(`car ${i+1} = ${cars[i]}`)
}

// example 5 for .. of loop to print each element in an array
for(let eachItem of cars){
    console.log(eachItem)
}

// example 6 for --- of loop to print each letter in a string
let myString = 'Anzum'
for(let eachLetter of myString){
    console.log(eachLetter)
}

// example 8 nesting for loops
let outerCounter = 1;
for (outerCounter; outerCounter<=5; outerCounter++){
    console.log(`------- OUTER LOOP ${outerCounter} --------`)
    for(let innerCounter = 30; innerCounter>=0; innerCounter -=10){
        console.log(`Inner counter ${innerCounter}`)
    }
}

// example 9 while loop
let z = 1
while (z<=5){
    console.log(`The current number is ${z}`)
    z++
}

// example 10
const SECRET = 8;
let guessNum = parseInt(prompt('Guess a number between 0 and 10'))
if(guessNum === SECRET){
    console.log(`Great Job! Number ${guessNum} is the secret number`)
}
else{
    guessNum = parseInt(prompt('Wrong! Take a guess again! '))
}

// example 11 working with break in a loop... Loop will be terminated when t = 9
for(let t = 20; t>0; t--){
    console.log(`t =${t}`)
    if(t===9){
        break;
    }
}

// example 12 working with continue in a loop/ Loop will skip one iteration when t = 9
for(let t = 20; t>0; t--){
    console.log(`t =${t}`)
    if(t===9){
        continue;
    }
}
*/
// Activity 7

//1

while (true) {
    var num = prompt("Enter a number between 1 and 10:", "");
    if (isNaN(num)) {
      var num = prompt(num + " is not a number. Enter a number again.", "");
    } else if (num < 1) {
      var num = prompt(num + " is less than 1. Enter a number greater than 1.", "");
    } else if (num > 10) {
      var num = prompt(num + " is greater than 10. Enter a number less than 10.", "");
    } else {
      console.log("Your entered " + num);
      break;
    }
  }

//2

while (true) {
    var num = prompt("Enter a number between 1 and 10:", "");
    if (isNaN(num)) {
      var num = prompt(num + " is not a number. Enter a number again.", "");
    } else if (num < 1) {
      var num = prompt(num + " is less than 1. Enter a number greater than 1.", "");
    } else if (num > 10) {
      var num = prompt(num + " is greater than 10. Enter a number less than 10.", "");
    } else {
      console.log("Your entered " + num);
      break;
    }
  }
  
  for (var i = num; i <= 20; i++) {
    console.log(i);
  }


