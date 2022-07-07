import {SHOW_TODO} from "./action"

const initalstate={
data:[]
}

export const showdata=(state=initalstate,action)=>{
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