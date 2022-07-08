import React from 'react'
import { useState, useEffect } from 'react'
import "./Search.css"
import { Show } from "../redux/Search/action"
import { useDispatch, useSelector } from 'react-redux'
import { BasicUserCard } from './BasicUserCard'
import { GetModalID, openmodal } from '../redux/Modal/action'


export const Search = () => {

  const [search, setsearch] = useState("")
  const [page, setpage] = useState(1)

  const dispatch = useDispatch()
  const data = useSelector((state) => state.data.data)

  useEffect(() => {
    //console.log(page)
    dispatch(Show(search, page))
  }, [search,page])
  const ModalVisible = useSelector((state) => state.modal.modalOpen)



  const handlekeydown = (e) => {
    if (e.key == 'Enter') {

      dispatch(Show(search, page))
      setsearch("")
    }
  }
  function openPopUp(id) {
    
    if (id) {

      dispatch(GetModalID(id))
    }

    dispatch(openmodal(true))
  }
const buttonfunction=(e)=>{
setpage(page+e)

}
//useEffect(() => {
//  window.addEventListener('scroll', handleScroll);
//  return () => window.removeEventListener('scroll', handleScroll);
//}, [page]);

//function handleScroll() {
//  if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
//  setpage(page+10)
 
//}
  return (
    <div>
      <div className="searchdiv">
      <div className='icon'>
        <i className="fa-solid fa-magnifying-glass" style={{ color: 'rgb(203, 208, 208)'}}></i></div>
        <div>
        <input placeholder="search for a contact" value={search} onChange={(e) => setsearch(e.target.value)} onKeyDown={handlekeydown} className="search"></input>
        </div>

      </div>
      <div className='parent'>
        {data.map((e) => (

          <div key={e.id}  >


            {ModalVisible ? <BasicUserCard /> : null}

            <div  onClick={() => openPopUp(e.id)} className='todolist' >
              <div className='todolist_child1'>
                <img src={e.image} className='image'></img>
                <p>{e.name}</p>
              </div>
              <div className='todolist_child'>
                 <p>{e.status !== "unknown" ?<div className='radio-button'></div> : <div className='radio-button-blank'></div>}  </p>
                <p   >{e.status}-</p>
                <p>{e.species}</p>
              </div>
            </div>
          </div>

        ))}

      </div>
       <div className='button'>
       <button onClick={()=>buttonfunction(-1)} disabled={page<=0?true:false}><p>prev</p></button>
       <button onClick={()=>buttonfunction(1)}><p>Next</p></button>
       </div>
    </div>
  )
}
