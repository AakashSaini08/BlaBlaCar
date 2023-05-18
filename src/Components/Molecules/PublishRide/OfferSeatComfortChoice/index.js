import React, { useState } from 'react'
import CustomChoiceSelector from '../../../Cells/CustomChoiceSelector'
import { useDispatch } from 'react-redux'
import { needMiddleSeatEmpty } from '../../../../Redux/Actions/PublishRideAction'
import { STRINGS } from '../../../../Shared/Constants'

export default function OfferSeatComfortChoice() {
  const choiceArray = ["Yes,sure!", "No,I will sequeeze in 3"]
  const dispatch = useDispatch()
  const handleSelect = (selectedText) => {
    if (selectedText === choiceArray[0]) {
      dispatch(needMiddleSeatEmpty("Yes"))
    }
    else {
      dispatch(needMiddleSeatEmpty("No"))
    }
  }
  return (
    <div >
      <CustomChoiceSelector heading={STRINGS?.SEAT_COMFORT} choiceArray={choiceArray} route="/offer-seats/seats" handleSelect={handleSelect} />
    </div>
  )
}
