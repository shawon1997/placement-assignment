import axios from "axios"
import * as types from "./actionType"

export const openmodal=(payload)=>{
  
    return {
        type:types.OPEN_MODAL,
        payload
    }
}
export const ModalData=(payload)=>{
  
    return {
        type:types.Modal_Data,
        payload
    }
}




export const GetModalID =(id)=>(dispatch)=>{

    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res)=>{dispatch( ModalData(res.data))})
    .catch((err)=>{
      console.log(err)
    })

}


