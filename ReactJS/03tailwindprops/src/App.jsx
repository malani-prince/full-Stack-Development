// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card"
/*
      * Not pass Object | Array
      <Card channel="Prem Malani" myArr{name: "Prince"}/>

      * Outside Object not working
      <Card channel="Prem Malani" sumObj=myObj />

      * If we have to work with this then we have to use "{ }" and inside this pass the object
      
      * Not Working
      <Card someObj=[myArr] />

*/


function App() {
  let myObj = {
    name: "prince",
    age: 21
  }

  let myArr = [1, 2, 3, 4, 4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4' >Hello, TalWind</h1>
      <Card userName="Prince Malani" btbText="Click Me" someObj={myArr} />
      <Card userName="Prem Malani" btbText="Visit me" someObj={myObj} />
    </>
  )
}

export default App
