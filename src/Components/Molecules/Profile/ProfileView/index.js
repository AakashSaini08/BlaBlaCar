import React, { useEffect, useState } from 'react'
import CustomLinkListCreator from '../../../Atoms/CustomLinkListCreator'
import Linkto from '../../../Atoms/LinkTo'
import "../styles.css"
import PathTo from '../../../Atoms/PathTo'
import EditPersonalDetails from './EditPersonalDetails'
import { useDispatch, useSelector } from 'react-redux'
import { getVehicleData, gettingProfilePic } from '../../../../Redux/Actions'
import { BASE_URL } from '../../../../Services/Api/Constants'

export default function NameAndProfilePicView({ setShowEditPersonalDetails = () => { }, setShowMiniBio = () => { },setShowEmailVerificationModal }) {
    
    const userData = JSON.parse(localStorage.getItem(("CurrentUser")))
    const email = JSON.parse(localStorage.getItem(("email")))

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(gettingProfilePic({}),)
        // dispatch(getVehicleData({}))
    }, [dispatch])

    const StoreData = useSelector(state => state)
    const emailStatus = useSelector(state => state?.profilePicReducer?.details?.is_verified)
    const add_bio = useSelector(state => state?.profilePicReducer?.add_bio)

    console.log("]]]]]]]]]",add_bio)
    console.log(StoreData,"#############")
    const handleSelect = () => { }
    return (
        <div className='profile'>
            <div className='profileMain'>
                <CustomLinkListCreator pic={true} profileViewLink={true} linkText={userData?.first_name} handleSelect={handleSelect} profilePic={BASE_URL + StoreData?.profilePicReducer?.profile} />
                <Linkto linkText='Add profile picture' route="/picture" />
                <PathTo linkText='Edit Personal Details' picNeeded={false} setShow={setShowEditPersonalDetails} />
            </div>
            <div className='profileMain'>
                <h1 className='headingData'>Verify Your Profile</h1>
                {(emailStatus)=== 'False'? <PathTo linkText={`Confirm email ${email}`}  setShow={setShowEmailVerificationModal}/>:email}
            </div>
            <div className='profileMain'>
                <h1 className='headingData'>About You</h1>
                { !add_bio ? <PathTo linkText='Add a mini bio' setShow={setShowMiniBio} />: add_bio}
            </div>
            <div className='profileMain'>
                <h1 className='headingData'>Vehicles</h1>

                {Object.values(StoreData?.vehicleDataReducer)?.map(val =>
                    <div>
                        <CustomLinkListCreator
                            linkText={
                                `VehicleName : ${val?.vehicle_name}  
                                    VehicleColor :${val?.vehicle_color}`
                            }
                            route={`/dashboard/profile/vehicle/${val?.id}`}
                        />
                    </div>
                )}

                <Linkto linkText='Add vehicle' route="/dashboard/profile/vehicle/add" />
            </div>

        </div>

    )
}
