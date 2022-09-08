import React from 'react'
import {useSelector} from 'react-redux'

export const AddToCart = () => {
  //var item = JSON.parse( localStorage.getItem( "cartdata" ) );
  let cartdata=useSelector((state)=>state?.cart) 
  //console.log('cart',cartdata)
 
  return (
    <div style={{display:"grid", gridTemplateColumns:"repeat(6,1fr)", gap:".5rem",padding:"2rem"}}>
    <h2>Cart Page</h2>
        {cartdata?.map((e)=>{

        return <div   style={{border:"1px solid",textAlign:"center" , cursor:"pointer" }} key={e.id} >
        <img style={{width:"50%",padding:".5rem"}}src={e.images?e.images[0]:"https://freepikpsd.com/file/2019/10/image-not-available-png-2-Transparent-Images-Free.png"}></img>
        <p>Title: {e.title}</p>
        <p>Brand: {e.brand}</p>
        <p>Price: {e.price}</p>
        <p>Rating: {e.rating}</p>
        </div>



} )}
    </div>
  )
}
