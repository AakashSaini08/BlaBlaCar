import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "./styles.css";
import "react-datepicker/dist/react-datepicker.css";

const getLegalDate = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const newYear = year - 18;
  currentDate.setFullYear(newYear);
  return currentDate;
};

const DateInput = ({
  validationMessage = "",
  startDate,
  setStartDate = () => {},
  minDate,
  setValidationMessageDOB = () => {},
}) => {
  return (
    <div className="section-data">
      <div className={!validationMessage ? `inputDiv` : `inputDivInvalid`}>
        <div className="singup-date-picker-wrapper">
          <DatePicker
            showIcon
            placeholderText="Set your DOB"
            className="singup-date-picker"
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              setValidationMessageDOB("");
            }}
            maxDate={getLegalDate()}
            //  maxDate={!minDate?new Date():new Date().setMonth(new Date().getMonth() + 2)}
          />
        </div>
        <br />
      </div>
    </div>
  );
};
export default DateInput;
