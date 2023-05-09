import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css'
function Username() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const navigate = useNavigate();
    function handleFirstName(e) {
      setFirstName(e.target.value);
    }
    function handleLastName(e) {
        setLastName(e.target.value);
      }
    function handleContinue() {
      navigate("/dob");
    }

  return (
    <div className="email-outer">
      <h2>What's your name?</h2>
      <input
        className="first-input"
        placeholder="First name"
        type="text"
        autoComplete="off"
        value={firstName}
        onChange={(e) => handleFirstName(e)}
      />
      <input
        className="last-input"
        placeholder="Last name"
        type="text"
        autoComplete="off"
        value={lastName}
        onChange={(e) => handleLastName(e)}
      />
        {firstName.length > 0 && lastName.length > 0 ?  <button className="cnt-btn" onClick={handleContinue} >Continue</button> : ''}
    </div>
  )
}

export default Username