import { useState } from 'react'
//import logo from './logo.svg'
import {Router,Route} from "react-router-dom"
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import Todo from './components/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Login/>
      <Register/>
      <Todo/>
    </div>
  )
}

export default App
