import axios from "axios"

const SHOW_TODO='SHOW_TODO'

const showTodo=(data)=>{
    return{
        type:SHOW_TODO,
        payload:data
    }
}

const show=()=>(dispatch)=>{
    axios.get(`https://rickandmortyapi.com/api/character/?name=${search}&page=${page}`)
    .then((res)=>dispatch(showTodo(res.result.data))).catch((err)=>console.log(err))
}