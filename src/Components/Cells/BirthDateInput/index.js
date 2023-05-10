import React, { useState } from 'react'
import Header from '../../Atoms/Header'
import ContinueButton from '../../Atoms/ContinueButton'
import { useNavigate } from 'react-router-dom'
import { STRINGS } from '../../../Shared/Constants'
import DateInput from '../../Atoms/DateInput'
import { registerData } from '../../../Redux/Actions'
import { useDispatch } from 'react-redux'

export default function BirthDateInput() {
  const dispatch=useDispatch()
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate()
  const handleSubmit = () => {
    dispatch(registerData?.date(startDate.toISOString().slice(0, 10)))
    navigate("/gender")
  }
  return (
    <>
      <Header heading={STRINGS?.BIRTHDATE_HEADING} />
      <div className='section'>
        <DateInput startDate={startDate}  setStartDate={setStartDate}/>
      </div>
      <ContinueButton handleSubmit={handleSubmit} />
    </>
  )
}
