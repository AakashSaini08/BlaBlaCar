import React, { useState } from "react";
import Header from "../../Atoms/Header";
import CustomInput from "../../Atoms/CustomInput";
import { useLocation, useNavigate } from "react-router-dom";
import ContinueButton from "../../Atoms/ContinueButton";
import { STRINGS, VALIDATION_MESSAGES } from "../../../Shared/Constants";
import { isValidPassword } from "../../../Shared/Utilities";
import { useDispatch } from "react-redux";
import {sendResetPassword } from "../../../Redux/Actions";
export default function ResetPassword() {
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const myToken = queryParams.get("token");
  const d = myToken.length;
  const token = myToken.substring(0,d-1);

  const myId = queryParams.get("id");
  const length = myId.length-1;
  const id = myId.substring(2,length);


  const [password, setPassword] = useState("");
  const [passwordValidationMessage, setPasswordValidationMessage] = useState();

  const navigate = useNavigate();

    const successLogin=()=>{
        navigate("/emailpsw")
    }
    const failedLogin=(res)=>{
      setPasswordValidationMessage(res.msg)
    }

  const handleSubmit = () => {
    if (!password.trim()) {
      setPasswordValidationMessage(VALIDATION_MESSAGES?.PASSWORD?.EMPTY);
    } else if (!isValidPassword.test(password)) {
      setPasswordValidationMessage(VALIDATION_MESSAGES?.PASSWORD?.NOT_VALID);
    }
    else {
      dispatch(
        sendResetPassword({
          token: token,
          password: password,
          id: id,
        },successLogin,failedLogin)
      );
    }
  };
  return (
    <div className="section-content">
      <Header heading={STRINGS.RESET_PASSWORD}></Header>
      <div className="passwordFillingMessageDiv">
        <span className="passwordFillingMessage">
          It must have at least 8 characters, 1 letter, 1 number and 1 special
          character.
        </span>
      </div>

      <CustomInput
        type="password"
        state={password}
        setState={setPassword}
        placeHolder="Enter password"
        validationMessage={passwordValidationMessage}
        setValidationMessage={setPasswordValidationMessage}
      />
      <label className="validationMessage">{passwordValidationMessage}</label>
      <ContinueButton handleSubmit={handleSubmit} />
    </div>
  );
}
