import React, { useState } from "react";
import Header from "../../../Atoms/Header";
import {
  BUTTONTEXT,
  STRINGS,
  VALIDATION_MESSAGES,
} from "../../../../Shared/Constants";
import DateInput from "../../../Atoms/DateInput";
import ContinueButton from "../../../Atoms/ContinueButton";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addRideDate } from "../../../../Redux/Actions/PublishRideAction";

export default function DateOfRide() {
  const [dateOfRide, setDateOfRide] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validationMessage, setValidationMessage] = useState();
  const handleSubmit = () => {
    if (!dateOfRide) {
      setValidationMessage(VALIDATION_MESSAGES.DATE.EMPTY);
    } else {
      dispatch(addRideDate(dateOfRide.toLocaleDateString()));
      navigate("/offer-seats/departure-date/time");
    }
  };
  return (
    <div>
      <Header heading={STRINGS.WHEN_GOING} />
      <div className="section-content">
        <DateInput
          startDate={dateOfRide}
          setStartDate={setDateOfRide}
          // validationMessage={validationMessage}
          // minDate={new Date()}
        />
        <label>{validationMessage}</label>
        <ContinueButton
          ButtonText={BUTTONTEXT.CONTINUE}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
