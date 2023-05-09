import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.css'

function Email() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleContinue() {
    navigate("/username");
  }

  return (
    <div className="email-outer">
      <h2>What's your email?</h2>
      <input
        className="email-input"
        placeholder="Email"
        type="text"
        autoComplete="off"
        value={email}
        onChange={(e) => handleEmail(e)}
      />
      <p>
        When I'm subscribed, I can opt out anytime by contacting BlaBlaCar or
        via the link in the newsletter.
      </p>
        {email.length > 0 ?  <button className="cnt-btn" onClick={handleContinue} >Continue</button> : ''}
    </div>
  );
}

export default Email;
