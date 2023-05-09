import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Password() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleContinue() {
    navigate("/");
  }
  return (
    <div className="password-outer">
      <h2>Define Your Password</h2>
      <p>It must have at least 8 characters, 1 letter, 1 number and 1 special character.</p>
      <input
        className="password-input"
        placeholder="Password"
        type="password"
        autoComplete="off"
        value={password}
        onChange={(e) => handlePassword(e)}
      />
      {password.length > 0 ? (
        <button className="cnt-btn" onClick={handleContinue}>
          Continue
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Password;
