import * as types from "./actionType"

const iniState={
    modalOpen:false,
    ModalData:[]
    
}
export const modalreducer=(state=iniState, {type,payload})=>{
    
    switch(type){
        case types.OPEN_MODAL:{
            return {
                ...state,
                modalOpen:payload,
                
            }
        }
        case types.Modal_Data:{
            return {
                ...state,
                ModalData:payload,
                
            }
        }

       
        default:{
            return state
        }
    }
}