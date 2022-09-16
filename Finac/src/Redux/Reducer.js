import { Add_To_Cart,data,cardDetails } from "./action"

const initialdata={
    prodata:[],
    cart:JSON.parse(localStorage.getItem('cartdata'))||[],
    SingleProData:[]
}

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
                cart:action.payload||JSON.parse(localStorage.getItem("cartdata"))
            }
            
        }
        case "getcatdata":{
            return {
                ...state,
                cart:action.payload||JSON.parse(localStorage.getItem("cartdata"))
            }
        }
        case cardDetails:{
            return{
                ...state,
                SingleProData:action.payload
            }
        }
        default:
            return state
    }
}