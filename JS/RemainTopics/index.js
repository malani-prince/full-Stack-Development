/**
//  * functions: 1) Arrow function  2) Higher order function [R]
//  * Array Destructuring [R]
//  * Object Destructuring [R]
//  * rest operator [R]
//  * spread operator [R]
//  * Conditions [R] | ternary operation | && and or | Optional chaining
//  * map | filter | reduce | sort [R]
//  * eventLister [R]
//  * setTimeOut [R]
//  * setInterval [R]
//  * callback | Promises | Promises API [R]
//  * Async Await [R]
//  * try....catch [R]
//  * 
 * ------------------------
 * Higher order function [✅]
 * setTimeOut [✅]
 * setInterval [✅]
 * clearTimeOut [✅]
 * Console object [✅]
 * map | filter | reduce | sort [✅]
 * Array Destructuring [✅]
 * Object Destructuring [✅]
 * rest operator [✅]
 * spread operator [✅]
 * try....catch [✅]

 */



/**
 * --------------------------------------------------------------
// *             Higher-Order Functions in JavaScript
 * --------------------------------------------------------------
 */

// a function which take a function as an argument and return the function is known as HOF

// * Problem is all the code have 90% similar only logic is different
/**  */

// let rad = [1, 2, 3, 4, 5]
// const Area = (rad) => {
//     let outcome = []
//     for (let i = 0; i < rad.length; i++) {
//         outcome.push(Math.PI * rad[i] * rad[i])
//     }
//     return outcome
// }

// const circumFerence = (rad) => {
//     let outcome = []
//     for (let i = 0; i < rad.length; i++) {
//         outcome.push(Math.PI * rad[i] * 2)
//     }
//     return outcome
// }

// const diameter = (rad) => {
//     let outcome = []
//     for (let i = 0; i < rad.length; i++) {
//         outcome.push(Math.PI * rad[i] * 2)
//     }
//     return outcome
// }

// console.log(Area(rad))

/** ------> Optimal Solution using high order function <------ */

// let rad = [1, 2, 3, 4, 5]

// const area = (radius) => {
//     return Math.PI * radius * radius
// }

// const surfaceArea = (radius) => {
//     return Math.PI * radius * 2
// }

// const diameter = (radius) =>{
//     return radius * 2
// }
// const Calculate = (radius, logic) => {
//     let outcome = []
//     for (let i = 0; i < rad.length; i++) {
//         outcome.push(logic(radius[i]))
//     }
//     return outcome
// }

// console.log(Calculate(rad, surfaceArea))




/**
 * --------------------------------------------------------------
// *             Map | Filter | Reduce | sort 
 * --------------------------------------------------------------
 */

// const userList = [
//     {
//         firstName: "akshay",
//         lastName: "patel",
//         age: 21
//     },
//     {
//         firstName: "malani",
//         lastName: "prince",
//         age: 22
//     },
//     {
//         firstName: "Grishma",
//         lastName: "bhakhar",
//         age: 22
//     },
//     {
//         firstName: "Dhruv",
//         lastName: "Patel",
//         age: 23
//     },
//     {
//         firstName: "Aarya",
//         lastName: "Patel",
//         age: 25
//     },
//     {
//         firstName: "Hetu",
//         lastName: "Malani",
//         age: 30
//     }
// ]

// // ################
// // *     Map
// // ################

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const double = (x) => {
//     return x * 2
// }
// const triple = (x) => {
//     return x * 3
// }
// const binary = (x) => {
//     return x.toString(2)
// }

// const outcomeDouble = arr.map(double)
// // console.log(outcomeDouble)
// const binaryVal = arr.map(binary)
// // console.log(binaryVal)


// const mapUsingObject = userList.map(
//     (x) => {
//         return x.firstName + " " + x.lastName
//     }
// )
// console.log(mapUsingObject)





// // ################
// // *     filter
// // ################

// const arr2ForFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// // Filter the odd number
// const constFilterOutcome = arr2ForFilter.filter(
//     (x) => {
//         // return x % 2 === 0
//         // return x % 2 != 0
//         return x > 4
//     }
// )
// // console.log(constFilterOutcome)


// const filterUser = userList.filter(
//     (x) => {
//         // if (x.age > 23) {
//         //     return x.firstName
//         // }
//         // both work similarly 
//         return x.age < 30
//     }
// ).map(
//     (x) => {
//         return x.firstName
//     }
// )

// console.log("\nFilter User", filterUser, "\n")


// // ###############################################################
// // *     Reduce
// // ###############################################################

// /** //  working with the array and at the end return the one value
//  */
// const arr3ForReduce = [1, 2, 3, 4, 5, 6, 7]
// // sum or max
// function findSum() {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i]
//     }
//     return sum
// }
// // console.log(findSum(arr))

// // [1, 2, 3, 4, 5, 6, 7] 
// const outComeForReduce = arr.reduce(
//     (accumulator, current) => {
//         // * Accumulator - store the value <sum>
//         // * current - it is a value from the array which is change according to Index <arr[i]>
//         accumulator = accumulator + current
//         return accumulator
//     },
//     // any initial value for starting the accumulator 
//     0
// )
// // console.log(outComeForReduce)


// function findMax(arr) {
//     let max = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return max
// }

// // console.log("Max: ", findMax(arr3ForReduce))

// const findMaxUsingReduce = arr3ForReduce.reduce(
//     (accumulate, current) => {
//         if (accumulate < current) {
//             accumulate = current
//         }
//         return accumulate
//     },
//     0
// )

// // console.log("Using Reduce find the Max: ", findMaxUsingReduce)


// const similarAgeCounter = userList.reduce(
//     (accumulator, current) => {
//         // pass the 22 first 
//         if (accumulator[current.age]) {
//             accumulator[current.age] = ++accumulator[current.age]
//         } else {
//             accumulator[current.age] = 1
//         }
//         return accumulator
//     },
//     // empty object
//     {}
// )

// console.log(similarAgeCounter)

// const outputList = userList.reduce(
//     (names, user) => {
//         if (user.age >= 25) {
//             names.push(user.firstName);
//         }
//         return names;
//     }, []);

// console.log(outputList)




/**
 * --------------------------------------------------------------
// *                  Array Destructuring
 * --------------------------------------------------------------
 */


// let user = ["prince", "malani"]
// let [firstName, lastName] = user

// console.log(firstName, " ", lastName)


// let data = [19, , "Se"]
// let [age = 20, name, work] = data   // age = 20 is min value above this 20 it will over write the actual value
// console.log(age, " ", name, " ", work)


// let val1 = [12, 21, 334, 43, [12, 32, 23, 32]]
// let [a, s, d, f, [g, r, t, y]] = val1
// console.log(y)

// // ...<variableName> other remaining value moving out into the other variable
// let args = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9]
// let [a1, b, ...otherArgs] = args
// console.log(otherArgs)




/**
 * --------------------------------------------------------------
// *                  Object Destructuring
 * --------------------------------------------------------------
 */

// let user = {
//     name: "Malani Prince",
//     age: 25
// }

// let { firstName, age } = user




/**
 * --------------------------------------------------------------
// *                   Rest and Spread
 * --------------------------------------------------------------
 */

// Rest
// Use in Object and Array both.
const addNumber = (a, b, c, ...other) => {
    console.log(other)  // [8,9] return the array of  the number
    return a + b + c
}

// if we add 8 and 9 it wont work output is the same | 1+2+3 = 5
// console.log(addNumber(1, 2, 2, 8, 9, "qwertyuiop", "asdfghjkl", 2323))


// Spread Operator
var names = ["prince", "aarya", "dhruv", "qwertyuiop"]

function getNames(name1, name2, name3, name4) {
    console.log(name1)
    console.log(name2)
    console.log(name3)
    console.log(name4)
}

// getNames(names[0], names[1], names[2])

// Shortcut method 
// getNames(...names)
// getNames(names)


// Object:
var student = {
    name: "prince",
    age: 22,
    hobbies: ["cricket", "singing", "climbing"]
}

const { age, ...rest } = student
// console.log(rest)

var newStudent = {
    ...student,
    age: 29
}
console.log(newStudent)