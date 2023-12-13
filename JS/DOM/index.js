// DOM


// ---------------------------------------- Root Node Access ----------------------------------------
// console.log(document.documentElement)
// console.log(document.head)
// console.log(document.body)

// ---------------------------------------- child Access:  [text, ul, text, script] ----------------------------------------
// why text: indentation gap represent as a Text
// console.log(document.body.childNodes)
// Remove the Extra content like comments, extra spaces 
// console.log("\n")
// console.log(document.body.children)
// for(node of document.body.children){
//     console.log(node)
// }
// console.log(document.body.firstChild)
// console.log(document.body.lastChild)
// console.log(document.body.firstElementChild)
// console.log(document.body.lastElementChild)

// Array.from(document.body.children)



// ---------------------------------------- Siblings Access  ----------------------------------------
// const ulTag = document.body.children[0]
// console.log(ulTag.nextElementSibling)
// console.log(ulTag.previousElementSibling)



// ---------------------------------------- Table Modification using DOM ----------------------------------------
// const tableTag = document.body.children[1]
// <Which part body or head>[Index] . <rows[<specifies the row number>]> . <cells[<specifies the cell number>]>
// console.log(tableTag.tBodies[0].rows[0].cells[2].textContent)  // Access the element present into Table
// tableTag.tBodies[0].rows[0].style = "background-color: red"
// tableTag.tBodies[0].rows[1].style = "background-color: pink"
// tableTag.tBodies[0].rows[2].style = "background-color: black; color: white;" 
// console.log(tableTag.rows)



// ------------> five way to select the element <------------

// /**
//  * ------------ Id Search ------------
//  * document.getElementById
//  * document.getElementsByClassName
//  * document.getElementsByTagName
//  * document.querySelector
//  * document.querySelectorAll
//  */

// id, class [change at run time] [live - reference pass, not data] | QuerySelector [static] | [store the element and forget]
// 


// 1. document.getElementById
// ulTag1 = document.getElementById("element")
// console.log(document.getElementById("element"))

// 2. document.getElementsByClassName
// listItems = document.getElementsByClassName('list-items')
// console.log(document.getElementsByClassName('list-items'))

// 3. document.getElementsByTagNam3
// console.log(document.getElementsByTagName("table"))

// 4. document.querySelector
// 5. document.querySelectorAll
// const listItems = document.querySelector('.list-items')
// For selection  of the multiple Query Selector
// const listItems = document.querySelectorAll('.list-items')
// const ele = document.querySelectorAll("ul > li:last-child")
// const ele = document.querySelectorAll("ul > li:nth-child(2)")
// console.log(ele[0].textContent)
// console.log(allDiv)



// ---------------------------------------- Table Modification using DOM ----------------------------------------
const element = document.getElementById('element')
// console.log(element.getAttribute('data'))  // get the value of the element
// console.log(element.setAttribute('order-place', "pending")) // add the new element
// console.log(element.hasAttribute('order-place', "pending"))  // output as Boolean | undefine
// console.log(element.removeAttribute('order-place', "pending"))  // output as Boolean | undefine




// ----------------------------------------  ----------------------------------------





