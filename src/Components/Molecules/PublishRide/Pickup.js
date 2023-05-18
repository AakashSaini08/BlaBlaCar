import React, { useState } from 'react'
// import CustomInput from '../../Atoms/CustomInput'
import Header from '../../Atoms/Header'
import { STRINGS } from '../../../Shared/Constants'
import CustomLinkListCreator from '../../Atoms/CustomLinkListCreator'
// import GeocodingComponent from '../Cities'
// import axios from 'axios'
// import { MAP_API_KEY } from '../../../Services/Constants'
import GetCities from '../../Cells/GetCities'


export default function Pickup() {
    const [pickupLocation,setPickupLocation]=useState()
    const [city,setCity]=useState([])
    const [coordinates,setCoordinates]=useState({})

  return (
    <div className='section-content'>
        <Header heading={STRINGS?.PICKUP}/>
        <GetCities searchedLocation={pickupLocation} city={city} coordinates={coordinates} setSearchedLocation={setPickupLocation} setCity={setCity} setCoordinates={setCoordinates}/>
        {city.length?<CustomLinkListCreator linkText={city[0]} route={`/offer-seats/departure/precise/${JSON.stringify(coordinates)}/${"pickUp"}`} />:null}
        {/* <GeocodingComponent/> */}
      {/* <AutoComplete/> */}
    </div> 
  )
}
