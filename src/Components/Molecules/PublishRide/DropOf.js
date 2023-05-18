import React, { useState } from 'react'
import CustomInput from '../../Atoms/CustomInput'
import Header from '../../Atoms/Header'
import { STRINGS } from '../../../Shared/Constants'
import CustomLinkListCreator from '../../Atoms/CustomLinkListCreator'
import GetCities from '../../Cells/GetCities'

export default function DropOf() {
  const [dropOfLocation, setDropOfLocation] = useState()
  const [city, setCity] = useState([])
  const [coordinates, setCoordinates] = useState({})

  return (
    <div className='section-content'>
      <Header heading={STRINGS?.DROPOF} />
      <GetCities searchedLocation={dropOfLocation} city={city} coordinates={coordinates} setSearchedLocation={setDropOfLocation} setCity={setCity} setCoordinates={setCoordinates} />
      {city.length ? <CustomLinkListCreator linkText={city[0]} route={`/offer-seats/departure/precise/${JSON.stringify(coordinates)}/DropOf`} /> : null}
    </div>
  )
}
