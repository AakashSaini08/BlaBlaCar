import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPublishRides } from '../../../../Redux/Actions'
import { useParams } from 'react-router-dom'
import CustomListRides from './CustomListRides'
import Header from '../../../Atoms/Header'
import Linkto from '../../../Atoms/LinkTo'
import PathTo from '../../../Atoms/PathTo'
import CancleRide from './CancleRide'
import { STRINGS } from '../../../../Shared/Constants'

export default function RideDetails() {
    const { id } = useParams()
    const [ride, setRide] = useState([])
    const [error, setError] = useState("")
    const [showDeleteRideModal,setShowDeleteRideModal]=useState()
    const dispatch = useDispatch()
    const successGetRides = (res) => {
        setRide([res])
    }
    const failedGetRides = (res) => {
        setError(res)
    }
    console.log(ride, "SelectedRide")
    useEffect(() => {
        dispatch(getPublishRides(successGetRides, failedGetRides, id))
    }, [])
    return (
        <div>
            <Header heading={STRINGS.RIDE_PLAN} />
            <div className='section-content'>
                {ride.map(val =>
                    <>
                        <CustomListRides val={val} />
                    </>
                )}
                <PathTo linkText='Cancle Ride' picNeeded={false}  setShow={setShowDeleteRideModal}/> 
            </div>
            <CancleRide show={showDeleteRideModal} setShow={setShowDeleteRideModal} id={id}/>
        </div>
    )
}
