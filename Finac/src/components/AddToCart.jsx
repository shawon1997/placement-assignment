import React, { useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Nav } from './Nav'

export const AddToCart = () => {
  const [count,setcount]=useState(1)
  const [Total,setTotal]=useState(0)
  const navigate=useNavigate()
  let cartdata=useSelector((state)=>state?.cart) 
  //console.log('cart',cartdata)
  useEffect(() => {
    let arr=cartdata?.map((e)=>e.price)
    
    let total=arr.reduce((a,b)=>a+b)
    setTotal(total.toFixed(2))
    console.log('total',total)
  }, []);
 const handlechage=(e)=>{
setcount(count+e)
 }

 const payment=()=>{
  navigate('/payment')
 }
  return (
    <div>
    <Nav/>
    <br></br>
    <div style={{width:'40rem',margin:'2rem',marginTop:'5rem'}}>
    
        {cartdata?.map((e)=>{

        return <div   style={{display:'flex',border:"1px solid",textAlign:"center" , cursor:"pointer",height:'20rem' }} key={e.id} >
        <div><img style={{width:"50%",padding:".5rem",height:'80%'}}src={e.image}></img></div>
        <div>
        <p>Title: {e.title}</p>
        <p>Price: {e.price}</p>
        <p>Category: {e.category}</p>
        <span>

        <button onClick={()=>handlechage(1)}>+</button>
      <input type='String' value={count} style={{width:'2rem'}}/>
        <button onClick={()=>handlechage(-1)} disabled={count<=1?true:false}>-</button>
        </span>
        <button>Remove</button>
        
        </div>
        
        
        </div>



} )}
    </div>
    <div style={{width:'15rem',border:'1 px solid',marginLeft:'50rem'}}>
    <p><b>Total Amount: </b>{Total}</p>
    <button style={{backgroundColor:'green',color:'white',height:'3rem',padding:'1rem',borderRadius:'6px',fontSize:'20px'}} onClick={()=>payment()}>Make Payment</button>
    </div>
    <br></br>
    <br></br>
    <br></br>
    </div>
  )
}
