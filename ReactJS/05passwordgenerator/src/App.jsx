// reference hook.: for refer value
import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  // * Step: 1 --> Variable Collection
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")


  // * step:2 --> PasswordGenerator Method | Write and use ""useCallBack Hook"" for optimization.

  // Use CallBack in React:
  // UseCallBack is a React Hook that let you cache function definition between re-renders.
  // * Syntax :--> useCallBack(fn, dependencies).
  // function memorize.
  // Why we give setPassword ? => is we give password then it always change the value, because it automatically generate the password. | 

  // * Stor in Cache 
  const passwordGenerator = useCallback(
    () => {
      let pass = ""
      let str = "qwertyuiopasdfghjklzxvcbnmQWERTYUIOPASDFGHJKLZXCVBNM"

      if (numberAllowed) str += "1234567890"
      if (charterAllowed) str += "!@#$%^&*()~_~\/"

      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char, char + 1)

      }

      // After getting password we have to set the password value using setPassword method.
      setPassword(pass)
    },
    [length, numberAllowed, charterAllowed, setPassword]
  )



  // * Step: 3 --> page load then call first time | if any action happens it change the state without loading the page. | (only basic introduction)
  useEffect(
    () => { passwordGenerator() },
    [length, numberAllowed, charterAllowed, setPassword]
  )

  // * step:4 --> USe the useRef hook for the connection between two component. | element reference and make any manipulation you want.
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(
    () => {

      // * Step: 5 --> Basic operation | like selection of object.
      // Select the border  area ?. "Optionally selection"
      passwordRef.current?.select()

      // first three value are select
      passwordRef.current?.setSelectionRange(0, 100)

      window.navigator.clipboard.writeText(password)
    },
    [password]
  )

  // * Use Effect Hook

  // const passwordGenerator = () => {
  //   let pass = ""
  //   let str = "qwertyuiopasdfghjklzxvcbnmQWERTYUIOPASDFGHJKLZXCVBNM"

  //   if (numberAllowed) str += "1234567890"
  //   if (charterAllowed) str += "!@#$%^&*()~_~\/"

  //   for (i = 1; i <= length; i++) {
  //     let char = Math.floor(Math.random() * str.length + 1)
  //     pass = str.charAt(char, char + 1)
  //   }
  //   setPassword(pass)
  // }
  // // [length, numberAllowed, charterAllowed, setPassword]


  // passwordGenerator()

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-600 bg-gray-700'>

      <h1 className='text-white text-center py-2'>Password Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />

        <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-800 transition-all duration-300 ease-in-out'
          onClick={copyPasswordToClipboard}
        >
          copy
        </button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex item-center gap-x-1'>
          <input
            type='range'
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'

            // * this is working on the range when range is change then, it is going to work.
            onChange={(e) => {
              setLength(e.target.value)
            }}
          />
          <label>Length: {length}</label>
        </div>

        <div className='flex item-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={numberAllowed}
            value="numberAllowed"
            // * 
            onChange={() => {
              setNumberAllowed((prev) => !prev)
            }}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>

        <div className='flex item-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={numberAllowed}
            value="numberAllowed"
            // * 
            onChange={() => {
              setCharacterAllowed((prev) => !prev)
            }}
          />
          <label htmlFor='characterInput'>Character</label>

        </div>
      </div>
    </div>
  )

}


export default App
