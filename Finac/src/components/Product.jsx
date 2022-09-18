import React, { useEffect, useState } from 'react'

import {useDispatch, useSelector} from 'react-redux'

import {useNavigate} from 'react-router-dom'
import { AddToCart, ProductByCat, ProductData } from '../Redux/action'


export const Product = ({cat}) => {
 const cart= useSelector((state)=>state?.cart)
 
const [brands,setBrands]=useState([])
const [filters,setFilters]=useState([])
const [filteredData,setfilteredData]=useState([])
 
const dispatch=useDispatch()
const navigate=useNavigate()
let productsdata=useSelector((state)=>state?.prodata)
 
 
useEffect(()=>{
  let temp=[]
 productsdata?.forEach(el => {
  if(!temp.includes(el.category)){
    temp.push(el.category)
  }
  
 });
setFilters([])
setBrands([])
 setBrands(temp)

},[productsdata])

 

const setfilterfunction=(e)=>{
  console.log(e.target.value)
  if(e.target.value=='home'){
    dispatch(ProductData())
  }
  else{

    dispatch(ProductByCat(e.target.value))
  }

}
 
useEffect(()=>{
 

    let filtereddata=productsdata?.filter((el)=>{
      if(filters.includes(el.brand)){
        return el
      }
    })
   
      setfilteredData(filtereddata)

},[filters])



const addtocartbtn=(el)=>{
  //console.log(el)

  //dispatch(AddToCart(el))
  alert('Add to Cart successfull')
 
}
  
const ProDetails=(e)=>{
  navigate(`/details/${e}`)

}

  return ( <div style={{display:'flex'}}>
     <div style={{backgroundColor:'rgb(253, 250, 246)', textAlign:"left",width:'40rem',marginTop:'3rem',padding:'1rem',marginLeft:'0.5rem'}}>
     
     <form onChange={(e)=>setfilterfunction(e)}>
     <div>
     <label>Home</label>
     <input type='radio' value="home" name='ecom'/>
     </div>
     <div>
     <label>Electronics</label>
     <input type='radio' value='electronics' name='ecom'/>
     </div>
     <div>
     <label>Jewelery</label>
     <input type='radio' value='jewelery' name='ecom'/>
     </div>
     <div>
     <label>Men's Clothing</label>
     <input type='radio' value="men's clothing" name='ecom'/>
     </div>
     <div>
     <label>Women's Clothing</label>
     <input type='radio' value="women's clothing" name='ecom'/>
     </div>
     
    </form>
     </div>
     <div>

    {cat ?  
       <div style={{display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:".5rem",padding:"2rem"}}>
    
    
   {productsdata?.map((e)=>{

          return <div   style={{textAlign:"center" , cursor:"pointer",backgroundColor:'rgb(253, 250, 246)',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'6px' }} key={e.id} >
          <img style={{width:"50%",padding:".5rem"}}src={e.image}></img>
          <p><b>Title:</b>{e.title}</p>
      <p><b>Price: </b>{e.price}</p>
      <p><b>Rating:</b> {e.rating.rate}</p>
         
        </div>
        
        
      
      } )}
  </div>
      
   
  : 
   <div style={{display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:".9rem",padding:"2rem"}}>
   {productsdata?.map((e)=>{

return <div   style={{textAlign:"center" , cursor:"pointer",backgroundColor:'rgb(253, 250, 246)',boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',borderRadius:'6px'}} key={e.id} onClick={()=>ProDetails(e.id)}>
      
      <img style={{width:"50%",padding:".5rem"}}src={e.image}></img>
      <p><b>Title:</b>{e.title}</p>
      <p><b>Price: </b>{e.price}</p>
      <p><b>Rating:</b> {e.rating.rate}</p>

      
</div>



} )}
      
   
    </div>
    }
    </div>
  </div>
  )
}
