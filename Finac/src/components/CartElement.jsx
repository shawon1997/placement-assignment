import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { Removecart } from '../Redux/action'

export const CartElement = ({title,price,image,category,id,handleprice,handleDecPrice}) => {
    const [count,setcount]=useState(1)
     const [incprice,setincprice]=useState(0)
    const [decprice,setdecprice]=useState(0)
    const dispatch= useDispatch()





    useEffect(() => {
        handleprice(price)
    }, [incprice]);



    useEffect(()=>{
        handleDecPrice(price)
    },[decprice])


    const handlechageinc=()=>{
        setcount(count+1)
        setincprice(incprice+1)
         }
    const handlechagedec=()=>{
        setcount(count-1)
        setdecprice(decprice+1)
         }

         const removefun=(el)=>{
           
               
           
               dispatch(Removecart(el))
            //   console.log(filterdata)
             }
  return (
    <div>
    {/*<table>
  <tr>
    <th>Image</th>
    <th>Name</th>
    <th>Price</th>
    <th>Quantity</th>
  </tr>
  <tr>
    <td>
        <img style={{width:"50%",padding:".5rem",height:'80%'}} src={image}/>
    </td>
    <td>{title}</td>
    <td>{price}</td>
  </tr>
  <tr>
    
  </tr>
  <tr>
    
    
  </tr>
  <tr>
    <td>

    </td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
</table>*/}

        <div   style={{display:'flex',textAlign:"center" , cursor:"pointer",width:'50rem',height:'8rem',gap:"0.5rem",backgroundColor:'rgb(253, 248, 231)',marginBottom:'1rem',boxShadow:' rgba(0, 0, 0, 0.35) 0px 5px 15px',borderRadius:'6px'}} key={id} >
        <div style={{width:"7rem"}}><img style={{width:"50%",padding:".5rem",height:'80%'}}src={image}></img></div>
        
        <div style={{width:"25rem"}}>
        

        <b>Title </b>
        <p>{title}</p>
        </div>
        <div>
        <b>Price</b>
        <p>{price}</p>
        </div>
        <div>
        <b>Category </b>
        <p>{category}</p>
        </div>
        <div style={{margin:'auto'}}>
        <span>
        <button onClick={()=>handlechageinc()} style={{width:'3rem',height:'2rem'}}>+</button>
        <input type='String' value={count} style={{width:'2rem',height:'1.65rem'}}/>
        <button onClick={()=>handlechagedec()} disabled={count<=1?true:false} style={{width:'3rem',height:'2rem'}}>-</button>
        </span>
        <button onClick={()=>removefun(id)} style={{width:'7rem',height:'2rem',margin:'0.5rem',backgroundColor:'red',borderRadius:'6px',color:'white',fontSize:'20px',border:'none'}}>Remove</button>
        
        </div>
        
        
        </div>
    </div>
  )
}
