// DOM Manipulation

/** 
 * --------------------------------> Select the element using 5 Methods <-------------------------------->
 */

// 1. getElementById

// const title = document.getElementById('main-heading')
// console.log(title) // Outcome: <h1 id="main-heading">Favourite movie</h1>

// 2. getElementByClassName

// const listItems = document.getElementsByClassName('list-items')
// console.log(listItems) // Outcome: HTMLCollection(5) [li.list-items, li.list-items, li.list-items, li.list-items, li.list-items]

// 3. getElementByTagName 
// -> Select the Whole HTML tag element 
// const listObj = document.getElementsByTagName('h1')
// console.log(listObj) // Outcome: HTMLCollection(5) [li.list-items, li.list-items, li.list-items, li.list-items, li.list-items]

// 4. querySelector 
//  -> select the only first div that come first if we want to use the whole div which can accurse into the HTML then we have to use the querySelectorAll
// const container = document.querySelector("div")
// console.log(container) // Outcome: div.container

// 5. querySelectorAll
// const allContainer = document.querySelectorAll('div')
// console.log(allContainer) // Outcome: NodeList(2) [div.container, div.container]


/** 
 * ------------------------------> Practical Implementation of Above Content | Introduction to Attribute [Set, Get, Remove] <------------------------------
 */



// direct method: inline styling 
// title.style.color = "red"

// const listItemsData = document.getElementsByClassName("list-items")
// console.log(listItemsData)

// listItemsData.style.fontSize = "2rem"
// for (let i= 0 ; i< listItemsData.length ; i++){
//     listItemsData[i].computedStyleMap.fontSize = "5rem"
// }


// creating the Element
// const ul = document.querySelector('ul')
// const li = document.createElement("li")

// // Adding elements 

// ul.append(li)

// // Modify the text

// li.setAttribute("id", "main-heading")
// li.removeAttribute("id")
// li.innerText = "X-men"

// const title = document.querySelector("#main-heading")
// console.log(title.getAttribute("id"))


// // Modifying Attribute & Classes [REmove the contain ]

// console.log(li.classList.contains("list-items"))
// // li.classList.remove("list-items")
// li.classList.add('list-items')
// console.log(li.classList.contains("list-items"))


// li.remove()
// const firstListItem = document.querySelector(".list-items")

// console.log(firstListItem.innerHTML) // <span>Neo</span> \n The Matrix
// console.log(firstListItem.textContent) // Neo \n The Matrix
// console.log(firstListItem.innerText) // Neo The Matrix



/** 
 * ------------------------------> Traversal in DOM Element <------------------------------
 */

//  --------------> 1. Parent Node Traversal <--------------
// let ul = document.querySelector('ul')
// console.log(ul.parentNode.parentNode)
// console.log(ul.parentElement.parentElement)

// const html = document.documentElement;
// console.log(html.parentNode) // Outcome: #document
// console.log(html.parentElement) // Outcome: null

// --------------> 2. Child Node Traversal <--------------
// let ul = document.querySelector('ul')
// console.log(ul.childNodes)
// console.log(ul.firstChild)
// console.log(ul.lastChild)
// console.log(ul.lastElementChild)
// console.log(ul.firstElementChild)


// ul.childNodes[1].style.backgroundColor = "blue"


// --------------> 3. Sibling Traversal <--------------
// let ul = document.querySelector('ul')
// console.log(ul.previousSibling) // Comment are there 
// console.log(ul.previousElementSibling) // h1 is the previous sibling of ul
// console.log(ul.nextSibling) // text
// console.log(ul.nextElementSibling) // null [script is not count]



/** 
 * ------------------------------> Event Lister <------------------------------
 */
// method - 1 [Refer the HTML file "eventListeners"]

// method - 2
// const buttonTwo = document.querySelector('.btn-2')
// function alertBtn(){
//     alert("I also Love js")
// }

// buttonTwo.addEventListener("click", alertBtn)

// Mouseover
// document.getElementById("demo").addEventListener("mouseover", mouseOver);
// document.getElementById("demo").addEventListener("mouseout", mouseOut);

// function mouseOver() {
//     document.getElementById("demo").style.color = "red";
// }

// function mouseOut() {
//     document.getElementById("demo").style.color = "black";
// }


// Reveal Content

// const revealBtn = document.querySelector(".reveal-btn")

// const hiddenContent = document.querySelector('.hidden-content')

// function revealContent() {
//     if (hiddenContent.classList.contains('reveal-btn')) {
//         hiddenContent.classList.remove('reveal-btn')
//     } else {
//         hiddenContent.classList.add('reveal-btn')
//     }
// }

// revealBtn.addEventListener("click", revealContent)



/** 
 * ------------------------------> Event propagation <------------------------------
 */
// --> 1. phase Capture phase [all value set to true]
// --> 2. phase bubble phase [all value set to false]
// traversal from root to target and explore whole things

// behind the screen js start working, and start with root node to target node and notify the script.

// 1. Event capturing 

// 2. target

// 3. Event Bubbling ==> [true parameter -->  to False parameter]
// How to stop event propagation

// window.addEventListener("click", function () {
//     console.log("Window")
// }, false)

// document.addEventListener("click", function () {
//     console.log("Document")
// }, false)

// document.querySelector('.div1').addEventListener('click', function () {
//     // e.stopPropagation()
//     console.log("Div-1")
// }, false)

// document.querySelector('.div2').addEventListener('click', function () {
//     console.log("Div-2")
// }, false)

// document.querySelector('button').addEventListener("click", function (e) {
//     console.log(e) // Outcome: <button> Click </button>
//     // console.log(e.target) // Run it
//     // console.log(e.target.innerText = "clicked!") // Outcome: <button> Click </button>
// }, false)/




/** 
 * ------------------------------> Event Delegation <------------------------------
 */

// -------- Long way to crate this kind of work
// console.log(document.querySelector('#football'))

// document.querySelector('#football').addEventListener('click',
//     function (e) {
//         console.log("Football Click...!");

//         const target = e.target;
//         if (target.matches('li')) {
//             target.style.backgroundColor = "pink"
//             target.style.color = "white"
//         }
//     })

// document.querySelector('#basketball').addEventListener('click',
//     function (e) {
//         console.log("basketball Click...!");

//         const target = e.target;
//         if (target.matches('li')) {
//             target.style.backgroundColor = "gray"
//             target.style.color = "white"
//         }
//     })

// document.querySelector('#boxing').addEventListener('click',
//     function (e) {
//         console.log("boxing Click...!");
//         const target = e.target;
//         if (target.matches('li')) {
//             target.style.backgroundColor = "orange"
//             target.style.color = "white"
//         }
//     })

// document.querySelector('#tennis').addEventListener('click',
//     function (e) {
//         console.log("tennis Click...!");

//         const target = e.target;
//         if (target.matches('li')) {
//             target.style.backgroundColor = "red"
//             target.style.color = "white"
//         }
//     })

// document.querySelector('#golf').addEventListener('click',
//     function (e) {
//         console.log("golf Click...!");

//         const target = e.target;
//         if (target.matches('li')) {
//             target.style.backgroundColor = "blue"
//             target.style.color = "white"
//         }
//     })


// All this many work done with few lines
// document.querySelector('#sports').addEventListener('click', function(e){
//     console.log(e.target.getAttribute('id') + " is Clicked")

//     const target = e.target;
//     if (target.matches('li')){
//         target.style.backgroundColor = "lightgray"
//     }
// })


// const sports = document.querySelector("#sports")
// const newSport = document.createElement('li')

// newSport.innerText = "rugby"
// newSport.setAttribute("id", "rugby")

// sports.appendChild(newSport)





