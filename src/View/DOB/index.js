import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css'
function DOB() {
    const [dob, setDob] = useState("");
  const navigate = useNavigate();
  function handleDob(e) {
    setDob(e.target.value);
  }

  function handleContinue() {
    navigate("/gender");
  }
  return (
    <div className="dob-outer">
    <h2>What's your date of birth?</h2>
    <input
      className="dob-input"
      placeholder="DD/MM/YYYY"
      type="text"
      autoComplete="off"
      value={dob}
      onChange={(e) => handleDob(e)}
    />
      {dob.length > 0 ?  <button className="cnt-btn" onClick={handleContinue} >Continue</button> : ''}
  </div>
  )
}

export default DOB