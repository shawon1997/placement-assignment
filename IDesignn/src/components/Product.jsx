import React, { useEffect, useState } from 'react'

import {useDispatch, useSelector} from 'react-redux'
import { AddToCart } from '../Redux/action'


export const Product = ({cat}) => {
const [cartdata,setcartdata]=useState([])
const dispatch=useDispatch()

let productsdata=useSelector((state)=>state?.prodata)
const [brands,setBrands]=useState([])
const [filters,setFilters]=useState([])
const [filteredData,setfilteredData]=useState([])
const [mydata,setmydata]= useState([])
 useEffect(()=>{
  if(cartdata){

    dispatch(AddToCart(cartdata))
  }
 },[cartdata])
 
useEffect(()=>{
  let temp=[]
 productsdata?.forEach(el => {
  if(!temp.includes(el.brand)){
    temp.push(el.brand)
  }
  
 });
setFilters([])
setBrands([])
 setBrands(temp)

},[productsdata])

useEffect(()=>{
setmydata(productsdata)
},[productsdata])
  
//console.log(filters)
//console.log(filteredData)

const setfilterfunction=(e)=>{
  
  if(filters.includes(e.target.value)){
      let temp= filters.filter((el)=>{
        if(el!=e.target.value){
          return el
        }
        
      })
      setFilters(temp )
  }

    if(e.target.checked){
      setFilters([...filters,e.target.value])
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
    alert('Add to Cart successfull')
    setcartdata([...cartdata,el])
   
  }

  
const sortdata=()=>{
  
  console.log('sort')
  
  //productsdata=productsdata.sort((a,b)=>b-a)

let data  = productsdata.sort(function(a,b){return a-b})

setmydata(data)

}

  return ( <div>
 

    {cat ?  
       filteredData?.length>0? <div style={{display:"grid", gridTemplateColumns:"repeat(6,1fr)", gap:".5rem",padding:"2rem"}}>
    
       <div style={{display:"flex", flexDirection:"column",justifyContent:"space-evenly",border:"1px solid", textAlign:"center"}}>
         {brands?.map((el)=>{
           return  <div key={el.id}>
             <label htmlFor={el}>{el}</label>
             <input  value={el} id={el} type="checkbox" onChange={(e)=>{
               setfilterfunction(e)
             }} />
           </div>
         })}
       </div>
      {filteredData?.map((e)=>{
 
             return <div   style={{border:"1px solid",textAlign:"center" , cursor:"pointer" }} key={e?.id} >
             <img style={{width:"50%",padding:".5rem"}}src={e?.images?e?.images[0]:"https://freepikpsd.com/file/2019/10/image-not-available-png-2-Transparent-Images-Free.png"}></img>
             <p>Title: {e?.title}</p>
             <p>Brand: {e?.brand}</p>
             <p>Price: {e?.price}</p>
             <p>Rating: {e?.rating}</p>
             <button onClick={()=>{
               addtocartbtn(e)
              }}>Add to cart</button>
           </div>
           
           
         
         } )}
     </div>: <div style={{display:"grid", gridTemplateColumns:"repeat(6,1fr)", gap:".5rem",padding:"2rem"}}>
    
    <div style={{display:"flex", flexDirection:"column",justifyContent:"space-evenly",border:"1px solid", textAlign:"center"}}>
      {brands?.map((el)=>{
        return  <div key={el.id}>
          <label htmlFor={el}>{el}</label>
          <input  value={el} id={el} type="checkbox" onChange={(e)=>{
            setfilterfunction(e)
          }} />
        </div>
      })}
    </div>
   {productsdata?.map((e)=>{

          return <div   style={{border:"1px solid",textAlign:"center" , cursor:"pointer" }} key={e.id} >
          <img style={{width:"50%",padding:".5rem"}}src={e.images?e.images[0]:"https://freepikpsd.com/file/2019/10/image-not-available-png-2-Transparent-Images-Free.png"}></img>
          <p>Title: {e.title}</p>
          <p>Brand: {e.brand}</p>
          <p>Price: {e.price}</p>
          <p>Rating: {e.rating}</p>
          <button onClick={()=>{
            addtocartbtn(e)
           }}>Add to cart</button>
        </div>
        
        
      
      } )}
  </div>
      
   
  : 
   <div>
   <h1>Smartphones</h1>
    
   <div style={{display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:".5rem",padding:"2rem"}}>
 
    {productsdata?.map((e)=>{
      if(e.category=="smartphones"){
       
        return <div   style={{border:"1px solid",textAlign:"center" , cursor:"pointer" }} key={e.id} >
        <img style={{width:"50%",padding:".5rem"}}src={e.images?e.images[0]:"https://freepikpsd.com/file/2019/10/image-not-available-png-2-Transparent-Images-Free.png"}></img>
        <p>Title: {e.title}</p>
        <p>Brand: {e.brand}</p>
        <p>Price: {e.price}</p>
        <p>Rating: {e.rating}</p>
        <button onClick={()=>{
          addtocartbtn(e)
         }}>Add to cart</button>
      </div>
      
      }
    
    })}
</div>
   
    <h1>Laptops</h1>
    <div style={{display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:".5rem",padding:"2rem"}}>
  
        {productsdata?.map((e)=>{
          if(e.category=="laptops"){
            return <div   style={{border:"1px solid",textAlign:"center" , cursor:"pointer" }} key={e.id} >
            <img style={{width:"50%",padding:".5rem"}}src={e.images?e.images[0]:"https://freepikpsd.com/file/2019/10/image-not-available-png-2-Transparent-Images-Free.png"}></img>
            <p>Title: {e.title}</p>
            <p>Brand: {e.brand}</p>
            <p>Price: {e.price}</p>
            <p>Rating: {e.rating}</p>
             <button onClick={()=>{
              addtocartbtn(e)
             }}>Add to cart</button>
          </div>
          
          }
        
        })}
    </div>
    <h1>Fragrances</h1>
    <div style={{display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:".5rem",padding:"2rem"}}>

    {/* <div style={{display:"flex", flexDirection:"column",justifyContent:"space-evenly",border:"1px solid", textAlign:"center",border:"1px solid"}}>
    {productsdata?.map((el)=>{
          if(el.category=="fragrances"){
          return  <div key={el.id}>
            <label htmlFor={el.brand}>{el.brand}</label>
            <input  value={el.brand} id={el.brand} type="checkbox" onChange={(e)=>{
            setfilterfunction(e)
          }} />
          </div>
        }
        })}
      </div> */}
        {productsdata?.map((e)=>{
          if(e.category=="fragrances"){
            return <div   style={{border:"1px solid",textAlign:"center" , cursor:"pointer" }} key={e.id} >
            <img style={{width:"50%",padding:".5rem"}}src={e.images?e.images[0]:"https://freepikpsd.com/file/2019/10/image-not-available-png-2-Transparent-Images-Free.png"}></img>
            <p>Title: {e.title}</p>
            <p>Brand: {e.brand}</p>
            <p>Price: {e.price}</p>
            <p>Rating: {e.rating}</p>
            <button onClick={()=>{
              addtocartbtn(e)
             }}>Add to cart</button>
          </div>
          
          }
        
        })}
    </div>
    <h1>Skincare</h1>
    <div style={{display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:".5rem",padding:"2rem"}}>
    {/* <div style={{display:"flex",justifyContent:"space-evenly",border:"1px solid", flexDirection:"column", textAlign:"center"}}>
    {productsdata?.map((el)=>{
          if(el.category=="skincare"){
          return  <div key={el.id}>
            <label htmlFor={el.brand}>{el.brand}</label>
            <input   value={el.brand} id={el.brand} type="checkbox" onChange={(e)=>{
            setfilterfunction(e)
          }} />
          </div>
        }
        })}
      </div> */}
        {productsdata?.map((e)=>{
          if(e.category=="skincare"){
            return <div   style={{border:"1px solid",textAlign:"center" , cursor:"pointer" }} key={e.id} >
            <img style={{width:"50%",padding:".5rem"}}src={e.images?e.images[0]:"https://freepikpsd.com/file/2019/10/image-not-available-png-2-Transparent-Images-Free.png"}></img>
            <p>Title: {e.title}</p>
            <p>Brand: {e.brand}</p>
            <p>Price: {e.price}</p>
            <p>Rating: {e.rating}</p>
            <button onClick={()=>{
              addtocartbtn(e)
             }}>Add to cart</button>
          </div>
          
          }
        
        })}
    </div>
    <h1>Groceries</h1>
    <div style={{display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:".5rem",padding:"2rem"}}>
    {/* <div style={{display:"flex",border:"1px solid", flexDirection:"column",justifyContent:"space-evenly",border:"1px solid", textAlign:"center"}}>
    {productsdata?.map((el)=>{
          if(el.category=="groceries"){
          return  <div key={el.id}>
            <label htmlFor={el.brand}>{el.brand}</label>
            <input   value={el.brand} id={el.brand}type="checkbox" onChange={(e)=>{
            setfilterfunction(e)
          }} />
          </div>
        }
        })}
      </div> */}
        {productsdata?.map((e)=>{
          if(e.category=="groceries"){
            return <div   style={{border:"1px solid",textAlign:"center" , cursor:"pointer" }} key={e.id} >
            <img style={{width:"50%",border:"1px solid",padding:".5rem"}}src={e.images?e.images[0]:"https://freepikpsd.com/file/2019/10/image-not-available-png-2-Transparent-Images-Free.png"}></img>
            <p>Title: {e.title}</p>
            <p>Brand: {e.brand}</p>
            <p>Price: {e.price}</p>
            <p>Rating: {e.rating}</p>
            <button onClick={()=>{
              addtocartbtn(e)
             }}>Add to cart</button>
          </div>
          
          }
        
        })}
    </div>
    <h1>Home-decoration</h1>
    <div style={{display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:".5rem",padding:"2rem"}}>
    {/* <div style={{display:"flex",border:"1px solid", flexDirection:"column",justifyContent:"space-evenly",border:"1px solid", textAlign:"center"}}>
    {productsdata?.map((el)=>{
          if(el.category=="home-decoration"){
          return  <div key={el.id}>
            <label htmlFor={el.brand}>{el.brand}</label>
            <input  value={el.brand} id={el.brand} type="checkbox" onChange={(e)=>{
            setfilterfunction(e)
          }} />
          </div>
        }
        })}
      </div> */}
        {productsdata?.map((e)=>{
          if(e.category=="home-decoration"){
            return <div   style={{border:"1px solid",textAlign:"center" , cursor:"pointer" }} key={e.id} >
            <img style={{width:"50%",padding:".5rem"}}src={e.images?e.images[0]:"https://freepikpsd.com/file/2019/10/image-not-available-png-2-Transparent-Images-Free.png"}></img>
            <p>Title: {e.title}</p>
            <p>Brand: {e.brand}</p>
            <p>Price: {e.price}</p>
            <p>Rating: {e.rating}</p>
            <button onClick={()=>{
              addtocartbtn(e)
             }}>Add to cart</button>
          </div>
          
          }
        
        })}
    </div>
    <h1>Furniture</h1>
    <div style={{display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:".5rem",padding:"2rem"}}>
    {/* <div style={{display:"flex",border:"1px solid" ,flexDirection:"column",justifyContent:"space-evenly",border:"1px solid", textAlign:"center"}}>
    {productsdata?.map((el)=>{
          if(el.category=="furniture"){
          return  <div  key={el.id}>
            <label htmlFor={el.brand}>{el.brand}</label>
            <input  value={el.brand} id={el.brand} type="checkbox" onChange={(e)=>{
            setfilterfunction(e)
          }} />
          </div>
        }
        })}
      </div> */}
        {productsdata?.map((e)=>{
          if(e.category=="furniture"){
            return <div   style={{border:"1px solid",textAlign:"center" , cursor:"pointer" }} key={e.id} >
            <img style={{width:"50%",padding:".5rem"}}src={e.images?e.images[0]:"https://freepikpsd.com/file/2019/10/image-not-available-png-2-Transparent-Images-Free.png"}></img>
            <p>Title: {e.title}</p>
            <p>Brand: {e.brand}</p>
            <p>Price: {e.price}</p>
            <p>Rating: {e.rating}</p>
            <button onClick={()=>{
              addtocartbtn(e)
             }}>Add to cart</button>
          </div>
          
          }
        
        })}
    </div>
    <h1>Tops</h1>
    <div style={{display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:".5rem",padding:"2rem"}}>
    {/* <div style={{display:"flex",border:"1px solid", flexDirection:"column",justifyContent:"space-evenly",border:"1px solid", textAlign:"center"}}>
    {productsdata?.map((el)=>{
          if(el.category=="tops"){
          return  <div key={el.id}>
            <label htmlFor={el.brand}>{el.brand}</label>
            <input   value={el.brand} id={el.brand} type="checkbox" onChange={(e)=>{
            setfilterfunction(e)
          }} />
          </div>
        }
        })}
      </div> */}
        {productsdata?.map((e)=>{
          if(e.category=="tops"){
            return <div   style={{border:"1px solid",textAlign:"center" , cursor:"pointer" }} key={e.id} >
            <img style={{width:"50%",padding:".5rem"}}src={e.images?e.images[0]:"https://freepikpsd.com/file/2019/10/image-not-available-png-2-Transparent-Images-Free.png"}></img>
            <p>Title: {e.title}</p>
            <p>Brand: {e.brand}</p>
            <p>Price: {e.price}</p>
            <p>Rating: {e.rating}</p>
            <button onClick={()=>{
              addtocartbtn(e)
             }}>Add to cart</button>
          </div>
          
          }
        
        })}
    </div>
    <h1>Womens-dresses</h1>
    <div style={{display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:".5rem",padding:"2rem"}}>
    {/* <div style={{display:"flex", flexDirection:"column",justifyContent:"space-evenly",border:"1px solid", textAlign:"center",justifyContent:"space-evenly",border:"1px solid", textAlign:"center"}}>
    {productsdata?.map((el)=>{
          if(el.category=="womens-dresses"){
          return  <div key={el.id}>
            <label htmlFor={el.brand}>{el.brand}</label>
            <input   value={el.brand} id={el.brand} type="checkbox" onChange={(e)=>{
            setfilterfunction(e)
          }} />
          </div>
        }
        })}
      </div> */}
        {productsdata?.map((e)=>{
          if(e.category=="womens-dresses"){
            return <div   style={{border:"1px solid",textAlign:"center" , cursor:"pointer" }} key={e.id} >
            <img style={{width:"50%",padding:".5rem"}}src={e.images?e.images[0]:"https://freepikpsd.com/file/2019/10/image-not-available-png-2-Transparent-Images-Free.png"}></img>
            <p>Title: {e.title}</p>
            <p>Brand: {e.brand}</p>
            <p>Price: {e.price}</p>
            <p>Rating: {e.rating}</p>
            <button onClick={()=>{
              addtocartbtn(e)
             }}>Add to cart</button>
          </div>
          
          }
        
        })}
    </div>
    <h1>Womens-shoes</h1>
    <div style={{display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:".5rem",padding:"2rem"}}>
    {/* <div style={{display:"flex", flexDirection:"column",justifyContent:"space-evenly",border:"1px solid", textAlign:"center"}}>
    {productsdata?.map((el)=>{
          if(el.category=="womens-shoes"){
          return  <div>
            <label htmlFor={el.brand}>{el.brand}</label>
            <input  value={el.brand} id={el.brand}type="checkbox" onChange={(e)=>{
            setfilterfunction(e)
          }} />
          </div>
        }
        })}
      </div> */}
        {productsdata?.map((e)=>{
          if(e.category=="womens-shoes"){
            return <div   style={{border:"1px solid",textAlign:"center" , cursor:"pointer" }} key={e.id} >
            <img style={{width:"50%",padding:".5rem"}}src={e.images?e.images[0]:"https://freepikpsd.com/file/2019/10/image-not-available-png-2-Transparent-Images-Free.png"}></img>
            <p>Title: {e.title}</p>
            <p>Brand: {e.brand}</p>
            <p>Price: {e.price}</p>
            <p>Rating: {e.rating}</p>
            <button onClick={()=>{
              addtocartbtn(e)
             }}>Add to cart</button>
          </div>
          
          }
        
        })}
    </div>
    <h1>Mens-shirts</h1>
    <div style={{display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:".5rem",padding:"2rem"}}>
    {/* <div style={{display:"flex", flexDirection:"column",justifyContent:"space-evenly",border:"1px solid", textAlign:"center"}}>
    {productsdata?.map((el)=>{
          if(el.category=="mens-shirts"){
          return  <div key={el.id}>
            <label htmlFor={el.brand}>{el.brand}</label>
            <input  value={el.brand} id={el.brand}type="checkbox" onChange={(e)=>{
            setfilterfunction(e)
          }} />
          </div>
        }
        })}
      </div> */}
        {productsdata?.map((e)=>{
          if(e.category=="mens-shirts"){
            return <div   style={{border:"1px solid",textAlign:"center" , cursor:"pointer" }} key={e.id} >
            <img style={{width:"50%",padding:".5rem"}}src={e.images?e.images[0]:"https://freepikpsd.com/file/2019/10/image-not-available-png-2-Transparent-Images-Free.png"}></img>
            <p>Title: {e.title}</p>
            <p>Brand: {e.brand}</p>
            <p>Price: {e.price}</p>
            <p>Rating: {e.rating}</p>
            <button onClick={()=>{
              addtocartbtn(e)
             }}>Add to cart</button>
          </div>
          
          }
        
        })}
    </div>
    <h1>Mens-shoes</h1>
    <div style={{display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:".5rem",padding:"2rem"}}>
    {/* <div style={{display:"flex", flexDirection:"column",justifyContent:"space-evenly",border:"1px solid", textAlign:"center"}}>
    {productsdata?.map((el)=>{
          if(el.category=="mens-shoes"){
          return  <div key={el.id}>
            <label htmlFor={el.brand}>{el.brand}</label>
            <input  value={el.brand} id={el.brand} type="checkbox" onChange={(e)=>{
            setfilterfunction(e)
          }} />
          </div>
        }
        })}
      </div> */}
        {productsdata?.map((e)=>{
          if(e.category=="mens-shoes"){
            return <div   style={{border:"1px solid",textAlign:"center" , cursor:"pointer" }} key={e.id} >
            <img style={{width:"50%",padding:".5rem"}}src={e.images?e.images[0]:"https://freepikpsd.com/file/2019/10/image-not-available-png-2-Transparent-Images-Free.png"}></img>
            <p>Title: {e.title}</p>
            <p>Brand: {e.brand}</p>
            <p>Price: {e.price}</p>
            <p>Rating: {e.rating}</p>
            <button onClick={()=>{
              addtocartbtn(e)
             }}>Add to cart</button>
          </div>
          
          }
        
        })}
    </div>
    <h1>Mens-watches</h1>
    <div style={{display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:".5rem",padding:"2rem"}}>
    {/* <div style={{display:"flex", flexDirection:"column",justifyContent:"space-evenly",border:"1px solid", textAlign:"center"}}>
    {productsdata?.map((el)=>{
          if(el.category=="mens-watches"){
          return  <div key={el.id}>
            <label htmlFor={el.brand}>{el.brand}</label>
            <input  value={el.brand} id={el.brand} type="checkbox" onChange={(e)=>{
            setfilterfunction(e)
          }} />
          </div>
        }
        })}
      </div> */}
        {productsdata?.map((e)=>{
          if(e.category=="mens-watches"){
            return <div   style={{border:"1px solid",textAlign:"center" , cursor:"pointer" }} key={e.id} >
            <img style={{width:"50%",padding:".5rem"}}src={e.images?e.images[0]:"https://freepikpsd.com/file/2019/10/image-not-available-png-2-Transparent-Images-Free.png"}></img>
            <p>Title: {e.title}</p>
            <p>Brand: {e.brand}</p>
            <p>Price: {e.price}</p>
            <p>Rating: {e.rating}</p>
            <button onClick={()=>{
              addtocartbtn(e)
             }}>Add to cart</button>
          </div>
          
          }
        
        })}
    </div>
    <h1>Womens-watches</h1>
    <div style={{display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:".5rem",padding:"2rem"}}>
    {/* <div style={{display:"flex", flexDirection:"column",justifyContent:"space-evenly",border:"1px solid", textAlign:"center"}}>
    {productsdata?.map((el)=>{
          if(el.category=="womens-watches"){
          return  <div key={el.id}>
            <label htmlFor={el.brand}>{el.brand}</label>
            <input   value={el.brand} id={el.brand} type="checkbox" onChange={(e)=>{
            setfilterfunction(e)
          }} />
          </div>
        }
        })}
      </div> */}
        {productsdata?.map((e)=>{
          if(e.category=="womens-watches"){
            return <div   style={{border:"1px solid",textAlign:"center" , cursor:"pointer" }} key={e.id} >
            <img style={{width:"50%",padding:".5rem"}}src={e.images?e.images[0]:"https://freepikpsd.com/file/2019/10/image-not-available-png-2-Transparent-Images-Free.png"}></img>
            <p>Title: {e.title}</p>
            <p>Brand: {e.brand}</p>
            <p>Price: {e.price}</p>
            <p>Rating: {e.rating}</p>
            <button onClick={()=>{
              addtocartbtn(e)
             }}>Add to cart</button>
          </div>
          
          }
        
        })}
    </div>
    <h1>Womens-bags</h1>
    <div style={{display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:".5rem",padding:"2rem"}}>
    {/* <div style={{display:"flex", flexDirection:"column",justifyContent:"space-evenly",border:"1px solid", textAlign:"center"}}>
    {productsdata?.map((el)=>{
          if(el.category=="womens-bags"){
          return  <div key={el.id}>
            <label htmlFor={el.brand}>{el.brand}</label>
            <input  value={el.brand} id={el.brand}type="checkbox" onChange={(e)=>{
            setfilterfunction(e)
          }} />
          </div>
        }
        })}
      </div> */}
        {productsdata?.map((e)=>{
          if(e.category=="womens-bags"){
            return <div   style={{border:"1px solid",textAlign:"center" , cursor:"pointer" }} key={e.id} >
            <img style={{width:"50%",padding:".5rem"}}src={e.images?e.images[0]:"https://freepikpsd.com/file/2019/10/image-not-available-png-2-Transparent-Images-Free.png"}></img>
            <p>Title: {e.title}</p>
            <p>Brand: {e.brand}</p>
            <p>Price: {e.price}</p>
            <p>Rating: {e.rating}</p>
            <button onClick={()=>{
              addtocartbtn(e)
             }}>Add to cart</button>
          </div>
          
          }
        
        })}
    </div>
    <h1>Womens-jewellery</h1>
    <div style={{display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:".5rem",padding:"2rem"}}>
    {/* <div style={{display:"flex", flexDirection:"column",justifyContent:"space-evenly",border:"1px solid", textAlign:"center"}}>
    {productsdata?.map((el)=>{
          if(el.category=="womens-jewellery"){
          return  <div key={el.id}>
            <label htmlFor={el.brand}>{el.brand}</label>
            <input  value={el.brand} id={el.brand} type="checkbox" onChange={(e)=>{
            setfilterfunction(e)
          }} />
          </div>
        }
        })}
      </div> */}
        {productsdata?.map((e)=>{
          if(e.category=="womens-jewellery"){
            return <div   style={{border:"1px solid",textAlign:"center" , cursor:"pointer" }} key={e.id} >
            <img style={{width:"50%",padding:".5rem"}}src={e.images?e.images[0]:"https://freepikpsd.com/file/2019/10/image-not-available-png-2-Transparent-Images-Free.png"}></img>
            <p>Title: {e.title}</p>
            <p>Brand: {e.brand}</p>
            <p>Price: {e.price}</p>
            <p>Rating: {e.rating}</p>
            <button onClick={()=>{
              addtocartbtn(e)
             }}>Add to cart</button>
          </div>
          
          }
        
        })}
    </div>
    <h1>Sunglasses</h1>
    <div style={{display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:".5rem",padding:"2rem"}}>
    {/* <div style={{display:"flex", flexDirection:"column",justifyContent:"space-evenly",border:"1px solid", textAlign:"center"}}>
    {productsdata?.map((el)=>{
          if(el.category=="sunglasses"){
          return  <div key={el.id}>
            <label htmlFor={el.brand}>{el.brand}</label>
            <input  value={el.brand} id={el.brand}type="checkbox" onChange={(e)=>{
            setfilterfunction(e)
          }} />
          </div>
        }
        })}
      </div> */}
        {productsdata?.map((e)=>{
          if(e.category=="sunglasses"){
            return <div   style={{border:"1px solid",textAlign:"center" , cursor:"pointer" }} key={e.id} >
            <img style={{width:"50%",padding:".5rem"}}src={e.images?e.images[0]:"https://freepikpsd.com/file/2019/10/image-not-available-png-2-Transparent-Images-Free.png"}></img>
            <p>Title: {e.title}</p>
            <p>Brand: {e.brand}</p>
            <p>Price: {e.price}</p>
            <p>Rating: {e.rating}</p>
            <button onClick={()=>{
              addtocartbtn(e)
             }}>Add to cart</button>
          </div>
          
          }
        
        })}
    </div>
    <h1>Automotive</h1>
    <div style={{display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:".5rem",padding:"2rem"}}>
    {/* <div style={{display:"flex", flexDirection:"column",justifyContent:"space-evenly",border:"1px solid", textAlign:"center"}}>
    {productsdata?.map((el)=>{
          if(el.category=="automotive"){
          return  <div key={el.id}>
            <label htmlFor={el.brand}>{el.brand}</label>
            <input  value={el.brand} id={el.brand} type="checkbox" onChange={(e)=>{
            setfilterfunction(e)
          }} />
          </div>
        }
        })}
      </div> */}
        {productsdata?.map((e)=>{
          if(e.category=="automotive"){
            return <div   style={{border:"1px solid",textAlign:"center" , cursor:"pointer" }} key={e.id} >
            <img style={{width:"50%",padding:".5rem"}}src={e.images?e.images[0]:"https://freepikpsd.com/file/2019/10/image-not-available-png-2-Transparent-Images-Free.png"}></img>
            <p>Title: {e.title}</p>
            <p>Brand: {e.brand}</p>
            <p>Price: {e.price}</p>
            <p>Rating: {e.rating}</p>
            <button onClick={()=>{
              addtocartbtn(e)
             }}>Add to cart</button>
          </div>
          
          }
        
        })}
    </div>
    <h2>Motorcycle</h2>
    <div style={{display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:".5rem",padding:"2rem"}}>
    {/* <div style={{display:"flex", flexDirection:"column",justifyContent:"space-evenly",border:"1px solid", textAlign:"center"}}>
    {productsdata?.map((el)=>{
          if(el.category=="motorcycle"){
          return  <div key={el.id}>
            <label htmlFor={el.brand}>{el.brand}</label>
            <input  value={el.brand} id={el.brand} type="checkbox" onChange={(e)=>{
            setfilterfunction(e)
          }} />
          </div>
        }
        })}
      </div> */}
        {productsdata?.map((e)=>{
          if(e.category=="motorcycle"){
            return <div   style={{border:"1px solid",textAlign:"center" , cursor:"pointer" }} key={e.id} >
            <img style={{width:"50%",padding:".5rem"}}src={e.images?e.images[0]:"https://freepikpsd.com/file/2019/10/image-not-available-png-2-Transparent-Images-Free.png"}></img>
            <p>Title: {e.title}</p>
            <p>Brand: {e.brand}</p>
            <p>Price: {e.price}</p>
            <p>Rating: {e.rating}</p>
            <button onClick={()=>{
              addtocartbtn(e)
             }}>Add to cart</button>
          </div>
          
          }
        
        })}
    </div>
    <h2>lighting</h2>
    <div style={{display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:".5rem",padding:"2rem"}}>
    {/* <div style={{display:"flex", flexDirection:"column",justifyContent:"space-evenly",border:"1px solid", textAlign:"center"}}>
    {productsdata?.map((el)=>{
          if(el.category=="lighting"){
          return  <div key={el.id}>
            <label htmlFor={el.brand}>{el.brand}</label>
            <input  value={el.brand} id={el.brand} type="checkbox" onChange={(e)=>{
            setfilterfunction(e)
          }} />
          </div>
        }
        })}
      </div> */}
        {productsdata?.map((e)=>{
          if(e.category=="lighting"){
            return <div   style={{border:"1px solid",textAlign:"center" , cursor:"pointer" }} key={e.id} >
            <img style={{width:"50%",padding:".5rem"}}src={e.images?e.images[0]:"https://freepikpsd.com/file/2019/10/image-not-available-png-2-Transparent-Images-Free.png"}></img>
            <p>Title: {e.title}</p>
            <p>Brand: {e.brand}</p>
            <p>Price: {e.price}</p>
            <p>Rating: {e.rating}</p>
            <button onClick={()=>{
              addtocartbtn(e)
             }}>Add to cart</button>
          </div>
          
          }
        
        })}
    </div>
   
    </div>
    }
    {/*<Navbar/>*/}
    {/*<AddToCart data={cartdata}/>*/}
  </div>
  )
}
