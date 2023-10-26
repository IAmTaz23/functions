// keyword functionName (parameters)
function sayHello (){
    console.log("Hello!")
}

function printLetter(){
    console.log("b")
}

console.log("a")
printLetter()
console.log("c")
console.log("d")

//how to call a function
sayHello()

// Funcion Parameters - Passing values into our function

// keyword functionName (Parameter)
function greeting(name){
    console.log ("Hello", name)
}
// functionName (argument)
greeting("Devan")
greeting("li")
greeting("Brooke")

function nameAndAge(name, age){
    console.log(`${name} is ${age}years old`)
}

nameAndAge("Devan", 31)
nameAndAge("Tom", 39)
nameAndAge("BOb", 45)

// Make sure order is correct for your parameters
nameAndAge(45,"Todd")

// Make a function that multiples two numbers together

function multiplyNumbers(number1, number2){
    return number1 * number2
}
let problem = multiplyNumbers(3, 3) +3
console.log(problem)

// Make a function that makes a string that says "Your array is _ elements long"

let vehicles = ["Cars", "Tracks", "Vans", "Suvs"]
let fruit = ["Apples", "Oranges", "Bananas"]
let animals  = ["Dogs", "Cats", "Birds", "Fish", "Bugs"]

function getArrayLength(array){
   
    const arrayLength = array.length

    console.log(`Your array is ${arrayLength} elements lomg`)
}

getArrayLength(vehicles)