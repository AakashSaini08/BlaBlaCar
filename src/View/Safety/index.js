import React from "react";
import './style.css'
import { Images } from "../../Shared/Images";

function Safety() {
  return (
    <div className="safety-outer">
      <div className="safety-left">
        <img className="scam-img" src={Images.scamAlert} alt="" />
      </div>
      <div className="safety-right">
        <h2>Your safety is our priority</h2>
        <p>At BlaBlaCar, we're working hard to make our platform as secure as it can be. But when scams do happen, we want you to know exactly how to avoid and report them. Follow our tips to help us keep you safe.</p>
        <button className="learn-btn">Learn More</button>
      </div>
    </div>
  );
}

export default Safety;
