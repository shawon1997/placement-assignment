import React from 'react'
import { useState, useEffect } from 'react'
import "./Search.css"
import { Show } from "../redux/Search/action"
import { useDispatch } from 'react-redux'
import { BasicUserCard } from './BasicUserCard'



export const Search = () => {

  const [search, setsearch] = useState("")
 const [savetoDB, setSaveToDb] = useState("");
  const [page, setpage] = useState(1)
  
  const dispatch = useDispatch()
  
  const Handlechange=(e)=>{
    setsearch(e.target.value)
    
  }

  useEffect(() => {
    
    const Set =  setTimeout(() => {
      
      dispatch(Show(search, page))
    }, 500);
    
    return ()=>clearTimeout(Set)
  }, [search,page])
  


  const handlekeydown = (e) => {
    if (e.key == 'Enter') {

      dispatch(Show(search, page))
      setsearch("")
    }
  }
  
const buttonfunction=(e)=>{
setpage(page+e)

}
useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [page]);

function handleScroll() {
  if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
  setpage(page+1)
 
}
  return (
    <div>
      <div className="searchdiv">
      <div className='icon'>
        <i className="fa-solid fa-magnifying-glass" style={{ color: 'rgb(203, 208, 208)'}}></i></div>
        <div>
        <input placeholder="search for a contact" value={search} onChange={Handlechange} onKeyDown={handlekeydown} className="search"></input>
        </div>

      </div>
      <BasicUserCard />
       <div className='button'>
       <button onClick={()=>buttonfunction(-1)} disabled={page<=0?true:false}><p>prev</p></button>
       <button onClick={()=>buttonfunction(1)}><p>Next</p></button>
       </div>
    </div>
  )
}
