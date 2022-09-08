import React, { useState,useEffect } from 'react'
import {ProductByCat, ProductData, product_data} from '../Redux/action'
import {useDispatch,useSelector} from 'react-redux'
import './Navbar.css'
import { Product } from './Product'
import { useNavigate } from "react-router-dom";


export const Navbar = () => {
  
  let cartdata=useSelector((state)=>state?.cart) 
  let productsdata=useSelector((state)=>state?.prodata)
  const [cat,setcat]=useState(false)
  const [cart,setcrat]=useState(0)
  const [sortdata,setsortdata]=useState([])
  const [lowsortdata,setlowsortdata]=useState([])
  const dispatch=useDispatch()
  const navigate=useNavigate()
  useEffect(() => {
    if(cat){
      dispatch(ProductByCat(cat))
    }
    else{
      dispatch(ProductData())
    }
    }, [cat]);

  const catagorydata=(e)=>{
   setcat(e)
  }

  useEffect(()=>{
    setcrat(cartdata.length)
  },[cartdata])

const filterprice=(e)=>{
  if(e=='high'){
    var sortdata=productsdata.sort((a,b)=>{
      return b.price-a.price
    })
    //console.log(sortdata)
    setsortdata(sortdata)
  }
  else if(e=='low'){
    var sortdata=productsdata.sort((a,b)=>{
      return a.price-b.price
    })
    //console.log(sortdata)
    setlowsortdata(sortdata)
  }
}
  useEffect(()=>{
    product_data(sortdata)
    setlowsortdata()
  },[sortdata])
  useEffect(()=>{
    product_data(lowsortdata)
    setsortdata()
  },[sortdata])
  return (
  <div>
    <div className='navbar'>
        <div onClick={()=>{
          navigate('/')
        }}>Home</div>
        <div>category
            <select onChange={(e)=>catagorydata(e.target.value)}  >
            <option></option>
                <option value='Smartphones'>Smartphones</option>
                <option value='Laptops'>Laptops</option>
                <option value='Fragrances'>Fragrances</option>
                <option value='Skincare'>Skincare</option>
                <option value='Groceries'>Groceries</option>
                <option value='Home-decoration'>Home-decoration</option>
                <option value='Furniture'>Furniture</option>
                <option value='Tops'>Tops</option>
                <option value='Womens-dresses'>Womens-dresses</option>
                <option value='Womens-shoes'>Womens-shoes</option>
                <option value='Mens-shirts'>Mens-shirts</option>
                <option value='Mens-shoes'>Mens-shoes</option>
                <option value='Mens-watches'>Mens-watches</option>
                <option value='Womens-watches'>Womens-watches</option>
                <option value='Womens-bags'>Womens-bags</option>
                <option value='Womens-jewellery'>Womens-jewellery</option>
                <option value='Sunglasses'>Sunglasses</option>
                <option value='Automotive'>Automotive</option>
                <option value='Motorcycle'>Motorcycle</option>
                <option value='lighting'>lighting</option>
            </select>
        </div>
        <div>
        Sort By
        <select onChange={(e)=>filterprice(e.target.value)}>
                <option></option>
                <option value='high'>High to low</option>
                <option value='low'>Low to High</option>
            </select>
        </div>
        <div onClick={()=>{
          navigate('/cart')
        }}>
        
        Cart: {cart}

        </div>
    </div>
<br></br>
<br></br>
    <Product cat={cat}/>

  </div>

  )
}
