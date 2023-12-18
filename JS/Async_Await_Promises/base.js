// * Topic to Discuss "freeCodeCamp channel"
/**

//  * 1. Asynchronous Java Script --> 10 task start at any movement and ends with any moment | not depended with any process

//  * 2. Synchronous Java Script --> 10 task with one hand [one task at a one time | first task completed then go for the second] [any system stop then whole system is stopped | dependent System]

//  * 3. Difference between them

//  * 4. CallBack --> Calling a function inside a function [it is the bridge between two function]

//  * 5. Promises

//  * 6. Async / Await

//  * 7. Conclusion

 */

/**
//  * ----------------------------------------------------------------------
//  *        All Sub Stoic mention above [Just uncomment the code]
//  * ----------------------------------------------------------------------
 */


/*
// // * ------------------------------------------------------------
// // *        Synchronous | And | Asynchronous | Introduction
* -------------------------------------------------------------

// // Asynchronous is an activity which start at any particular time and end at any time
// // JS working -> Top down system
// // it is the Synchronous manner

// // console.log(" I ")


// // console.log(" Ice Cream ")

// // console.log(" With a ")

// // console.log(" Spoon ")

// // // Regular function
// // function qwertyuiop(a, b, c) {

// // }

// // // Arrow function
// // let qwertyuiop = (w, v, g) => {

// // }


// // // It is the Asynchronous system.
// // // 1000 means => 1000ms
// // setTimeout(() => {
// //     console.log(" Eat ")
// // }, 4000);



// /**
// // * ------------------------------------------------------------
// // *                        Call Back
// // * ------------------------------------------------------------
// */
// // CallBack based of Asynchronous Programming
// // function one() {
// //     console.log("Step - 1")
// // }

// // function two() {
// //     console.log("step - 2")
// // }

// // one()   // firstly printed
// // two()   // secondly printed



// // make the relation between the two function

// // function callBackOne(call_two) {
// //     call_two()
// //     console.log("Step 1 Complete, Call Task - 2")
// // }

// // function callBackTwo() {
// //     console.log("Step 2")
// // }

// // callBackOne(callBackTwo)


// // Example - 2
// // Arrow function
// // let order = (call_production) => {
// //     console.log("\n\nOrder placed please call the production...")
// //     call_production()
// // }

// // let production = () => {
// //     console.log("order Received, Starting production....\n")
// // }

// // order(production)



// // Relation Between the Store Room [Back-end] and kitchen [front-end]

// // let stocks = {
// //     fruits: [
// //         "strawberry",
// //         "grapes",
// //         "Apple",
// //         "orange"
// //     ],
// //     liquid: [
// //         "pepsi",
// //         "mazza",
// //         "ice",
// //         "water"
// //     ],
// //     toppings: [
// //         "chocolate",
// //         "peanuts"
// //     ],
// //     holder: [
// //         "cone",
// //         "cup",
// //         "sticks"
// //     ]
// // }

// // // This the the main Function calling. [Call back Starts from hear]
// // let order = (fruitName, call_production) => {
// //     // after 2s it starts working
// //     setTimeout(() => {
// //         // Back tick
// //         console.log(`${stocks.fruits[fruitName]} wa selected`
// //         )
// //         call_production()
// //     }, 2000);
// // }

// // Example of the multiple CallBacks


// // let fun1 = (callBack1, callBack2) => {
// //     setTimeout(() => {
// //         console.log('Hello Every one this is the Function - 1')
// //     }, 2000)

// //     callBack1()
// //     callBack2()
// // }

// // let fun2 = () => {
// //     console.log("Hello every One, this is Function - 2")
// // }

// // let fun3 = () => {
// //     console.log("Hello every One, this is Function - 3")
// // }

// // fun1(fun2, fun3)

// // * ------------------------------------------------------------
// // *           CallBack Hell Created | Pyramid of Doom
// // * ------------------------------------------------------------

// // code Readability is destroyed the code readability
// // Code Grew left side direction
// // let production = () => {
// //     setTimeout(() => {

// //         /** ----------- Process Starts ----------- */
// //         // Print the message
// //         console.log("Production has Started....[2s]")

// //         /**  ----------- Chop the Fruit ----------- */
// //         // now for the further more process we add again add set Time out function
// //         setTimeout(() => {
// //             console.log("the fruit has been Chopped....[2s]")

// //             /** ----------- Stock Added [Water and Ice] ----------- */
// //             setTimeout(() => {
// //                 console.log(`Adding ${stocks.liquid[2]} and ${stocks.liquid[3]}....[1s]`)

// //                 /** ----------- Machine is Working Properly ----------- */
// //                 setTimeout(() => {
// //                     console.log("Machine was Started....[1s]")

// //                     /** ----------- Select the Cone | Stick | Cup */
// //                     setTimeout(() => {
// //                         console.log(`ice cream was placed on ${stocks.holder[0]} ....[2s]`)

// //                         /** ----------- Selecting the Toppings ----------- */
// //                         setTimeout(() => {
// //                             console.log(`${stocks.toppings[0]} was added....[3s]`)

// //                             /** ----------- Serve Ice Cream ----------- */
// //                             setTimeout(() => {
// //                                 console.log("its time to Serve the Ice Cream....[2s]")
// //                             }, 2000)

// //                         }, 3000)

// //                     }, 2000)

// //                 }, 1000)

// //             }, 1000)

// //         }, 2000)

// //     }, 0);
// // }

// // Call the order function | run and call the production Function through Call Back

// // order(0, production)


// // To avoid the callBack Hell we come up with the solution, Called Promises



// /**
// //  * -------------------------------------------------------------
// //  *                      Promise
// //  * -------------------------------------------------------------
// */

// // ----------- Promise Made -----------
// // 1. Promises made [Flow of the Premises]
// //                    |
// //                    |
// //                    \/
// // Pending order van be  [customer is sitting only] [it is simple if...else statement]
// // order something then two condition is possible.
// //
// //      a) Resolve     b) Reject
// //         |               |
// //         |               |
// //       .then             |
// //         |             .catch
// //       .then             |
// //         |_____     _____|
// //                  |
// //              .finally

// // ------------------ we need to understand the some points ------------------
// // 1. Relationship between Two things Work and time
// // 2. Promises chaining
// // 3. Error Handling
// // 4. The finally Block

// // let stocks = {
// //     fruits: [
// //         "strawberry",
// //         "grapes",
// //         "Apple",
// //         "orange"
// //     ],
// //     liquid: [
// //         "pepsi",
// //         "mazza",
// //         "ice",
// //         "water"
// //     ],
// //     toppings: [
// //         "chocolate",
// //         "peanuts"
// //     ],
// //     holder: [
// //         "cone",
// //         "cup",
// //         "sticks"
// //     ]
// // }

// // let isShopOpenOrClose = false

// // // Made the order
// // let order = (time, work) => {

// //     return new Promise(
// //         (resolve, reject) => {
// //             // Shop open serve ice cream
// //             if (isShopOpenOrClose) {

// //                 setTimeout(() => {
// //                     resolve(
// //                         work()
// //                     )
// //                 }, time)

// //             }
// //             // Shop is close please try again later
// //             else {
// //                 reject(
// //                     console.log("Our Shop is Closed Please visit Again")
// //                 )
// //             }
// //         }
// //     )
// // }

// // // 1. Relation b/w time and work
// // order(2000, () => console.log(`${stocks.fruits[0]} was selected....[2s]`))

// //     .then(() => {
// //         return order(0, () => console.log('Production has Started....[0s]'))
// //     })

// //     .then(
// //         () => {
// //             return order(2000, () => console.log("the fruit was chopped....[2s]"))
// //         }
// //     )

// //     .then(
// //         () => {
// //             return order(1000, () => console.log(`${stocks.liquid[2]} & ${stocks.liquid[3]} was selected....[1s]`))
// //         }
// //     )

// //     .then(
// //         () => {
// //             return order(1000, () => console.log('start the Machine....[1s]'))
// //         }
// //     )
// //     .then(

// //         () => {
// //             return order(1000, () => console.log(`ice cream put on ${stocks.holder[0]}....[2s]`))
// //         }
// //     )

// //     .then(
// //         () => {
// //             return order(3000, () => console.log(`${stocks.toppings[0]} toppings are added....[2s]`))
// //         }
// //     )

// //     .then(
// //         () => {
// //             return order(1000, () => console.log("ready to serve....[3s]"))
// //         }
// //     )

// //     .catch(
// //         () => console.log("Customer Left the shop...")
// //     )

// //     // it always run
// //     .finally(
// //         () => {
// //             console.log("day ended, Shop is closed.....")
// //         })



// /**
// //  * -------------------------------------------------------------
// //  *     Difference Between Async/Await and Promises
// //  * -------------------------------------------------------------
// */

// // let stocks = {
// //     fruits: [
// //         "strawberry",
// //         "grapes",
// //         "Apple",
// //         "orange"
// //     ],
// //     liquid: [
// //         "pepsi",
// //         "mazza",
// //         "ice",
// //         "water"
// //     ],
// //     toppings: [
// //         "chocolate",
// //         "peanuts"
// //     ],
// //     holder: [
// //         "cone",
// //         "cup",
// //         "sticks"
// //     ]
// // }

// // let isShopOpenOrClose = true

// // function time(ms) {
// //     return new Promise(
// //         (resolve, reject) => {
// //             if (isShopOpenOrClose) {
// //                 setTimeout(resolve, ms)
// //             }
// //             else {
// //                 reject(
// //                     console.log("shop is close")
// //                 )
// //             }
// //         }
// //     )
// // }

// // async function kitchen() {
// //     try {
// //         await time(2000)
// //         console.log(`${stocks.fruits[0]}`)

// //         await time(0)
// //         console.log("start the Production")

// //         await time(2000)
// //         console.log("cut the fruit")

// //         await time(1000)
// //         console.log("Add water and ice")

// //         await time(1000)
// //         console.log("Start the machine")

// //         await time(2000)
// //         console.log("cone is selected")

// //         await time(3000)
// //         console.log("toppings are added")

// //         await time(2000)
// //         console.log("Ready to serve")

// //     }
// //     catch (error) {
// //         console.log("Customer left...")
// //     }
// //     finally {
// //         console.log("day ended shop close")
// //     }
// // }

// // kitchen()


// // let toppingChoice = () => {
// //     return new Promise(
// //         (resolve, reject) => {
// //             setTimeout(() => {
// //                 resolve(
// //                     console.log("Which topping would you love")
// //                 )
// //             }, 3000)
// //         }
// //     )
// // }

// // async function kitchen() {
// //     console.log(" a ")
// //     console.log(" b ")
// //     console.log(" c ")

// //     await toppingChoice()

// //     console.log(" d ")
// //     console.log(" e ")
// // }

// // kitchen()
// // console.log("doing the dishes")
// // console.log("cleaning the tables")
// // console.log("taking other order")


// // let order = () => {
// //     return new Promise(
// //         (reject, resolve) => {
// //             if (true) {

// //                 resolve(

// //                 )

// //             } else {

// //                 reject(

// //                 )

// //             }
// //         }
// //     )
// // }

// // try | catch | finally
// // async function order() {
// //     try {
// //         await abc;
// //     } catch (error) {
// //         console.log("abc does not exist..\n\n", error)
// //     } finally {
// //         console.log("\nrun code anyway")
// //     }
// // }

// // order()

// // .then(
// //     () =>{
// //         console.log('qwertyuiop')
// //     }
// // )


// // Channel - Akshay saini



/**
 * -------------------------------------------------------------
 *
//  *       1. what is Async ?
//  *       2. What is Await ?
//  *       3. how async work behind the scenes ?
//  *       4. Example using async / Await
//  *       5. Error handling
//  *       6. Interviews
//  *       7. Async await vs promise.then/.catch/.finally
 *
 * -------------------------------------------------------------
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
//  * ----------------------------------------------------------------------
//  *        All Sub Stoic mention above [Just uncomment the code]
//  * ----------------------------------------------------------------------
 */


// /**
// //  * ----------------------------------------------------------------------
// //  *    Difference Between normal function and async..await function
// //  * ----------------------------------------------------------------------
//  */

// // let p = new Promise(
// //     (resolve, reject) => {

// //         setTimeout(
// //             () => {
// //                 resolve('Promise Resolve.....!')
// //             }, 5000)

// //     }
// // )

// // let p2 = new Promise(
// //     (resolve, reject) => {
// //         setTimeout(() => {
// //             resolve("this is the Second promise called........!")
// //         }, 10000);
// //     }
// // )


// /**  -----------------------> Normal Function <----------------------- */
// // In Normal function js engine is not going to wait till the Promises Resolves, it simply execute line by line and when Promise is Resolved it automatically printed in the console.
// // function getData() {
// //     // js engine will not wait for promise resolve. and print the console
// //     p.then(res => console.log(res))

// //     console.log("namaste javascript........!")
// // }


// /**  -----------------------> Async Function with await inside <----------------------- */
// // Code is waiting at line number 582 | It wait for the promise to resolve |  it go to next line ones the Promise is resolve.
// // async function handlePromiseWithOnePromise() {

// //     console.log("Hello World, this is the above statement of Async await......!")

// //     const val = await p
// //     console.log("namaste js...........!")
// //     console.log(val + "\n")
// // }
// // handlePromiseWithOnePromise()  // it take 10 second to print the content present in function



// // it take the 10 second only print the content present inside the function in one go.
// //  if we change the Promise then also it Going to print the similar way
// // async function handlePromise() {

// //     console.log("Hello World, this is the above statement of Async await......!")

// //     // after 5s it print this
// //     const val = await p
// //     console.log("namaste js...........!")
// //     console.log(val + "\n")

// //     // Again print this after 5s total 10s it take
// //     const val2 = await p2
// //     console.log("this is val-2 printing")
// //     console.log(val2 + "\n")
// // }




// /**
// //  * ----------------------------------------------------------------------
// //  *                inner functionality of Async Await
// //  * ----------------------------------------------------------------------
//  */

// /**
// * when it run it go Synchronous manner.


// * 1. CallStack empty initially: [<empty callStack>]

// * 2. function call => function come into the callStack: ["<handelPromise>""]

// * 3. now it start execution [<there are two promise have to Resolve at any particular time. [Async promise>]

// // * 5. in the execution await is called, at this moment the [<"handelPromise function">] is suspend and move out from the callBack. and it wait for p1 resolved and then only it move ahead. ---> it can not block the whole callStack

// // * 7. after the time over the function is again call and ["<handelPromise>"] is come to the callStack. and again star execution where actually it left.

// * 8. if there are again await called then again the same procedure take a place and move further [for 5 second again suspend the execution and wait until p2 completed]

// // * inshort await take a place function is suspended for Provided time period | and after that time period gets over it again call. if there are await called same process take a place.

// */

// // getData()  // Outcome: Promise Resolve.....!
// // handlePromise()




// /**
// //  * --------------------------------------------------------------
// //  *            fetch method | Using Promise
// //  * --------------------------------------------------------------
// */

// // const API_URL = "https://api.github.com/users/malani-prince"
// // async function handlePromise() {


// //     // *  how fetch work inside with out .then.then

// //     // Working of this code
// //     // 1. saw the await - <wait for the promise resolve in x time> till the process is suspended
// //     const data = await fetch(API_URL) // fetch return the promise

// //     // 1. again await is appears - <wait for the promise resolve in x time> till the process is suspended
// //     const jsonValue = await data.json()

// //     // log to the console
// //     console.log(jsonValue)


// //     // *  Work the similar way it is the actual syntax of writing fetch method

// //     // fetch(API_URL)
// //     //     .then(
// //     //         (res) => res.json()
// //     //     )
// //     //     .then(
// //     //         res => console.log(res)
// //     //     )
// // }

// // handlePromise()




// /**
// //  * --------------------------------------------------------------
// //  *                       Error handling
// //  * --------------------------------------------------------------
// */

// // const API_URL = "https://api.github.com/users/malani-prince"
// // const API_URL = "https://invalid_uerfr"

// // async function errorHandling() {

// //     try {
// //         const p1 = await fetch(API_URL)
// //         const val = await p1.json()

// //         console.log(val)
// //     }
// //     catch (err) {
// //         console.log(e)
// //     }

// // }

// // async function olderWayForHandlingError() {
// //     const p1 = await fetch(API_URL)
// //     const val = await p1.json()
// //     console.log(val)
// // }

// // olderWayForHandlingError().catch((err) => console.log(err))



// /**
// //  * --------------------------------------------------------------
// //  *                       Interview Tips
// //  * --------------------------------------------------------------
// */

// // what is Async await?
// // ==> Async is keywords which place before the function
// // ==> await is keywords that use inside the Async function to handel promises.
// // ==> this Promise are Asynchronous.
// // ==> explain working of the Async await




/**
//  * ----------------------------------------------------------------------
//  *  Namaste Js : s2 | Concepts of the Async | Await | Promise | callBack
//  * ----------------------------------------------------------------------
*/


// * ###############################
// *      1. CallBack
// * ###############################

/** 1. CallBack */

// console.log("Hello Every one")

// // run after 5s
// setTimeout(
//     function () {
//         console.log('I am Prince Malani')
//     },
// 5000)

// console.log("How are you...!")


// const cart = [
//     "Shoes", 'pants', 'Kurta', 'shirt'
// ]


// 2. CallBack Hell
// One callback with in another callback with another callback
// it is the callBackHell Problem and structure is called pyramid of Doom
// api.createOrder(cart, function () {

//     api.proceedToPayMent(function () {

//         api.orderSummary(function () {

//             api.updateWallet()

//         })

//     })
// })


// 3. Inversion of Control
// Loos the control of the code when we use the callback.
// important piece of our code is passes to another function and it is harm process | Chance to modification of the our code
// Provide the control of main function to another function


// const cart = [
//     "Shoes", 'pants', 'Kurta', 'shirt'
// ]

// api.createOrder(cart, function () {

//     api.proceedToPayMent(function () {

//         api.orderSummary(function () {

//             api.updateWallet()

//         })

//     })
// })



// * ###############################
// *         2. Promise
// * ###############################


/**  Promise */

// const cart = [
//     "shoes",
//     "pants",
//     "shirt",
//     "t-shirts",
// ]


// call Back
// createOrder(cart, () => {
//     proceedToPayment(orderId);
// });

// promise Example
// const promiseExample = createOrderAPI(cart)

// promiseExample.then(
//     () =>{
//         proceedToPayment(orderId)
//     }
// )


// * interview => what is promise ?
// * 1) it is container which cam filled later | after performing async operation
// * 2) it is a container for the future value
// * 3) it is a object that represent the eventual completion of asynchronous operation


// only three state possible
// * 1. pending
// * 2. fulfilled
// * 3. rejected
// const githubApi = "https://api.github.com/user/malani-prince"

// const user = fetch(githubApi)

// // it is immutable
// user.then(
//     (data) => console.log(data)
// )


// it helps us to avoid the callback hell using promise chain rule
// promise Chaining example
// we must return the content after ,then function complete
// const cart = [
//     "shoes",
//     "pants",
//     "shirt",
//     "t-shirts",
// ]

// createOrder(cart)
//     .then(
//         (orderId) => {
//             console.log(orderId)
//             return orderId
//         }
//     )
//     .catch(
//         (err) => {
//             console.log(err.message)
//         }
//     )
//     .then(
//         (orderId) => {
//             return proceedToPayment(orderId)
//         }
//     )
//     .then(
//         (paymentInfo) => {
//             console.log(paymentInfo)
//         }
//     )
//     .catch(
//         (err) => {
//             console.log(err.message)
//         }
//     )
//     .then(
//         () => {
//             console.log("I will call any way................")
//         }
//     )

// function proceedToPayment(orderId) {
//     return new Promise(
//         (resolve, reject) => {
//             resolve("Payment Successful")
//         }
//     )
// }

// // Producer end
// function createOrder(cart) {
//     const pr = new Promise(
//         (resolve, reject) => {
//             if (!validateCart(cart)) {
//                 const err = new Error("cart is not Valid")
//                 reject(err)
//             }

//             //
//             const orderId = "1323"
//             if (orderId) {
//                 setTimeout(
//                     () => {
//                         resolve(orderId)
//                     }, 2000)
//             }
//         }
//     )

//     return pr
// }

// function validateCart() { return false }



// hello()




/**
// * ###############################
// *       3. Promise with API
// * ###############################
*/

/**
// * ------------> 1. promise.all <------------

 * - [it take array of promise object] | [p1, p2, p2]  p1: 3s to resolve | p2: 1s  | p3: 2s | and it returns the results at the end in 3s.
 * - "it will wait" for all the member to be completed.
 * - if any single promise didn't work then whole promises array "through an error"  |  immediately as soon as error occurred = > (Error)  |  it will not wait for the other promise to be resolve.



// * ------------> 2. promise.allsettled <------------

 * - [p1, p2, p3] if p2 reject then it will wait for the all promise to be resolve | After 3 seconds result is display [val1, error, val3]



 // * ------------> 3. promise.race <------------

 * - three promise array are there [p1, p2, p3] | After 1s p2 return the value (val2) | it is the race | promise resolve the first it return the value for the particular promise.
 * - which promise resolved first it returns the particular meaning value first.
 * - after 2s, p3 fails | error will be through (error [p3]) | return results of first settled promise.
 * - it give you results whether failure or success



 // * ------------> 4. promise.any <------------

 * - [p1, p2, p3] | [3s, 1s, 2s] | when ever the any Promise to be resolve it will wait for the first success | p2 solve -> | 
 * - if all fails then collect the fails and return after 3s you will get array 
 * - It will wait for success. and give you results 



// * ------------> settled -> got a results | lingos | <------------
//                      /\
//                     /  \
//                    /    \
//                   /      \
//                  /        \
//                 /          \
//            Resolve         Reject
//            success         Failure
//            fulfilled       Rejected



// * ------------> Revision <------------

1. promise.all => take array of Promise | if all success then return array of success value | if one fails return the error (not move ahead)

2. promise.allsettled => wait for all api to be completed and then return the results | results according to success and fails 

3. promise.race => kind of race | first settled [settled with failure or success] | return the first settled promise whether it is success or Failure

4. promise.any => if first is fail then wait for the other to be resolve, second fails then wait for the third one and wait until get the success response. | Seeking for the first success. then quickly return the value 

*/

// // Input 
// const p1 = new Promise(
//     (resolve, reject) => {
//         // console.log("this is first")

//         setTimeout(
//             () => {
//                 reject("p1 Fails")
//                 // resolve("p1 success")
//             }, 6000)
//     })

// const p2 = new Promise(
//     (resolve, reject) => {
//         // console.log("this is second")
//         setTimeout(
//             () => {
//                 // resolve("p2 success")
//                 reject("p2 Fails")
//             }, 5000)
//     })

// const p3 = new Promise(
//     (resolve, reject) => {
//         // console.log("this is third")
//         setTimeout(
//             () => {
//                 // resolve("p3 success")
//                 reject("p3 Fails")
//             }, 2000)
//     })

// // * 1. Promise.alls
// // Promise.all(
// //     [
// //         p1,
// //         p2,
// //         p3
// //     ]
// // )
// //     .then(
// //         res => {
// //             console.log(res)
// //         }
// //     )
// //     .catch(
// //         (err) => {
// //             console.error(err)
// //         }
// //     )

// // * Promise.allSettled | Best Way
// // Promise.allSettled(
// //     [
// //         p1,
// //         p2,
// //         p3
// //     ]
// // )
// //     .then(
// //         res => {
// //             console.log(res)
// //         }
// //     )
// //     .catch(
// //         (err) => {
// //             console.error(err)
// //         }
// //     )


// // * Promise.race | p3 take 3s after 3s it fails and return the value  at console.
// // Promise.race(
// //     [
// //         p1,
// //         p2,
// //         p3
// //     ]
// // )
// //     .then(
// //         res => {
// //             console.log(res)
// //         }
// //     )
// //     .catch(
// //         (err) => {
// //             console.error(err)
// //         }
// //     )

// // * Promise.any | return for the first settled success | p2 take 5s, p1 take 6s, p3 take 2s ==> first change goes to p3 it fails then move to p2 then solve and it resolve it immediately return the result.
// // * all fails => Aggregate Error  //
// // OutCome:
// // [AggregateError: All promises were rejected] {
// //     [errors]: [ 'p1 Fails', 'p2 Fails', 'p3 Fails' ]
// //   }

// // Promise.any(
// //     [
// //         p1,
// //         p2,
// //         p3
// //     ]
// // )
// //     .then(
// //         res => {
// //             console.log(res)
// //         }
// //     )
// //     .catch(
// //         (err) => {
// //             console.error(err.errors)
// //         }
// //     )




/**
 * functions: 1) Arrow function  2) Higher order function [R]
 * Array Destructuring [R]
 * Object Destructuring [R]
 * rest operator [R]
 * spread operator [R]
 * Conditions [R] | ternary operation | && and or | Optional chaining
 * map | filter | reduce | sort [R]
 * eventLister [R]
 * setTimeOut [R]
 * setInterval [R]
 * callback | Promises | Promises API [R]
 * Async Await [R]
 * try....catch [R]
 * 
 * ------------------------
 * setInterval 
 * clearTimeOut
 * Console object
 * map | filter | reduce | sort
 * Array Destructuring
 * Object Destructuring
 * rest operator
 * spread operator
 * try....catch 

 */
