import React from 'react'
import Header from '../../Atoms/Header'
import { BUTTONTEXT, LOCALSTORAGE_KEY_NAME, STRINGS } from '../../../Shared/Constants'
import ContinueButton from '../../Atoms/ContinueButton'
import { useNavigate } from 'react-router-dom'

export default function PublishRide() {
    const token=localStorage.getItem(LOCALSTORAGE_KEY_NAME)
    const navigate=useNavigate()
    const handleSubmit=()=>{
        if(token){

            navigate("/offer-seats/departure")
        }
        else{
            navigate("/login")
        }
    }
  return (
    <div>
        <Header heading={STRINGS?.PUBLISH_RIDE}/>
        <ContinueButton  ButtonText={BUTTONTEXT?.PUBLISH_RIDE} handleSubmit={handleSubmit}/>
    </div>
  )
}
