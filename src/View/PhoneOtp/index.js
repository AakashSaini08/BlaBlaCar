import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ContinueButton from '../../Components/Atoms/ContinueButton'
import CustomInput from '../../Components/Atoms/CustomInput'
import Header from '../../Components/Atoms/Header'
import { confirmPhone} from '../../Redux/Actions'
import { STRINGS, VALIDATION_MESSAGES } from '../../Shared/Constants'
import { isValidOtp} from '../../Shared/Utilities'

function PhoneOtp() {

    const dispatch = useDispatch();
  const [otp, setOtp] = useState("");
  const [validationMessage, setValidationMessage] = useState();
  const navigate = useNavigate();

  const successSend = () => {
    navigate("/profile");
  };
  const failedSend = (res) => {
    setValidationMessage(res.msg);
  };

  const handleSubmit = () => {
    if (!otp.trim()) {
      setValidationMessage(VALIDATION_MESSAGES?.OTP?.EMPTY);
    } else if (!isValidOtp.test(otp, successSend, failedSend)) {
      setValidationMessage(VALIDATION_MESSAGES?.OTP?.NOT_VALID);
    } else {
      dispatch(confirmPhone (otp, successSend, failedSend));
    }
  };
  return (
    <>
      <Header heading={STRINGS?.OTP_SMS} />
      <div className="section">
        <CustomInput
          state={otp}
          setState={setOtp}
          placeHolder="OTP"
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

export default PhoneOtp