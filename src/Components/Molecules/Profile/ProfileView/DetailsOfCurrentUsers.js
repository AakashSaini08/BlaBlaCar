import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gettingProfilePic,getVehicleData } from '../../../../Redux/Actions'
import { BASE_URL } from '../../../../Services/Api/Constants'
import { MONTHS } from '../../../../Shared/Constants'
import { Images } from '../../../../Shared/Images'
import "../styles.css"

export default function DetailsOfCurrentUsers() {
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state?.profilePicReducer?.userdeatils)
    const data = useSelector(state => state?.profilePicReducer?.birth)
    const Pic = useSelector(state => state?.profilePicReducer?.profile)
    const bio = useSelector(state => state?.profilePicReducer?.add_bio)
    const storeData = useSelector(state => state?.profilePicReducer)


    const emailStatus = storeData?.details?.is_verified;
    const phoneStatus = storeData?.phonedetails?.is_verified;

    // console.log(phoneStatus,"<<<>>>")

    useEffect(() => {

        dispatch(gettingProfilePic())
        dispatch(getVehicleData())

    }, [dispatch])
    const date = new Date()
    return (
        <div className='section-content'>

            <div className='userDetails'>
                <div className='userDataDisplay'>
                    <div className='columnOne'>
                        <label className={`firstName`}>
                            {currentUser?.first_name||"first_name"}
                        </label>
                        <label className='age'>
                            {date.getFullYear() - data?.split("-")[0]||0} y/o

                        </label>
                    </div>
                    
                    <div className='columnTwo'>
                        { <div className='profilePicView' >
                            {Pic ? <img className='profilePicData' src={BASE_URL+ Pic} alt=""></img> : <img className='profilePicData' src={Images.profile} alt=""></img>}
                        </div>}
                    </div>
                </div>
                <div className='confirm-div'>
                   {emailStatus? <p className='confirm'><img className='verified-logo' src={Images.verified} alt=''/>Confirmed Email</p> : <p className='confirm'>Email not confirmed</p>} 
                    {phoneStatus? <p className='confirm'><img className='verified-logo' src={Images.verified} alt=''/>Confirmed Phone number</p>: <p className='confirm'>Phone number not confirmed</p>}
                </div>
                <div className='borderPanel'/>
                <div className='userBioDisplay'>
                <label className={`userBio`}>
                           About {currentUser?.first_name}
                        </label>
                        <label className={`userBioData`}>
                          <img className='bioPic' src={Images?.bio} alt=""></img>{bio||"I’m chatty when I feel comfortable"}
                        </label>
                </div>
                <div className='borderPanel'/>
                <div className='userBioDisplay'>
               
                        <label className={`userBioData`}>
                      Member since {(MONTHS[(currentUser?.created_at&&currentUser?.created_at.split("T")[0].split("-")[1].split("")[1])])} {(currentUser?.created_at&&currentUser?.created_at.split("T")[0].split("-")[0])}
                        </label>
                </div>
                <div className='borderPanel'/>
            </div>


  


        </div>
    )
}