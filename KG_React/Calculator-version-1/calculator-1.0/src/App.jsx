import { useState } from 'react'

import './App.css'
import React from "react"
import Display from './components/Display'
import ButtonContainer from './components/ButtonContainer'
// import styles from "./App.module.css"

function App() {

  return (
    <  >
      {/* <div className="container text-align-center" > */}
        <div className=" container calculator bg-dark w-60 my-5 text-align-center " >
            <Display></Display>
          <ButtonContainer></ButtonContainer>
        </div>
      {/* </div> */}
    </>
  )
}

export default App
