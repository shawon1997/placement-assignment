import React from 'react'
import { DetailsUserCard } from './DetailsUserCard'
import { GetModalID, openmodal } from '../redux/Modal/action'
import { useDispatch, useSelector } from 'react-redux'
import "./Search.css"

export const BasicUserCard = () => {
    const data = useSelector((state) => state.data.data)
    //console.log(data)

    //const fulldata = useSelector((state) => state.data.fulldata)
    //console.log(fulldata)
    const ModalVisible = useSelector((state) => state.modal.modalOpen)
  const dispatch = useDispatch()
    function openPopUp(id) {
    
        if (id) {
    
          dispatch(GetModalID(id))
        }
    
        dispatch(openmodal(true))
      }
  return (
    <div>
        <div className='parent'>
        {data.map((e) => (

          <div key={e.id}  >


            {ModalVisible ? <DetailsUserCard /> : null}

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
    </div>
  )
}
