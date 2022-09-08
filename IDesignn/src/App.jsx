
 
import { Routes, Route } from "react-router-dom";
import { AddToCart } from './components/AddToCart'
import { Navbar } from './components/Navbar'

//import { AddToCart } from './Redux/action'



function App() {

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Navbar/>}/>
      <Route path="/cart" element={<AddToCart/>}/>
    </Routes>
    
  
    </div>
  )
}

export default App
