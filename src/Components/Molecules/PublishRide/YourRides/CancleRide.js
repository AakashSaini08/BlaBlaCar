import React, { useState } from 'react'
import ModalComponent from '../../../Cells/Modal'
import Header from '../../../Atoms/Header'
import ContinueButton from '../../../Atoms/ContinueButton'
import { BUTTONTEXT, STRINGS } from '../../../../Shared/Constants'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteRide } from '../../../../Redux/Actions'

export default function CancleRide({show,setShow,id}) {
    const [error,setError]=useState()
    const dispatch= useDispatch()
    const navigate=useNavigate()
    const successDelete=()=>{
       navigate("/rides")
    }
    const failedDelete=(res)=>{
       setError(res)
    }
    const handleSubmit=()=>{
      dispatch(deleteRide(successDelete,failedDelete,id))
    }
  return (
    <div>
        <ModalComponent show={show} setShow={setShow}>
            <div className='deleteRide'>
                <Header heading={STRINGS.CANCLE_RIDE} color={"white"}/>
                <ContinueButton  ButtonText={BUTTONTEXT.DELETE} handleSubmit={handleSubmit}/>
            </div>
        </ModalComponent>
    </div>
  )
}
