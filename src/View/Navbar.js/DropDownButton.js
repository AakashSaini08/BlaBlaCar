import React, { useEffect } from "react";
import { Images } from "../../Shared/Images";
import { useDispatch, useSelector } from "react-redux";
import { gettingProfilePic } from "../../Redux/Actions";
import { BASE_URL } from "../../Services/Api/Constants";

export default function NavContent({
  handleDropDownIconPosition = () => {},
  dropDownIconPosition,
}) {
  const dispatch = useDispatch();
    
  const userData = JSON.parse(localStorage.getItem("CurrentUser"));
  const token = JSON.parse(localStorage.getItem("token"));
  useEffect(()=>{
    if(token){
      dispatch(gettingProfilePic())
    }
  },[dispatch,token])

  const profilePic = useSelector((state) => state?.profilePicReducer?.profile);
  // console.log(profilePic,"assasa");
  return (
    <div className="navContent">
      <button
        className="navDropDown"
        onClick={() => {
          handleDropDownIconPosition();
        }}
      >
        {token? userData && <label className="userName">{userData?.first_name}</label>:""}
        <div className="profileOptions">
          {token ? (
            <img
              className="profileImg"
              src={profilePic===null ? Images.profile :BASE_URL + profilePic}
              alt=""
            ></img>
          ) : (
            <img className="profileImg" src={Images?.profile} alt=""></img>
          )}
        </div>
        <img
          className={dropDownIconPosition}
          src={Images?.upsideArrow}
          alt=""
        ></img>
      </button>
    </div>
  );
}
