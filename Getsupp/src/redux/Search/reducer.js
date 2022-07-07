import {SHOW_TODO} from "./action"

const initalstate={
    search:"",
    data:[]
}

export const Showdata=(state=initalstate,action)=>{

    switch(action.type){
        
        case SHOW_TODO:
        return{
            ...state,
            data:action.payload
        }
        default:
            return state
    }
}