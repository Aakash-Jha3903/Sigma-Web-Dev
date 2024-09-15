import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react'
import Header from './compoents/Header'
import Slogan from './compoents/Slogan'
import BharatTime from './compoents/BharatTime'

function App() {

  return (
    <div className='bg-dark text-white border rounded-5 border-primary p-5 '>
      <Header></Header>
      <Slogan></Slogan>
      <BharatTime></BharatTime>
    </div>
  )
}

export default App
