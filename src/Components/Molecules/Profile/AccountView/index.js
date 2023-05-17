import React, { useEffect } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
// import CustomLinkListCreator from "../../../Atoms/CustomLinkListCreator";
// import PathTo from "../../../Atoms/PathTo";
// import Linkto from "../../../Atoms/LinkTo";
import { deleteAccount, gettingProfilePic, logout } from "../../../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";

export default function AccountDetailsUpdate() {
  // const profileViewList = ["Ratings given", "Password", "Postal Address"];
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(gettingProfilePic());
  },[dispatch])

  const id = useSelector((state)=>state?.profilePicReducer?.user_id);
  console.log(id,"<<<<<>>>>>>")
  const navigate = useNavigate();
  const successLogin = () => {
    localStorage.clear();
    navigate("/");
  };
  const successSend = () => {
    localStorage.clear();
    navigate("/");
  };
  const handleClick = () => {
    dispatch(logout.logout("", successLogin));
  };
  const handleAccount= () => {
    dispatch(deleteAccount({id:id}, successSend));
  };
  return (
    <div>
      {/* {profileViewList.map(val=><CustomLinkListCreator linkText={val}/>)} */}
      <div className="psw-div">
        <Link className="psw-link" to="/changePassword">
          Password
        </Link>
      </div>
      <div className="psw-div">
        <Link className="psw-link" to="/bankdetails">
          Bank details
        </Link>
      </div>
      <div className="logout-div">
        <button className="logout-btn" onClick={() => handleClick()}>
          Log out
        </button>
      </div>
      <div className="logout-div">
        <button className="logout-btn" onClick={() => handleAccount()}>
          Close my account
        </button>
      </div>
    </div>
  );
}
// dispatch(logout.logout("", successLogin));
