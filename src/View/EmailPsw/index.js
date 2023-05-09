import React, { useState } from 'react'
import './style.css'
import { Link, useNavigate } from 'react-router-dom';

function EmailPsw() {
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");

  const navigate = useNavigate();

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setpassword(e.target.value);
  }

  function handleContinue() {
    navigate("/");
  }

  return (
    <div className="emailpsw-outer">
    <h2>What's your email and password?</h2>
    <div>
    <input
      className="email-input"
      placeholder="Email"
      type="text"
      autoComplete="off"
      value={email}
      onChange={(e) => handleEmail(e)}
    />
    </div>
    <div>
    <input
      className="psw-input"
      placeholder="Password"
      type="password"
      autoComplete="off"
      value={password}
      onChange={(e) => handlePassword(e)}
    />
    </div>
    <div className='forgot-psw'>
    <Link className='forgot-link'  to="/">Forgot Password</Link>

    </div>
    
    <div>
    {email.length > 0 && password.length > 0 ?  <button className="cnt-btn" onClick={handleContinue} >Log in</button> : ''}

    </div>
  </div>
  )
}

export default EmailPsw