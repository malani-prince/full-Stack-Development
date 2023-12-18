/**
 * -----------------------------------------------------------
 *                          Fetch API
 * -----------------------------------------------------------
 */

// Json => JavaScript Object Notation
/**
 * javascript can be use for the sending and return the information from  the network, when we needed. (AJAX)

 * fetch is the method that allows this kind of functionality in js 

 * let promise = fetch(
    <url>,
    [Option] = "<"get", "post", "delete", etc..>")

 * It Getting the Response in a 2-stage process. 

 * 1. contain two properties ==> a) status   b) ok
 * 2. After we call the another method to access the body in different formate...  
 * a) response.text() -> read and return the text
 * b) response.json() -> 
 * 

 */


// let url = "https://goweather.herokuapp.com/weather/{city}"

// // p is Promise | 
// let p = fetch("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME")

// first then is use for the Check the Status whether the "status" is positive and ok === true.  Outcome: 200 , true
// stage first is made for checking the server is working properly or not.

// second then is use for the display the Content in json or any formate we want 
// second then return the Object pass by the first then wether it is a Json or Text

// p.then(
//     (value) => {
//         console.log("\n" + value.status + "\n")
//         console.log("\n" + value.ok + "\n")
//         return value.json()
//         // return value.text()
//     }
// ).then(
//     (value2) => {
//         console.log(value2)
//     }
// )

// when we have to work with the Fetch api and Asynchronous we use the await keyword





/**
 * -----------------------------------------------------------
 *                        POST Request
 * -----------------------------------------------------------
 */
// for making the "post" Request we need to use the "fetch option"

// const createToDo = async (todo) => {

//     let options = {
//         method: "POST",
//         headers: {
//             "content-type": "application/json"
//         },
//         body: JSON.stringify(todo),
//     }
//     let p = await fetch('https://jsonplaceholder.typicode.com/todos/', options)
//     let response = await p.json()
//     return response
// }
// // .then(response => response.json())
// // .then(json => console.log(json))   //Outcome: { title: 'foo', body: 'bar', useId: 1, id: 201 }

// const getToDo = async (id) => {
//     let response = await fetch('https://jsonplaceholder.typicode.com/todos/' + id)
//     let r = await response.json()
//     return r
// }

// const mainFunction = async () => {
//     const todoR = {
//         title: 'harry',
//         body: 'bhai',
//         useId: 1100
//     }
//     let todoReturnObject = await createToDo(todoR)
//     console.log(todoReturnObject)
//     console.log(await getToDo(3))
// }

// mainFunction()





/**
 * ----------------------------------------------------------------
 *                fetch method & Promise Use                    * --------------------------------------------------------------

 */

// const API_URL = "https://api.github.com/users/malani-prince"
// async function handlePromise() {


//     // *  how fetch work inside with out .then.then 

//     // Working of this code
//     // 1. saw the await - <wait for the promise resolve in x time> till the process is suspended 
//     const data = await fetch(API_URL) // fetch return the promise

//     // 1. again await is appears - <wait for the promise resolve in x time> till the process is suspended 
//     const jsonValue = await data.json()

//     // log to the console 
//     console.log(jsonValue)


//     // *  Work the similar way it is the actual syntax of writing fetch method 

//     // fetch(API_URL)
//     //     .then(
//     //         (res) => res.json()
//     //     )
//     //     .then(
//     //         res => console.log(res)
//     //     )
// }

// handlePromise()