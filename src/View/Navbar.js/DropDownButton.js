import React, { useEffect } from 'react'
import { Images } from '../../Shared/Images'
import { useDispatch, useSelector } from 'react-redux'
import { gettingProfilePic } from '../../Redux/Actions'
import { BASE_URL } from '../../Services/Api/Constants'


export default function NavContent({handleDropDownIconPosition=()=>{},dropDownIconPosition}) {
  const dispatch = useDispatch()
  useEffect(()=>{   dispatch(gettingProfilePic())},[dispatch])
  const userData=JSON.parse(localStorage.getItem(("CurrentUser")))
  const profilePic=useSelector(state=>state?.profilePicReducer?.profile)
  // console.log(profilePic,"assasa");
  return (
    <div className='navContent'>
    <button className='navDropDown' onClick={() => { handleDropDownIconPosition() }}>
    {userData&& <label className='userName'>{userData?.first_name}</label>}
        <div className='profileOptions'>
            {profilePic?<img className='profileImg' src={BASE_URL + profilePic} alt=""></img>:<img className='profileImg' src={Images?.profile} alt=""></img>}
        </div>
        <img className={dropDownIconPosition} src={Images?.upsideArrow} alt="" ></img>
    </button>
</div>
  )
}
