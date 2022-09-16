import axios from 'axios'
export const Add_To_Cart='ADD_TO_CART'
export const data='DATA'
export const cardDetails='CARDDETAILS'

export const SingleProActions =(id)=>{
  
    return{
        type:cardDetails,
        payload:id
    }
}

export const Singleproduct = (id)=> (dispatch) =>{
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then((res)=>{
        //console.log("single",res)
        //console.log("res.data")
        dispatch(SingleProActions(res.data))
  
    }).catch((err)=>{
        //dispatch(err.message)
        console.log(err)
    })


}

export const Removecart=(id)=>(dispatch,getState)=>{
     console.log(id)
     let data=getState().cart
    
        let filterdata=data.filter((e)=>{

        return e.id!==id
       })

       localStorage.setItem("cartdata",JSON.stringify(filterdata))
    //   dispatch(AddToCart())
    dispatch(getcart())
}


export const getcart=()=>(dispatch)=>{
   let cartdata= JSON.parse(localStorage.getItem('cartdata'))||[]

   dispatch({type:"getcatdata",
payload:cartdata})
}
export const AddToCart=(data)=>(dispatch)=>{
    
    let addtocartdata=JSON.parse(localStorage.getItem('cartdata'))||[]
     
    localStorage.setItem("cartdata",JSON.stringify([...addtocartdata,data]))
 
    dispatch({
        type:Add_To_Cart,
        payload:JSON.parse(localStorage.getItem('cartdata'))
    })
}

export const product_data=(datas)=>{
    //console.log(datas)
 return{
    type:data,
    payload:datas
 }
}

export const ProductData=()=>(dispatch)=>{
     
    axios.get('https://fakestoreapi.com/products')
    .then((res)=>{
        
       
        dispatch(product_data(res.data))
  
    }).catch((err)=>{
        //dispatch(err.message)
        console.log(err)
    })
}



export const ProductByCat=(catg)=>(dispatch)=>{
    //console.log(catg)
    axios.get(`https://fakestoreapi.com/products/category/${catg}`)
    .then((res)=>{
      
   
    dispatch(product_data(res.data))
  
    }).catch((err)=>{
        console.log(err)
    })
}