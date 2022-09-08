import axios from 'axios'
export const Add_To_Cart='ADD_TO_CART'
export const data='DATA'

export const AddToCart=(data)=>{
//console.log(data)
return{
    type:Add_To_Cart,
    payload:data
}
}

export const product_data=(datas)=>{
    //console.log(datas)
 return{
    type:data,
    payload:datas
 }
}

export const ProductData=()=>(dispatch)=>{
    //console.log(catg)
    axios.get(`https://dummyjson.com/products?limit=100`)
    .then((res)=>{
        
     dispatch(product_data(res.data.products))
  
    }).catch((err)=>{
        dispatch(err.message)
    })
}



export const ProductByCat=(catg)=>(dispatch)=>{
    //console.log(catg)
    axios.get(`https://dummyjson.com/products/category/${catg}`)
    .then((res)=>{
        console.log(res.data.products)
   
    dispatch(product_data(res.data.products))
  
    }).catch((err)=>{
        dispatch(err.message)
    })
}