import axios from "axios"

export const SHOW_TODO='SHOW_TODO'

export const ShowTodo=(data)=>{

    return{
        type:SHOW_TODO,
        payload:data
    }
}

export const Show=(search,page)=>(dispatch)=>{
//console.log(search)
    axios.get(`https://rickandmortyapi.com/api/character/?name=${search}&page=${page}`)
    .then((res)=>{
        dispatch(ShowTodo(res.data.results))
        //console.log(res.data.results)

    }).catch((err)=>console.log(err))
}