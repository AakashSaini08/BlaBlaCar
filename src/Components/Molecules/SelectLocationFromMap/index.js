import React, { useEffect, useState } from 'react'
import Header from '../../Atoms/Header'
import { BUTTONTEXT, STRINGS } from '../../../Shared/Constants'
import CustomInput from '../../Atoms/CustomInput'
import "./styles.css"
import MapContainer from '../Map'
import { useNavigate, useParams } from 'react-router-dom'
import ContinueButton from '../../Atoms/ContinueButton'
import { setPickLocation } from '../../../Redux/Actions/PublishRideAction'
import { useDispatch } from 'react-redux'
import { setDropLocation } from '../../../Redux/Actions/PublishRideAction'
export default function PickupFromMap() {
    const { coordinates, type } = useParams()
    const [location, setLocation] = useState()
    const [showButton, setShowButton] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSubmit = () => {
        if (type === "pickUp") {
            navigate("/offer-seats/arrival")
            dispatch(setPickLocation(location))
        }
        else if (type === "DropOf") {
            navigate("/offer-seats/choose-your-route")
            dispatch(setDropLocation(location))
        }
    }

    useEffect(() => {
        if (!JSON.parse(coordinates)?.cities) { navigate("/offer-seats/departure") }
    }, [navigate,coordinates])

    const getLocationName = async (latitude, longitude, apiKey) => {
        try {
            const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&result_type=street_address|premise&key=${apiKey}`;
            const response = await fetch(url);
            const data = await response.json();
            const address = data?.results[0]?.formatted_address;
            address && setShowButton(true)
            setLocation({ address, latitude, longitude })
            return address;
        }
        catch (err) {
            alert(err)
        }
    };

    return (
        <div className='pickUpMapContainer'>
            <div className='inputLocationData'>
                <Header heading={type === "pickUp" ? STRINGS.PICKUP_FROM_MAP : STRINGS.DROPOF_LOCATION_MAP} />
                <CustomInput state={location?.address ? location?.address : JSON.parse(coordinates)?.cities} />
                {showButton && <ContinueButton ButtonText={BUTTONTEXT.CONTINUE} handleSubmit={handleSubmit} />}
            </div>
            <div className='mapFrame'>
                <div className='frameContent'>
                    < MapContainer coordinates={coordinates} getCityName={getLocationName} />
                </div>
            </div>
        </div>
    )
}
