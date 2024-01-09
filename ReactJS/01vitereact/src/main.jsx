/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import { JSX as _jsx } from 'react/jsx-runtime.js';

// function MyApp() {
//   return (
//     <div>
//       <h1>Custom App! Malani Prince</h1>
//     </div>
//   )
// }

//* Custom Object for making new Component in HTML | <Custom> 
// const ReactElement = {
//   type: 'a',
//   props: {
//     href: "https://google.com",
//     target: "_blank"
//   },
//   children: "Click me to Visit Google"
// }

const anotherUser = "Chai aur React"

//* Create Element in React
const reactElement = React.createElement(
  // 1. Tag name
  'a',
  // 2. Object
  {
    href: "https://google.com",
    target: "_blank"
  },
  // direct Test,
  "Visit Google Web Hear",
  // Evaluated Expression
  anotherUser
)


// * Test Case
const anotherElement = (
  <a href='https://google.com' target="_blank">Visit Again</a>
)


// * ReactDOM Properties | <Working>
ReactDOM.createRoot(document.getElementById('root'))
  .render(

    // MyApp() --> We can write like this because it is a function.

    // <App />

    // ReactElement,    // this will not work | <Because this is custom react> | <it is method> | <there is a particular syntax for working>

    // Not working because the syntax of the "ReactElement" is not match with the vite Object.

    // anotherElement   // convert into Object

    reactElement
  )
