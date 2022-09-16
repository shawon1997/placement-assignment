
 
import { Routes, Route } from "react-router-dom";
import { AddToCart } from './components/AddToCart'
import { Navbar } from './components/Navbar'
import { Payment } from "./components/Payment";
import { ProductDetails } from "./components/ProductDetails";
//import { Product } from "./components/Product";

//import { AddToCart } from './Redux/action'



function App() {

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Navbar/>}/>
      <Route path="/cart" element={<AddToCart/>}/>
      <Route path="/details/:id" element={<ProductDetails/>}/>
      <Route path="/payment" element={<Payment/>}/>
    </Routes>
    
  
    </div>
  )
}

export default App
