import React, { useState } from 'react'
import Header from '../../../Atoms/Header'
import ContinueButton from '../../../Atoms/ContinueButton'
import "./styles.css"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { publishRide } from '../../../../Redux/Actions/PublishRideAction'
import ValidationText from '../../../Atoms/ValidationText'
import { BUTTONTEXT, STRINGS } from '../../../../Shared/Constants'
export default function AboutRide() {
    const [aboutRide,setAboutRide]=useState("")
    const [validationMessage,setValidationMessage]=useState("")
    const data=useSelector(state=>state?.publishRideReducer)
    const publishRideData={
        source:data?.pickUpLocation?.address,
        destination:data?.dropOfLocation?.address,
        destination_longitude: data?.dropOfLocation?.longitude,
        destination_latitude:data?.dropOfLocation?.latitude,
        source_longitude: data?.pickUpLocation?.longitude,
        source_latitude: data?.pickUpLocation?.latitude,
        passengers_count:data?.noOfPassangers,
        date:data?.rideStartDate,
        time:data?.rideStartTime,
        set_price:data?.price,
        about_ride:aboutRide,
        book_instantly:data?.bookRequesttype,
        mid_seat:data?.needMiddleSeatEmpty,
        select_route:{
            distance:data?.selectedRouteData?.distance,
            duration:data?.selectedRouteData?.duration,
            road_name:data?.selectedRouteData?.path,
            route_deatils:data?.selectedRouteData?.directions,
        }
    }
    console.log(data)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const successPublishRide=()=>{
       navigate("/rides")
    }
    const failedPublishRide=(res)=>{
       setValidationMessage(res)
    }
    const handleSubmit=()=>{
      
   if(aboutRide.length<15){
    setValidationMessage("Enter more than 15 character")
   }
   else{
  
    dispatch(publishRide(publishRideData,successPublishRide,failedPublishRide))
   }
    }
  return (
    <div>
        <Header heading={STRINGS?.ABOUT_RIDE}/>
        
        <textarea className='aboutRide' value={aboutRide} onChange={(e)=>setAboutRide(e.target.value)}/>
        <ValidationText message={validationMessage}/>
        <ContinueButton ButtonText={BUTTONTEXT?.PUBLISH_RIDE} handleSubmit={handleSubmit}/>
    </div>
  )
}
