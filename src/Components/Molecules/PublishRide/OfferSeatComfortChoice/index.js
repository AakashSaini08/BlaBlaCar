import React, { useState } from 'react'
import CustomChoiceSelector from '../../../Cells/CustomChoiceSelector'
import { useDispatch } from 'react-redux'
import { needMiddleSeatEmpty } from '../../../../Redux/Actions/PublishRideAction'
import { STRINGS } from '../../../../Shared/Constants'
import { useParams } from 'react-router-dom'

export default function OfferSeatComfortChoice() {
  const { id } = useParams();
  console.log(id,"OfferSeatComfortChoice")
  const choiceArray = ["Yes,sure!", "No, I will sequeeze in 3"]
  const dispatch = useDispatch()
  const handleSelect = (selectedText) => {
    if (selectedText === choiceArray[0]) {
      dispatch(needMiddleSeatEmpty("Yes",id))
    }
    else {
      dispatch(needMiddleSeatEmpty("No",id))
    }
  }
  return (
    <div >
      <CustomChoiceSelector heading={STRINGS?.SEAT_COMFORT} choiceArray={choiceArray} route="/offer-seats/seats" handleSelect={handleSelect} />
    </div>
  )
}
