import React from "react";
import { useNavigate } from "react-router-dom";
import { Images } from "../../Shared/Images";
import "./style.css";
function PublishRideSuccess() {
  const navigate = useNavigate();
  const handleClick=()=> {
    navigate("/");
  }
  return (
    <div className="my-div">
      <div className="success-div">
        <div className="success-img-div">
          <img className="sucess-img" src={Images.successImg} alt="" />
        </div>
        <div className="success-content-div">
          <h2 className="success-content">
            Your ride is online! Passengers can now book and travel with you.
          </h2>
          <button className="ride-btn" onClick={()=>handleClick()}>
            See my ride
          </button>
        </div>
      </div>
    </div>
  );
}

export default PublishRideSuccess;
