import React from 'react'

import Todohead from './components/Todohead'
import Inputs from './components/Inputs'
import Items from './components/Items'


const App = () => {
  return (
    <div className='bg-dark text-white' style={{ height: '100vh' }} >

      <center className='todo-container bg-dark text-white' >
        <Todohead />

        {/* <div className="container"> */}
        <Inputs />
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
        {/* </div> */}
      </center>

    </div>
  )
}

export default App
