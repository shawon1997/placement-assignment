import React from 'react'
import { useState,useEffect } from 'react'

import "./Search.css"
import {Show} from "../redux/Search/action"
import { useDispatch, useSelector } from 'react-redux'

export const Search = () => {
const [search,setsearch]=useState("")
const [page,setpage]=useState(1)

const dispatch=useDispatch()
const data=useSelector((state)=>state.data)
useEffect(()=>{
 dispatch(Show(search,page))
},[])
 


const handlekeydown=(e)=>{
    if(e.key=='Enter'){
 
        dispatch(Show(search,page))
        setsearch("")
    }
}
  return (
    <div>
    <div className="searchdiv">
    <span><i class="fa-solid fa-magnifying-glass" style={{color:'rgb(203, 208, 208)'}}></i></span>
  <input placeholder="search for a contact" value={search} onChange={(e)=>setsearch(e.target.value)}  onKeyDown={handlekeydown}  className="search"></input>

    </div>
    <div className='parent'>
    {data.map((e)=>(
  
       <div key={e.id} className='todolist'>
        <div className='todolist_child'>
            <img src={e.image} className='image'></img>
            <p>{e.name}</p>
        </div>
        <div className='todolist_child'>
            <p>{e.status}-</p>
            <p>{e.species}</p>
        </div>
    </div>

 ))}
    </div>
     </div>
  )
}
