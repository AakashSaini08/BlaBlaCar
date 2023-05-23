import React, { useState } from 'react'
import Header from '../../../Atoms/Header'
import { useDispatch, useSelector } from 'react-redux'
import Counter from '../../../Atoms/Counter'
import ContinueButton from '../../../Atoms/ContinueButton'
import { BUTTONTEXT, STRINGS } from '../../../../Shared/Constants'
import { useNavigate } from 'react-router-dom'
import { setPriceOfRide } from '../../../../Redux/Actions/PublishRideAction'

export default function SetPrice() {
const distance=useSelector(state=>state?.publishRideReducer?.selectedRouteData?.distance)?.split(" ")[0]
const [price,setPrice]=useState(distance*2||0)
const dispatch=useDispatch()
const navigate=useNavigate()
const handleSubmit=()=>{
   dispatch(setPriceOfRide(price))
   navigate("/offer-seats/comment")
}
// const initialStateForPublishRide =useSelector((state)=>state?.publishRideReducer);
// console.log(initialStateForPublishRide,"assa")

  return (
    <div>
        <Header heading={STRINGS?.SET_PRICE}/>
        <div className='section-content'>
        <Counter value={Math.round(price)} setValue={setPrice} lowerLimit={distance*2-distance*2*.25} upperLimit={distance*2+distance*2*.25} difference={10} text={"₹"}/>
        </div>
        <ContinueButton ButtonText={BUTTONTEXT.CONTINUE}  handleSubmit={handleSubmit}/>
    </div>
  )
}
