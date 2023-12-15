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
// Asynchronous is an activity which start at any particular time and end at any time 
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
// CallBack based of Asynchronous Programming
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

// Example of the multiple CallBacks


// let fun1 = (callBack1, callBack2) => {
//     setTimeout(() => {
//         console.log('Hello Every one this is the Function - 1')
//     }, 2000)

//     callBack1()
//     callBack2()
// }

// let fun2 = () => {
//     console.log("Hello every One, this is Function - 2")
// }

// let fun3 = () => {
//     console.log("Hello every One, this is Function - 3")
// }

// fun1(fun2, fun3)


/**
 * -----------------------------------------------------
 *        CallBack Hell Created | Pyramid of Doom
 * -----------------------------------------------------
*/
// code Readability is destroyed the code readability 
// Code Grew left side direction 
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

// let isShopOpenOrClose = false

// // Made the order
// let order = (time, work) => {

//     return new Promise(
//         (resolve, reject) => {
//             // Shop open serve ice cream
//             if (isShopOpenOrClose) {

//                 setTimeout(() => {
//                     resolve(
//                         work()
//                     )
//                 }, time)

//             }
//             // Shop is close please try again later
//             else {
//                 reject(
//                     console.log("Our Shop is Closed Please visit Again")
//                 )
//             }
//         }
//     )
// }

// // 1. Relation b/w time and work
// order(2000, () => console.log(`${stocks.fruits[0]} was selected....[2s]`))

//     .then(() => {
//         return order(0, () => console.log('Production has Started....[0s]'))
//     })

//     .then(
//         () => {
//             return order(2000, () => console.log("the fruit was chopped....[2s]"))
//         }
//     )

//     .then(
//         () => {
//             return order(1000, () => console.log(`${stocks.liquid[2]} & ${stocks.liquid[3]} was selected....[1s]`))
//         }
//     )

//     .then(
//         () => {
//             return order(1000, () => console.log('start the Machine....[1s]'))
//         }
//     )
//     .then(

//         () => {
//             return order(1000, () => console.log(`ice cream put on ${stocks.holder[0]}....[2s]`))
//         }
//     )

//     .then(
//         () => {
//             return order(3000, () => console.log(`${stocks.toppings[0]} toppings are added....[2s]`))
//         }
//     )

//     .then(
//         () => {
//             return order(1000, () => console.log("ready to serve....[3s]"))
//         }
//     )

//     .catch(
//         () => console.log("Customer Left the shop...")
//     )

//     // it always run
//     .finally(
//         () => {
//             console.log("day ended, Shop is closed.....")
//         })



/**
 * -----------------------------------------------------
 *     Difference Between Async/Await and Promises
 * -----------------------------------------------------
*/

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

// let isShopOpenOrClose = true

// function time(ms) {
//     return new Promise(
//         (resolve, reject) => {
//             if (isShopOpenOrClose) {
//                 setTimeout(resolve, ms)
//             }
//             else {
//                 reject(
//                     console.log("shop is close")
//                 )
//             }
//         }
//     )
// }

// async function kitchen() {
//     try {
//         await time(2000)
//         console.log(`${stocks.fruits[0]}`)

//         await time(0)
//         console.log("start the Production")

//         await time(2000)
//         console.log("cut the fruit")

//         await time(1000)
//         console.log("Add water and ice")

//         await time(1000)
//         console.log("Start the machine")

//         await time(2000)
//         console.log("cone is selected")

//         await time(3000)
//         console.log("toppings are added")

//         await time(2000)
//         console.log("Ready to serve")

//     }
//     catch (error) {
//         console.log("Customer left...")
//     }
//     finally {
//         console.log("day ended shop close")
//     }
// }

// kitchen()


// let toppingChoice = () => {
//     return new Promise(
//         (resolve, reject) => {
//             setTimeout(() => {
//                 resolve(
//                     console.log("Which topping would you love")
//                 )
//             }, 3000)
//         }
//     )
// }

// async function kitchen() {
//     console.log(" a ")
//     console.log(" b ")
//     console.log(" c ")

//     await toppingChoice()

//     console.log(" d ")
//     console.log(" e ")
// }

// kitchen()
// console.log("doing the dishes")
// console.log("cleaning the tables")
// console.log("taking other order")


// let order = () => {
//     return new Promise(
//         (reject, resolve) => {
//             if (true) {

//                 resolve(

//                 )

//             } else {

//                 reject(

//                 )

//             }
//         }
//     )
// }

// try | catch | finally
// async function order() {
//     try {
//         await abc;
//     } catch (error) {
//         console.log("abc does not exist..\n\n", error)
//     } finally {
//         console.log("\nrun code anyway")
//     }
// }

// order()

// .then(
//     () =>{
//         console.log('qwertyuiop')
//     }
// )


// Channel - Akshay saini 
/**
 * -----------------------------------------------------
 * 
 *       1. what is Async ?
 *       2. What is Await ?
 *       3. how async work behind the scenes ?
 *       4. Example using async / Await
 *       5. Error handling
 *       6. Interviews
 *       7. Async await vs promise.then/.catch/.finally
 * 
 * -----------------------------------------------------
*/

// Note:
// 1. this async function """"always return the promise""""
// 2. there are two case | either you return the promise if you don't return a promise but return the non-promise value then it take the value wrap inside the promise and return that promise object.

// async function getData() {
//     // return "qwertyuiop"
//     return new Promise(
//         (resolve, reject) => {
//             resolve("Promise Resolve value!!")
//         }
//     )
// }

// const dataPromise = getData()
// console.log(dataPromise)   // Outcome: Promise { 'namaste' }

// // How to fetch the value from Promise Object
// dataPromise.then(res => console.log(res))





// Async and await is use for handle Promises.
// what is await: --> await can only be use inside the Async function

/**
 * -----------------------------------------------------------------------
 *      Difference Between normal function and async..await function
 * -----------------------------------------------------------------------
 */



let p = new Promise(
    (resolve, reject) => {

        setTimeout(
            () => {
                resolve('Promise Resolve.....!')
            }, 5000)

    }
)

let p2 = new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            resolve("this is the Second promise called........!")
        }, 10000);
    }
)

/**  -----> Normal Function <----- */

// In Normal function js engine is not going to wait till the Promises Resolves, it simply execute line by line and when Promise is Resolved it automatically printed in the console.
function getData() {
    // js engine will not wait for promise resolve. and print the console
    p.then(res => console.log(res))

    console.log("namaste javascript........!")
}


/**  -----> Async Function with await inside <----- */
// Code is waiting at line number 582 | It wait for the promise to resolve |  it go to next line ones the Promise is resolve.
async function handlePromiseWithOnePromise() {

    console.log("Hello World, this is the above statement of Async await......!")

    const val = await p
    console.log("namaste js...........!")
    console.log(val + "\n")
}
// handlePromiseWithOnePromise()  // it take 10 second to print the content present in function



// it take the 10 second only print the content present inside the function in one go.
//  if we change the Promise then also it Going to print the similar way
async function handlePromise() {

    console.log("Hello World, this is the above statement of Async await......!")

    // after 5s it print this 
    const val = await p
    console.log("namaste js...........!")
    console.log(val + "\n")

    // Again print this after 5s total 10s it take 
    const val2 = await p2
    console.log("this is val-2 printing")
    console.log(val2 + "\n")
}

// How work Behind the scene:
/**
 * when it run it go Synchronous manner.

* 1. CallStack empty initially: [<empty callStack>]

* 2. function call => function come into the callStack: ["<handelPromise>""]

* 3. now it start execution [<there are two promise have to Resolve at any particular time. [Async promise>]

// * 5. in the execution await is called, at this moment the [<"handelPromise function">] is suspend and move out from the callBack. and it wait for p1 resolved and then only it move ahead.

// * 7. after the time over the function is again call and ["<handelPromise>"] is come to the callStack. and again star execution where actually it left.

// * 8. if there are again await called then again the same procedure take a place and move further [for 5 second again suspend the execution and wait until p2 completed]

// * inshort await take a place function is suspended for Provided time period | and after that time period gets over it again call. if there are await called same process take a place.


*/

// getData()  // Outcome: Promise Resolve.....!
handlePromise()