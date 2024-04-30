import { useState } from 'react'
import './App.css'
import RightAside from "./components/rightAside"
import MiddleAside from "./components/middleAside"
import LeftAside from "./components/leftAside"

function App() {

  return (
    <main>
      <LeftAside/>
      <MiddleAside/>
      <RightAside/>
    </main>
  )
}

export default App
