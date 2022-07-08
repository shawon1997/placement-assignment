//import { useState } from 'react'
//import logo from './logo.svg'
import './App.css'
import { Search } from './components/Search'
//import { Routes, Route } from "react-router-dom";
import { BasicUserCard } from './components/BasicUserCard'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="App">
    <h1>Rick and Morty Search</h1>
    {/*<Routes>
      <Route path='/' element={<BasicUserCard/>}/>
    </Routes>*/}
     <Search/>
    </div>
  )
}

export default App
