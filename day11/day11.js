console.log("Christian Mora")
//Example 1
function msg(){
    console.log(`Hello World!`)
}
msg() // calling function msg()
msg()
msg()

//example 2
function printCount(){
    for(let i = 3; i>0 ; i -= 1){
        console.log(`Counting = ${i}`)
    }
}

//example 3
function greeting(name){
    console.log(`Welcome to the program ${name}`)
}

//example4
function upperMessage(message){
    let upper = message.toUpperCase();
    console.log(upper)
}

let user = prompt(`Enter a message`)
upperMessage(user);

//example 5
function greet(firstName, lastName){
    console.log(`Welcome ${firstName} ${lastName[0].toUpperCase()}`)
}

//example 6
function printMsg(message, numCount){
    for(let counter = 1; counter<=numCount; counter++){
        console.log(`Counter = 
        ${counter} = ${message}`)
    }
}

//example 7
function isSnakeEyes(dice1, dice2){
    if(dice1===1 && dice2===1){
        console.log("Snake Eyes!")
    }
    else{
        console.log("Oops! Not snake eyes!")
    }
}

//example8
function sumXY(){
    let x = 7, y = 3;
    return x+y
    console.log(`This line is after the return`)
}

//example9 - function with parameter and return value
function doubleNumber(number){
    letdNumber = number*2
    return dNumber
    dNumber = number*3
    
}

//example10 - function with parameter and return value
function sumNum(num1, num2){
    let sum = num1+num2
    return sum
}

let a = -5, b = 8, c = 2

let number1 =sumNum(b,c)
let number2 = sumNum(a,c)

//number 11
function weather(temperature){
    if(temperature>=75){
        return true
    }
    else{
        return false
    }
}

let userWeather = parseInt(prompt(`Ask the user to enter a temperature`))
let userT = weather(userWeather)


//example 12 array as an argument in a function
function lastElement(arrayInput){
    if(arrayInput===undefined){
        return "You didnt enter an array"
    }
    else if(arrayInput.length !==0){
        let lastIndex = arrayInput.length - 1
        return arrayInput[lastIndex]
    }
    else{
        return "Array is empty"
    }
}
let array1 = ['lion', 23, false, 'orange, 89']
let arrayAnswer = lastElement (array1)

//example13 JS Build-in function
let num = Math.PI

//example 14 random number between 10 and 20
function pickNum(){
    let pick =10 +  Math.round(Math.random ()*10)
    return pick
}