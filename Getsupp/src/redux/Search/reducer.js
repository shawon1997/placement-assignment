import {Full_Data, SHOW_TODO} from "./action"

const initalstate={
    search:"",
    data:[],
    fulldata:[]
}

export const Showdata=(state=initalstate,action)=>{

    switch(action.type){
        
        case SHOW_TODO:
        return{
            ...state,
            data:action.payload
        }
        case Full_Data: 
        return {
                ...state,
               fulldata:[...state.fulldata,...state.data] 
        }
        default:
            return state
    }
}