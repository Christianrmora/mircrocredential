console.log(`Christian Mora`);
/*
console.log(`The current counter is 1`); 
console.log(`The current counter is 2`); 
console.log(`The current counter is 3`); 
console.log(`The current counter is 4`); 
console.log(`The current counter is 5`); 

//simplify the previous lines using loop
for(let counter = 1 ; counter<=5;counter++){
    console.log(`The current counter is ${counter}`)
}
// Example 2) print number from 100 to 0, inclusive decreasing order in a step of 10
for(let y = 100; y >= 0; y -= 10){
    console.log(`y = ${y}`)
}

//Example) print number from 0 to 50, exclusive, only even numbers. The program will ask the user to enter the initial 
let num = parseInt(prompt(`Enter a number between 0 and 40:`));

for(num;num<50;num++){
    if(num%2===0){
      console.log(`number = ${num}`)
    }
}

//example 4 for loop in an array
let cars = [`Tesla`, `BMW`, `Mazada`, `Nissan`, `Jeep`]
for (let i=0; i<cars.length ; i++){
    console.log(`car ${i+1} = ${cars[i]}`)
}

// example 5 for ... of loop to print each element in an array 
for(let eachItem of cars){
    console.log(eachItem)
}
// Example 6 for - - - of loop to print each letter in a string
let myString = "Prof Wu."
for(let eachLetter of myString){
    console.log(eachLetter)
}

//example 8
let outerCounter = 1;
for (outerCounter; outerCounter<=5; outerCounter++){
    console.log(`-------- OUTER LOOP ${outerCounter} --------- `)
    for(let innerCounter = 30; innerCounter>=0; innerCounter -= 10 )
    console.log(`Inner counter ${innerCounter}`)
}
//example 9 while loop

let z = 1
while(z<=5){
    console.log(`The current number is ${z}`)
    z++
}

// example 10
const SECRET = 8;
let guessNum = parseInt(prompt(`Guess a number between 0 and 10`))
if(guessNum === SECRET){
    console.log(`Great Job! Number ${guessNum} is the secret number`)
}
else{
    guessNum = parseInt(prompt(`WRONG! Take a guess again!`))
}

if (guessNum === SECRET){
    console.log(`GREAT JOB! Number ${guessNum} is the secret number`)
}

//example 11 working with break in a loop. loop will be temrminated when t = 9
for(let t = 20; t>0 ; t--){
    console.log(`t = ${t}`)
    if(t===9){
        break;
    }
}

//example12 working with continue in a loop. loop will skip one iteration when t = 9
for(let t = 20; t>0 ; t--){
    if(t===9){
        continue;
    }
    console.log(`t = ${t}`)
}
*/

let num2 = parseInt(prompt(`Enter a number between 1 and 10:`));
let anotherNum = isNaN(num2)


while (anotherNum===true || num2<0 || anotherNum>10){
    if (num2<0){
        num2=parseInt(prompt(` Invalid entry. Enter a number between 1 and 10 `))
    }
    else if (num2>10){
        num2=parseInt(prompt(`Invalid entry. Enter a number between 1 and 10`))
    }
    else{
        num2=parseInt(prompt(`Invalid entry, this is a string. Enter a number between 0 and 10`))
    }
}

console.log(`you entered ${num2}`)

for(let counter = num2 ; counter<=20;counter++){
    console.log(`Number is ${counter} now`)}