import React from 'react';
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { openmodal } from '../redux/Modal/action';
import "./BasicUserDetails.css"

export const DetailsUserCard = () => {

  const dispatch = useDispatch()
  const isModalVisible = useSelector((state) => state.modal.modalOpen)

  const data = useSelector((state) => state.modal.ModalData)

  console.log(data)
  const handleOk = () => {
    dispatch(openmodal(false));
  };

  const handleCancel = () => {
    dispatch(openmodal(false));
  };

  return (
    <>

      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

        {data ? <>
          <div className='parent_div'>
            <div className='image-div'>
              <div className='image_card'>
                <img src={data.image} />
              </div>
              <div className='name-div'>
                <b className='top-name'>{data.name}</b>
                <div className='status-div'>
                  <p>{data.status !== "unknown" ? <div className='radio-button'></div> : <div className='radio-button-blank'></div>}  </p>
                  <p>{data.status}-</p>
                  <p>{data.species}</p>
                </div>
              </div>
            </div>
            <hr></hr>

            <div className='gender-div'>
              <div>
                <p className='change-color'>Gender</p>
                <b>{data.gender}</b>
              </div>
              <div>
                <p className='change-color'>Location</p>
                {/*<b>{data.origin.name}</b>*/}
              </div>
            </div>
            <div className='specis-div'>
              <div>
                <p className='change-color'>species</p>
                <b>{data.species}</b>
              </div>
              <div>
                <p className='change-color'>Origin</p>
                {/*<b>{data.location.name}</b>*/}
              </div>
            </div>
          </div>

        </> : "...loading"}
      </Modal>
    </>
  );
};

