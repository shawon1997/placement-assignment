import React from 'react'
import {useSelector} from 'react-redux'
import { Nav } from './Nav'

export const Payment = () => {
  let cartdata=useSelector((state)=>state?.cart) 
  //console.log('cart',cartdata)

  return (
    <div>
    <Nav/>
    <br></br>
    <br></br>
    <h2>Thank You! Your Order Dispatch.....</h2>
    <h2>Hopefully All the Item will be Deliver within 3 days</h2>
    <div style={{display:"grid", gridTemplateColumns:"repeat(6,1fr)", gap:".5rem",padding:"2rem"}}>
    
        {cartdata?.map((e)=>{

        return <div  style={{backgroundColor:'rgb(253, 250, 246)',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'6px' ,textAlign:"center" , cursor:"pointer" }} key={e.id} >
        <div><img style={{width:"50%",padding:".5rem"}}src={e.image}></img></div>
        <div>
        <p>Title: {e.title}</p>
        <p>Price: {e.price}</p>
        <p>Category: {e.category}</p>
        
        
        </div>
        
        
        </div>



} )}
    </div>
    
    </div>
  )
}
