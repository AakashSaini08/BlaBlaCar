import React, { useState } from "react";
import Header from "../../../Atoms/Header";
import {
  BUTTONTEXT,
  STRINGS,
  VALIDATION_MESSAGES,
} from "../../../../Shared/Constants";
import ReactDatePicker from "react-datepicker";
import "./styles.css";
import ContinueButton from "../../../Atoms/ContinueButton";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ValidationText from "../../../Atoms/ValidationText";
import { addRideTime } from "../../../../Redux/Actions/PublishRideAction";
export default function RideTime() {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [validationMessage, setVelidationMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (!selectedDateTime) {
      setVelidationMessage(VALIDATION_MESSAGES.TIME.EMPTY);
    } else {
      console.log(selectedDateTime.toLocaleTimeString());
      dispatch(addRideTime(selectedDateTime.toLocaleTimeString()));
      navigate("/offer-seats/comfort");
    }
  };
  return (
    <>
      <Header heading={STRINGS.ON_WHAT_TIME} />

      <div className="RideTimePicker">
        <ReactDatePicker
          id="myDateTimePicker"
          selected={selectedDateTime}
          value={0}
          onChange={(date) => setSelectedDateTime(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={10}
          dateFormat=" h:mm aa"
        />
      </div>
      <ValidationText message={validationMessage} />
      <ContinueButton
        ButtonText={BUTTONTEXT.CONTINUE}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
