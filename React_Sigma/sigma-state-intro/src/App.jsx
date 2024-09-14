import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(108)
  let a = 5;
  return (
    <>
    <div>
      Count is {count}
      <br />
      <br />
      <button onClick={()=> {setCount(count+1)} } >Update count </button>


      {/* A is {a}
      <br />
      <br />
      <button onClick={()=> {a=a+1} }>Update a </button> */}
    </div>
    </>
  )
}

export default App
