// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import reactLogo from './assets/react.svg'
// eslint-disable-next-line no-unused-vars
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // useState(false)
  // useState('')
  // useState('prince')
  // useState([])
  // useState({})
  //  /|\
  //   |___________________________ 
  //                               | 
  //                              \|/  
  let [counter, setCounter] = useState(0)

  // let counter = 0

  const addValue = () => {
    // console.log("Value Added", Math.random())
    // counter = counter + 1
    setCounter(counter + 1)
    console.log(counter)
  }

  const subtractValue = () => {
    // console.log("Value subtract", Math.random())
    // counter = counter - 1
    setCounter(counter - 1)
    if(counter <= 0){
      setCounter(0)
    }
    console.log(counter)

  }

  return (
    <>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={subtractValue}>Remove Value</button>
      <footer>{counter}</footer>
    </>
  )
}

export default App
