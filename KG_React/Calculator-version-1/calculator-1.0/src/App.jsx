import { useState } from 'react'

import './App.css'
import React from "react"
import DisplayInput from './components/DisplayInput'
import ButtonContainer from './components/ButtonContainer'
// import styles from "./App.module.css"

function App() {

  return (
    <  >
      <h1 className='text-center text-primary mt-5' >Calculator</h1>

      <div className=" container calculator bg-dark col-sm-8 col-md-6 col-lg-4 mt-3  " >
        <DisplayInput></DisplayInput>
        <ButtonContainer ></ButtonContainer>
      </div>
    </>
  )
}

export default App
