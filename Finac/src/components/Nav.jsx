import React, { useState,useEffect } from 'react'
import {ProductByCat, ProductData, product_data} from '../Redux/action'
import {useDispatch,useSelector} from 'react-redux'
import './Navbar.css'
import { Product } from './Product'
import { useNavigate } from "react-router-dom";


export const Nav= () => {
  
  let cartdata=useSelector((state)=>state?.cart) 
 
  const navigate=useNavigate()
  
  return (
  <div>
    <div className='navbar'>
        <div onClick={()=>{
          navigate('/')
        }}>Home</div>
        
        
        <div onClick={()=>{
          navigate('/cart')
        }}>
        
        Cart: {cartdata?.length}

        </div>
    </div>
  </div>

  )
}
