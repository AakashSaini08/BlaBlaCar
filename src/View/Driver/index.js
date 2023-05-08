import React from "react";
import { Images } from "../../Shared/Images";
import "./style.css";

function Driver() {
  return (
    <div className="driver-outer">
      <div className="driver-left">
        <h2>Driving in your car soon?</h2>
        <p>Let's make this your least expensive journey ever.</p>
        <button className="offer-btn">Offer a ride</button>
      </div>
      <div className="driver-right">
        <img className="driver-img" src={Images.driver} alt="" />
      </div>
    </div>
  );
}

export default Driver;
