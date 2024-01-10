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
  const [counter, setCounter] = useState(0)

  // let counter = 0

  // one work doit more then one times 
  // Set counter having hidden Function => Callback expect | (prevCounter) is state of lastly updated value.
  //  

  const addValue = () => {
    // console.log("Value Added", Math.random())
    // counter = counter + 1

    // * Use state consider the same changes so it ignores the other changes.
    // * setCounter(count + 1)   ==> at the last on is called and change the value
    // * setCounter(count + 1)   ===> similar Change ignore [❌]
    // * setCounter(count + 1)   ===> similar Change ignore [❌] 
    // * setCounter(count + 1)   ===> similar Change ignore [❌]
    // * Return..

    // For really increase the value we have to change apply, variable called "prevCounter." 
    // * prevCounter is value come from CallBack Function via setCounter | take the value add number | <Move to next> | And return 
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }

  const subtractValue = () => {
    // console.log("Value subtract", Math.random())
    // counter = counter - 1
    setCounter(counter - 1)
    if (counter <= 0) {
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
    </>
  )
}

export default App
