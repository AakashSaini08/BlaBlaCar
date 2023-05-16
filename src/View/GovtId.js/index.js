import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ContinueButton from '../../Components/Atoms/ContinueButton';
import CustomInput from '../../Components/Atoms/CustomInput';
import Header from '../../Components/Atoms/Header';
import { myPancard } from '../../Redux/Actions';
import { STRINGS, VALIDATION_MESSAGES } from '../../Shared/Constants';
import { isValidPancard } from '../../Shared/Utilities';

function GovtId() {
  const dispatch = useDispatch();
  const [pancard, setPancard] = useState("");
  const [validationMessage, setValidationMessage] = useState();
  const navigate = useNavigate();

  const successSend = () => {
    navigate("/profile");
  };
  const failedSend = (res) => {
    setValidationMessage(res.msg);
  };

  const handleSubmit = () => {
    if (!pancard.trim()) {
      setValidationMessage(VALIDATION_MESSAGES?.PANCARD?.EMPTY);
    } else if (!isValidPancard.test(pancard, successSend, failedSend)) {
      setValidationMessage(VALIDATION_MESSAGES?.PANCARD?.NOT_VALID);
    } else {
      dispatch(myPancard (pancard, successSend, failedSend));
    }
  };
  return (
    <>
      <Header heading={STRINGS?.PANCARD_DETAILS} />
      <div className="section">
        <CustomInput
          state={pancard}
          setState={setPancard}
          placeHolder="PAN card number"
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

export default GovtId