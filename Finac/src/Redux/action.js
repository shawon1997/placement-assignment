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



export const AddToCart=(data)=>(dispatch)=>{
    
    let addtocartdata=JSON.parse(localStorage.getItem('cartdata'))
     
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
    //console.log('.......catt..')
    axios.get('https://fakestoreapi.com/products')
    .then((res)=>{
        console.log(res.data)
        console.log("res.data")
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
        //console.log(res.data)
   
    dispatch(product_data(res.data))
  
    }).catch((err)=>{
        console.log(err)
    })
}