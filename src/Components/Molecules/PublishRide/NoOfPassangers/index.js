import React, { useState } from 'react'
import Header from '../../../Atoms/Header'
import { Images } from '../../../../Shared/Images'
import "./styles.css"
import ContinueButton from '../../../Atoms/ContinueButton'
import { BUTTONTEXT, STRINGS } from '../../../../Shared/Constants'
import { useDispatch } from 'react-redux'
import { numberOfPassangers } from '../../../../Redux/Actions/PublishRideAction'
import { useNavigate } from 'react-router-dom'
import Counter from '../../../Atoms/Counter'
export default function NoOfPassangers() {
  const [noOfPassangers, setNoOfPassangers] = useState(1)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = () => {
    navigate("/offer-seats/request_approval")
    dispatch(numberOfPassangers(noOfPassangers))
  }
  return (
    <div>
      <Header heading={STRINGS?.NUMBER_OF_PASSENGERS} />
      <div className='section-content'>
        <Counter value={noOfPassangers} setValue={setNoOfPassangers} lowerLimit={1} upperLimit={4} difference={1} />
        <ContinueButton ButtonText={BUTTONTEXT.CONTINUE} handleSubmit={handleSubmit} />
      </div>
    </div>
  )
}
