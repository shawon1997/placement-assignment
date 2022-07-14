import React from 'react'
import "./todo.css"
import { useState,useEffect } from 'react'
const storagedata=()=>{
  const data=localStorage.getItem("todolist")
  if(data)
  {
    return JSON.parse(data)
  }
  else{
    return []
  }
}

export const Todo = () => {
  const [inputdata,setinputdata]=useState("")
  const [show,setshow]=useState(storagedata())
  const [editite,seteditite]=useState("")
  const [toggle,settoggle]=useState(false)
  const add=()=>{
    if(!inputdata)
    {
      alert("please add something")
    }
    else if(inputdata && toggle)
    {
      setshow(show.map((e)=>{
        if(e.id==editite)
        {
          return {...e,name:inputdata}
        }
        return e
      }))


      setinputdata([])
    seteditite()
    settoggle(false)
    }
    
    else{
const createid= {
  id:new Date().getTime().toString(),
   name:inputdata
};
//console.log(id)
      setshow([...show, createid])
      setinputdata("")
    }
  }
  const edit=(value)=>{
    const edititem=show.find((e)=>{
      return e.id===value
    })
    setinputdata(edititem.name)
    seteditite(value)
    settoggle(true)
  }

const Delete=(param)=>{
  //console.log(show)
const update=show.filter((el)=>{
  return (el.id!==param)
})
console.log(update)
setshow(update)
}

useEffect(()=>{
  localStorage.setItem("todolist",JSON.stringify(show))
},[show])

  return (
    <>
       <div className='parrent'>
         <input type="text" placeholder='✍️ enter your todo' className='input'
         value={inputdata} onChange={(e)=>setinputdata(e.target.value)}
         >

         </input>
         {toggle?<span><i className="far fa-edit" onClick={add
         }></i></span>:<span><i className="fa fa-plus" onClick={add
         }></i></span>}
         {/*{settoggle(false)}*/}
         
       </div>
       {/*show data*/}
       <div >
         {show.map((el)=>(
           <div className='showdata' key={el.id}>
             {el.name}
         <span><i className="far fa-edit" onClick={()=>edit(el.id)}></i></span>
         <span><i className="far fa-trash-alt" onClick={()=>Delete(el.id)}></i></span>
           </div>
         ))}
       </div>       
       <div className='button'>
           <button className='checklist' onClick={()=>{setshow([])}}>Remove All</button>
       </div>
    </>
  )
}
