// Topic to Discuss

/**
 * 1. Asynchronous Java Script --> 10 task start at any movement and ends with any moment | not depended with any process

 * 2. Synchronous Java Script --> 10 task with one hand [one task at a one time | first task completed then go for the second] [any system stop then whole system is stopped | dependent System]

* 3. Difference between them

 * 4. CallBack --> Calling a function inside a function [it is the bridge between two function]

 * 5. Promises

 * 6. Async / Await
 * 7. Conclusion
 */



/**
 * ----------------------------------------------------- 
 *           Synchronous | And | Asynchronous
 * ----------------------------------------------------- 
*/

// JS working -> Top down system 
// it is the Synchronous manner

// console.log(" I ")


// console.log(" Ice Cream ")

// console.log(" With a ")

// console.log(" Spoon ")

// // Regular function 
// function qwertyuiop(a, b, c) {

// }

// // Arrow function
// let qwertyuiop = (w, v, g) => {

// }


// // It is the Asynchronous system.
// // 1000 means => 1000ms
// setTimeout(() => {
//     console.log(" Eat ")
// }, 4000);



/**
 * ----------------------------------------------------- 
 *           Call Back
 * ----------------------------------------------------- 
*/

// function one() {
//     console.log("Step - 1")
// }

// function two() {
//     console.log("step - 2")
// }

// one()   // firstly printed
// two()   // secondly printed



// make the relation between the two function

// function callBackOne(call_two) {
//     call_two()
//     console.log("Step 1 Complete, Call Task - 2")
// }

// function callBackTwo() {
//     console.log("Step 2")
// }

// callBackOne(callBackTwo)


// Example - 2
// Arrow function
// let order = (call_production) => {
//     console.log("\n\nOrder placed please call the production...")
//     call_production()
// }

// let production = () => {
//     console.log("order Received, Starting production....\n")
// }

// order(production)



// Relation Between the Store Room [Back-end] and kitchen [front-end]

// let stocks = {
//     fruits: [
//         "strawberry",
//         "grapes",
//         "Apple",
//         "orange"
//     ],
//     liquid: [
//         "pepsi",
//         "mazza",
//         "ice",
//         "water"
//     ],
//     toppings: [
//         "chocolate",
//         "peanuts"
//     ],
//     holder: [
//         "cone",
//         "cup",
//         "sticks"
//     ]
// }

// // This the the main Function calling. [Call back Starts from hear]
// let order = (fruitName, call_production) => {
//     // after 2s it starts working 
//     setTimeout(() => {
//         // Back tick
//         console.log(`${stocks.fruits[fruitName]} wa selected`
//         )
//         call_production()
//     }, 2000);
// }



/**
 * ----------------------------------------------------- 
 *                   CallBack Hell Created
 * ----------------------------------------------------- 
*/

// let production = () => {
//     setTimeout(() => {

//         /** ----------- Process Starts ----------- */
//         // Print the message
//         console.log("Production has Started....[2s]")

//         /**  ----------- Chop the Fruit ----------- */
//         // now for the further more process we add again add set Time out function 
//         setTimeout(() => {
//             console.log("the fruit has been Chopped....[2s]")

//             /** ----------- Stock Added [Water and Ice] ----------- */
//             setTimeout(() => {
//                 console.log(`Adding ${stocks.liquid[2]} and ${stocks.liquid[3]}....[1s]`)

//                 /** ----------- Machine is Working Properly ----------- */
//                 setTimeout(() => {
//                     console.log("Machine was Started....[1s]")

//                     /** ----------- Select the Cone | Stick | Cup */
//                     setTimeout(() => {
//                         console.log(`ice cream was placed on ${stocks.holder[0]} ....[2s]`)

//                         /** ----------- Selecting the Toppings ----------- */
//                         setTimeout(() => {
//                             console.log(`${stocks.toppings[0]} was added....[3s]`)

//                             /** ----------- Serve Ice Cream ----------- */
//                             setTimeout(() => {
//                                 console.log("its time to Serve the Ice Cream....[2s]")
//                             }, 2000)

//                         }, 3000)

//                     }, 2000)

//                 }, 1000)

//             }, 1000)

//         }, 2000)

//     }, 0);
// }

// Call the order function | run and call the production Function through Call Back

// order(0, production)


// To avoid the callBack Hell we come up with the solution, Called Promises


/**
 * -----------------------------------------------------
 *                      Promise 
 * -----------------------------------------------------
*/

// ----------- Promise Made -----------
// 1. Promises made [Flow of the Premises]
//                    |
//                    |
//                    \/
// Pending order van be  [customer is sitting only] [it is simple if...else statement]
// order something then two condition is possible.
//
//      a) Resolve     b) Reject
//         |               |
//         |               |
//       .then             |
//         |             .catch
//       .then             |
//         |_____     _____|
//                  |
//              .finally

// ------------------ we need to understand the some points ------------------
// 1. Relationship between Two things Work and time
// 2. Promises chaining
// 3. Error Handling
// 4. The finally Block

let stocks = {
    fruits: [
        "strawberry",
        "grapes",
        "Apple",
        "orange"
    ],
    liquid: [
        "pepsi",
        "mazza",
        "ice",
        "water"
    ],
    toppings: [
        "chocolate",
        "peanuts"
    ],
    holder: [
        "cone",
        "cup",
        "sticks"
    ]
}

let isShopOpenOrClose = true

// Made the order
let order = (time, work) => {

    return new Promise(
        (resolve, reject) => {
            // Shop open serve ice cream
            if (isShopOpenOrClose) {

                setTimeout(() => {
                    resolve(
                        work()
                    )
                }, time)

            }
            // Shop is close please try again later
            else {
                reject(
                    console.log("Our Shop is Closed Please visit Again")
                )
            }
        }
    )
}

// 1. Relation b/w time and work
order(2000, () => console.log(`${stocks.fruits[0]} was selected....[2s]`))