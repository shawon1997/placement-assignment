import { Add_To_Cart,data } from "./action"

const initialdata={
    prodata:[],
    cart:[]
}

//if(localStorage.getItem('cart')){
//    initialdata.cart=JSON.parse(localStorage.getItem('cart'))
//}else{
//    initialdata.cart=[]
//}

export const Reducer = (state=initialdata,action)=>{

    switch(action.type){
        case data:{
            return{
                ...state,
                prodata:action.payload
            }
        }
        case Add_To_Cart:{
            return{
                ...state,
                cart:action.payload
            }
        }
        default:
            return state
    }
}