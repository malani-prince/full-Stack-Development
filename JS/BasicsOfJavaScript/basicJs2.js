// Channel -->  freeCodeCamp Tutorial [7 hr and 44 min Video]

// -------------------- Project-1: passenger Counter Code --------------------
/** */
// L1 to L4
// DOM methods [Not Cover Yet]
// document.getElementById("count-el").innerHTML = 5

// Variable with let keyword
let count = 0

// Console.log in the method in JavaScript which is built-in debugging and development tool
/** */// Console => Object
// log => inside Method
console.log(count)

// Create the Variable, myAge and set its value to your age
let myAge = 12
/** */
// log the myAge variable to the console
console.log(myAge)


/** */
// L5: Basic Math Operations
let firstBatch = 9
let secondBatch = 10
/** */console.log(firstBatch + secondBatch)
/** */// let count1 = 5 + 7
/** */// let count2 = 5 * 7
/** */// let count3 = 5 - 7
// let count4 = 5 / 7

// 1 human year  = 7 dog year
myAge = 10
let humanDogAgeRatio = 7
let myDogAge = myAge * humanDogAgeRatio
console.log(myDogAge)



/**  
 * L6: Reassigning And Increment 
*/
let a = 5 + 4
// change the value of the a
a = 3
a = a + 1
a += 1
a -= 1

let bonusPoint = 50
bonusPoint = bonusPoint + 100
console.log("increased 100: ", bonusPoint)
bonusPoint = bonusPoint - 25
console.log("Decreased 25: ", bonusPoint)
bonusPoint = bonusPoint + 70
console.log("increased 70: ", bonusPoint)


/** */
// L7: Adding a Button
//  --->  add button in the html file and modify the CSS property


/** */
// L8: The Onclick Even Listener
/** */// initialize the value with Zero
// let count1 = 0

// function increment() {
//     console.log("button was Click")
// }


/** */
// L9: Use Function to write less Code
// Race car game

function carRaceCountDown() {
    console.log(1)
    console.log(2)
    console.log(3)
    console.log(4)
    console.log(5)
}
// Function Calling 
console.log("\nCar Race Start 🏁")
carRaceCountDown()
console.log("\nCar Race Start 🏁")
carRaceCountDown()


/** */
// L10: writing the First Function
function myFirstFunction() {
    console.log(65)
}
console.log("My First Function is Calling")
myFirstFunction()


/** */
/** */// L11: Write a Function that Logs the sum
// let is a Block Scope Variable its existence  present with in a block outside the block it not exist
// Global Scope
let lap1 = 34
let lap2 = 78
let lap3 = 23
function returnSumValue() {
    // Local Scope
    let localTime
    return lap1 + lap2 + lap3
}
console.log(returnSumValue())



/** */
// L12: Increment Function
let lapsComp = 0
function completedLaps() {
    return lapsComp += 1
}

console.log(completedLaps())
console.log(completedLaps())
console.log(completedLaps())



/** */
/** */// L13: Increment on Click
// L14: display the Count
// let count1 = 0

// function increment() {
//     count1 += 1
//     document.getElementById("count-el").innerHTML = count1
//     console.log("button was Click")
// }


/** */
// L15: the DOM <document Object Model> || L16: display the count with innerText
//        <HTML File>,<Js Object><Representation>
// How you use your java script for Modify the website


/** */
// L17: Create the saveButton
// function save() {
//     console.log(count1)
//     // this function logs the count when its called
// }


/** */
/** */// L18: What is String ?
// L19: First String Variable
let userName1 = "per"
/** */let userName2 = 'per'
// let userName2 = 'per" [Give Error`]
console.log("\nFirst String Var Print:---> ", userName1)

// + concat the two strings [Also multiple]
let message = "You have three new notification"
console.log(message + ", " + userName1, "!")

let messageToUser = "\ncontains the message we have logged in!"
console.log(messageToUser)


/** */
// L20: Log a greeting to the console 
let myName = "Prince Malani"
let greeting = "Hello, Mr. "

console.log(greeting + myName)


/** */
// L21: String vs. Numbers
myName = 34
let myGreetingIsTo = greeting + myName
console.log(myGreetingIsTo)

/** 
 * String Always Win [int and string in any formate string Always win the match] 
*/
let points = 3
let bonusPoint1 = "10"
let totalPoints = points + bonusPoint1

console.log(totalPoints) // 310   "3" convert into String 
console.log(bonusPoint1 + points) // 103

console.log(4 + 4)  //8
console.log("4" + "4") // 44
console.log("4" + 1)   // 41
console.log("4" + 100)   //4100


/** *//** */
// L22: Render the Welcome Message
function printUserName() {
    let welcomeEl = document.getElementById('welcome-el')
    let name = "Prince Malani"

    welcomeEl.innerText = greeting + name

    /** *//** */
    // L23: improve the message with string Concatenation
    // Add the new text in the html page using JS
    welcomeEl.innerHTML = welcomeEl.innerHTML + "👋"
}


/** */
// L25: Creating the save Feature
/** */
// L26: Debugging online
// 27: Set Count at Zero
// let saveEle = 

let count1 = 0

function increment() {
    count1 += 1
    document.getElementById("count-el").innerHTML = count1
    console.log("button was Click")
}
function save() {
    let countStr = count1 + " - "
    document.getElementById('save-el').innerHTML += countStr

    count1 = 0
    document.getElementById("count-el").innerHTML = count1

}

/**
 * 1) Script tag
 * 2) variable [datatype - 1]
 * 3) strings [datatype - 2]
 * 4) console.log()
 * 5) functions
 * 6) The DOM
 * 7) grtElementById()
 * 8) innerTEXT
 * 9) textContent
 */




// --------------- Section - 2: Practice --------------- //

/** */
// L1: variable practice
let firstName = "Prince"
let lastName = "Malani"
let combinationOfName = firstName + lastName
console.log(combinationOfName)

// L2: concatenate two string in a function

let lName = "linda"
let gMean = "how are you"

function greetLinda() {
    console.log(lName + " ", gMean)
}

greetLinda()

// L3: Increment and decrement
let myIncPoint = 3
function Inc() {
    myIncPoint += 3
}

function Dec() {
    myIncPoint -= 1
}

// L4: Prediction of the Numbers
console.log("2" + 2) //22
console.log(11 + 2) //13
console.log(11 + "7") //117
console.log("my Position ", 11 + "7")  //my position 117
console.log("my Position ", 10 + 8)  //my position 108
console.log(2 + 2) //4
console.log(2 + "15") //215



// L5: Rendering an Error Message
function clickEventWhenClick() {
    document.getElementById('error').innerText = "somethings went wrong please try again later"
}



// L6: Cal Challenge
let num1 = 8
let num2 = 2

// document.getElementById('num1-el').textContent = num1
// document.getElementById('num2-el').textContent = num2

function elementSum() {
    let answerOfSum = num1 + num2
    document.getElementById('sum-el').innerHTML = num1 + " + " + num2 + " = " + answerOfSum
}
function elementSub() {
    let answerOfSum = num1 - num2
    document.getElementById('sum-el').innerText = num1 + " - " + num2 + " = " + answerOfSum
}
function elementMul() {
    let answerOfSum = num1 * num2
    document.getElementById('sum-el').innerText = num1 + " * " + num2 + " = " + answerOfSum
}
function elementDiv() {
    let answerOfSum = num1 / num2
    document.getElementById('sum-el').textContent = num1 + " / " + num2 + " = " + answerOfSum
}



/**
 * 
 *  --------- Session 3: Build BlackJack Game
 * 
 */



// L1 & L2: Add the FirstCard, SecondCard and Sum
let firstCard = 11
let secondCard = 10

let sumOfTwoCard = firstCard + secondCard
console.log(sumOfTwoCard)



// L3: if...else statements
// A ====> 11
// K ====> 10
// hand < 21 [😪]
// hand == 21 [🥳]
// hand >= 21 [🥲]
if (sumOfTwoCard < 21) {
    console.log("Do you want to Draw")
} else if (sumOfTwoCard === 21) {
    // "===" => //strictly equal
    console.log("yehh.. You have Black jack")
} else /*if (sumOfTwoCard > 21)*/ {
    console.log('You out of game')
}




// L4: first if...else statement
// L5: Logic [Build]
// L6: make the condition for the Black Jack
// L7: Add the hasBlackJack variable
// L8: Add the isAlive variable 

let age = 22
if (age <= 21) {
    console.log('You have no rights to enter in Club')
} else {
    console.log('You can enter in the club')
}

let surpriseCard = 12
if (surpriseCard < 100) {
    console.log("not elegible")
} else if (surpriseCard === 100) {
    console("yehh, Champ you made it hear is your card")
} else {

    console.log("you already Receive!")
}


// Create a startGame() function.
// L9: Let's practice boolean conditions
// L10 | L11 [Basic Conditional] | L12 [CSS] | L13 [CSS] | L14 [Display the Message] | L15 [Display the Sum]
// L17: New Card button | L18


// Generate the Random Number in JS
let randomNumber = Math.floor(Math.random() * 6)
// multiply with 6 ---> value range is  [0.000 -> 5.9999...]  
// Math.floor ---> int Value Conversion

let floorExample = Math.floor(23.334)

// console.log("\n\n" + floorExample)
// console.log(randomNumber + "\n\n")

function rollDies() {
    return Math.floor(Math.random() * 6 + 1)
}

function getRandomCard(randomNumber) {
    // from 0.000 -> 0.9999 (0 to 1  with out one)
    let rVal = Math.floor(Math.random() * 13) + 1
    if (rVal > 10) {
        return 10
    } if (rVal === 1) {
        return 11
    } else {
        return rVal
    }
}


let blackJackMessage = ""
let hasBlackJack = false
let isAlive = false

let playerData = {
    "Name": "Prince Malani",
    "Chip": 234
}
// let playerData = {
// Name: "Prince Malani",
//     Chip: 234
// }

// let playerEle = document.getElementById('player-el')
// playerEle.textContent = playerData['Name'] + ": $" + playerData['Chip']


function startGame() {
    isAlive = true
    let blackJackGameCardValue1 = getRandomCard()
    let blackJackGameCardValue2 = getRandomCard()
    let blackJackGameArray = [blackJackGameCardValue1, blackJackGameCardValue2]
    let blackJackGameSum = blackJackGameArray[0] + blackJackGameArray[1]
    renderGame()
}

function renderGame() {
    let messageEL = document.getElementById('message-el')

    if (blackJackGameSum <= 20) {
        blackJackMessage = "\nBlackJack Game Results:\n\nDo you want to draw a new card ? 🤔"
    } else if (blackJackGameSum === 21) {
        hasBlackJack = true
        blackJackMessage = "\nBlackJack Game Results:\n\nWohoo! you've got Blackjack 🥳"
    } else {
        isAlive = false
        blackJackMessage = "\nBlackJack Game Results:\n\nYou're out of the game! 🥲"
    }

    messageEL.innerHTML = blackJackMessage
    document.getElementById('sum-el').textContent = "Sum: " + blackJackGameSum

    document.getElementById('card-el').textContent = "Cards: "

    for (let i = 0; i < blackJackGameArray.length; i++) {
        document.getElementById('card-el').textContent += blackJackGameArray[i] + " "
    }
    console.log(blackJackMessage)
}

function newCard() {

    // only allow the player to get a new card if she Is Alive and does not have  blackjack

    if (isAlive === true && hasBlackJack === false) {
        let newCardValue = getRandomCard()
        console.log(newCardValue)
        blackJackGameArray.push(newCardValue)
        blackJackGameSum += newCardValue
        renderGame()
    }

}

// console.log("\ncheck the Boolean variable:")
// console.log(3 > 6) //false
// console.log(3 === 6) // false
// console.log(4 < 6) //true
// console.log(4 <= 44) // true
// console.log(3 < 0) //false




// L21: Array introduction
// L22: Indexing
// L23: Array with multiple Data types
// L24: Add and remove the items from the array
// L25: Card Array  =>  Refer the Above code 
// L26: change the code [HCJ]

let featurePost = [
    "Check out my netflix",
    "Here the code of my project",
    "relaunch my portfolio"]
let experience = [
    "CEO at wf",
    "full stack developer"
]
console.log("\nArray Indexing:" + "\n\n" + featurePost[0])
console.log(featurePost[1])
console.log(featurePost[2])
console.log(featurePost[3]) // undefineFFF
console.log("\ntotal length: ", featurePost.length)

// Any type of data type Possible [Composite DataType | Complex DataType]
// [Strings | Boolean | String] ==> [Primitive Blocks]
let myProfile = [
    "Malani Prince",
    "Yes I Like Pizza",
    20,
    false
]

let cards = [7, 4]

// push ==> add the element
cards.push(3)
console.log("\nAdd New Element:" + "\n" + cards)

experience.push("qwertyup ASDFGHJKL ZXCVBNM")
console.log(experience)

// Remove the Last items in the array
console.log("\nRemove the Last element: ")
experience.pop()
console.log(experience)


// L27: how to count in Js
// L28: Basic - Above
// L29: Loops and Array
// L30: Practice
// L31 to L33: Modification on Game
// L34: Returning values in Function
// L35 to L42: Using Function set the card value
// L43: Assign Value in the statGame function [Above]

for (let count = 1; count < 11; count += 2) {
    // console.log(count, "\t")
}

for (let count = 1; count < 21; count += 4) {
    // console.log(count, "\t")
}

console.log("\n")
for (let i = 0; i < experience.length; i++) {
    console.log(experience[i])
}

let praArray = [1, 23, 34, 45]
let sum = 0
for (let i = 0; i < praArray.length; i++) {
    sum += praArray[i]
}
console.log(sum)

// L31: Array, Loop, DOM
// let sentenceVar = [
//     "Hello",
//     "my",
//     "name",
//     "is",
//     "per"
// ]

// let greetingEl = document.getElementById("greeting-el")

// for (let i = 0; i < sentenceVar.length; i++) {
//     greetingEl.textContent +=sentenceVar[i] + " "
// }


let player1Time = 102
let player2Time = 120

function getFastTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else {
        return player2Time
    }
}

let fasterRace = getFastTime()
console.log(fasterRace)



// L45: Logical Operator (&&)
// L46: Logical Operator [Pra]
// L47: Logical Operation (||)
// L47: Logical Operation [Pra]
let completedTheCourse = true
let givesCertificates = true

if (completedTheCourse && givesCertificates) {
    generateCertificate()
}

function generateCertificate() {
    console.log("generating Certificate........!")
}

let hasSol = false
let hasHint = true


// Or operation performs
if (hasSol === false || hasHint === true) {
    getItems()
}
function getItems() {
    console.log("qwertyuiop asdfghjkl zxcvbnm")
}
let likeDocumentaries = true
let likeStartUps = false
if (likeDocumentaries === true || likeStartUps === true) {
    getItems()
}


// L48: only trigger newCard() if you're allowed to
//  Show the above code 


// L49 to L52: Object Intro | and Modification in main code 
let courseData = {
    title: "Grid",
    lessons: 10,
    level: 3,
    length: 63,
    creator: "Malani Prince",
    isFree: true,
    tags: [
        "html",
        "css"
    ]
}

// dot notation: [Use this]
console.log(courseData.level)
console.log(courseData.we)  // undefine 


// L53: Methods on Object
// Function inside the object

let playerDetails = {
    sayHello: function () {
        name: "er",
            console.log("hello....")
    }
}

playerDetails.sayHello()


//  L54: Recap
/**
 * Array
 * Objects
 * Booleans
 * if...else statement
 * comparison operator
 * logical operators [&& | ||]
 * For loop
 * Math Object
 * return statement 
 */


/**
 * 
 * -----------> practice for module 3 <-----------
 * 
 */

// Object
let testObj = {
    name: "malani prince",
    age: 12,
    country: "India"
}
function logData() {
    console.log(testObj.name + " is " + testObj.age + " old and lives in " + testObj.country)
}
logData()

// if....else
let testAge = 27
let ex = ""
if (testAge < 6) {
    ex = "free"
} else if (testAge >= 6 && testAge <= 17) {
    ex = "Child discount"
} else if (testAge >= 18 && testAge <= 26) {
    ex = "Student Discount"
} else if (testAge >= 27 && testAge <= 66) {
    ex = "Full price"
} else if (testAge > 66) {
    ex = "senior citizen Discount"
}
console.log(ex)

// loops: Push, Pop, Unshift, Shift Challenge
let largestCounties = [
    "China",
    "India",
    "USA",
    "Indonesia",
    "UAE"
]
for (let i = 0; i < largestCounties.length; i++) {
    console.log("- ", largestCounties[i])
}
largestCounties.push("Dubai")  // Add Dubai at the end part
console.log(largestCounties)
largestCounties.pop() // Remove Dubai from the end part
console.log(largestCounties)
console.log("\n")
largestCounties.unshift("Germany") // Add the element from the start
console.log(largestCounties)
largestCounties.shift() // Remove the first element form the array
console.log(largestCounties)

// Logical Operation
let dayOfMonth = 13
let weekDay = "friday"

if (dayOfMonth === 13 && weekDay === "friday") {
    console.log("Spooky Face loges out")
} else {
    console.log("qwertyuiop asdfghjkl zxcvbnm")
}

// Rock Paper Scissors

let hand = ["🪨", "✂️", "📃"]

let player2 = hand[Math.floor(Math.random() * 3)]
let player1 = hand[Math.floor(Math.random() * 3)]

if ((player1 == "✂️" && player1 == "✂️") && (player1 == "🪨" && player1 == "🪨") && (player1 == "📃" && player1 == "📃")) {
    console.log("tie")
}
else if (
    (player1 == "✂️" && player2 == "📃") ||
    (player1 == "📃" && player2 == "🪨") ||
    (player1 == "🪨" && player2 == "✂️")
) {
    console.log("player-1 is Winner 👦")
}
else {
    console.log("player-2 is Winner 👧")
}


// Copy the object from JS to HTML
let fruits = ["🍎", "🍊", "🍎", "🍊", "🍎", "🍊", "🍎", "🍊", "🍎", "🍊", "🍎", "🍊", "🍎", "🍊", "🍎", "🍊"]

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === "🍎"){
        document.getElementById('apple-shelf').textContent += fruits[i]
    }
    else if (fruits[i] === "🍊"){
        document.getElementById("orange-shelf").textContent += fruits[i]
    }
    else{
        console.log("gh")
    }
}




/**
 * 
 * ---------------> Build the Chrome Extension <--------------b-
 * 
 */

// L1: Lets Built chrome Extension 
//  Introduction to the chrome Extension

// L2: Add Button and Input Tag
// L3: Style the buttons
// Followed by "chromeExtension.js" Extension


// L9: when to say let and const
const playerName2 = "we"
let credit = 45


/**
 * ----------- Recap: in Project 3
 * const
 * addEventListener
 * innerHTML
 * input.value
 * function parameter
 * template String
 * localStorage
 * the JSON obj
 * Object in array
 * 
 */