import React, { useState } from 'react'
import CustomChoiceSelector from '../../../Cells/CustomChoiceSelector'
import { useDispatch } from 'react-redux'
import { bookRequestType, needMiddleSeatEmpty } from '../../../../Redux/Actions/PublishRideAction'
import { STRINGS } from '../../../../Shared/Constants'

export default function PassangersCanBookInstantly() {
    const choiceArray=["Yes,sure!","No,I will reply to each request my self"]
    const dispatch=useDispatch()
    
     const handleSelect=(selectedText)=>{
        if(selectedText===choiceArray[0]){
    dispatch(bookRequestType("Instant"))
     }
     else{
        dispatch(bookRequestType("Not_Instant"))
     }}
  return (
    <div >
        
        <CustomChoiceSelector heading={STRINGS?.BOOK_INSTANT} choiceArray={choiceArray} route="/offer-seats/price-recommendation" handleSelect={handleSelect}/>
    </div>
  )
}
