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
  const Homepage=()=>{
    //ProductData()
    navigate('/')
  }
  return (
  <div>
    <div className='navbar'>
        <div onClick={()=>{
          Homepage
        }}>Home</div>
        <div>category
            <select onChange={(e)=>catagorydata(e.target.value)}  >
            <option></option>
                <option value='electronics'>Electronics</option>
                <option value='jewelery'>Jewelery</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
               
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
        
        Cart: {cartdata?.length}

        </div>
    </div>
<br></br>
<br></br>
    <Product cat={cat}/>

  </div>

  )
}
