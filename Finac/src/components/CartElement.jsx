import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { Removecart } from '../Redux/action'

export const CartElement = ({title,price,image,category,id,handleprice,handleDecPrice}) => {
    const [count,setcount]=useState(1)
    const [decCount,setDeccount] =useState(0)
     const [incprice,setincprice]=useState(0)
    const [decprice,setdecprice]=useState(0)
    const dispatch= useDispatch()


useEffect(() => {
    handleprice(incprice)
}, [incprice]);


    useEffect(() => {
        setincprice((price*count)-price)
    }, [count]);



    useEffect(() => {
        
        setdecprice(count*price)


    }, [decCount]);

    useEffect(()=>{
        handleDecPrice(decprice)
    },[decprice])


    const handlechageinc=()=>{
        setcount(count+1)
         }
    const handlechagedec=()=>{
        setcount(count-1)
        //setDeccount(decCount-1)
         }

         const removefun=(el)=>{
           
               
           
               dispatch(Removecart(el))
            //   console.log(filterdata)
             }
  return (
    <div>
        <div   style={{display:'flex',border:"1px solid",textAlign:"center" , cursor:"pointer",height:'20rem' }} key={id} >
        <div><img style={{width:"50%",padding:".5rem",height:'80%'}}src={image}></img></div>
        <div>
        <p>Title: {title}</p>
        <p>Price: {price}</p>
        <p>Category: {category}</p>
        <span>

        <button onClick={()=>handlechageinc()}>+</button>
      <input type='String' value={count} style={{width:'2rem'}}/>
        <button onClick={()=>handlechagedec()} disabled={count<=1?true:false}>-</button>
        </span>
        <button onClick={()=>removefun(id)}>Remove</button>
        
        </div>
        
        
        </div>
    </div>
  )
}
