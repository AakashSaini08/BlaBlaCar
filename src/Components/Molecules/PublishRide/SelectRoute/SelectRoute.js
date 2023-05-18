import React, { useState } from 'react'
import Header from '../../../Atoms/Header'
import { BUTTONTEXT, STRINGS } from '../../../../Shared/Constants'
import CustomInput from '../../../Atoms/CustomInput'
import ContinueButton from '../../../Atoms/ContinueButton'
import MapRouteShow from './MapRouteShow'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSelectedRouteData } from '../../../../Redux/Actions/PublishRideAction'


export default function SelectRoute() {
  const coordinates = useSelector(state => state?.publishRideReducer)
  const [selectedDirection, setSelectedDirection] = useState()
  const [paths, setPaths] = useState([])
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (val) => {
    navigate("/offer-seats/declared-stopovers")
    dispatch(setSelectedRouteData(val))
  }
  return (
    <div className='pickUpMapContainer'>
      <div className='inputLocationData'>
        <Header heading={STRINGS.SELECT_ROUTE} />
        {paths.length ? paths.map((val, i) =>
          <ul className={val?.directions?.request?.avoidTolls ? `TollRoutes` : `NoTollRoutes`} onClick={() => handleSubmit(val)} >
            <div>
              {val.duration}-{val?.directions?.request?.avoidTolls ? "Toll" : "NoToll"}
            </div>
            {val.distance}-{val.path}
          </ul>
        ) : <label>No Possible Route</label>}
      </div>
      <div className='mapFrame'>
        <div className='frameContent'> <MapRouteShow selectedDirection={selectedDirection} coordinates={coordinates} setPaths={setPaths} /></div>
      </div>
    </div>
  )
}
