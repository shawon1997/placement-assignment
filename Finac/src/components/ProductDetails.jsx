import React, { useEffect, useState } from 'react'
import { AddToCart } from '../Redux/action'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Singleproduct } from '../Redux/action'
import { Nav } from './Nav'

export const ProductDetails = () => {
  
  const dispatch=useDispatch()
  const navigate=useNavigate()
    const data=useSelector((state)=>state?.SingleProData)
    const {id} = useParams()

   

    //console.log('data=='+data.title)
   

    useEffect(() => {
        dispatch(Singleproduct(id))
        
        
    }, [id]);

    const addtocartbtn=(el)=>{
      //console.log(el)
      alert('Add to Cart successfull')
      dispatch(AddToCart(el))
  
    }
  return (
    <div>
    <Nav/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div style={{width:'30rem',backgroundColor:'rgb(253, 250, 246)',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'6px' ,textAlign:"center" , cursor:"pointer",padding:'1rem',margin:'auto' }}>
      <img style={{width:"50%",padding:".5rem"}}src={data.image}></img>
      <p>Title: {data.title}</p>
      <p>Price: {data.price}</p>
      <p>Category: {data.category}</p>
      <button onClick={()=>{
               addtocartbtn(data)
              }}>Add to cart</button>
    </div>
    </div>
  )
}
