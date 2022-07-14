import { useState } from 'react'
//import logo from './logo.svg'
//import { Routes,Route } from 'react-router-dom'
import './App.css'
import { Authentication } from './components/Authentication'
//import { SignIn } from './components/SignIn'
import { Todo } from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Authentication/>
    
      
    </div>
  )
}

export default App
