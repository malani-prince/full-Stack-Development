// Channel -->  freeCodeCamp Tutorial [3 hr and 21 min Video]

console.log("Hello World");

var number = 5;

// Data Type
// undefine (Has not been desine), null(Nothing), boolean(True | False), string (char array), symbol (Mutable parameter value which is unique), number, object(Key value pairs store)

// Declatation of the vatiable

// # ways to Declare the DataType
var myName = "Prince";

let oueName = "freeCodeCamp";


// That should never change 
// Get error when we declare the Different value
const pi = 3.14;

var a;

// "=" Assignment oprator 
var b = 2;

console.log("Value of A After: ", a)
a = 7;

console.log("Value of A Become: ", a)
b = a;

// See the things in the cosole box on web


// Initialize the variable
var a = 9;

var a1;
var b1;
var c1 = "I am C";

a1 = a1 + 1
b1 = b1 + 3
c1 = c1 + " String"

console.log(c1)

// Case Sensitive 
// Writing must be in the camalcase letter

// Adding Number


var sum = 10
sum = sum + 10
console.log(sum)

var quotient1 = 66 / 33;
console.log(quotient1)

// fraction value return as an Output
var quotient2 = 9876 / 3224;
console.log(quotient2)

// Increment the number
// Decrement the Number
var myVar = 45

console.log(myVar++)
console.log(myVar--)


// Decimal Number also possible
var myDecimal = 0.233233


var product = 2.5 * 2.5

console.log(product)

product = 2.5 / 223.5
console.log(product)

// Reminder
var remainder;

remainder = 11 % 3;

// prefix expression
a += 223
a -= 223
a *= 223
a /= 223
var a54 = 234
a54 %= 223
console.log("         ", a)



// Declare String Variable


var firstName = "Alan"
var lastName = "Truning"

var myFirstName = "Beau"
var myLastName = "Carens"

// If we have to use the Single quotes and Double Quotes Twice then we have to put the \ before the Every n-1 Quotes (Escape Character)
var myStr = "I am a \"Double quoted \" String inside \"Double Quotes \""
myStr = 'I am a "Double quoted" String inside "Double Quotes"'

/***********
// \' single quote
// \" double Quote
// \\ backslash
// \n newLine
// \r Carriage Return
// \t tab 
// \b backspace
// \f form feed
*/

var myStr = "This is the Start" + "This is the End"

console.log(myStr)

// mySte += "Hello every one" [Also Possible]


// fins the lenght of the Lenght

console.log(myStr.length)

// Bracket Notation [Index start with one]

var firstLetterFirstName = ""
var firstName = "Ada"

firstLetterFirstName = firstName[0]
// A

// negative Indexing not Support
firstLetterFirstName = firstName[2]
console.log(firstLetterFirstName)

myStr = "Hello World"

// we can not change the value of the individual character
// myStr[0] = "H"/
// console.log(myStr)


// Bracket Notation to Find nth Character in String 
firstName = "Adam"
var secconfLetterOfFirstName = firstName[1]
secconfLetterOfFirstName = firstName[3]
console.log(secconfLetterOfFirstName)

// Last char of the string
var lastChar = firstName[firstName.length - 1]
console.log(lastChar)


function wordBlank(myNoun, myAdjective, myVerb, myAdverb) {
    var res = ""
    res += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb;
    return res
}

console.log(wordBlank("dog", "big", "ran", "quickly"))
console.log(wordBlank("bike", "slow", "flew", "slowly"))



// storing multiple Values with Array
// String and int [Element with any dataType possible]
var ourArray = ["John", 23]

var myArray = ["Quincy", 1];
console.log(myArray)
// Nested Array
myArray = [["This Universe", 42], ['Everttime', 23]]
console.log(myArray)


// Array Indexing
var zeroPos = myArray[0]
console.log(zeroPos)
// Undefine if we use the index -1
// zeroPos = myArray[-1] 
// console.log(zeroPos)

// Change the Value
myArray[1] = 10000
console.log(myArray)

// nestedArray Indexing
var myArray1 = [[1000, 2, 3, 4], ["refe", "fefe", 2, , 3, 4], [13, "f"]]
var firstElementFirstValue = myArray1[0][0]
console.log(firstElementFirstValue)

// Multiple Elemrnt with Push
myArray.push(["Happy", "People", "New", "Added"])
console.log(myArray)

// POP - Last element Remove
var x = myArray1.pop();
console.log(myArray1)
console.log(x)

// Shift 
var x = myArray.shift()
console.log(myArray)

// unshift - similar to push [Add the Element At the Begining]

var tempData = ["sfsf", "wefwerfe", "efrf"]
tempData.unshift("Added at the first")
console.log(tempData)
tempData.shift()
console.log("First Element is emove: ", tempData)

// Shopping List:
var myList = [
    ["cereal", 3],
    ["milk", 2],
    ["juice", 2],
    ["eggs", 3],
    ["Daal", 1]
]

// Function: 

function ourReusablefunction() {
    console.log("Hey, World")
}

ourReusablefunction()
ourReusablefunction()
ourReusablefunction()


function reusableFunction() {
    console.log("Hiie, World")
}

// Passing Value to the Function with Arguments

function ourSum(a, b) {
    console.log(a + b)
}
function ourSub(a, b) {
    console.log(a - b)
}
ourSum(1, 23)
ourSum("Efrfe", "ff") //Nan Output
ourSub(1, 3)

// Global scop and Function 

var myGlobal = 10
console.log("above the fun1: ", myGlobal)

function fun1() {
    // Oops Global Variable 
    // this become the Gloabl Variable (any where we use in the code)
    oopsGlobal = 5
    console.log(myGlobal++)
}

console.log("above the fun2: ", myGlobal)
fun1() // Increment by 1 (10 + 1 = 11)

function fun2() {
    console.log(myGlobal++)
    console.log(oopsGlobal += 20)
}
fun2() // also increment by 1 (11 + 1 = 12)
console.log("below the fun2: ", myGlobal)

// oopsGlobal -> it work as a Global Variable if we didn't Specifies the Var before the Declaration in fun1
console.log("below the fun2: ", oopsGlobal)

// Local Scope and Function
// Declare with in a function 

function myLocalScope() {
    var myVarInSideFunction = 5;
    console.log(myVarInSideFunction)
}

myLocalScope()
// console.log(myVarInSideFunction) --> Give Error

// Global vs Local Scope in Function
var outerWere = "T-shirst"

// local varibal precident over Global variable [Local > Global]
function myOutfit() {
    var outerWere = "sweater"
    return outerWere
}

console.log(myOutfit())
console.log(outerWere)


// Return a Value From a function with Return 

function minusSeven(num) {
    return num - 7
}

console.log(minusSeven(34))

function timeFive(num) {
    return num * 5;
}
console.log(timeFive(4))


// Understanding Undefined Value Returned from a Function

var sum = 0;

function addThree() {
    sum = sum + 3
}

function addFive() {
    sum += 5;
}

console.log(addThree())
console.log(addFive())

// Assignment with a Return Value

var changed = 0;
function change(num) {
    return (num + 5) / 3;
}

changed = change(10)
console.log(changed)

// Stand in Line

function nextInLine(arr, item) {
    arr.push((item))
    return arr.shift()
}

var testArr = [1, 5, 2, 3, 4, 7]

console.log("Before: " + JSON.stringify(testArr))
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr))

// Boolean Value

function welcomeToBooleans() {
    // return true
    return false
}

// wITH Conditional Logic with If Statments
function outTrueOrFalse(isTrue) {
    if (isTrue) {
        return "YEs, its True"
    }
    return "No, its false"
}

console.log(outTrueOrFalse(false))

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was True"
    }
    else {
        "No, that was false"
    }
}

console.log(trueOrFalse(true))

// Comparision with the equality Operator
// both value compare with the comman type

function testEqual(val) {
    if (val == 12) {
        return "Equal"
    }
    return "Not Equal"
}

console.log(testEqual(12))
console.log(testEqual("12"))


// 3 === 3  [return True]
// 3 === "3"  [return False]


function testEqualWithTripleEqual(val) {
    if (val === 12) {
        return "Equal"
    }
    return "Not Equal"
}

console.log(testEqualWithTripleEqual(12))
console.log(testEqualWithTripleEqual("12"))
console.log(testEqualWithTripleEqual(+"12"))


// Comparison with the Inequality Operator

function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal"
    }
}

// Compare with the Strict Inequality Operator
function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal"
    }
    return "Equal"
}
console.log("\n")
console.log(testStrictNotEqual(17))
console.log(testStrictNotEqual("17"))
console.log(testStrictNotEqual(+"17"))

// Comparision With The Logical And Operator
// >
// <
// ==
// !=
// >=
// <=


function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes"
    }
    else {
        return "No"
    }
}
console.log(testLogicalAnd(23))
console.log(testLogicalAnd("23"))


function testLogicalOr(val) {
    if (val < 10 || val > 20) {
        return "Yes"
    }
    else {
        return "No"
    }
}
console.log(testLogicalOr(23))
console.log(testLogicalOr(223))


// Logical Order in If Else Statment
function orderMyLogic(val) {
    if (val < 5) {
        return "Less then 5"
    }
    else if (val < 10) {
        return "Less then 10"
    }
    else {
        return "greter than or equal 10"
    }
}


// Chain If else

// Golf Code


// Switch Case

function caseInSwitch(val) {
    var answer = ""
    switch (val) {
        case 1:
            answer = "alpha"
            break;
        case 2:
            answer = "beta"
            break;
        case 3:
            answer = "gamma"
            break
        case 4:
            answer = "Delta"
            break
        default:
            answer = "any value"
            break;
    }
    return answer
}

// https://stackoverflow.com/questions/359494/which-equals-operator-vs-should-be-used-in-javascript-comparisons

console.log("\n")
console.log(caseInSwitch(1))
console.log(caseInSwitch(2))
console.log(caseInSwitch(3))
console.log(caseInSwitch(4))
console.log(caseInSwitch(34))  // Return empty 

console.log(0 === "")
console.log("" === 0)

console.log(0 == "")
console.log("" == 0)

// Multiple Indentical Options in Switch Statements

function sequentialSizes(val) {
    var answer = ""
    switch (val) {
        case 1:
        // break;
        case 2:
        // break;
        case 3:
            answer = "Low"
            break;
        case 4:
        // break;
        case 5:
        // break;
        case 6:
            answer = "Mid"
            break;
        case 7:
        // break;
        case 8:
        // break;
        case 9:
            answer = "High"
            break;
        // default:
        //     break;
    }
    return answer
}

console.log(sequentialSizes(1))
console.log(sequentialSizes(2))
console.log(sequentialSizes(3))

console.log(sequentialSizes(4))
console.log(sequentialSizes(5))
console.log(sequentialSizes(6))

console.log(sequentialSizes(7))
console.log(sequentialSizes(8))
console.log(sequentialSizes(9))

// Replacing If Else Chain With Switch


function chainToSwitch(val) {
    switch (val) {
        case "bob":
            answer = "Marly"
            break
        case 42:
            answer = "The Answer"
            break
        case 1:
            answer = "there is no #1"
            break
        case 99:
            answer = "Missing me by this mush!"
            break;
        case 7:
            answer = "MSD"
            break
        default:
            answer = "not exist"
            break;
    }
    return answer
}

console.log(chainToSwitch(1))


// Returning Boolean Values From Function
function isless(a, b) {
    if (a < b) {
        return true
    }
    else {
        return false
    }
}
console.log(isless(10, 15))

// Returning Early pattern from Functions


function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined
    }
    else {
        return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2))
    }
}

// Counting Cards
var count = 0

function cc(card) {

    switch (card) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break
    }

    var holdbet = "Hold"
    if (count > 0) {
        holdbet = "bet"
    }

    return count + " " + holdbet;
}

console.log("\n")
cc(2); cc(3); cc(7); cc("K"); cc("A");
console.log(cc(4))


// Build JavaScript Object
var ourDog = {
    "name": "Camper",
    "legs": 4,
}

var myDog = {
    "name": "Ghost",
    "legs": 1,
    "tails": 2,
    "friend": []
}

// traversal in Object
var dogFriend = myDog.friend
console.log(dogFriend)


var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
}

var entreeValue = testObj['an entree'];
var drinkValue = testObj['my side'];

// Accessing Object Properties with Variables

var testObject = {
    12: "Namath",
    16: "monthana",
    19: "Unitas"
};

var playerNumber = 16
var player = testObject[playerNumber]


// Update the object Property [dot Notation]
ourDog.name = "Happy Camper"

console.log(ourDog)

myDog['name'] = "Happy Coder"
console.log(myDog)


// Add New Properties to an Object
ourDog.bark = "bow-bow"
console.log(ourDog)


myDog["bark"] = "wro-wrp"
console.log(myDog)

// Delete property
delete myDog['tails']
console.log(myDog)

// Using Object For Lookups

function phoneTicLookUp(val) {
    var results = ""

    var lookup = {
        "alpha": "Adams",
        "kp": "Adams",
        "dd": "Dattani",
        "kovil": "Savaj",
        "dhruv": "Patel",
        "jay": "patel",
        "aarya": "patel",
        "Dhwani": "Desai",
    };

    return lookup.val
    // switch (val) {
    //     case "alpha":
    //         results = "Adams"
    //         break

    //     case "beta":
    //         results = "Patel"
    //         break

    //     case "gamma":
    //         results = "Malani"
    //         break

    //     case "Charlli":
    //         results = "Dattani"
    //         break

    //     case "Krunal":
    //         results = "Davusa"
    //         break

    //     case "Nupan":
    //         results = "Denver"
    //         break
    // }
}


// Testing Objects for Properties

var myObj = {
    gift: "pony",
    pet: "Kitten",
    bed: "sleigh",
};

function checkObj(checkProp) {
    // hasOwnProperty is use for Checking Object are exist or not
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp]
    } else {
        return "not found"
    }
}

console.log(checkObj("gift"))

// Multiple Object

var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano man",
        "release_year": 1978,
        "formate": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },
    {
        "Artist": "Baue ap",
        "Title": "Cereal man",
        "Release_year": 2003,
        "formate": [
            "ede",
            "wfr"
        ]
    }
]

// Nested Objects

var outerObject = {
    "innerObject-1": {
        "name": "Prince",
        "surname": "Malani"
    },
    "Year": {
        "birthYear": 2002,
        "cur": 2023
    }
}

// Record Collection

var collection = {
    "2548": {
        "album": "slippery when Wet",
        "Artist": "Bon Jovi",
        "tracks": [
            "let It Rock",
            "You Give Love A bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette",
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "track": []
    },
    "5439": {
        "album": "ABBA Gold"
    }
}

var collectionCopy = JSON.parse(JSON.stringify(collection))
console.log("\n", collection)

function updateRecords(id, prop, value) {

    if (value == "") {
        delete collection[id][prop]
    } else if (prop === "tracks") {
        // if the first line exist it copy as it is, if it dones not having the value it copy the "[]" 
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value)
    } else {
        collection[id][prop] = value
    }

    return collection
}

console.log(updateRecords(5439, "artist", "prince_malani"))
console.log(updateRecords(2468, "tracks", "test"))
console.log(updateRecords(2468, "tracks", "test"))

// Loops in JS

var myArray = []
var i = 0
// while loop
while (i < 5) {
    myArray.push(i)
    i++;
}

console.log(myArray)

// for Loop

var myArray1 = []
for (var i = 1; i < 10; i++) {
    myArray1.push(i)
}

console.log(myArray1)

// Iterate Through an Array with a For Loop

for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i])
}

var multiDimensionalArray = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1,]]
var multiDimensionalArraySum = 0
for (var i = 0; i < multiDimensionalArray.length; i++) {
    for (var j = 0; j < multiDimensionalArray[i].length; j++) {
        multiDimensionalArraySum = multiDimensionalArraySum + multiDimensionalArray[i][j]
    }
}
console.log(multiDimensionalArraySum)
// Do While Loop : first Iterate the Loop and then check the condition 
var myArray2 = []
var i = 0
do {
    myArray2.push(i)
    i++;
} while (i < 10)


// Profile Lookup

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "malani",
        "number": "1234567890",
        "likes": ["Pizza", "Coding", "Egg"]
    },

    {
        "firstName": "Prince",
        "lastName": "patel",
        "number": "1234567890",
        "likes": ["Data", "Megic", "Magc"]
    },

    {
        "firstName": "Prem",
        "lastName": "pere",
        "number": "1234567890",
        "likes": ["study", "Gqre", "erfMagc"]
    },

    {
        "firstName": "aarya",
        "lastName": "patel",
        "number": "1234567890",
        "likes": ["qwee", "rerf", "iuberkufyb"]
    },

    {
        "firstName": "Devang",
        "lastName": "Dattani",
        "number": "1234567890",
        "likes": ["erf", "oijno", "j i"]
    },
]

function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i]['firstName'] == name) {
            return contacts[i][prop] || "No Such Property"
        } else {
            return "Not Valid User"
        }
    }
}

var data = lookUpProfile("Akira", "lastName")
console.log(data)


// Generate Random Fractions
function randomFraction() {
    return Math.random()
}
console.log(randomFraction())

// Genrate the Whole Number
function randomWholeNumber() {
    return Math.floor(Math.random() * 100);
}
console.log(randomWholeNumber())


// Generate Random Whole Number within a regionFragment: 

function ourRandomRange(ourMin, ourMax) {
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin
}

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin)) + myMin
}

console.log(ourRandomRange(1, 9))
console.log(randomRange(1, 9))

// Use ParseInt Function
function convertToInteger(str) {
    // if convert into int it return the  value 
    // if not convert then it return the Nan 

    return parseInt(str)
}

console.log("Convert String Into Integer: " + convertToInteger("56"))

// Use the ParseInt Function with a Radix witht the Base value

function convertToInteger2(str) {
    // 2 represents the Base - 2  
    return parseInt(str, 2)
}

console.log(convertToInteger2("10011"))


// USe the Conditional(Ternary) Operators
function checkEqual(a, b) {
    // if (a == b) {
    //     return true
    // } else{
    //     return false
    // }

    return a < b ? true : false
}

console.log(checkEqual(1, 2))

// Using Multiple Conditional Operators (Ternary)
function checkSign(num) {

    // condition ? "Msg Bas on the condition" : condition-2 
    return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero"
}
console.log(checkSign(10))

// Differences Between the var and Let Keywords
var catName = "Quincy"
var quote;

var catName = "beau"

function catTalk() {
    // What is that ? 🤔
    "Use Strict";

    catName = "oliver"
    quote = catName + " say Meow!"
}

console.log(catTalk())

// Compare Scopes of the var and let Keywords
// if we change the var value at any moment is will aquire the changes 
function checkScopeVar() {
    "use strict"
    var i = "function Scope"
    if (true) {
        i = "block scope"
        console.log("Block Scope i is: ", i);
    }
    console.log("function scope i is: ", i);
    return i
}
console.log("\n")
checkScopeVar()

// but in case of the let the value limitation is contain between the blocks after the block value is also be initialize with the global one  
function checkScopeLet() {
    "use strict"
    let i1 = "function Scope"
    if (true) {
        let i1 = "block scope"
        console.log("Block Scope i is: ", i1);
    }
    console.log("function scope i is: ", i1);
    return i1
}
console.log("\n")
checkScopeLet()

// Declare a Read-Only Variable with the Const Keyword
function printManyTime(str) {
    "use strict"
    var sentence = str + "is cool"

    // we declare onst in the Capital letter
    const SENTENCE = str + "is cool"

    sentence = str + "Is amazing"

    for (let i = 0; i < str.length; i += 2) {
        console.log(sentence)
    }
}

// Mutate an Array Declared with const 
const s = [5, 7, 8]

function editIntPlace() {
    "use strict"

    // s = [2,3,5]  // Error 
    s[0] = 400
    s[1] = 300
    s[2] = 200
}

editIntPlace()
console.log(s)

// Prevent Object Mutation 
function freezeObj() {
    "use strict"
    const MATH_CONST = {
        PI: 3.14
    };

    // if we have to specifies that the object value never change then we have to freez the object using Object.freeze
    Object.freeze(MATH_CONST)

    try {
        MATH_CONST.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONST.PI
}

const PI = freezeObj()
console.log(PI);

// Using Arrow Function to Write concise Anonymous Functions
// var magic = function () {
//     return new Data();
// }
// // Arrow function
// var magic = () => {
//     return new Data();
// }

// we must Declare as a const
const magic = () => new Data();
console.log(magic) // return the object type magic

// Write Arrow Functions With Parameters
var myConcatFunction2 = function (arr1, arr2) {
    return arr1.concat(arr2);
};

// Arrow Function
var myConcateArrow = (arr1, arr2) => arr1.concat(arr2)
console.log(myConcatFunction2([1, 2], [2, 2, 2, 2, 2]))

// Write Higher Order Arrow Functions
// Map | Filter | Reduce
const realNumberArray = [1, 2, 3, 4, 4.5, 6, 4, 34, 45, 45, 5, 56, 67]

const squareList = (arr) => {
    const sequreIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x)
    return sequreIntegers
};

const squareIntegers = squareList(realNumberArray)
console.log(squareIntegers)

// Write Higher Order Arrow Functions

const increment = (
    //  immediately invoked function expression (IIFE):  This pattern is commonly used when you want to create a function and execute it immediately without having to assign it to a variable or a name. It's known as an Immediately Invoked Function Expression, or IIFE.
    function () {
        return function increment(number, value = 1) {
            return number + value
        }
    }
)();

console.log(increment(5, 2));
console.log(increment(5));
console.log(increment());  // return NaN

const SUM = (function () {
    return function (x, y, z) {
        const args = [x, y, z]
        // (x+y) + z
        return args.reduce((a, b) => a + b, 0)
    }
}
)();

// console.log(sum(1, 2, 3)); // gives the error becoz we call the inner function
console.log(SUM(1, 4, 4))
console.log(SUM(4, 4)) // Return NaN

// why it is running why it didn't return the error ?
// console.log(SUM(1, 4, 5,5,5,5,))

// Any number of arguments
const SUM2 = (function () {
    return function (...args) {
        // const args = [x, y, z]
        // (x+y) + z
        return args.reduce((a, b) => a + b, 0)
    }
}
)();

console.log(SUM2(1, 1, 1, 1, 1, 1, 1, 1, 1, 1))

// Use the Spread Operator to Evaluate Array In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY']

let arr2;

// IIFE Function: immediately invoked function expression
(function () {
    // not copy the arr1 in arr2
    // Deep Copy to an object 
    // arr2 = arr1 // both arr1 and arr2 point to the same array in memory.
    arr2 = [...arr1] //used to create a shallow copy 
    arr1[0] = 'potato'
})();

console.log(arr2)
console.log(arr1)

// Use Destructuring Assignment to Assin Variables from Objects
var voxel = {
    x12: 3.6,
    y12: 7.4,
    z12: 6.56
}

// old way 
// var x = voxel.x
// var y = voxel.y
// var z = voxel.z

// Insted We use this
// a13 ==> x12 [Copy Value from a13 to x12]
const { x12: a13, y12: b13, z12: c13 } = voxel
console.log(a13)
console.log(b13)
console.log(c13)
const AVG_TEMP = {
    today: 77.5,
    tomorrow: 79
}
function getTempOfTmrw(avgTemp) {
    "use strict"
    // value is copy from avgTemp['tomorrw'] to tempOfTomorrow 
    const { tomorrow: tempOfTomorrow } = avgTemp // Actual Object
    // return this var "tempOfTomorrow"
    return tempOfTomorrow
}

console.log(getTempOfTmrw(AVG_TEMP))

// Destructuring Assignment with Nested Object
const LOCAL_FORECAST = {
    today: {
        mini: 75,
        max: 89
    },
    tomorrow: {
        min: 676,
        max: 890
    }
}
function getMaxOfTmrw(forecast) {
    "use strict"
    const { tomorrow: { max: maxOfTomorrow } } = forecast
    return maxOfTomorrow
}

console.log(getMaxOfTmrw(LOCAL_FORECAST))


// USe Desctructing Assignment to assign Variable From Arrays

const [p, u] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(p, u)

const [p1, u1, , y] = [1, 2, 3, 4]
console.log(p1, u1, y) // Skip the 3rd element and move to next

let a7 = 8, b7 = 7;

(
    () => {
        "usr strict"
        [a7, b7] = [b7, a7]
    }
)();

console.log(a7, "      ", b7)

// Use Destructuring Assignment with the rest operator 
const source = [1, 2, 3, 4, 5, 6, 7]

function removeFirstTwo(list) {
    // return the element exept one and two
    const [, , ...arr] = list
    return arr
}

const arr = removeFirstTwo(source)

console.log(arr)
console.log(source)


// Create String Using Template Literals
const person = {
    name: "Zodiac lsof",
    age: 56
}
// in python we use the formate method but in JS we use the " ` ` (Back ticks)" and "$" sign for Assign the Variable value
const greeting = `Hello, my name is ${person.name}! I am ${person.age} year old.`

console.log(greeting)

// Write Concise Object Literal declaration Using Simple fields
// crreate the custom Dictionary
const CREATE_PERSON = (name, age, gender) => {
    return {
        name: name,
        age: age,
        gender: gender
    }
}

console.log(CREATE_PERSON("malani Prince", 123, "male"))

// Write Concise Declatation Function
const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict"

        this.gear = newGear
    }
};

bicycle.setGear(3222)
console.log(bicycle.gear)

// use class syntex to define a constructor function

// var SpaceShuttle = function (targetPlanet) {
//     this.targetPlanet = targetPlanet
// }

// var zeus = new SpaceShuttle('Jupiter')
// console.log(zeus.targetPlanet)

class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet
    }
}

// for creating the new instace we require the new key word
var Zeus = new SpaceShuttle("kmk")
console.log(Zeus.targetPlanet)

function makeClass() {
    class Veg {
        constructor(name) {
            this.name = name
        }
    }
    // We have to return the class first then move to constructor
    return Veg
}

const veg = makeClass()
const changeName = new veg('Carrot')
console.log(changeName.name)

// Use getters and setters to control Access to an Object

// Base Code
// class Book {
//     constructor(author){
//         this.author = author
//     }

//     get writer(){
//         return this._author
//     }

//     set writer(updateValue){
//         this._author = updateValue
//     }
// }

function makeClass2() {

    class thermostat {
        constructor(temp) {
            // Access with in a class
            // _private vat do not access outside of the class
            this._temp = 5 / 9 * (temp - 32)
        }
        get temperature() {
            return this._temp
        }

        set temperature(updateTemp) {
            this._temp = updateTemp
        }
    }
    return thermostat
}

const makeClassObj = makeClass2()
const newTemp = new makeClassObj(90)
console.log(newTemp.temperature)

// Understand the Differences Between import and require

// importExample.js

// Importing variables, functions, and classes from exportExample.js
// import { message, capitalizeString, Calculator } from "./exportExample";

// // Using the imported variables, functions, and classes
// console.log(message); // Output: Hello from exportExample.js

// const capitalized = capitalizeString("example");
// console.log(capitalized); // Output: EXAMPLE

// const calculator = new Calculator();
// console.log(calculator.add(3, 7)); // Output: 10
