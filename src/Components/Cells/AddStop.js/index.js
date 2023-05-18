import React from 'react'
import Header from '../../Atoms/Header'
import { BUTTONTEXT, STRINGS } from '../../../Shared/Constants'
import Linkto from '../../Atoms/LinkTo'
import ContinueButton from '../../Atoms/ContinueButton'
import { useNavigate } from 'react-router-dom'

export default function AddStop() {
    const navigate=useNavigate()
  return (
    <div >
        <Header heading={STRINGS?.ADD_STOP}/>
        <div className='section-content'>

        <Linkto linkText="Add Ride" />
        <ContinueButton ButtonText={BUTTONTEXT?.CONTINUE} handleSubmit={()=>{navigate("/offer-seats/departure-date")}}/>
        </div>
    </div>
  )
}
