import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ContinueButton from '../../Components/Atoms/ContinueButton';
import CustomInput from '../../Components/Atoms/CustomInput'
import Header from '../../Components/Atoms/Header'
import {phoneno } from '../../Redux/Actions';
import { STRINGS, VALIDATION_MESSAGES } from '../../Shared/Constants'
import {isValidPhone } from '../../Shared/Utilities';

function Phone() {

    const dispatch = useDispatch();
  const [phone, setPhone] = useState("");
  const [validationMessage, setValidationMessage] = useState();
  const navigate = useNavigate();

  const successSend = () => {
    navigate("/phoneotp");
  };
  const failedSend = (res) => {
    setValidationMessage(res.msg);
  };

  const handleSubmit = () => {
    if (!phone.trim()) {
      setValidationMessage(VALIDATION_MESSAGES?.PHONE?.EMPTY);
    } else if (!isValidPhone.test(phone, successSend, failedSend)) {
      setValidationMessage(VALIDATION_MESSAGES?.PHONE?.NOT_VALID);
    } else {
      dispatch(phoneno(phone, successSend, failedSend));
    }
  };
  return (
    <>
      <Header heading={STRINGS?.MOBILE_VERIFICATION_HEADING} />
      <div className="section">
        <CustomInput
          state={phone}
          setState={setPhone}
          placeHolder="Phone number"
          validationMessage={validationMessage}
          setValidationMessage={setValidationMessage}
          handleSubmit={handleSubmit}
        />
        <label className="validationMessage">{validationMessage}</label>
      </div>
      <ContinueButton handleSubmit={handleSubmit} />
    </>
  )
}

export default Phone