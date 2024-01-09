
import Chai from "./chai"

// Hoe to inject js.

function App() {
  //* Evaluation Expression -> only Final outcome only written. 
  //*                       -> Expression not allowed between "{<>}". 
  // Why we can not Do that :-> react Create Element. 
  // problem is: when we pass the normal string using evaluation Expression at that moment, that element added at the last.
  // and when we pass the expression it consider as a string.
  const userName = "Prince Malani"
  return (
    <>
      <h1> {userName} | vite React Project</h1>
      <Chai />
      <p>HEllo</p>
    </>
  )
}

export default App
