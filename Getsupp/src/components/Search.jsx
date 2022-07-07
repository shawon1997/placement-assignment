import React from 'react'
import { useState } from 'react'
import axios from "axios"
import "./Search.css"
//import Link from 'react-router-dom';
//import {BasicUserCard} from "./BasicUserCard"
export const Search = () => {
const [search,setsearch]=useState("")
const [page,setpage]=useState(1)
const [data,setdata]=useState([])
 
const getdata=()=>{
    //console.log("inside functin")
    axios.get(`https://rickandmortyapi.com/api/character/?name=${search}&page=${page}`).then((res)=>{
        //console.log(res.data.results)
        setdata(res.data.results)
    }).catch((err)=>{
        console.log(err)
    })
}

const handlekeydown=(e)=>{
    if(e.key=='Enter'){
        getdata()
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
