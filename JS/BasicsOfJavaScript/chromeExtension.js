// // Log out "Button clicked!" when the user clicks the "SAVE INPUT" button

// // let inpBtn = document.getElementById('input-btn')

// // function saveLead() {
// //     console.log("Button, Clicked")
// // }


// // Add other method to write the Code [Advance Method - Instead of onclick=""]
// // let inputBtn = document.getElementById('input-btn')

// // inputBtn.addEventListener("click", function () {
// //     console.log("Button Clicked from AddEventListener")
// // })


// // L6: Writing your first addEventListener
// // let praBtn = document.getElementById('pra-btn')
// // praBtn.addEventListener('click', function () {
// //     console.log("You Click and Get the Price....!")
// // })


// // L7 | L8 | L9
// // Create two variable
// // myLeads -> should be Assigned to an Empty Array
// // inputEl -> should be assigned to the text input field
// // L10: Push the value "www.awsom.com" to myArray when the input button is clicked
// // L11: Push the value from the input field
// // L12: Use a for loop to log out leads
// // L13: Create the unordered List
// // L14: Rendering the leads in unordered list
// // L15: How to render <li> element with innerHTML
// // L16: basicJs2
// // L17: More innerHTML practice
// // L18: Render the <li> element with innerHTML
// // L19: Use createElement() and append() instead of innerHTML
// // L20: Improving the performance of out app
// // L21: create the render function
// // L22 | L23: Build the chrome Extension 
// // L23 | L24 | L25 | L26 | L27: Full extension making
// // L28 | L29: Basic of extension
// // L30: Preparing the Deployment 
// // L31 | L32: What is Local Storage
// // open inspect < Application < Local Storage 



// // can reassign
// // let myLeads = []
// // can not be reassign 
// // const inputEl = document.getElementById("input-el")
// // const inputBtn = document.getElementById('input-btn')
// // const ulEl = document.getElementById('ul-el')

// // inputBtn.addEventListener("click", function () {

// // Push the Value form the inputEl into myLeads array
// // google -> "get value from input field javascript"

// // .value method is use for the return the content present in the field
// //     myLeads.push(inputEl.value)
// // myLeads.push("www.qwertyuiop.com")

// //     console.log(myLeads)
// // })

// // Performance
// // 1. Create the variable, listItems, to hold all the html for the list items assign it to an empty string to begin with
// // let listITems = ""

// // for (let i = 0; i < myLeads.length; i++) {
// // ulEl.textContent += myLeads[i] + " "
// //     listITems += "<li>" + myLeads[i] + "</li>"

// // --------- other way to print this
// // Create Element
// // set text content
// // append to ul
// // const li = document.createElement('li')
// // li.textContent = myLeads[i]
// // ulEl.append(li)
// // }
// // console.log(listITems)
// // ulEl.innerHTML = listITems



// // L24: Template String

// let myLeads = []
// const inputEl = document.getElementById('input-el')
// const inputBtn = document.getElementById('input-btn')
// const ulEl = document.getElementById('ul-el')
// const error = document.getElementById('error-el')

// inputBtn.addEventListener("click", function () {
//     if (inputEl.value === '') {
//         error.innerText = "please enter the Text first and then move for the outcome"
//     } else {
//         myLeads.push(inputEl.value)
//         renderValue()
//     }
// })

// function renderValue() {
//     let listItems = ""
//     for (let i = 0; i < myLeads.length; i++) {
//         // listItems += "<li> <a target='_blank' href=" + myLeads[i] + "> " + myLeads[i] + "</a></li>"

//         // template String example
//         listItems += `
//         <li> 
//             <a target='_blank' href='${myLeads[i]}'> ${myLeads[i]} </a>
//         </li>
//         `
//     }
//     ulEl.innerHTML = listItems
//     inputEl.value = ""
// }

const credit = 0

let x =  0  //Falsy value
let y = "wfr" // truthy value 
let z = ["rrtg",12,2,23,32,3]  // truthy value
let w = ""  // Falsy Value
let o = {  
    a: 123,
    b: 23 
} // truthy value

if (o){
    console.log("if state")
}
else{
    console.log("else state")
}


// Falsy value list
/**
 * false
 * 0
 * ""
 * null -> how developer signalize emptiness
 * undefine -> how js Signalize the emptiness
 * Nan [not a number]
*/

// ex of null
let currentViewers = null
currentViewers = ["gh", "io"]

if (currentViewers){
    console.log("present viewers")
} else {
    console.log("no one is hear")
}

// undefine
let yu 
console.log(yu)

// L38: Guess the expression truthy or falsy
let trueOrFalse = Boolean("hello")
// console.log(trueOrFalse)
console.log("\n")
console.log(Boolean("")) // f
console.log(Boolean("0")) // t
console.log(Boolean(0)) //  f 
console.log(Boolean(898)) //  f 
console.log(Boolean("987")) // t  
console.log(Boolean(null)) // f  
console.log(Boolean(undefined)) // f  
console.log(Boolean(-0)) // f
console.log(Boolean([-0])) // f
