import React, { useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { cardDetails } from '../Redux/action'
import { CartElement } from './CartElement'
import { Nav } from './Nav'

export const AddToCart = () => {
  
  const [Total,setTotal]=useState(0)
  const navigate=useNavigate()
  let cartdata=useSelector((state)=>state?.cart) 
  //console.log('cart',cartdata)
  useEffect(() => {
    let arr=cartdata?.map((e)=>e.price)
 
    if(cartdata.length==1){
      setTotal(cartdata[0].price)
    }
      else{
       let total= arr?.reduce((a,b)=>{
         
         return a+b
       },0)
        
       setTotal(total)
      }
  
  }, [cartdata]);

  //useEffect(() => {
  //  let arr=cartdata?.map((e)=>e.price)
  //     let total= arr?.reduce((a,b)=>{
         
  //       return a+b
  //     },0)
        
  //     setTotal(total)
  //}, [cartdata]);
  useEffect(() => {
    let arr=cartdata?.map((e)=>e.price)
       let total= arr?.reduce((a,b)=>{
         
         return a+b
       },0)
        
       setTotal(total)
  }, []);

 const payment=()=>{
  alert('Your Payment is Successfull')
  navigate('/payment')
 }

const handleprice=(price)=>{
  console.log('+',price)
  setTotal(Total+price) 
  //console.log(price)
}
const handleDecPrice=(price)=>{
  console.log('-',price)
  setTotal(Total-price)
}

  return (
    <div>
    <Nav/>
    <br></br>
    <div style={{width:'40rem',margin:'2rem',marginTop:'5rem'}}>
    
        {cartdata?.map((e)=>{

        return<div style={{width:'40rem'}}>
        <CartElement {...e} handleprice={handleprice} handleDecPrice={handleDecPrice}/>
        </div>

   

} )}
    </div>
    <div style={{width:'15rem',border:'1 px solid',marginLeft:'50rem'}}>
    <p><b>Total Amount: </b>{Total.toFixed(2)}</p>
    <button style={{backgroundColor:'green',color:'white',height:'3rem',padding:'1rem',borderRadius:'6px',fontSize:'20px'}} onClick={()=>payment()}>Make Payment</button>
    </div>
    <br></br>
    <br></br>
    <br></br>
    </div>
  )
}
